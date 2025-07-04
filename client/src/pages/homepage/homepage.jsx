import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import TestimonialsSection from "./sections/testimonials";
import Footer from "./sections/footer";
import ServicesSection from "./sections/services";
import FeaturesSection from "./sections/features";
import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero";

function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Homepage;
