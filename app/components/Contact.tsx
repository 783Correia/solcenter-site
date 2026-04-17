"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Contato
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black text-[#0a1628] leading-tight tracking-[-0.03em] mb-4">
              Vamos conversar<br />sobre energia solar?
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm">
              Nossa equipe responde em minutos. Análise gratuita e sem compromisso.
            </p>

            <div className="space-y-3 mb-10">
              {[
                { icon: MapPin, value: site.address },
                { icon: Phone, value: site.phone },
                { icon: Mail, value: site.email },
              ].map(({ icon: Icon, value }) => (
                <div key={value} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f7f8f9] flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#00a651]" />
                  </div>
                  <span className="text-gray-500 text-sm">{value}</span>
                </div>
              ))}
            </div>

            <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#1ebe5d] transition-all">
              <MessageCircle size={16} />
              Falar no WhatsApp agora
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#f7f8f9] rounded-2xl p-8"
          >
            <h3 className="text-[#0a1628] font-bold text-lg mb-1">
              Solicite sua análise gratuita
            </h3>
            <p className="text-gray-400 text-sm mb-6">Preencha e retornamos em até 24h.</p>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget;
              const name = (f.elements.namedItem("name") as HTMLInputElement).value;
              const city = (f.elements.namedItem("city") as HTMLInputElement).value;
              const type = (f.elements.namedItem("type") as HTMLSelectElement).value;
              const msg = encodeURIComponent(`Olá! Me chamo ${name}, sou de ${city} e tenho interesse em energia solar${type ? ` (${type})` : ""}. Gostaria de um orçamento gratuito.`);
              window.open(`${site.whatsappLink}?text=${msg}`, "_blank");
            }}>
              {[
                { name: "name", label: "Nome", placeholder: "Seu nome completo", type: "text", required: true },
                { name: "phone", label: "WhatsApp", placeholder: "(55) 99999-9999", type: "tel", required: true },
                { name: "city", label: "Cidade", placeholder: "Sua cidade", type: "text", required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    {field.label}
                  </label>
                  <input name={field.name} type={field.type} required={field.required}
                    placeholder={field.placeholder}
                    className="w-full bg-white border border-gray-200 text-[#0a1628] placeholder-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651] transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Tipo
                </label>
                <select name="type"
                  className="w-full bg-white border border-gray-200 text-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651] transition-all">
                  <option value="">Selecione...</option>
                  <option value="residencial">Residencial</option>
                  <option value="empresarial">Empresarial</option>
                  <option value="agronegócio">Agronegócio</option>
                </select>
              </div>
              <button type="submit"
                className="w-full bg-[#00a651] text-white font-bold py-3.5 rounded-xl hover:bg-[#00c060] transition-all text-sm mt-1">
                Quero meu orçamento grátis
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
