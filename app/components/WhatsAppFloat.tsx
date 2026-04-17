"use client";
import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 transition-all flex items-center gap-3 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-bold whitespace-nowrap">
        Falar agora
      </span>
    </a>
  );
}
