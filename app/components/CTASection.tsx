"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "../data/site";

export default function CTASection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Mobile: layout empilhado */}
      <div className="md:hidden px-6 pt-16 pb-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Dê o primeiro passo
          </p>
          <h2 className="text-[clamp(2rem,10vw,3rem)] font-black leading-[1.05] tracking-[-0.03em] mb-4">
            <span className="text-[#0a1628]">Vamos </span>
            <span className="text-[#00a651]">conversar</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs mx-auto font-light">
            Análise gratuita, sem compromisso. Nossa equipe responde em minutos.
          </p>
          <div className="flex flex-col gap-3 items-center mb-8">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#00a651] text-white font-bold px-7 py-3.5 rounded-full text-sm w-full justify-center"
            >
              Fale conosco
              <ArrowRight size={16} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 border-2 border-[#0a1628] text-[#0a1628] font-bold px-7 py-3.5 rounded-full text-sm w-full justify-center"
            >
              Preencher formulário
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src="/images/cta-solar.png"
            alt="Sistema solar"
            width={800}
            height={500}
            sizes="100vw"
            className="w-full object-contain"
          />
        </motion.div>
      </div>

      {/* Desktop: overlay sobre imagem */}
      <div className="hidden md:block relative w-full">
        <Image
          src="/images/cta-solar.png"
          alt="Sistema solar"
          width={1440}
          height={800}
          sizes="100vw"
          className="w-full object-contain"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-4 drop-shadow-sm">
            Dê o primeiro passo
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.0] tracking-[-0.03em] mb-4 drop-shadow-lg">
            <span className="text-white">Vamos </span>
            <span className="text-[#00a651]">conversar</span>
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-lg font-light drop-shadow-sm">
            Tenha a energia do futuro. Análise gratuita, sem compromisso.<br />
            Nossa equipe responde em minutos.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#00a651] text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#00c060] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
            >
              Fale conosco
              <ArrowRight size={16} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 border-2 border-white text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-white hover:text-[#0a1628] transition-all"
            >
              Preencher formulário
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
