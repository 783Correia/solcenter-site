"use client";
import { motion } from "framer-motion";
import { Phone, Zap, Package, CheckCircle, Activity } from "lucide-react";
import { site } from "../data/site";

const iconMap: Record<string, React.ReactNode> = {
  phone: <Phone size={22} />,
  zap: <Zap size={22} />,
  package: <Package size={22} />,
  check: <CheckCircle size={22} />,
  activity: <Activity size={22} />,
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-[#f5c518] text-sm font-bold uppercase tracking-widest">
            Como contratar?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] mt-3 max-w-xl leading-snug">
            Entenda como você pode contratar os serviços da Solcenter
          </h2>
        </motion.div>

        <div className="space-y-2">
          {site.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex gap-6 p-6 rounded-2xl transition-colors ${
                i % 2 === 1 ? "bg-white" : "bg-transparent"
              }`}
            >
              <div className="shrink-0 w-12 h-12 rounded-full border-2 border-[#0a1628]/20 flex items-center justify-center text-[#0a1628]">
                {iconMap[step.icon]}
              </div>
              <div>
                <h3 className="text-[#0a1628] font-black text-xl mb-1">
                  Passo {i + 1} — {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#00c060] transition-all hover:-translate-y-0.5"
          >
            Fale conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
