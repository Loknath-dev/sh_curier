import {
  FaCheckCircle,
  FaHeadset,
  FaMapMarkedAlt,
  FaShippingFast,
  FaWarehouse,
} from "react-icons/fa";

export default function AboutUs() {
  const stats = [
    {
      value: "5K+",
      label: "Deliveries / Day",
    },
    {
      value: "99%",
      label: "On-Time Delivery",
    },
    {
      value: "50+",
      label: "Delivery Partners",
    },
    {
      value: "24/7",
      label: "Customer Support",
    },
  ];

  const features = [
    {
      icon: <FaShippingFast />,
      title: "Fast & Reliable Delivery",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Real-Time Shipment Tracking",
    },
    {
      icon: <FaWarehouse />,
      title: "Secure Parcel Handling",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Customer Support",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-600 font-semibold text-sm">
              ABOUT SH COURIER & SUPPLY
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Delivering Trust,
              <br />
              One Shipment at a Time.
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              <span className="bg-amber-100 text-amber-600 font-black mr-1 ">
                " SH Courier & Supply "
              </span>
              provides dependable courier and logistics services for businesses
              and individuals. From doorstep pickup to last-mile delivery, we
              combine experienced professionals with modern technology to ensure
              every shipment arrives safely and on time.
            </p>

            <p className="mt-5 text-slate-600 leading-8">
              Whether it's documents, eCommerce orders, business supplies, or
              bulk deliveries, our mission is to provide fast, secure, and
              transparent logistics solutions across every mile.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <span className="font-semibold text-slate-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold">Why Choose SH Courier?</h3>

              <p className="mt-4 text-slate-300 leading-7">
                We focus on speed, reliability, and customer satisfaction. Every
                parcel is handled with care from pickup to final delivery.
              </p>

              <div className="space-y-5 mt-8">
                {[
                  "Doorstep Pickup Service",
                  "Safe & Secure Parcel Handling",
                  "Professional Delivery Team",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1" />

                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 text-center border hover:border-amber-500 hover:shadow-lg transition"
            >
              <h3 className="text-4xl font-black text-amber-500">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
