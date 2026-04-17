"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "../data/site";

export default function Referral() {
  return (
    <section className="py-20 bg-[#0f2818] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#f5c518] text-sm font-bold uppercase tracking-widest mb-4 block">
              Indicações
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Na Solcenter você{" "}
              <em className="not-italic text-[#00a651]">indica e Ganha!</em>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Conheça nosso programa de indicação. Cada cliente que você trazer
              gera benefícios reais pra você também.
            </p>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f5c518] text-[#0a1a0f] font-black px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all hover:-translate-y-0.5"
            >
              Quero saber mais
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-[320px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/referral.jpg"
              alt="Programa de indicação Solcenter"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
