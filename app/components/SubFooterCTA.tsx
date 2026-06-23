"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface SubFooterCTAProps {
  whatsappHref: string;
  formHref?: string;
}

export default function SubFooterCTA({ whatsappHref, formHref = "#contato" }: SubFooterCTAProps) {
  return (
    /*
     * Altura = 54vw ≈ proporção natural da imagem (1071/1920 = 55.8vw)
     * Ligeiramente menor para forçar 25px de crop no topo (esconde o espaço branco
     * acima da ilha) e object-position sobe a imagem para mostrar os painéis solares.
     */
    <section className="relative bg-white overflow-hidden h-[clamp(360px,54vw,860px)]">

      {/* Ilha 3D — fill + object-cover garante preenchimento total da seção */}
      <Image
        src="/images/solar-3d.webp"
        alt="Ilha 3D com casas e painéis solares Solcenter"
        fill
        className="object-cover"
        style={{ objectPosition: "50% -25px" }}
        sizes="100vw"
        priority
      />

      {/* Gradiente radial idêntico ao Figma: centro 75% preto → bordas transparente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Conteúdo centrado sobre a ilha */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[#ffb200] text-[clamp(11px,1.15vw,22px)] font-normal mb-4 tracking-widest uppercase"
        >
          Dê o primeiro passo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="font-black leading-[1.05] tracking-[-0.03em] mb-4"
          style={{ fontSize: "clamp(2rem, 5.625vw, 6.75rem)" }}
        >
          <span className="text-white">Vamos </span>
          <span className="text-[#6dfa94]">conversar</span>
          <span className="text-[#444]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-[#e4d6d6]/90 leading-relaxed mb-8 max-w-xl font-light"
          style={{ fontSize: "clamp(0.95rem, 1.46vw, 1.75rem)" }}
        >
          Tenha a energia do futuro. Análise gratuita, sem compromisso.
          <br className="hidden md:block" /> Nossa equipe responde em minutos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#00a651] text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#00c060] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30"
          >
            Fale conosco
            <ArrowRight size={16} />
          </a>
          <a
            href={formHref}
            className="inline-flex items-center gap-2.5 border border-white/30 text-white font-medium px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all"
          >
            Preencher formulário
          </a>
        </motion.div>

        <p className="text-center mt-10 text-white/30 text-xs">
          <a href="/" className="underline hover:text-white/60 transition-colors">solcenter.com.br</a>
          {" · "}
          <a href="/politica-de-privacidade" className="underline hover:text-white/60 transition-colors">Política de Privacidade</a>
        </p>

      </div>
    </section>
  );
}
