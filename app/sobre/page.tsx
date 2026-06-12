import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Sobre a Solcenter — 10 anos de energia solar no Noroeste Gaúcho",
  description:
    "Conheça a Solcenter: mais de 1.400 projetos de energia solar entregues em 60+ cidades do Rio Grande do Sul. Sede em Santo Cristo / RS.",
  alternates: { canonical: "https://www.solcenter.com.br/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-20">
          <About />
        </div>
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
