import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Referral from "./components/Referral";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <HowItWorks />
      <Testimonials />
      <Referral />
      <CTASection />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
