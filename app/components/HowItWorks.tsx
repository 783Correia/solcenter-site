"use client";
import { motion } from "framer-motion";
import { Phone, Zap, Package, CheckCircle, Activity } from "lucide-react";
import { site } from "../data/site";

const iconMap: Record<string, React.ReactNode> = {
  phone: <Phone size={18} />,
  zap: <Zap size={18} />,
  package: <Package size={18} />,
  check: <CheckCircle size={18} />,
  activity: <Activity size={18} />,
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#f7f8f9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Como contratar
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-black text-[#0a1628] leading-tight tracking-[-0.03em] mb-6">
              Do primeiro contato até a economia na sua conta.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              Processo simples e transparente. Cuidamos de tudo para que você só precise ligar o sistema.
            </p>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#0d1f3c] transition-all"
            >
              Começar agora
            </a>
          </motion.div>

          {/* Right — steps */}
          <div className="space-y-0">
            {site.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6 py-7 border-b border-gray-200 last:border-0 group"
              >
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0a1628] text-white flex items-center justify-center group-hover:bg-[#00a651] transition-colors duration-300">
                    {iconMap[step.icon]}
                  </div>
                  <span className="text-[11px] text-gray-300 font-bold tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-[#0a1628] font-bold text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
