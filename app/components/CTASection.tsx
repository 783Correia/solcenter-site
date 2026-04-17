"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function CTASection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Card centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative bg-[#eef6f0] rounded-3xl px-8 pt-14 pb-56 text-center"
        >
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Dê o primeiro passo
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#0a1628] leading-[1.05] tracking-[-0.03em] mb-4">
            Vamos conversar.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm mx-auto font-light">
            Análise gratuita, sem compromisso. Nossa equipe responde em minutos.
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#0a1628] text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#0d1f3c] transition-all"
          >
            <MessageCircle size={16} />
            Fale conosco
          </a>

          {/* Imagem sobreposta ao fundo do card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl"
          >
            <Image
              src="/images/solar-3d.png"
              alt="Sistema solar"
              width={800}
              height={500}
              className="w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
