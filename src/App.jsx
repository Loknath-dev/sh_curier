import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FirstMilePickup from "./pages/FirstMilePickup";
import HomePage from "./pages/HomePage";
import LastMileDelivery from "./pages/LastMileDelivery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Warehousing from "./pages/Warehousing";
function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/first-mile-pickup" element={<FirstMilePickup />} />
          <Route path="/last-mile-delivery" element={<LastMileDelivery />} />

          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/warehousing" element={<Warehousing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
