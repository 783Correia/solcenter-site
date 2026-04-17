"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "../data/site";

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-[#0f2818]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-[#f5c518] text-sm font-bold uppercase tracking-widest">
              A Solcenter
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6 leading-snug">
              Uma empresa com mais de 10 anos de mercado, que leva{" "}
              <strong className="text-[#00a651]">
                eficiência energética, sustentabilidade e muita economia
              </strong>{" "}
              para os nossos clientes.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Nascemos em Santo Cristo/RS e hoje atendemos mais de 60 cidades no
              Noroeste Gaúcho. Cada projeto é tratado com a mesma atenção e
              compromisso de sempre — do orçamento ao monitoramento contínuo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00a651] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#00c060] transition-all hover:-translate-y-0.5"
              >
                Quero saber mais
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:border-[#00a651] hover:text-[#00a651] transition-all"
              >
                Ver soluções
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/images/about.jpg"
                alt="Equipe Solcenter em instalação de energia solar"
                fill
                className="object-cover"
              />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#00a651] text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-black">10+</div>
              <div className="text-sm font-medium opacity-90">anos de experiência</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
