import { useState } from "react";

export default function Calculator() {
  // Input States
  const [weight, setWeight] = useState(5); // in kg
  const [distance, setDistance] = useState(50); // converted to Kilometers (km) for local deliveries
  const [serviceType, setServiceType] = useState("standard");

  // Pricing Matrix in INR (₹)
  const BASE_FEE = 60; // Base handling fee in Rupees
  const WEIGHT_MULTIPLIER = 12; // Surcharge per kg in Rupees

  const multipliers = {
    standard: {
      label: "Standard Local Delivery",
      rate: 4,
      days: "2-3 Business Days",
    }, // ₹4 per km
    express: {
      label: "Express Delivery",
      rate: 9,
      days: "Same Day / Next Day",
    }, // ₹9 per km
    overnight: {
      label: "Immediate Priority Courier",
      rate: 15,
      days: "Within 2-4 Hours",
    }, // ₹15 per km
  };

  // Live Pricing Math
  const selectedService = multipliers[serviceType];
  const totalCost =
    weight * WEIGHT_MULTIPLIER + distance * selectedService.rate + BASE_FEE;

  return (
    <div className="bg-slate-800 text-white p-6 sm:p-10 rounded-2xl shadow-xl border border-slate-700 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Controls Form */}
        <div className="space-y-6">
          {/* Weight Control */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Package Weight
              </label>
              <span className="text-amber-500 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded text-sm">
                {weight} kg
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>1 kg</span>
              <span>50 kg</span>
            </div>
          </div>

          {/* Distance Control */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Delivery Distance
              </label>
              <span className="text-amber-500 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded text-sm">
                {distance} km
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="300"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>2 km</span>
              <span>300 km</span>
            </div>
          </div>

          {/* Service Tier Dropdown */}
          <div>
            <label className="block text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Service Speed
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm font-medium"
            >
              <option value="standard">Standard Local Delivery</option>
              <option value="express">Express Delivery</option>
              <option value="overnight">Immediate Priority Courier</option>
            </select>
          </div>
        </div>

        {/* Right Side: Total Invoice Output Dashboard */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-800 pb-2">
              Estimated Rate Breakdown
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Base Booking Charge:</span>
                <span>₹{BASE_FEE.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Weight Loading Fee:</span>
                <span>₹{(weight * WEIGHT_MULTIPLIER).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Distance Charge ({distance} km):</span>
                <span>₹{(distance * selectedService.rate).toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-800 pt-3 text-slate-400">
                <span>Estimated Delivery:</span>
                <span className="text-white font-medium">
                  {selectedService.days}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-2 border-dashed border-slate-700 pt-6">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-base font-bold tracking-tight text-slate-400">
                Estimated Total:
              </span>
              <span className="text-4xl font-black text-amber-500">
                ₹{Math.round(totalCost)}
              </span>
            </div>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/919002003938?text=Hi%20SH%20Courier,%20I%20want%20to%20book%20a%20delivery.%20Weight:%20${weight}kg,%20Distance:%20${distance}km.%20Estimated%20Quote:%20₹${Math.round(totalCost)}`,
                  "_blank",
                )
              }
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3.5 px-4 rounded-xl transition-colors text-sm shadow-lg shadow-amber-500/10 uppercase tracking-wider font-black"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
