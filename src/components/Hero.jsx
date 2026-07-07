import { useState } from "react";

export default function Hero() {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    alert(`Searching system for Tracking ID: ${trackingId}`);
    // Handle actual tracking logic here
  };

  return (
    <div className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative background grid pattern or overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-2/3 text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 mb-6 border border-amber-500/20">
            Now Operating Globally
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
            Logistics Without Boundaries. <br />
            <span className="text-amber-500">Supply Chains Secured.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl">
            SH Courier & Supply delivers smart global freight, express courier
            networks, and absolute supply chain visibility from factory floor to
            end consumer.
          </p>

          {/* Tracking Bar Component */}
          <div className="bg-slate-800 p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-700 max-w-xl">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400 mb-3">
              Track Your Shipment
            </h3>
            <form
              onSubmit={handleTrack}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Enter tracking number (e.g., SH-109283)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="w-full bg-slate-900 text-white rounded-xl border border-slate-700 px-4 py-3.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-slate-500 text-sm font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
              >
                Track Package
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
