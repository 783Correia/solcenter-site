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
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#060d18]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-1">
          <span className="text-[#00a651] font-black text-lg tracking-tight">SOL</span>
          <span className="text-white font-bold text-lg tracking-tight">CENTER</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-[13px] text-white/50 hover:text-white transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#00a651] text-white font-bold text-[13px] px-5 py-2 rounded-full hover:bg-[#00c060] transition-all">
          Faça uma simulação
        </a>

        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#060d18] border-t border-white/8 px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white font-medium transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer"
            className="bg-[#00a651] text-white font-bold px-5 py-3 rounded-full text-center text-sm">
            Faça uma simulação
          </a>
        </div>
      )}
    </header>
  );
}
