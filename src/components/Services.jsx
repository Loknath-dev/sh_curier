import { FaBox, FaBoxOpen, FaTruckMoving } from "react-icons/fa";
const services = [
  {
    title: "Express Courier & Parcel",
    desc: "Fast and secure same-day and next-day parcel delivery with live shipment tracking.",
    icon: <FaBox />,
    animation: "animate-bounce-slow",
  },
  {
    title: "Doorstep Pickup Service",
    desc: "Book convenient parcel pickups from your home, office, or warehouse.",
    icon: <FaBoxOpen />,
    animation: "animate-pickup",
  },
  {
    title: "Last-Mile Delivery",
    desc: "Reliable doorstep deliveries with optimized routes and on-time performance.",
    icon: <FaTruckMoving />,
    animation: "animate-truck",
  },
];
export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Comprehensive Logistics Solutions
          </h2>

          <p className="text-lg text-slate-600">
            From doorstep pickup to last-mile delivery, we provide reliable,
            fast, and technology-driven logistics services for businesses and
            individuals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl transition-all duration-500 ${service.animation}`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-slate-600 leading-relaxed">
                {service.desc}
              </p>

              {/* Button */}
              {/* <button className="mt-6 text-amber-600 font-semibold transition-all duration-300 group-hover:translate-x-2">
                Learn More →
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
