"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Phone, Zap, TrendingDown, Package, Users } from "lucide-react";
import { site } from "../data/site";

const WHATSAPP = site.whatsappLink;

function LeadForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = (f.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (f.elements.namedItem("phone") as HTMLInputElement).value;
    const company = (f.elements.namedItem("company") as HTMLInputElement).value;
    const type = (f.elements.namedItem("type") as HTMLSelectElement).value;
    const msg = encodeURIComponent(
      `Olá! Me chamo ${name}, da empresa ${company}. Tenho interesse em ${type} com motos elétricas Sol Center Mobi. WhatsApp: ${phone}`
    );
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="mx-auto mb-3 text-[#00a651]" size={40} />
        <p className="font-bold text-[#0a1628] text-lg">Recebido!</p>
        <p className="text-gray-500 text-sm mt-1">Abrimos o WhatsApp para continuar. Retornamos em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Seu nome</label>
        <input name="name" type="text" required placeholder="Nome completo"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] transition" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Empresa / Negócio</label>
        <input name="company" type="text" required placeholder="Nome da sua empresa"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] transition" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">WhatsApp</label>
        <input name="phone" type="tel" required placeholder="(55) 99999-9999"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] transition" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Interesse</label>
        <select name="type" required
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#00a651] transition">
          <option value="">Selecione...</option>
          <option value="revenda dos modelos em minha loja">Revenda — quero ter os modelos na minha loja</option>
          <option value="frota elétrica para minha operação">Frota — preciso de motos elétricas para minha operação</option>
          <option value="distribuição regional dos modelos">Distribuição regional</option>
          <option value="mais informações sobre os modelos">Mais informações</option>
        </select>
      </div>
      <button type="submit"
        className="w-full bg-[#00a651] text-white font-black py-4 rounded-xl hover:bg-[#00c060] transition text-sm tracking-wide mt-1 flex items-center justify-center gap-2">
        Quero conversar com um consultor
        <ArrowRight size={16} />
      </button>
      <p className="text-center text-xs text-gray-400">Atendimento comercial. Retorno em até 24h.</p>
    </form>
  );
}

export default function LPMobi() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* NAV */}
      <nav className="bg-[#0a1628] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#00a651] rounded-md flex items-center justify-center">
            <Zap size={14} className="text-white" />
          </div>
          <span className="text-white font-black text-base tracking-tight">Sol Center <span className="text-[#00a651]">Mobi</span></span>
        </div>
        <a href={`tel:${site.phone}`}
          className="flex items-center gap-1.5 text-white/70 text-xs font-medium hover:text-white transition">
          <Phone size={13} />
          {site.phone}
        </a>
      </nav>

      {/* HERO */}
      <section className="bg-[#0a1628] px-6 pt-12 pb-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Mobilidade Elétrica · Comercial e Frotas
            </p>
            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[0.95] tracking-[-0.03em] mb-5">
              Motos elétricas<br />
              para o seu<br />
              <span className="text-[#00a651]">negócio crescer.</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">
              A Sol Center Mobi fornece scooters e motos elétricas para <strong className="text-white">revendas, frotas e operações delivery</strong>. Produto, suporte técnico e logística — você foca em vender.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { v: "10 anos", l: "mobilidade elétrica" },
                { v: "B2B", l: "foco comercial" },
                { v: "Suporte", l: "técnico incluso" },
                { v: "Frota", l: "e revenda" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-xl font-black text-[#00a651]">{s.v}</div>
                  <div className="text-[11px] text-white/40 uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
            <a href="#formulario"
              className="inline-flex items-center gap-2 bg-[#00a651] text-white font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#00c060] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25">
              Falar com um consultor
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Form */}
          <div id="formulario" className="bg-white rounded-t-2xl lg:rounded-2xl p-7 mt-8 lg:mt-0 shadow-2xl">
            <p className="text-[#f5c518] text-xs font-bold uppercase tracking-widest mb-1">Atendimento comercial</p>
            <h2 className="text-[#0a1628] font-black text-xl mb-1 leading-tight">Amplie o seu portfólio ou monte sua frota</h2>
            <p className="text-gray-400 text-sm mb-5">Fale com nossa equipe comercial. Sem compromisso.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-6 py-14 bg-[#f7f8f9]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-2 text-center">Para quem é</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-10 tracking-tight">
            Dois caminhos. O mesmo produto.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="w-11 h-11 bg-[#00a651]/10 rounded-xl flex items-center justify-center mb-4">
                <Package size={20} className="text-[#00a651]" />
              </div>
              <h3 className="font-black text-[#0a1628] text-lg mb-2">Para revendas</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Você tem uma loja de motos, bicicletas, equipamentos ou acessórios? Adicione motos elétricas ao seu portfólio. A Sol Center Mobi fornece os modelos, cuida do suporte técnico pós-venda e da logística.
              </p>
              <ul className="space-y-2">
                {[
                  "Modelos comprovados no mercado",
                  "Suporte técnico e pós-venda pela Sol Center",
                  "Margem atrativa por unidade",
                  "Treinamento da equipe de vendas",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                    <CheckCircle size={13} className="text-[#00a651] shrink-0 mt-0.5" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="w-11 h-11 bg-[#00a651]/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingDown size={20} className="text-[#00a651]" />
              </div>
              <h3 className="font-black text-[#0a1628] text-lg mb-2">Para frotas</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Tem operação de delivery, logística urbana ou precisa de mobilidade para sua equipe? Motos elétricas reduzem custo por km em até 70% comparado a motos a combustão.
              </p>
              <ul className="space-y-2">
                {[
                  "Custo por km até 70% menor",
                  "Zero abastecimento de combustível",
                  "Manutenção simplificada",
                  "Suporte técnico dedicado",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                    <CheckCircle size={13} className="text-[#00a651] shrink-0 mt-0.5" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE SOL CENTER MOBI */}
      <section className="px-6 py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-2 text-center">Por que a Sol Center Mobi</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-10 tracking-tight">
            10 anos especializados em mobilidade elétrica
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Users, t: "Equipe especializada", d: "10 anos trabalhando exclusivamente com mobilidade elétrica no Sul do Brasil. Conhecemos o mercado e os produtos." },
              { icon: Package, t: "Logística e estoque", d: "Você não precisa se preocupar com armazenagem ou reposição. A Sol Center Mobi cuida do abastecimento." },
              { icon: CheckCircle, t: "Suporte pós-venda", d: "Assistência técnica e suporte ao cliente final. Sua loja vende com respaldo de quem entende do produto." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-[#f7f8f9] rounded-2xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#00a651]" />
                </div>
                <h3 className="font-bold text-[#0a1628] text-sm mb-2">{t}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0a1628] px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">Pronto para conversar?</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white leading-tight tracking-tight mb-4">
            Mobilidade elétrica é o próximo passo do seu negócio.
          </h2>
          <p className="text-white/50 text-sm mb-8">Atendimento comercial direto. Sem enrolação.</p>
          <a href="#formulario"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white font-black px-8 py-4 rounded-full text-sm hover:bg-[#00c060] transition hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5">
            Falar com consultor agora
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#060d18] px-6 py-6 text-center">
        <p className="text-white/30 text-xs">
          Sol Center Mobi · {site.address} · {site.phone}
        </p>
      </footer>
    </div>
  );
}
