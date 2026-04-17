import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
