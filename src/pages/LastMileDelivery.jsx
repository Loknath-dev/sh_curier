import {
  Activity,
  ArrowRight,
  Box,
  Building2,
  CheckCircle2,
  ChevronDown,
  Headphones,
  Home,
  Layers,
  MapPin,
  PackageCheck,
  PhoneCall,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  UserRound,
  Zap,
} from "lucide-react";
import { useState } from "react";

const stats = (trips = "1.2M+", delivery = "99.4%", hubs = "250+") => [
  [delivery, "On-Time Delivery"],
  [trips, "Last-Mile Trips"],
  [hubs, "Local Hubs"],
];

const steps = [
  ["Local Hub", "Shipment arrives at the local delivery facility.", Building2],
  [
    "Route Planning",
    "Routes are organized by destination and requirements.",
    Route,
  ],
  [
    "Out for Delivery",
    "Shipment is assigned to a courier for final delivery.",
    Truck,
  ],
  ["Delivered", "Package reaches the customer's destination.", PackageCheck],
];

const features = [
  ["Fast Delivery", "Efficient local operations.", Zap],
  ["Reliable Handling", "Careful package handling.", ShieldCheck],
  ["Shipment Visibility", "Stay informed about delivery updates.", Activity],
  ["Doorstep Convenience", "Delivery to homes and businesses.", Home],
  ["Customer Communication", "Clear and timely delivery updates.", PhoneCall],
  ["Flexible Solutions", "Solutions for retailers and businesses.", Layers],
];

const journey = [
  ["Pickup", "Origin scan"],
  ["Sorting", "Facility scan"],
  ["Transit", "Main haul"],
  ["Local Hub", "Arrived local", 1],
  ["Out for Delivery", "Courier on way", 1],
  ["Delivered", "Signed & handoff", 1],
];

const faqs = [
  [
    "What is last-mile delivery?",
    "Last-mile delivery is the final stage where a package moves from a local hub to the recipient.",
  ],
  [
    "How does last-mile delivery work?",
    "Packages reach a local facility, are routed, assigned to couriers, and delivered to the destination.",
  ],
  [
    "Can I track my shipment?",
    "Yes. Enter your tracking ID above to check the shipment status.",
  ],
  [
    "Do you deliver to homes and businesses?",
    "Yes. We support both residential and commercial deliveries.",
  ],
  [
    "What happens if the recipient is unavailable?",
    "Our courier can contact the recipient and coordinate another delivery attempt.",
  ],
  [
    "Do you provide business solutions?",
    "Yes. We support e-commerce, retail, and regular business delivery operations.",
  ],
];

