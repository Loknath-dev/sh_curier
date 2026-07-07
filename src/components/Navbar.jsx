import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-wider text-amber-500">
              SH
            </span>
            <span className="text-xl font-bold ml-2 text-white tracking-tight">
              COURIER & SUPPLY
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a
              href="#services"
              className="hover:text-amber-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#calculator"
              className="hover:text-amber-500 transition-colors"
            >
              Rate Estimator
            </a>
            <a href="#about" className="hover:text-amber-500 transition-colors">
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-amber-500 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2">
          <a
            href="#services"
            className="block text-gray-300 hover:text-amber-400 py-2"
          >
            Services
          </a>
          <a
            href="#calculator"
            className="block text-gray-300 hover:text-amber-400 py-2"
          >
            Rate Estimator
          </a>
          <a
            href="#about"
            className="block text-gray-300 hover:text-amber-400 py-2"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-amber-400 py-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
