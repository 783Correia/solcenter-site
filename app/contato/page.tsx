import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Contato — Fale com a Solcenter",
  description:
    "Fale com a equipe da Solcenter: orçamento gratuito de energia solar, WhatsApp, telefone e endereço em Santo Cristo / RS.",
  alternates: { canonical: "https://www.solcenter.com.br/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
