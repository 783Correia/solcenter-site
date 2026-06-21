"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "../data/site";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl">
        {/* Imagem de fundo */}
        <Image
          src="/images/cta-solar.webp"
          alt="Sistema de energia solar"
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
        {/* Overlay para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#0a1628]/80 to-[#00a651]/60" />

        {/* Texto e botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center gap-4 text-center px-6 py-20 md:py-28"
        >
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em]">
            Dê o primeiro passo
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white">
            Vamos <span className="text-[#5fe39b]">conversar</span>
          </h2>
          <p className="text-white/75 text-base leading-relaxed max-w-md font-light">
            Análise gratuita, sem compromisso. Nossa equipe responde em minutos.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#00a651] text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#00c060] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
            >
              Fale conosco
              <ArrowRight size={16} />
            </a>
            <a
              href="/lp-energia"
              className="inline-flex items-center gap-2.5 border-2 border-white/70 text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-white hover:text-[#0a1628] transition-all"
            >
              Ver simulação completa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
