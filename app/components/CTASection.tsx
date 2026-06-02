"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "../data/site";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">

        {/* Imagem flutuando */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-56 md:w-72 shrink-0 animate-float drop-shadow-2xl"
        >
          <Image
            src="/images/cta-solar.png"
            alt="Sistema solar"
            width={288}
            height={288}
            className="object-contain w-full"
          />
        </motion.div>

        {/* Texto e botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Dê o primeiro passo
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-4">
            <span className="text-[#0a1628]">Vamos </span>
            <span className="text-[#00a651]">conversar</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md font-light">
            Análise gratuita, sem compromisso. Nossa equipe responde em minutos.
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
              className="inline-flex items-center gap-2.5 border-2 border-[#0a1628] text-[#0a1628] font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#0a1628] hover:text-white transition-all"
            >
              Preencher formulário
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
