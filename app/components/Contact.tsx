"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#0a1a0f]">
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
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-6">
              Vamos conversar <br />
              sobre energia solar?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Nossa equipe responde em minutos. Análise gratuita e sem compromisso.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#00a651]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Localização</div>
                  <div className="text-gray-400 text-sm">{site.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#00a651]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Telefone</div>
                  <div className="text-gray-400 text-sm">{site.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#00a651]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">E-mail</div>
                  <div className="text-gray-400 text-sm">{site.email}</div>
                </div>
              </div>
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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f2818] border border-white/8 rounded-2xl p-8"
          >
            <h3 className="text-white font-bold text-xl mb-6">
              Solicite sua análise gratuita
            </h3>
            <form
              action={site.whatsappLink}
              method="get"
              target="_blank"
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const city = (form.elements.namedItem("city") as HTMLInputElement).value;
                const msg = encodeURIComponent(
                  `Olá! Me chamo ${name}, sou de ${city} e gostaria de um orçamento de energia solar.`
                );
                window.open(`${site.whatsappLink}?text=${msg}`, "_blank");
              }}
            >
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Nome *</label>
                <input
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  className="w-full bg-[#0a1a0f] border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">WhatsApp *</label>
                <input
                  name="phone"
                  required
                  placeholder="(55) 99999-9999"
                  className="w-full bg-[#0a1a0f] border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Cidade</label>
                <input
                  name="city"
                  placeholder="Sua cidade"
                  className="w-full bg-[#0a1a0f] border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">
                  Tipo de instalação
                </label>
                <select
                  name="type"
                  className="w-full bg-[#0a1a0f] border border-white/10 text-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00a651]/50 transition-colors"
                >
                  <option value="">Selecione...</option>
                  <option value="residencial">Residencial</option>
                  <option value="empresarial">Empresarial</option>
                  <option value="agronegocio">Agronegócio</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00a651] text-[#0a1a0f] font-black py-4 rounded-xl hover:bg-[#00c060] transition-all hover:-translate-y-0.5 mt-2"
              >
                Quero meu orçamento grátis
              </button>
              <p className="text-gray-600 text-xs text-center">
                Sem spam. Respondemos em até 24h.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
