"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2040] to-[#0a1628]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #f5c518 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-[url('/images/solar-bg.jpg')] bg-cover bg-center opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#f5c518]/10 border border-[#f5c518]/20 text-[#f5c518] text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-[#f5c518] rounded-full animate-pulse" />
            +1400 projetos instalados no RS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-6"
          >
            O futuro já <br />
            <span className="text-[#f5c518]">é agora.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl"
          >
            Energia solar instalada, homologada e monitorada em Santo Cristo e
            região. Reduza até{" "}
            <strong className="text-white">95% da sua conta de luz</strong> com
            retorno em 4 a 6 anos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#f5c518] text-[#0a1628] font-black px-8 py-4 rounded-xl text-base hover:bg-[#ffd740] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/30"
            >
              Quero meu orçamento grátis
              <ArrowRight size={18} />
            </a>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base hover:border-[#f5c518] hover:text-[#f5c518] transition-all"
            >
              <Phone size={18} />
              {site.phone}
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-white/10"
        >
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-[#f5c518]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
