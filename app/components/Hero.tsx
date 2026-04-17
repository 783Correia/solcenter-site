"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a1a0f]" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6 pt-24 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-[#00a651] rounded-full animate-pulse" />
          A N°1 do Noroeste Gaúcho — 10 anos fazendo história
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-[1.05] max-w-3xl mb-6"
        >
          O futuro já<br />é agora.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
        >
          Transforme a luz solar em economia real. Reduza até{" "}
          <strong className="text-white">95% da sua conta de luz</strong> com
          quem instalou mais de 1.400 sistemas no RS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#00a651] text-white font-black px-8 py-4 rounded-xl text-base hover:bg-[#00c060] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/30"
          >
            Faça uma simulação grátis
            <ArrowRight size={18} />
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/20 transition-all"
          >
            Conhecer a Solcenter
          </a>
        </motion.div>
      </div>

      {/* Floating stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-4xl px-6"
      >
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {site.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-6 px-4 text-center">
              <span className="text-2xl md:text-3xl font-black text-[#0a1a0f]">
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
