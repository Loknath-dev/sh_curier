const services = [
  {
    title: "Express Courier & Parcel",
    desc: "Time-sensitive local and domestic courier delivery right to your door with real-time signature verification.",
    icon: "📦",
  },
  {
    title: "Global Supply Chain Logistics",
    desc: "End-to-end warehousing, inventory orchestration, and bulk cross-docking infrastructure for enterprise retail.",
    icon: "🌐",
  },
  {
    title: "Freight Forwarding",
    desc: "Reliable air, ocean, and intermodal surface freight forwarding optimized for cost efficiency and tight timelines.",
    icon: "🚛",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Whether you are shipping a single mission-critical blueprint or
            managing multi-national supply webs, we adapt to your velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-5 bg-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