const CheckList = ({ items, green = false }) => (
  <div className="space-y-3">
    {items.map((x) => (
      <div key={x} className="flex gap-3 text-sm text-slate-300">
        <CheckCircle2
          className={`w-5 h-5 shrink-0 ${green ? "text-emerald-400" : "text-amber-400"}`}
        />
        {x}
      </div>
    ))}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-slate-900 border border-slate-800 rounded-3xl ${className}`}
  >
    {children}
  </div>
);

export default function LastMileDelivery({
  lastMileTrips = "1.2M+",
  onTimeDelivery = "99.4%",
  localHubs = "250+",
}) {
  const [faq, setFaq] = useState(null);
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [modal, setModal] = useState(false);

  const track = (e) => {
    e.preventDefault();
    if (!id.trim()) return;
    setResult({
      id: id.toUpperCase(),
      status: "Out for Delivery",
      hub: "Central Local Delivery Hub #402",
      eta: "Today, 3:30 PM - 5:00 PM",
      progress: 85,
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <Badge>
              <Sparkles className="w-4 h-4" /> Last-Mile Delivery Excellence
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
              From Our Network to{" "}
              <span className="bg-linear-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                Your Doorstep
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              SHCOURIER & SUPPLY makes the final step of every shipment simple,
              reliable, and efficient.
            </p>

            <div
              id="tracking-section"
              className="flex flex-col sm:flex-row gap-3"
            >
              <form
                onSubmit={track}
                className="flex flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-1.5"
              >
                <Search className="m-3 w-5 text-slate-500" />
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter Tracking ID (e.g. SH-98421)"
                  className="flex-1 bg-transparent text-sm outline-none"
                />
                <button className="px-5 rounded-xl bg-amber-500 text-slate-950 font-bold">
                  Track
                </button>
              </form>

              <button
                onClick={() => setModal(true)}
                className="px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 font-bold flex items-center justify-center gap-2"
              >
                Contact Us <ArrowRight className="w-4" />
              </button>
            </div>

            {result && (
              <Card className="p-5 border-amber-500/30 space-y-3">
                <div className="flex justify-between">
                  <b className="text-xs text-amber-400">
                    TRACKING: {result.id}
                  </b>
                  <span className="text-xs text-amber-300">
                    {result.status}
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  {result.hub} · <b className="text-white">{result.eta}</b>
                </p>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500"
                    style={{ width: `${result.progress}%` }}
                  />
                </div>
              </Card>
            )}

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-900">
              {stats(lastMileTrips, onTimeDelivery, localHubs).map(([v, l]) => (
                <div key={l}>
                  <b className="text-2xl sm:text-3xl text-white">{v}</b>
                  <p className="text-xs text-slate-400">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HERO CARD */}
          <Card className="lg:col-span-5 p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
                <Truck />
              </div>
              <div>
                <b>Active Fleet Dispatch</b>
                <p className="text-xs text-slate-400">
                  Zone 4 Last-Mile Transit
                </p>
              </div>
              <span className="ml-auto w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {[
              [Box, "Express Consignment", "Out for Delivery"],
              [MapPin, "Local Hub Dispatch", "On Schedule"],
            ].map(([Icon, title, status]) => (
              <div
                key={title}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800"
              >
                <div className="flex gap-3 items-center">
                  <Icon className="text-amber-400" />
                  <div>
                    <b className="text-sm">{title}</b>
                    <p className="text-xs text-slate-400">SHCOURIER Network</p>
                  </div>
                </div>
                <span className="text-xs text-amber-400">{status}</span>
              </div>
            ))}

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex gap-3">
              <ShieldCheck className="text-amber-400" />
              <div>
                <b className="text-xs">Fully Tracked & Insured</b>
                <p className="text-[11px] text-slate-400">
                  Real-time shipment visibility
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <Card className="p-8 space-y-5">
            <Badge>Logistics Milestone</Badge>
            <h2 className="text-2xl font-bold">
              Local Hub → Customer Doorstep
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We ensure seamless handoff from regional distribution facilities
              directly to the end recipient.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Route Speed", "Optimized local mapping"],
                ["Live Visibility", "End-to-end transparency"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800"
                >
                  <b className="text-amber-400">{a}</b>
                  <p className="text-xs text-slate-400 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Badge>Understanding Last-Mile Delivery</Badge>
            <h2 className="text-3xl sm:text-4xl font-black">
              The Final Step of Every Shipment
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Last-mile delivery is the final stage where a shipment moves from
              a local distribution hub to its final destination.
            </p>
            <CheckList
              items={[
                "Efficient local delivery operations",
                "Reliable shipment handling",
                "Complete delivery visibility",
                "Convenient delivery options",
                "Timely shipment communication",
              ]}
            />
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="How Last-Mile Delivery Works"
            label="Step-by-Step Execution"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(([title, desc, Icon], i) => (
              <Card
                key={title}
                className="p-6 hover:border-amber-500/50 transition"
              >
                <div className="flex justify-between">
                  <Icon className="w-10 h-10 p-2 rounded-xl bg-amber-500/10 text-amber-400" />
                  <span className="text-xs text-slate-600">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-lg mt-5">{title}</h3>
                <p className="text-sm text-slate-400 mt-3">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="End-to-End Visibility"
            title="Shipment Journey"
            text="Tracking every milestone from origin to your doorstep."
          />

          <Card className="p-8">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {journey.map(([title, desc, active], i) => (
                <div key={title} className="text-center">
                  <div
                    className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      active
                        ? "bg-amber-500 text-slate-950"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <b className="block text-sm mt-3">{title}</b>
                  <p className="text-xs text-slate-400 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Core Advantages"
            title="Why Last-Mile Delivery Matters"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(([title, desc, Icon]) => (
              <Card
                key={title}
                className="p-7 hover:border-amber-500/50 transition"
              >
                <Icon className="w-11 h-11 p-2.5 rounded-xl bg-amber-500/10 text-amber-400" />
                <h3 className="font-bold text-xl mt-5">{title}</h3>
                <p className="text-sm text-slate-400 mt-2">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge>Enterprise & Merchant Solutions</Badge>
                <h2 className="text-3xl sm:text-5xl font-black">
                  Last-Mile Delivery Built for Growing Businesses
                </h2>
                <p className="text-slate-400">
                  Reliable delivery support for e-commerce, retail and business
                  shipments.
                </p>
                <CheckList
                  items={[
                    "E-commerce Delivery",
                    "Retail Delivery",
                    "Business-to-Customer Delivery",
                    "Regular Delivery Operations",
                  ]}
                />
                <button
                  onClick={() => setModal(true)}
                  className="px-7 py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold flex gap-2"
                >
                  Talk to Our Team <ArrowRight className="w-5" />
                </button>
              </div>

              <Card className="p-6 bg-slate-950 space-y-4">
                {[
                  ["Daily Dispatch Capacity", "5,000+ parcels"],
                  ["Proof of Delivery", "Digital / Instant"],
                  ["SLA", "99.8% On-Time"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="flex justify-between p-4 rounded-xl bg-slate-900"
                  >
                    <span className="text-sm text-slate-400">{a}</span>
                    <b className="text-sm">{b}</b>
                  </div>
                ))}
              </Card>
            </div>
          </Card>
        </div>
      </section>

      {/* CUSTOMER */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Recipient Satisfaction
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Every Delivery Is a Customer Experience
            </h2>
            <p className="text-slate-400">
              Dependable handling, clear communication and convenient delivery
              create a smoother recipient experience.
            </p>
            <CheckList
              green
              items={[
                "Professional delivery handling",
                "Clear shipment updates",
                "Convenient doorstep delivery",
                "Reliable delivery coordination",
                "Customer-focused support",
              ]}
            />
          </div>

          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <UserRound className="text-amber-400" />
              <div>
                <b>Recipient Satisfaction</b>
                <p className="text-xs text-slate-400">Customer Feedback</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 italic">
              "SHCOURIER & SUPPLY made receiving my business order effortless.
              The delivery courier was polite and professional."
            </p>
          </Card>
        </div>
      </section>

      {/* NETWORK */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            label="Network Routing"
            title="Delivery Network Visual"
          />

          <Card className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                [Building2, "Distribution Center"],
                [MapPin, "Local Hub"],
                [Truck, "Delivery Route"],
                [Home, "Customer Doorstep"],
              ].map(([Icon, title]) => (
                <div key={title} className="text-center space-y-3">
                  <Icon className="mx-auto w-14 h-14 p-3 rounded-2xl bg-slate-950 text-amber-400 border border-slate-800" />
                  <b className="text-sm">{title}</b>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Our Commitment"
            title="The Final Mile. Delivered With Trust."
            text="Every shipment represents a product, a promise, and a customer's expectation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Secure Handling", ShieldCheck],
              ["Reliable Operations", Truck],
              ["Transparent Updates", Activity],
              ["Customer Support", Headphones],
            ].map(([title, Icon]) => (
              <Card key={title} className="p-6">
                <Icon className="text-amber-400" />
                <h3 className="font-bold mt-4">{title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            label="Got Questions?"
            title="Frequently Asked Questions"
          />

          <div className="space-y-3">
            {faqs.map(([q, a], i) => (
              <Card key={q} className="overflow-hidden">
                <button
                  onClick={() => setFaq(faq === i ? null : i)}
                  className="w-full p-5 flex justify-between text-left font-bold"
                >
                  {q}
                  <ChevronDown
                    className={`transition ${faq === i ? "rotate-180 text-amber-400" : ""}`}
                  />
                </button>

                {faq === i && (
                  <p className="px-5 pb-5 pt-1 text-sm text-slate-400 border-t border-slate-800 leading-relaxed">
                    {a}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-7">
          <Badge>
            <Sparkles className="w-4" /> SHCOURIER & SUPPLY
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black">
            Ready to Complete the Journey?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Move every shipment toward its destination with trust and speed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("tracking-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-2xl bg-amber-500 text-slate-950 font-bold"
            >
              Track Shipment
            </button>
            <button
              onClick={() => setModal(true)}
              className="px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 font-bold"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="p-7 max-w-md w-full space-y-5">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <PhoneCall className="text-amber-400" />
                <div>
                  <b>Contact SHCOURIER</b>
                  <p className="text-xs text-slate-400">Direct Support Desk</p>
                </div>
              </div>
              <button onClick={() => setModal(false)}>✕</button>
            </div>

            {["Your Name", "Email or Phone"].map((x) => (
              <input
                key={x}
                placeholder={x}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 outline-none focus:border-amber-500"
              />
            ))}

            <textarea
              rows="3"
              placeholder="How can we help?"
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 outline-none focus:border-amber-500"
            />

            <button
              onClick={() => {
                alert("Thank you! Your message has been sent.");
                setModal(false);
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold"
            >
              Send Message
            </button>
          </Card>
        </div>
      )}
    </main>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
      <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-black">{title}</h2>
      {text && <p className="text-slate-400">{text}</p>}
    </div>
  );
}
