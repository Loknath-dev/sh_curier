import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { _contact1, _email } from "../utils/contacts";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you, ${form.name}! We've received your message.`);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">Contact Us</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Have a question about our logistics services or need assistance?
            Fill out the form below and our team will get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-900">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-slate-300 text-sm">{_contact1}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-900">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-slate-300 text-sm">{_email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-700 pt-6">
              <p className="text-sm text-slate-400">
                We're here to help with shipping, delivery, tracking,
                partnerships, and general support.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Send us a Message
            </h3>

            <p className="text-slate-500 mb-8">
              Complete the form below and our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your full name"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+91 98765 43210"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Write your message here..."
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
