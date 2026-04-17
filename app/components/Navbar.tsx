"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

const links = [
  { label: "Home", href: "#inicio" },
  { label: "A Solcenter", href: "#sobre" },
  { label: "Soluções", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1a0f]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-1">
          <span className="text-[#00a651] font-black text-xl tracking-tight">SOL</span>
          <span className="text-white font-bold text-xl tracking-tight">CENTER</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={site.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#00a651] text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#00c060] transition-all"
        >
          Faça uma simulação
        </a>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a1a0f] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00a651] text-white font-bold px-5 py-2.5 rounded-full text-center"
          >
            Faça uma simulação
          </a>
        </div>
      )}
    </header>
  );
}
