import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { _address } from "../utils/address";
import { _contact1, _email } from "../utils/contacts";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <span className="text-2xl font-black tracking-wider text-amber-500">
            SH
          </span>
          <span className="text-xl font-bold ml-2 text-white tracking-tight">
            COURIER
          </span>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            Global infrastructure, localized execution. Securing industrial and
            commercial pipelines worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Last-Mile Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Warehousing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Support
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                API Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact Corporate
          </h4>
          <p className="text-sm text-slate-400 mb-2">{_address}</p>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />

            {_contact1}
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>{_email}</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-600 gap-4">
        <p>
          &copy; {new Date().getFullYear()} SH COURIER & SUPPLY. All rights
          reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
