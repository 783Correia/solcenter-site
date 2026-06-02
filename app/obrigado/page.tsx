"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Phone, MessageCircle, Sun } from "lucide-react";
import Link from "next/link";

const PHONE_DISPLAY = "(55) 9 8449-2001";
const PHONE_HREF = "tel:+5555984492001";
const WHATSAPP = "https://wa.me/5555984492001?text=Ol%C3%A1%2C+acabei+de+preencher+o+formul%C3%A1rio+no+site+e+quero+saber+mais+sobre+energia+solar.";

export default function ObrigadoPage() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  return (
    <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-8">
        <Sun className="text-[#f5c518] w-10 h-10" />
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl">
        <div className="w-16 h-16 bg-[#00a651]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-[#00a651] w-8 h-8" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
          Recebemos seu contato!
        </h1>
        <p className="text-gray-500 text-base mb-8 leading-relaxed">
          Um consultor Solcenter vai te atender em instantes.
          <br />
          Se preferir, chama direto agora:
        </p>

        {/* Phone CTA */}
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-3 w-full bg-[#0a1628] text-white font-bold text-lg py-4 rounded-2xl mb-4 hover:bg-[#0f2040] transition"
        >
          <Phone className="w-5 h-5" />
          {PHONE_DISPLAY}
        </a>

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold text-base py-4 rounded-2xl mb-8 hover:bg-[#1db954] transition"
        >
          <MessageCircle className="w-5 h-5" />
          Chamar no WhatsApp
        </a>

        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-[#00a651] transition"
        >
          ← Voltar para o site
        </Link>
      </div>

      <p className="text-white/30 text-xs mt-6">
        Solcenter Energia Solar · Santo Cristo/RS
      </p>
    </div>
  );
}
