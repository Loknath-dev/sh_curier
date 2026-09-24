import AboutUs from "../components/About";
import Careers from "../components/CareersPage";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TrustedBrands from "../components/TrustedBrands";
import WhyChooseUs from "../components/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section aria-label="Trusted brands">
        <TrustedBrands />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why-us">
        <WhyChooseUs />
      </section>

      <section id="careers">
        <Careers />
      </section>

      <section id="contact" className="bg-linear-to-b from-slate-50 to-white">
        <Contact />
      </section>
    </main>
  );
}
