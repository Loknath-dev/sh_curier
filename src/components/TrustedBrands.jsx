import Flipkart from "../assets/brands.logo/Flipkart.png";
import Meesho from "../assets/brands.logo/Meesho.png";
import Shadowfax from "../assets/brands.logo/Shadowfax.jpeg";

const BRANDS = [
  {
    name: "Flipkart",
    role: "Last-Mile Fulfilment",
    src: Flipkart,
  },
  {
    name: "Meesho",
    role: "Regional Logistics Partner",
    src: Meesho,
  },
  {
    name: "Shadowfax",
    role: "Last-Mile Delivery Associate",
    src: Shadowfax,
  },
];

export default function TrustedBrands() {
  const items = [...BRANDS, ...BRANDS];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-slate-100 py-14 sm:py-16 lg:py-20">
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width:640px){
          .marquee{
            animation-duration:18s;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
            Trusted Partners
          </span>

          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Delivering for India's Leading Brands
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            We proudly support India's fastest-growing e-commerce ecosystem with
            reliable logistics, last-mile delivery and regional fulfillment
            services.
          </p>
        </div>

        {/* Marquee */}

        <div className="relative overflow-hidden">
          {/* Left Fade */}

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-20 lg:w-28 bg-linear-to-r from-slate-100 to-transparent" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-20 lg:w-28 bg-linear-to-l from-slate-100 to-transparent" />

          <div className="marquee gap-4 sm:gap-6 lg:gap-8 py-4">
            {items.map((brand, index) => (
              <div
                key={index}
                className="group flex h-47.5 sm:h-55 lg:h-62.5 w-55 sm:w-62.5 lg:w-72.5 shrink-0 flex-col items-center justify-center rounded-3xl border border-white/70 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-2xl"
              >
                {/* Logo */}

                <div className="flex h-16 sm:h-20 lg:h-24 w-full items-center justify-center px-6">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-h-10 sm:max-h-12 lg:max-h-14 max-w-30 sm:max-w-37.5 lg:max-w-42.5 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Divider */}

                <div className="my-4 sm:my-5 h-px w-16 sm:w-20 bg-slate-200 transition-colors duration-300 group-hover:bg-amber-400"></div>

                {/* Brand Name */}

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800">
                  {brand.name}
                </h3>

                {/* Role */}

                <p className="mt-2 px-4 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 group-hover:text-amber-600">
                  {brand.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
