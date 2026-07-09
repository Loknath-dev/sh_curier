import {
  FaArrowRight,
  FaMotorcycle,
  FaPhoneAlt,
  FaUserTie,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { _contact1 } from "../utils/contacts";

export default function Careers() {
  const phone = _contact1;

  // Remove everything except digits
  const cleanPhone = _contact1.replace(/\s+/g, "");

  const phoneLink = `tel:${cleanPhone}`;
  const whatsappLink = `https://wa.me/${cleanPhone}`;

  const jobs = [
    {
      title: "Delivery Rider",
      icon: <FaMotorcycle />,
      color: "bg-amber-100 text-amber-600",
      description:
        "Join our delivery team and help deliver parcels safely and on time across the region.",
      requirements: [
        "Valid Driving License",
        "Own Bike & Smartphone",
        "Basic Communication Skills",
        "Full-Time / Part-Time",
      ],
    },
    {
      title: "Office Staff",
      icon: <FaUserTie />,
      color: "bg-sky-100 text-sky-600",
      description:
        "Support our logistics operations through customer service, coordination, and office administration.",
      requirements: [
        "Graduate (Preferred)",
        "Basic Computer Knowledge",
        "Good Communication Skills",
        "Team Player",
      ],
    },
  ];

  return (
    <section id="careers" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-600 text-sm font-semibold uppercase tracking-wider">
            Careers
          </span>

          <h2 className="text-4xl font-black text-slate-900 mt-5">
            Join Our Growing Team
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-7">
            We are always looking for dedicated Delivery Riders and Office Staff
            who are passionate about providing excellent logistics and courier
            services.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${job.color}`}
              >
                {job.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {job.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">{job.description}</p>

              <ul className="mt-6 space-y-3">
                {job.requirements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={phoneLink}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  <FaPhoneAlt />
                  Contact Now
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-linear-to-r from-amber-500 to-orange-500 p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold">Ready to Build Your Career?</h2>

          <p className="mt-4 max-w-2xl mx-auto text-amber-50">
            Whether you're interested in becoming a Delivery Rider or joining
            our Office Team, we'd love to hear from you. Contact us today to
            learn about current opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={phoneLink}
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition"
            >
              <FaPhoneAlt />
              {phone}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
