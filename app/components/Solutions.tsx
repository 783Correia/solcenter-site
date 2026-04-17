"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "../data/site";

export default function Solutions() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] leading-snug">
            <em className="not-italic text-[#00a651]">Soluções completas</em>{" "}
            para você e para <br className="hidden md:block" />o seu negócio.
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Da residência ao agronegócio — temos a solução certa para cada realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.solutions.map((solution, i) => (
            <motion.a
              key={solution.title}
              href={solution.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-[#00a651] text-xs font-bold uppercase tracking-widest">
                  {solution.label}
                </span>
                <h3 className="text-[#0a1628] font-black text-xl mt-1 mb-3">
                  {solution.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-[#00a651] font-semibold group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
