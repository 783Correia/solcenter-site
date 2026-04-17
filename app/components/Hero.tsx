"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-[#060d18]" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

      {/* Main content — centered */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6 pt-32 pb-16 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[#00a651] text-sm font-bold uppercase tracking-[0.2em] mb-5"
        >
          A N°1 do Noroeste Gaúcho · 10 anos de história
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-[clamp(3rem,8vw,6.5rem)] font-black text-white leading-[0.92] tracking-[-0.03em] mb-7"
        >
          O futuro<br />já é agora.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light"
        >
          Reduza até 95% da sua conta de luz. Mais de{" "}
          <span className="text-white font-medium">1.400 sistemas instalados</span>{" "}
          no Rio Grande do Sul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#00a651] text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#00c060] transition-all hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
          >
            Faça uma simulação grátis
            <ArrowRight size={16} />
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 text-white/70 font-medium text-sm px-7 py-3.5 rounded-full border border-white/15 hover:border-white/40 hover:text-white transition-all"
          >
            Conhecer a Solcenter
          </a>
        </motion.div>
      </div>

      {/* Stats bar — parte do fluxo, flush ao fundo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-20 w-full"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-t-2xl grid grid-cols-2 md:grid-cols-4 shadow-xl">
            {site.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-6 px-4 text-center ${
                  i < site.stats.length - 1 ? "border-r border-gray-100" : ""
                }`}
              >
                <span className="text-2xl md:text-3xl font-black text-[#0a1628] tracking-[-0.03em]">
                  {stat.value}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5 font-medium uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
