"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Star, Phone, ShieldCheck, Zap, TrendingDown } from "lucide-react";
import { site } from "../data/site";

const WHATSAPP = site.whatsappLink;

function LeadForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = (f.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (f.elements.namedItem("phone") as HTMLInputElement).value;
    const city = (f.elements.namedItem("city") as HTMLInputElement).value;
    const bill = (f.elements.namedItem("bill") as HTMLSelectElement).value;
    const msg = encodeURIComponent(
      `Olá! Me chamo ${name}, moro em ${city} e tenho interesse em energia solar residencial. Minha conta de luz atual é de ${bill}. WhatsApp: ${phone}`
    );
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="mx-auto mb-3 text-[#00a651]" size={40} />
        <p className="font-bold text-[#0a1628] text-lg">Recebido!</p>
        <p className="text-gray-500 text-sm mt-1">Abrimos o WhatsApp para continuar. Retornamos em minutos.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Nome completo</label>
        <input name="name" type="text" required placeholder="Seu nome"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] transition" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">WhatsApp</label>
        <input name="phone" type="tel" required placeholder="(55) 99999-9999"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] transition" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Cidade</label>
        <input name="city" type="text" required placeholder="Sua cidade e estado"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] transition" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Valor médio da conta de luz</label>
        <select name="bill" required
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#00a651] transition">
          <option value="">Selecione...</option>
          <option value="entre R$300 e R$500">R$ 300 – R$ 500</option>
          <option value="entre R$500 e R$800">R$ 500 – R$ 800</option>
          <option value="entre R$800 e R$1.200">R$ 800 – R$ 1.200</option>
          <option value="acima de R$1.200">Acima de R$ 1.200</option>
        </select>
      </div>
      <button type="submit"
        className="w-full bg-[#00a651] text-white font-black py-4 rounded-xl hover:bg-[#00c060] transition text-sm tracking-wide mt-1 flex items-center justify-center gap-2">
        Quero minha simulação gratuita
        <ArrowRight size={16} />
      </button>
      <p className="text-center text-xs text-gray-400">Sem compromisso. Retorno em até 24h.</p>
    </form>
  );
}

