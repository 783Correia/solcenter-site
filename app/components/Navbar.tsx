"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
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
    <header className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
      <div className={`w-full max-w-5xl pointer-events-auto transition-all duration-300 rounded-2xl px-5 h-14 flex items-center justify-between ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-xl shadow-black/10 border border-gray-100"
          : "bg-white/10 backdrop-blur-sm border border-white/20"
      }`}>
        <a href="#inicio" className="flex items-center">
          <Image
            src={scrolled ? "/logo-dark.svg" : "/logo.svg"}
            alt="Sol Center"
            width={130}
            height={27}
            className="transition-all duration-300"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`text-[13px] font-medium transition-colors ${scrolled ? "text-gray-500 hover:text-[#0a1628]" : "text-white/80 hover:text-white"}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#00a651] text-white font-bold text-[13px] px-5 py-2 rounded-full hover:bg-[#00c060] transition-all">
          Faça uma simulação
        </a>

        <button className={`md:hidden hover:opacity-70 transition-opacity ${scrolled ? "text-[#0a1628]" : "text-white"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 inset-x-0 md:hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 mx-0 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-[#0a1628] font-medium transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer"
            className="bg-[#00a651] text-white font-bold px-5 py-3 rounded-full text-center text-sm mt-1">
            Faça uma simulação
          </a>
        </div>
      )}
    </header>
  );
}
