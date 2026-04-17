"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "../data/site";

export default function CTASection() {
  return (
    <section className="bg-[#0a1628] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] items-end min-h-[520px]">
          {/* Image — ancorada ao fundo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-end order-2 lg:order-1 pt-12 lg:pt-0"
          >
            <Image
              src="/images/solar-3d.png"
              alt="Sistema solar"
              width={720}
              height={520}
              className="w-full object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>

          {/* Text — direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="pb-20 pt-20 order-1 lg:order-2 pl-0 lg:pl-10"
          >
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-5">
              Dê o primeiro passo
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-[1.0] tracking-tight mb-5">
              Vamos<br />conversar.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-10 max-w-sm font-light">
              Tenha a energia do futuro. Análise gratuita, sem compromisso. Nossa equipe responde em minutos.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#00a651] text-white font-bold px-7 py-3.5 rounded-full text-sm w-fit hover:bg-[#00c060] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20"
              >
                Fale conosco
                <ArrowRight size={16} />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors w-fit"
              >
                Ou preencha o formulário
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
