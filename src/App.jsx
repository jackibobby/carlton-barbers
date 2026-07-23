import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ThemeToggle from "./components/ThemeToggle";
import ScrollProgress from "./components/ScrollProgress";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import BookingPage from "./pages/BookingPage";


function App() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="
        min-h-screen
        bg-white
        text-black
        dark:bg-[#0F0F0F]
        dark:text-white
        transition-colors
        duration-300">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/services"
            element={<ServicesPage />}
          />

          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* 404 Page */}
          <Route
            path="*"
            element={<NotFound />}
          />

          <Route
            path="/booking"
            element={<BookingPage />}
          />
        </Routes>
      </main>

      {/* Global Components */}
      <Footer />
      <WhatsappButton />
      <ThemeToggle />
    </>
  );
}

export default App;