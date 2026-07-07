import { FaHeadset, FaShieldAlt, FaShippingFast } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    desc: "Quick and reliable deliveries with optimized routes.",
  },

  {
    icon: <FaShieldAlt />,
    title: "Safe Handling",
    desc: "Every parcel is handled with maximum care and security.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Dedicated customer support whenever you need assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-amber-500 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Delivering Trust With Every Shipment
          </h2>

          <p className="mt-4 text-slate-600">
            We combine technology, experienced professionals, and a strong
            logistics network to provide dependable delivery solutions.
          </p>
        </div>

        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-slate-50 rounded-2xl p-8 text-center border hover:border-amber-500 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

              <p className="mt-3 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
