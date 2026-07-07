export default function AboutUs() {
  const highlights = [
    { value: "Same-Day", label: "Local Dispatch" },
    { value: "Real Person", label: "Customer Support" },
    { value: "100%", label: "Care & Security" },
    { value: "5K + /Day", label: "Deliveries Handled." },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story & Local Focus Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
              Your Local Delivery Partner
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-4 mb-6">
              Dependable Deliveries for Our Local Community
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At **SH COURIER & SUPPLY**, we believe you shouldn't have to
              navigate a massive corporate maze just to get a package across
              town or safely delivered to a nearby supplier. We started with a
              simple mission: to provide small businesses and local residents
              with fast, friendly, and completely transparent courier services.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Unlike global conglomerates, we know our community routes by
              heart. Whether it's an urgent legal document, architectural
              blueprints, medical supplies, or local retail inventory, we handle
              every parcel with individual care—delivering peace of mind
              alongside your shipment.
            </p>
          </div>

          {/* Local Promise Box */}
          <div className="bg-slate-900 p-8 rounded-2xl text-white relative shadow-xl border border-slate-800">
            <h3 className="text-lg font-bold text-amber-500 mb-4">
              The SH Courier Promise
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <span>
                  <strong>Direct Route Deliveries:</strong> Your urgent parcel
                  goes straight from your hand to the recipient—no sitting in
                  sorting hubs overnight.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <span>
                  <strong>Accountability:</strong> Call us and you will speak
                  directly to a local dispatcher who can tell you exactly where
                  your courier is.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <span>
                  <strong>Supporting Local Business:</strong> We design custom
                  pricing models to help regional shops and businesses grow
                  their local delivery reach.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Small Business Highlights Grid */}
        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 sm:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {highlights.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
