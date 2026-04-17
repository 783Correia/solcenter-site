"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#f5f7f5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00a651] text-sm font-bold uppercase tracking-widest">
              Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1a0f] mt-3 mb-6">
              Vamos conversar sobre energia solar?
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Nossa equipe responde em minutos. Análise gratuita e sem compromisso.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Localização", value: site.address },
                { icon: Phone, label: "Telefone", value: site.phone },
                { icon: Mail, label: "E-mail", value: site.email },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#00a651]" />
                  </div>
                  <div>
                    <div className="text-[#0a1a0f] font-semibold text-sm">{label}</div>
                    <div className="text-gray-500 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp agora
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-[#0a1a0f] font-bold text-xl mb-6">
              Solicite sua análise gratuita
            </h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const city = (form.elements.namedItem("city") as HTMLInputElement).value;
                const type = (form.elements.namedItem("type") as HTMLSelectElement).value;
                const msg = encodeURIComponent(
                  `Olá! Me chamo ${name}, sou de ${city} e tenho interesse em energia solar ${type ? `(${type})` : ""}. Gostaria de um orçamento gratuito.`
                );
                window.open(`${site.whatsappLink}?text=${msg}`, "_blank");
              }}
            >
              <div>
                <label className="block text-sm text-gray-500 mb-1.5">Nome *</label>
                <input
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  className="w-full bg-gray-50 border border-gray-200 text-[#0a1a0f] placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1.5">WhatsApp *</label>
                <input
                  name="phone"
                  required
                  placeholder="(55) 99999-9999"
                  className="w-full bg-gray-50 border border-gray-200 text-[#0a1a0f] placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1.5">Cidade</label>
                <input
                  name="city"
                  placeholder="Sua cidade"
                  className="w-full bg-gray-50 border border-gray-200 text-[#0a1a0f] placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1.5">Tipo de instalação</label>
                <select
                  name="type"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651] transition-colors"
                >
                  <option value="">Selecione...</option>
                  <option value="residencial">Residencial</option>
                  <option value="empresarial">Empresarial</option>
                  <option value="agronegócio">Agronegócio</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00a651] text-white font-black py-4 rounded-xl hover:bg-[#00c060] transition-all hover:-translate-y-0.5 mt-2"
              >
                Quero meu orçamento grátis
              </button>
              <p className="text-gray-400 text-xs text-center">
                Sem spam. Respondemos em até 24h.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
