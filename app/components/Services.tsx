"use client";
import { motion } from "framer-motion";
import { Home, Building2, Tractor, Monitor, Zap, CreditCard } from "lucide-react";
import { site } from "../data/site";

const iconMap: Record<string, React.ReactNode> = {
  home: <Home size={28} />,
  building: <Building2 size={28} />,
  tractor: <Tractor size={28} />,
  monitor: <Monitor size={28} />,
  zap: <Zap size={28} />,
  creditCard: <CreditCard size={28} />,
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0f2040]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[#f5c518] text-sm font-bold uppercase tracking-widest">
            Soluções
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Completo para você e <br className="hidden md:block" />
            para o seu negócio
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Da residência ao agronegócio, temos a solução certa para cada
            realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-[#0a1628] border border-white/8 rounded-2xl p-7 hover:border-[#f5c518]/30 hover:bg-[#0d1e35] transition-all duration-300 cursor-default"
            >
              <div className="text-[#f5c518] mb-5 group-hover:scale-110 transition-transform inline-block">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
