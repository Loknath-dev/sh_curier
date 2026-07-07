import AboutUs from "./components/About";
import Careers from "./components/CareersPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TrustedBrands from "./components/TrustedBrands";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Header */}
      <Navbar />

      <main>
        {/* Hero Banner */}
        <Hero />

        {/* Trusted by Clients */}
        <TrustedBrands />

        {/* Company Introduction */}
        <AboutUs />

        {/* Our Services */}
        <Services />

        {/* Why Customers Choose Us */}
        <WhyChooseUs />

        {/* Join Our Team */}
        <Careers />

        {/* Contact */}
        <section
          id="contact"
          className="bg-gradient-to-b from-slate-50 to-white"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
