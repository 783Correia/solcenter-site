"use client";
import { motion } from "framer-motion";
import { Sun, Shield, Zap } from "lucide-react";
import { site } from "../data/site";

const iconMap: Record<string, React.ReactNode> = {
  sun: <Sun size={32} />,
  shield: <Shield size={32} />,
  zap: <Zap size={32} />,
};

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  green: {
    border: "border-[#00a651]/30",
    bg: "bg-[#00a651]/10",
    text: "text-[#00a651]",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  yellow: {
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/10",
    text: "text-yellow-400",
  },
};

export default function Units() {
  return (
    <section className="py-20 bg-[#0a1a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#00a651] text-sm font-bold uppercase tracking-widest">
            Grupo Solcenter
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-3">
            Seguimos fazendo história.
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            A mesma Solcenter que você conhece — agora em três frentes especializadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {site.units.map((unit, i) => {
            const colors = colorMap[unit.color];
            return (
              <motion.div
                key={unit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`border ${colors.border} bg-[#0f2818] rounded-2xl p-8 text-center`}
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 ${colors.text}`}
                >
                  {iconMap[unit.icon]}
                </div>
                <h3 className={`text-xl font-black mb-3 ${colors.text}`}>
                  {unit.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {unit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
