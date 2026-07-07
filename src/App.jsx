import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TrustedBrands from "./components/TrustedBrands";

function App() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased selection:bg-amber-500 selection:text-slate-900">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Services />

      {/* About Corporate Profile */}
      <AboutUs />

      {/* Contact & Inquiries */}
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
