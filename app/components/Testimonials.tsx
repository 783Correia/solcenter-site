"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { site } from "../data/site";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Depoimentos
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0a1628] leading-tight tracking-[-0.03em]">
              O que dizem<br />nossos clientes
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-[#f7f8f9] rounded-full px-5 py-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-[#00a651] text-[#00a651]" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#0a1628]">5.0</span>
            <span className="text-xs text-gray-400">no Google</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {site.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#f7f8f9] rounded-2xl p-8"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#00a651] text-[#00a651]" />
                ))}
              </div>
              <p className="text-[#0a1628] text-base leading-relaxed mb-7 font-medium">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0a1628] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[#0a1628] font-bold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