export default function LPEnergia() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* NAV */}
      <nav className="bg-[#0a1628] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#00a651] rounded-md flex items-center justify-center">
            <Zap size={14} className="text-white" />
          </div>
          <span className="text-white font-black text-base tracking-tight">Sol Center <span className="text-[#00a651]">Energia</span></span>
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
              Energia Solar Residencial · Santo Cristo e região
            </p>
            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[0.95] tracking-[-0.03em] mb-5">
              Você ainda vai pagar<br />
              <span className="text-[#00a651]">quantos meses</span><br />
              de conta de luz?
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">
              Quem já instalou com a Sol Center paga em média <strong className="text-white">R$ 47/mês</strong> — só a taxa mínima da distribuidora. O resto fica no bolso.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { v: "+1.400", l: "projetos no RS" },
                { v: "10 anos", l: "de mercado" },
                { v: "4–5 anos", l: "retorno médio" },
                { v: "25 anos", l: "de geração" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-xl font-black text-[#00a651]">{s.v}</div>
                  <div className="text-[11px] text-white/40 uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
            <a href="#formulario"
              className="inline-flex items-center gap-2 bg-[#00a651] text-white font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#00c060] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25">
              Simular minha economia
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Formulário no hero em desktop */}
          <div id="formulario" className="bg-white rounded-t-2xl lg:rounded-2xl p-7 mt-8 lg:mt-0 shadow-2xl">
            <p className="text-[#f5c518] text-xs font-bold uppercase tracking-widest mb-1">Simulação gratuita</p>
            <h2 className="text-[#0a1628] font-black text-xl mb-1 leading-tight">Veja quanto você pode economizar</h2>
            <p className="text-gray-400 text-sm mb-5">Preencha abaixo. Retornamos em até 24h com sua simulação.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* DEPOIMENTO DESTAQUE */}
      <section className="bg-[#f7f8f9] px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#f5c518] text-[#f5c518]" />)}
            </div>
            <blockquote className="text-[#0a1628] text-lg font-medium leading-relaxed mb-4">
              "Antes pagava <strong>R$ 680 por mês</strong>. Depois da instalação, a conta caiu pra <strong>R$ 47</strong>. São mais de R$ 7.500 que ficam na minha conta todo ano."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00a651]/10 rounded-full flex items-center justify-center">
                <span className="text-[#00a651] font-black text-sm">A</span>
              </div>
              <div>
                <p className="font-bold text-[#0a1628] text-sm">Andrieli e Leonardo Espindola</p>
                <p className="text-gray-400 text-xs">Santo Cristo, RS · Cliente Sol Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-2 text-center">Como funciona</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-10 tracking-tight">
            Do contato à primeira geração:<br />sem dor de cabeça
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Simulação grátis", d: "Você preenche o formulário. A gente analisa sua conta e projeta o retorno exato no seu caso. Sem compromisso." },
              { n: "02", t: "Proposta e projeto", d: "Aprovando, montamos o projeto técnico e cuidamos de toda a homologação junto à concessionária." },
              { n: "03", t: "Instalação", d: "Nossa equipe instala no prazo combinado. Você não precisa fazer nada." },
              { n: "04", t: "Gerando economia", d: "A partir do primeiro mês já aparece na sua conta. Monitoramento em tempo real disponível." },
            ].map((s) => (
              <div key={s.n} className="bg-[#f7f8f9] rounded-2xl p-5">
                <div className="text-3xl font-black text-[#00a651]/20 mb-2">{s.n}</div>
                <h3 className="font-bold text-[#0a1628] mb-2 text-sm">{s.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section className="bg-[#0a1628] px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-2 text-center">Dúvidas comuns</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white text-center mb-10 tracking-tight">
            Respostas diretas
          </h2>
          <div className="space-y-3">
            {[
              { q: "Vale a pena no meu caso?", a: "Depende do seu consumo. A simulação gratuita mostra o retorno exato. Contas acima de R$ 300/mês costumam ter payback de 4 a 5 anos." },
              { q: "E se não tiver sol suficiente?", a: "O RS tem índice solar excelente o ano todo — inclusive no inverno. A tecnologia de hoje gera mesmo em dias nublados." },
              { q: "E a manutenção?", a: "Os sistemas são praticamente sem manutenção. A Sol Center ainda oferece monitoramento contínuo com a Solcenter PRO." },
              { q: "Tem financiamento?", a: "Sim. Trabalhamos com financiamento Sicredi com condições facilitadas. Muitos clientes financiam e já economizam desde o primeiro mês." },
              { q: "Quanto tempo leva a instalação?", a: "Após aprovação, a instalação leva 1 a 2 dias. A homologação junto à concessionária pode levar 30–60 dias." },
            ].map((item) => (
              <div key={item.q} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="font-bold text-white text-sm mb-1.5">{item.q}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIS DEPOIMENTOS */}
      <section className="px-6 py-14 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-2 text-center">Quem já instalou</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-8 tracking-tight">
            1.400+ projetos entregues no RS
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Patrick Fernandes", city: "Santo Cristo, RS", text: "Atendimento impecável, preço competitivo e pontualidade na instalação. Recomendo a Solcenter sem hesitar." },
              { name: "Andrieli e Leonardo Espindola", city: "Santo Cristo, RS", text: "Ficamos muito satisfeitos com o resultado. A equipe é dedicada e o retorno superou as expectativas." },
            ].map((t) => (
              <div key={t.name} className="bg-[#f7f8f9] rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-[#f5c518] text-[#f5c518]" />)}
                </div>
                <p className="text-[#0a1628] text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-[#0a1628] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIAS */}
      <section className="bg-[#f7f8f9] px-6 py-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, t: "Equipamentos com garantia", d: "Placas com 25 anos de garantia de desempenho. Inversores com 5 a 12 anos." },
            { icon: TrendingDown, t: "Redução de até 95%", d: "Sistemas dimensionados para zerar ou quase zerar sua conta de luz." },
            { icon: CheckCircle, t: "Projeto homologado", d: "A Sol Center cuida de toda a burocracia com a concessionária." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#00a651]" />
              </div>
              <div>
                <p className="font-bold text-[#0a1628] text-sm mb-1">{t}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0a1628] px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">Pronto para decidir?</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white leading-tight tracking-tight mb-4">
            Cada mês sem solar é mais um mês pagando pra distribuidora.
          </h2>
          <p className="text-white/50 text-sm mb-8">Simulação gratuita. Sem compromisso.</p>
          <a href="#formulario"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white font-black px-8 py-4 rounded-full text-sm hover:bg-[#00c060] transition hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5">
            Quero minha simulação agora
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#060d18] px-6 py-6 text-center">
        <p className="text-white/30 text-xs">
          Sol Center Energia · {site.address} · {site.phone}
        </p>
      </footer>
    </div>
  );
}
