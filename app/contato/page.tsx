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
  openGraph: {
    title: "Contato — Fale com a Solcenter",
    description:
      "Orçamento gratuito de energia solar. WhatsApp, telefone e endereço em Santo Cristo / RS.",
    url: "https://www.solcenter.com.br/contato",
    siteName: "Solcenter",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.solcenter.com.br/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Solcenter — Energia Solar no Noroeste Gaúcho",
      },
    ],
  },
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="sr-only">Contato — Fale com a Solcenter</h1>
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
