"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

export default function Solutions() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Soluções
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0a1628] leading-tight tracking-[-0.03em] max-w-lg">
              Completo para você e para o seu negócio.
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
            Da residência ao agronegócio — temos a solução certa para cada realidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {site.solutions.map((solution, i) => (
            <motion.a
              key={solution.title}
              href={solution.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="text-[#00a651] text-[10px] font-bold uppercase tracking-widest mb-1">
                  {solution.label}
                </p>
                <h3 className="text-white font-bold text-base leading-tight">
                  {solution.title}
                </h3>
              </div>

              {/* Arrow hover */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/0 group-hover:bg-white/10 rounded-full flex items-center justify-center transition-all">
                <ArrowUpRight size={16} className="text-white/0 group-hover:text-white transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
