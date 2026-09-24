import {
  ArrowRight,
  Award,
  Boxes,
  Briefcase,
  Building2,
  Calendar,
  CalendarCheck,
  Check,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  GitMerge,
  Home,
  Lock,
  MessageSquare,
  Package,
  PackageOpen,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  Truck,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const steps = [
  [
    "Book Pickup",
    "Schedule a pickup through our digital service platform at your preferred time slot.",
    CalendarCheck,
  ],
  [
    "Package Ready",
    "Keep your shipment securely packed, labelled, and ready for swift collection.",
    PackageOpen,
  ],
  [
    "Pickup & Verification",
    "Our verified delivery partner collects and inspects shipment details on-site.",
    ScanLine,
  ],
  [
    "Network Handover",
    "Your shipment enters the SHCOURIER & SUPPLY network for automated sorting and transit.",
    GitMerge,
  ],
];

const features = [
  [
    "Doorstep Pickup",
    "We pick up shipments directly from your home or office address without any hassle.",
    Home,
  ],
  [
    "Scheduled Collection",
    "Choose precise time windows that fit your daily schedule for maximum convenience.",
    Calendar,
  ],
  [
    "Business Pickup",
    "Dedicated logistics coordination designed for offices, retail stores, and warehouses.",
    Building2,
  ],
  [
    "Bulk Shipment Pickup",
    "High-volume collection support with dedicated vehicle allocation and bulk scanning.",
    Boxes,
  ],
  [
    "Shipment Verification",
    "On-site weight check, dimensions confirmation, and instant digital receipt generation.",
    ShieldCheck,
  ],
  [
    "Secure Parcel Handling",
    "Every shipment is carefully handled and verified from doorstep collection to network handover.",
    ShieldCheck,
  ],
];

const journey = [
  ["Pickup Request", "Scheduled collection from your doorstep.", CalendarCheck],
  ["Collection", "Partner arrives and picks up parcel.", Package],
  ["Verification", "Barcode scan & data validation.", ShieldCheck],
  ["Sorting", "Hub routing and destination allocation.", Boxes],
  ["Transit", "Fast movement across delivery lanes.", Truck],
  ["Delivery", "Safe arrival at the final recipient.", CheckCircle2],
];

const benefits = [
  [
    "Professional Handling",
    "Trained field couriers who treat every package with utmost care and safety.",
    Award,
  ],
  [
    "Secure Collection",
    "Tamper-evident sealing and verified digital handover protocols.",
    Lock,
  ],
  [
    "Clear Communication",
    "SMS and email notifications prior to courier arrival and upon confirmation.",
    MessageSquare,
  ],
  [
    "Reliable Coordination",
    "Advanced dispatch routing ensuring punctual pickups across all serviceable pin codes.",
    Compass,
  ],
];

const faqs = [
  [
    "What is first-mile pickup?",
    "First-mile pickup refers to the initial stage of the shipping process where SHCOURIER & SUPPLY collects your packaged shipment directly from your doorstep, home, store, or warehouse and transports it into our regional sorting network.",
  ],
  [
    "How can I schedule a pickup?",
    "You can easily schedule a pickup online through our portal by entering your pickup address, shipment details, and preferred time slot. Once confirmed, a courier partner will arrive at your location.",
  ],
  [
    "Can businesses schedule regular pickups?",
    "Yes! We offer dedicated business accounts with automated recurring pickup schedules, daily dispatch coordination, and customized logistics solutions for online sellers and enterprises.",
  ],
  [
    "What should I prepare before pickup?",
    "Ensure your item is securely packed in a sturdy box, properly sealed, and labeled with the recipient's address and tracking barcode. Keep any necessary invoice or documentation ready for the courier.",
  ],
  [
    "Can I track my shipment after pickup?",
    "Absolutely. Once our courier scans your package at pickup, tracking updates become immediately active on our system so you can monitor its journey in real time.",
  ],
];

const Icon = ({ C, className = "w-6 h-6" }) => <C className={className} />;

export default function FirstMilePickup() {
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState("");
  const [faq, setFaq] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    address: "",
  });

  const open = (type) => setModal(type);
  const close = () => setModal(null);

  const submit = (e) => {
    e.preventDefault();
    close();
    setToast(
      modal === "business"
        ? "Consultation Request Sent Successfully!"
        : "Pickup Scheduled Successfully!",
    );
    setForm({ name: "", phone: "", pincode: "", address: "" });
    setTimeout(() => setToast(""), 4000);
  };

  const input = (name, placeholder, type = "text") => (
    <input
      type={type}
      required
      value={form[name]}
      onChange={(e) => setForm({ ...form, [name]: e.target.value })}
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
    />
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-slate-900 text-white py-24 lg:py-32">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#1E3E62]/80 border border-[#1E3E62] px-4 py-2 rounded-full text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                Delivering Trust & Speed
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                First-Mile{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Pickup
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Fast, reliable pickup from your doorstep to our delivery
                network.
              </p>

              <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                “Schedule a pickup, hand over your shipment, and let SHCOURIER &
                SUPPLY take care of the first step in its journey.”
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => open("pickup")}
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl shadow-xl shadow-orange-500/30 font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  Schedule a Pickup <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="#features"
                  className="bg-[#1E3E62]/80 hover:bg-[#1E3E62] border border-slate-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-[#1E3E62] group">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                    alt="Courier collecting package"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Express First-Mile</p>
                        <p className="text-xs text-orange-400">
                          Verified doorstep collection
                        </p>
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs px-3 py-1 rounded-full font-semibold">
                      Active Fleet
                    </span>
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 bg-[#0B192C]/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 animate-pulse">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Clock />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Avg. Pickup Time</p>
                    <p className="text-sm font-bold">&lt; 45 Mins Window</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-[#0B192C]/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Status</p>
                    <p className="text-sm font-bold">100% Verified Handover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading
            label="Seamless Process"
            title="How First-Mile Pickup Works"
            text="Four simple steps from your location straight into our high-speed transit pipeline."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(([title, text, C], i) => (
              <div
                key={title}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 relative group hover:shadow-xl hover:border-orange-500/50 transition-all"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-orange-500 text-white font-bold flex items-center justify-center">
                  0{i + 1}
                </div>
                <CardIcon C={C} />
                <h3 className="text-xl font-bold text-[#0B192C] mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Label>Strategic Advantage</Label>
              <h2 className="title">Why First-Mile Pickup Matters</h2>
              <p className="text-slate-600 leading-relaxed">
                The first mile sets the tone for the entire delivery cycle. By
                removing the friction of drop-offs, SHCOURIER & SUPPLY ensures
                your packages start moving faster and more securely.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  [
                    "Convenient Doorstep Collection",
                    "No need to travel or wait in lines. We collect directly from your home, office, or warehouse.",
                  ],
                  [
                    "Faster Shipment Processing",
                    "Early barcode scanning at pickup gives your customer immediate tracking visibility right from the start.",
                  ],
                  [
                    "Reliable Pickup Coordination",
                    "Professional field partners equipped with scheduling tools ensure punctual arrivals every time.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200/60"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B192C]">{title}</h4>
                      <p className="text-slate-600 text-sm">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Tailored for Every Sender
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Whether you are sending a single gift parcel or managing
                  hundreds of daily e-commerce dispatches, our first-mile
                  architecture scales to your exact needs.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[#1E3E62]">
                  {[
                    ["Individuals", "Simple one-time bookings", User],
                    ["Businesses", "Scheduled daily fleets", Briefcase],
                    ["Online Sellers", "Marketplace integration", ShoppingCart],
                  ].map(([title, text, C]) => (
                    <div
                      key={title}
                      className="bg-[#1E3E62]/80 p-4 rounded-xl text-center"
                    >
                      <C className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-sm">{title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading
            label="Capabilities"
            title="Comprehensive Service Features"
            text="Engineered for security, accuracy, and absolute peace of mind."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(([title, text, C]) => (
              <div
                key={title}
                className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:border-orange-500 transition-all group"
              >
                <CardIcon C={C} />
                <h3 className="text-xl font-bold text-[#0B192C] mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section id="business" className="py-24 bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1E3E62] to-[#0B192C] border border-[#1E3E62] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <Label>Corporate & Merchant Logistics</Label>
                <h2 className="title text-white">
                  Pickup Solutions Built for Your Business
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  “Whether you ship a few parcels or manage daily orders,
                  SHCOURIER & SUPPLY helps simplify your first-mile operations
                  with dependable pickup coordination.”
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Automated daily recurring schedules",
                    "Dedicated account management",
                    "API integration for e-commerce stores",
                    "Priority support and flexible invoicing",
                  ].map((x) => (
                    <div
                      key={x}
                      className="flex items-center gap-3 text-slate-200 text-sm font-medium"
                    >
                      <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                      {x}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() => open("business")}
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl shadow-xl font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  Talk to Our Team <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading
            label="End-to-End Transparency"
            title="The Shipment Journey"
            text="First-mile pickup is the vital starting point of every successful delivery network."
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {journey.map(([title, text, C], i) => (
                <div
                  key={title}
                  className={`rounded-2xl p-6 shadow-sm ${
                    i === 0
                      ? "bg-[#0B192C] text-white border-2 border-orange-500 shadow-xl"
                      : "bg-slate-50 border border-slate-200"
                  }`}
                >
                  {i === 0 && (
                    <span className="inline-block -mt-9 mb-3 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      Start Point
                    </span>
                  )}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      i === 0
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-slate-200 text-[#0B192C]"
                    }`}
                  >
                    <C className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{title}</h3>
                  <p
                    className={`text-xs leading-relaxed ${i === 0 ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Label>Reliability Guaranteed</Label>
          <h2 className="title mt-2 mb-12">
            Every Delivery Starts With a Reliable Pickup
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(([title, text, C]) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mx-auto mb-6">
                  <C className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-[#0B192C] text-lg mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading
            label="Got Questions?"
            title="Frequently Asked Questions"
            text="Everything you need to know about our first-mile pickup service."
          />

          <div className="space-y-4">
            {faqs.map(([q, a], i) => (
              <div
                key={q}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
              >
                <button
                  onClick={() => setFaq(faq === i ? null : i)}
                  className="w-full px-6 py-5 text-left font-bold text-[#0B192C] flex items-center justify-between"
                >
                  <span>{q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${faq === i ? "rotate-180" : ""}`}
                  />
                </button>

                {faq === i && (
                  <div className="px-6 pb-5 pt-4 border-t border-slate-200/60 text-slate-600 text-sm leading-relaxed">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative text-slate-800">
            <button
              onClick={close}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                <Truck />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0B192C]">
                  {modal === "business"
                    ? "Business Partnership Consultation"
                    : "Schedule First-Mile Pickup"}
                </h3>
                <p className="text-xs text-slate-500">
                  SHCOURIER & SUPPLY Express Service
                </p>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="label">Full Name / Business Name</label>
                {input("name", "e.g. Rahul Sharma / Apex Retail")}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label">Phone Number</label>
                  {input("phone", "+91 98765 43210", "tel")}
                </div>
                <div>
                  <label className="label">Pin Code</label>
                  {input("pincode", "e.g. 734001")}
                </div>
              </div>

              <div>
                <label className="label">Pickup Address</label>
                <textarea
                  required
                  rows="2"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  placeholder="Enter complete doorstep address..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm"
              >
                {modal === "business"
                  ? "Request Business Consultation"
                  : "Confirm Pickup Request"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B192C] text-white px-6 py-4 rounded-2xl shadow-2xl border border-[#1E3E62] flex items-center gap-3 animate-bounce">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-sm">{toast}</p>
            <p className="text-xs text-slate-400">
              Our logistics team will connect shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Heading({ label, title, text }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <Label>{label}</Label>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] mt-2">
        {title}
      </h2>
      <p className="text-slate-600 mt-4 text-base sm:text-lg">{text}</p>
    </div>
  );
}

function Label({ children }) {
  return (
    <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
      {children}
    </span>
  );
}

function CardIcon({ C }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
      <C className="w-6 h-6" />
    </div>
  );
}
