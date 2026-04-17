"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { site } from "../data/site";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#f7f8f9]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Depoimentos
          </p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black text-[#0a1628] leading-tight tracking-[-0.03em]">
              O que dizem<br />nossos clientes
            </h2>
            <div className="hidden md:flex items-center gap-2 bg-white border border-gray-100 rounded-full px-5 py-2.5 shrink-0">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#00a651] text-[#00a651]" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#0a1628]">5.0</span>
              <span className="text-xs text-gray-400">· Google</span>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {site.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6"
            >
              <Quote size={28} className="text-[#00a651] opacity-60 shrink-0" />
              <p className="text-[#0a1628] text-base leading-relaxed font-medium flex-1">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0a1628] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[#0a1628] font-bold text-sm leading-tight">{t.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{t.location}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[#00a651] text-[#00a651]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
