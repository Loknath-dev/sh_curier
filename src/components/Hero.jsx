import { useState } from "react";
import { FaBoxOpen, FaShippingFast, FaTruck } from "react-icons/fa";

export default function Hero() {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    alert(`Searching Tracking ID: ${trackingId}`);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-400/5 blur-3xl rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-400 mb-6">
              <FaShippingFast />
              Trusted Logistics Partner
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Delivering
              <span className="block text-amber-500">Trust &</span>
              <span className="block">Speed</span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 max-w-xl leading-8">
              Fast, secure, and technology-driven courier solutions for
              businesses and individuals. From doorstep pickup to last-mile
              delivery, we ensure every shipment reaches safely and on time.
            </p>

            {/* <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold flex items-center gap-2 transition">
                Book Shipment
                <FaArrowRight />
              </button>

              <button className="px-7 py-4 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-800 transition">
                Learn More
              </button>
            </div> */}

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-14">
              <div>
                <h3 className="text-3xl font-black text-amber-500">15K+</h3>
                <p className="text-slate-400 mt-2 text-sm">Deliveries</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-amber-500">50+</h3>
                <p className="text-slate-400 mt-2 text-sm">Delivery Riders</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-amber-500">99%</h3>
                <p className="text-slate-400 mt-2 text-sm">On-Time Rate</p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-2xl text-slate-900 animate-bounce">
                  <FaTruck />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Track Your Shipment</h3>

                  <p className="text-slate-400 text-sm">
                    Real-time shipment tracking
                  </p>
                </div>
              </div>

              <form onSubmit={handleTrack} className="space-y-5">
                <input
                  type="text"
                  placeholder="Enter Tracking ID (SH-102938)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-5 py-4 focus:border-amber-500 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl py-4 transition"
                >
                  Track Package
                </button>
              </form>

              <div className="mt-8 border-t border-slate-700 pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FaBoxOpen className="text-amber-500" />
                  <span className="text-slate-300">Safe Package Handling</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaShippingFast className="text-amber-500" />
                  <span className="text-slate-300">
                    Same-Day Delivery Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
