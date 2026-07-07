import AboutUs from "./components/About";
import Calculator from "./components/Calculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased selection:bg-amber-500 selection:text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <div id="calculator" className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">
              Instant Quote Estimation
            </h2>
            <p className="text-slate-400 mt-2">
              Get an immediate visual price baseline for planning your
              logistics.
            </p>
          </div>
          <Calculator />
        </div>
      </div>
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
