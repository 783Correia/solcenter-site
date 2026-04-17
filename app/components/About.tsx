"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "../data/site";

const pillars = [
  { number: "1.400+", label: "projetos entregues" },
  { number: "60+", label: "cidades atendidas" },
  { number: "10 anos", label: "no mercado" },
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#0a1628] pt-20 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="pb-20"
          >
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              A Solcenter
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-black text-white leading-[1.05] tracking-tight mb-7">
              Eficiência energética,{" "}
              <span className="text-white/40">sustentabilidade</span> e{" "}
              <span className="text-white/40">muita economia</span>{" "}
              para os nossos clientes.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md font-light">
              Nascemos em Santo Cristo/RS e hoje atendemos mais de 60 cidades no
              Noroeste Gaúcho. Cada projeto é tratado com a mesma atenção desde
              o orçamento até o monitoramento contínuo.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {pillars.map((p) => (
                <div key={p.label} className="border border-white/10 rounded-xl p-4">
                  <div className="text-xl font-black text-white">{p.number}</div>
                  <div className="text-[11px] text-white/40 mt-0.5 uppercase tracking-wide font-medium">{p.label}</div>
                </div>
              ))}
            </div>

            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0a1628] font-bold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-all"
            >
              Saiba mais sobre nós
            </a>
          </motion.div>

          {/* Image — ancorada ao fundo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative h-[520px]"
          >
            <div className="absolute inset-0 rounded-t-2xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Equipe Solcenter"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
