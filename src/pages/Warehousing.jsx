import {
  Boxes,
  CheckCircle2,
  Clock3,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
  Warehouse as WarehouseIcon,
} from "lucide-react";

const features = [
  {
    icon: WarehouseIcon,
    title: "Secure Storage",
    text: "Safe, organized and professionally managed storage for your inventory.",
  },
  {
    icon: PackageCheck,
    title: "Inventory Management",
    text: "Accurate receiving, tracking, sorting and dispatch of your products.",
  },
  {
    icon: Truck,
    title: "Fast Dispatch",
    text: "Seamless warehouse-to-delivery coordination for faster order fulfillment.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Security",
    text: "Structured handling processes designed to keep your goods protected.",
  },
];

const services = [
  "Inbound & outbound handling",
  "Inventory receiving & storage",
  "Order picking & packing",
  "Stock sorting & organization",
  "Last-mile dispatch support",
  "Returns & reverse logistics",
];

export default function Warehousing() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="animate-[fadeIn_.7s_ease-out]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-300">
              <WarehouseIcon size={16} />
              Smart Warehousing Solutions
            </span>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Store Smarter.
              <span className="block text-teal-400">Deliver Faster.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Reliable warehousing and fulfillment solutions designed to keep
              your inventory organized, secure and ready for delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-400"
              >
                Get a Warehousing Quote
                <Truck size={18} />
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-teal-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                alt="Modern warehouse"
                className="h-[420px] w-full rounded-2xl object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/85 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-teal-500/15 p-3 text-teal-400">
                    <PackageCheck size={25} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Order Fulfillment</p>
                    <p className="text-sm text-slate-400">
                      From storage to dispatch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">
            Why SHCOURIER
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Warehousing built around your business
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            From receiving inventory to preparing shipments, we help simplify
            every stage of your fulfillment operation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white">
                <Icon size={23} />
              </div>

              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">
              Our Services
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Everything your inventory needs
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              SHCOURIER & SUPPLY connects warehousing, fulfillment and
              transportation into one streamlined logistics workflow.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <CheckCircle2 size={19} className="shrink-0 text-teal-600" />
                  <span className="text-sm font-semibold text-slate-700">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950 p-7 text-white sm:col-span-2">
              <Boxes className="text-teal-400" size={30} />

              <h3 className="mt-6 text-2xl font-bold">
                Flexible storage for growing businesses
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Whether you need short-term inventory holding or ongoing
                fulfillment support, our warehouse solutions can adapt to your
                operational requirements.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Clock3 className="text-teal-600" size={25} />
              <h4 className="mt-5 font-bold">Faster Turnaround</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Efficient handling helps keep your orders moving.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <MapPin className="text-teal-600" size={25} />
              <h4 className="mt-5 font-bold">Connected Logistics</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Smooth coordination between storage and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-white">
              Ready to streamline your warehousing?
            </h2>
            <p className="mt-2 text-teal-50">
              Let SHCOURIER & SUPPLY handle the movement behind your business.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
          >
            Talk to Our Team
            <Truck size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
