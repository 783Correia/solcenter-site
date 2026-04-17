"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { site } from "../data/site";

export default function CTASection() {
  return (
    <section className="bg-[#0a1628] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-end min-h-[480px]">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-20"
          >
            <span className="text-[#00a651] text-sm font-bold uppercase tracking-widest mb-4 block">
              Dê o primeiro passo
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              Vamos conversar
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Tenha a energia do futuro e faça parte de um mundo mais econômico
              e sustentável. Análise gratuita, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00a651] text-white font-black px-8 py-4 rounded-xl hover:bg-[#00c060] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/20"
              >
                <MessageCircle size={20} />
                Fale conosco
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/50 transition-all"
              >
                Solicitar orçamento
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Image side — alinhada ao fundo, transborda para cima */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex items-end justify-center lg:justify-end h-full pt-10 lg:pt-0"
          >
            <Image
              src="/images/solar-3d.png"
              alt="Sistema solar fotovoltaico"
              width={680}
              height={480}
              className="w-full max-w-lg lg:max-w-none object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
