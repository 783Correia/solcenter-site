"use client";
import { motion } from "framer-motion";
import { site } from "../data/site";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#0a1a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[#00a651] text-sm font-bold uppercase tracking-widest">
            Processo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Entenda como contratar <br className="hidden md:block" />
            a Solcenter
          </h2>
          <p className="text-gray-400 text-lg">
            Do primeiro contato até a economia na sua conta. Simples e transparente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#00a651]/10 border border-[#00a651]/20 rounded-xl flex items-center justify-center">
                  <span className="text-[#00a651] font-black text-lg">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 p-8 bg-[#00a651]/5 border border-[#00a651]/15 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">
              Pronto para economizar?
            </h3>
            <p className="text-gray-400 text-sm">
              Análise gratuita, sem compromisso. Resposta em até 24h.
            </p>
          </div>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#00a651] text-[#0a1a0f] font-black px-8 py-4 rounded-xl hover:bg-[#00c060] transition-all hover:-translate-y-0.5"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
