"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-14 shadow-xl shadow-green-100 border border-green-100"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-4">
            Vamos conversar
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
            Tenha a energia do futuro e faça parte de um mundo mais econômico e
            sustentável. Análise gratuita, sem compromisso.
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-black px-10 py-4 rounded-xl hover:bg-[#0d1f3c] transition-all hover:-translate-y-0.5 text-base"
          >
            <MessageCircle size={20} />
            Fale conosco
          </a>
        </motion.div>
      </div>

      {/* 3D solar island */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="relative mx-auto mt-10 max-w-2xl"
      >
        <Image
          src="/images/solar-3d.png"
          alt="Sistema solar flutuante"
          width={900}
          height={506}
          className="w-full object-contain drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
