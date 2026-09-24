import { useState } from "react";

export default function Hero() {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    alert(`Searching Tracking ID: ${trackingId}`);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white font-sans">
      {/* FULL SCREEN BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=2400&auto=format&fit=crop')",
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-slate-950/45" />

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-950/80 to-slate-950/35" />

      <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-slate-950/30" />

      {/* Ambient amber glow */}
      <div className="absolute -top-32 right-0 w-125 h-125 rounded-full bg-amber-500/15 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-amber-500/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/30 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm font-medium text-amber-300 shadow-lg mb-7">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                </span>
                Trusted Logistics Partner
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98]">
                Delivering
                <br />
                <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.25)]">
                  Trust
                </span>{" "}
                <span className="text-white">& Speed</span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200/85">
                Fast, secure, and technology-driven courier solutions for
                businesses and individuals. From doorstep pickup to last-mile
                delivery, we ensure every shipment reaches safely and on time.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 max-w-lg mt-10 pt-7 border-t border-white/15">
                <div>
                  <h3 className="text-3xl font-black text-amber-400">15K+</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300">
                    Deliveries
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-amber-400">50+</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300">
                    Delivery Riders
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-amber-400">99%</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300">
                    On-Time Rate
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT TRACKING CARD */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/30 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                {/* Top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-400/70 to-transparent" />

                <div className="grid md:grid-cols-2">
                  {/* Tracking form */}
                  <div className="p-7 sm:p-9">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m6 0a2 2 0 104 0"
                          />
                        </svg>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl">
                          Track Your Shipment
                        </h3>

                        <p className="text-sm text-slate-400 mt-1">
                          Real-time shipment tracking
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleTrack} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Enter Tracking ID"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="w-full rounded-2xl bg-black/35 border border-white/10 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                      />

                      <button
                        type="submit"
                        className="w-full rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/20"
                      >
                        Track Package
                      </button>
                    </form>

                    <div className="mt-7 pt-6 border-t border-white/10 space-y-4">
                      <div className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="text-amber-400">✓</span>
                        Safe Package Handling
                      </div>

                      <div className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="text-amber-400">✓</span>
                        Same-Day Delivery Available
                      </div>

                      <div className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="text-amber-400">✓</span>
                        Live Delivery Updates
                      </div>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="relative min-h-87.5 md:min-h-full">
                    <img
                      src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=85&w=1200&auto=format&fit=crop"
                      alt="Courier worker holding package"
                      className="absolute inset-0 w-full h-full object-cover opacity-75"
                    />

                    <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 text-xs text-white">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        Delivery Network Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
