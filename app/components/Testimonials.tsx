"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { site } from "../data/site";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#0a1a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-[#00a651] text-sm font-bold uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            O que dizem nossos clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {site.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-[#0f2818] border border-white/8 rounded-2xl p-8"
            >
              <Quote size={32} className="text-[#00a651]/30 mb-4" />
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.location}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[#00a651] text-[#00a651]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-3 text-gray-400 text-sm"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#00a651] text-[#00a651]" />
            ))}
          </div>
          <span>5.0 no Google — Solcenter Soluções em Energia</span>
        </motion.div>
      </div>
    </section>
  );
}
