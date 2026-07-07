import { useState } from "react";
import { _contact1, _email } from "../utils/contacts";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${form.name}. Operations has queued your request regarding "${form.subject}".`,
    );
    setForm({ name: "", email: "", subject: "general", message: "" });
  };

  return (
    <section id="contact-form" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          {/* Left Block: Communication Details */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between lg:col-span-1">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-white mb-4">
                Operations Center
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Connect directly with our central communications command. For
                instant status updates regarding cargo manifests or priority
                customs clearances, use our direct telephone lines.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <span className="text-amber-500 text-lg">📞</span>
                  <div>
                    <h4 className="font-bold text-white">
                      Commercial Hotlines
                    </h4>
                    <p className="text-slate-400 text-xs mt-0.5">{_contact1}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-amber-500 text-lg">✉️</span>
                  <div>
                    <h4 className="font-bold text-white">
                      Digital Manifest Inquiries
                    </h4>
                    <p className="text-slate-400 text-xs mt-0.5">{_email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500">
              Average response time for commercial ticketing:{" "}
              <strong>&lt; 14 minutes</strong>.
            </div>
          </div>

          {/* Right Block: Dynamic Form */}
          <div className="p-8 sm:p-12 lg:col-span-2">
            <h3 className="text-xl font-bold tracking-tight mb-2 text-slate-900">
              Initiate a Manifest Inquiry
            </h3>
            <p className="text-sm text-slate-500 mb-8">
              Fill out the brief context form below, and our routing desk will
              flag your message to the correct regional hub dispatcher.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    placeholder="j.doe@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Inquiry Classification
                </label>
                <select
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                >
                  <option value="general">
                    General Operations / Shipping Inquiry
                  </option>
                  <option value="enterprise">
                    Enterprise Contract Logistics Solutions
                  </option>
                  <option value="billing">
                    Discrepancy Invoicing & Custom Fees
                  </option>
                  <option value="careers">Carrier Network Partnerships</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Detailed Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors resize-none"
                  placeholder="Please specify weights, destinations, tracking profiles, or specific timelines if applicable..."
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-amber-500/20 uppercase tracking-wider"
                >
                  Transmit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
