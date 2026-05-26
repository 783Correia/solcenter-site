"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  ShieldCheck,
  Zap,
  TrendingDown,
} from "lucide-react";
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
      <div className="text-center py-6">
        <div className="w-12 h-12 bg-[#00a651]/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle size={24} className="text-[#00a651]" />
        </div>
        <p className="font-bold text-[#0a1628] text-base">Recebido!</p>
        <p className="text-gray-400 text-sm mt-1">Abrimos o WhatsApp. Retornamos em minutos.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="name"
        type="text"
        required
        placeholder="Nome completo"
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-400 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
      />
      <input
        name="phone"
        type="tel"
        required
        placeholder="WhatsApp"
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-400 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
      />
      <input
        name="city"
        type="text"
        required
        placeholder="Cidade"
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-400 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
      />
      <select
        name="bill"
        required
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
      >
        <option value="">Valor da conta de luz</option>
        <option value="entre R$300 e R$500">R$ 300 – R$ 500</option>
        <option value="entre R$500 e R$800">R$ 500 – R$ 800</option>
        <option value="entre R$800 e R$1.200">R$ 800 – R$ 1.200</option>
        <option value="acima de R$1.200">Acima de R$ 1.200</option>
      </select>
      <button
        type="submit"
        className="w-full bg-[#00a651] text-white font-bold py-3.5 rounded-xl hover:bg-[#00b85a] transition text-sm flex items-center justify-center gap-2"
      >
        Solicitar simulação
        <ArrowRight size={15} />
      </button>
      <p className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1">
        <ShieldCheck size={11} className="text-gray-300" />
        Seus dados estão protegidos.
      </p>
    </form>
  );
}

export default function LPEnergia() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* NAV */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#00a651] rounded-lg flex items-center justify-center">
            <Zap size={13} className="text-white" />
          </div>
          <span className="text-[#0a1628] font-black text-base tracking-tight">
            Sol Center <span className="text-[#00a651]">Energia</span>
          </span>
        </div>
        <a
          href={`tel:${site.phone}`}
          className="flex items-center gap-1.5 text-gray-500 text-xs font-medium hover:text-[#0a1628] transition"
        >
          <Phone size={13} />
          {site.phone}
        </a>
      </nav>

      {/* HERO */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[48%_52%] min-h-[680px] lg:min-h-[calc(100vh-57px)]">

          {/* LEFT — copy */}
          <div className="flex flex-col justify-center px-8 lg:px-14 py-14">
            <p className="text-gray-500 text-sm mb-5">
              Energia Solar para Casas e Empresas.
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#0a1628] leading-[1.05] tracking-[-0.02em] mb-5">
              Reduza sua conta de energia com um projeto solar feito para o seu imóvel.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-7 max-w-md">
              Analisamos seu consumo, indicamos o sistema ideal e cuidamos da instalação do início ao fim, com segurança, garantia e suporte técnico.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-[#00a651] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#00b85a] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20"
              >
                Solicitar simulação
                <ArrowRight size={14} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 border border-gray-200 text-[#0a1628] font-medium px-6 py-3 rounded-full text-sm hover:border-gray-300 hover:bg-gray-50 transition"
              >
                Como Funciona
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              Projetos residenciais, comerciais e rurais com análise personalizada.
            </p>
          </div>

          {/* RIGHT — image + floating form */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/solar-residencial.jpg"
              alt="Casa com painéis solares instalados pela Sol Center"
              fill
              className="object-cover"
              priority
            />
            {/* overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

            {/* form card flutuante */}
            <div
              id="formulario"
              className="absolute top-8 right-8 bottom-8 w-[300px] bg-white rounded-2xl shadow-2xl flex flex-col p-6 overflow-y-auto"
            >
              <h3 className="font-black text-[#0a1628] text-lg leading-tight mb-1">
                Solicite sua simulação gratuita
              </h3>
              <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                Responda em 1 minuto e receba uma análise personalizada.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>

        {/* Mobile: imagem + form abaixo do copy */}
        <div className="lg:hidden">
          <div className="relative h-56 w-full">
            <Image
              src="/images/solar-residencial.jpg"
              alt="Casa com painéis solares"
              fill
              className="object-cover object-center"
            />
          </div>
          <div id="formulario" className="px-6 py-8 bg-white">
            <h3 className="font-black text-[#0a1628] text-xl mb-1">Solicite sua simulação gratuita</h3>
            <p className="text-gray-400 text-sm mb-5">Responda em 1 minuto e receba uma análise personalizada.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* DEPOIMENTO DESTAQUE */}
      <section className="bg-[#f7f8f9] px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={15} className="fill-[#f5c518] text-[#f5c518]" />
              ))}
            </div>
            <blockquote className="text-[#0a1628] text-lg font-medium leading-relaxed mb-4">
              "Antes pagava <strong>R$ 680 por mês</strong>. Depois da instalação, a conta caiu pra{" "}
              <strong>R$ 47</strong>. São mais de R$ 7.500 que ficam na minha conta todo ano."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#00a651]/10 rounded-full flex items-center justify-center">
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
      <section id="como-funciona" className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
            Como funciona
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-12 tracking-tight">
            Do contato à primeira geração — sem dor de cabeça.
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                t: "Simulação grátis",
                d: "Você preenche o formulário. Analisamos sua conta e projetamos o retorno exato no seu caso.",
              },
              {
                n: "02",
                t: "Proposta e projeto",
                d: "Aprovando, montamos o projeto técnico e cuidamos de toda a homologação junto à concessionária.",
              },
              {
                n: "03",
                t: "Instalação",
                d: "Nossa equipe instala no prazo combinado. Você não precisa fazer nada.",
              },
              {
                n: "04",
                t: "Gerando economia",
                d: "Já no primeiro mês aparece na sua conta. Monitoramento em tempo real disponível.",
              },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-4xl font-black text-[#00a651]/15 mb-3 leading-none">{s.n}</div>
                <h3 className="font-bold text-[#0a1628] mb-2 text-sm">{s.t}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section className="bg-[#f7f8f9] px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
            Dúvidas comuns
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-10 tracking-tight">
            Respostas diretas.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: "Vale a pena no meu caso?",
                a: "A simulação gratuita mostra o retorno exato. Contas acima de R$ 300/mês costumam ter payback de 4 a 5 anos.",
              },
              {
                q: "E se não tiver sol suficiente?",
                a: "O RS tem índice solar excelente o ano todo — inclusive no inverno. A tecnologia moderna gera mesmo em dias nublados.",
              },
              {
                q: "E a manutenção?",
                a: "Os sistemas são praticamente sem manutenção. A Sol Center ainda oferece monitoramento contínuo com a Solcenter PRO.",
              },
              {
                q: "Tem financiamento?",
                a: "Sim. Trabalhamos com Sicredi com condições facilitadas. Muitos clientes financiam e já economizam desde o primeiro mês.",
              },
              {
                q: "Quanto tempo leva a instalação?",
                a: "A instalação leva 1 a 2 dias. A homologação junto à concessionária pode levar 30–60 dias após aprovação.",
              },
              {
                q: "Quanto tempo até o retorno do investimento?",
                a: "A maioria dos clientes recupera o investimento em 4 a 5 anos — e o sistema gera por 25 anos com garantia.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <p className="font-bold text-[#0a1628] text-sm mb-2">{item.q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
            Quem já instalou
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-10 tracking-tight">
            1.400+ projetos entregues no RS.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Patrick Fernandes",
                city: "Santo Cristo, RS",
                text: "Atendimento impecável, preço competitivo e pontualidade na instalação. Recomendo a Solcenter sem hesitar.",
              },
              {
                name: "Andrieli e Leonardo Espindola",
                city: "Santo Cristo, RS",
                text: "Ficamos muito satisfeitos com o resultado. A equipe é dedicada e o retorno superou as expectativas.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-[#f7f8f9] rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={13} className="fill-[#f5c518] text-[#f5c518]" />
                  ))}
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
            {
              icon: ShieldCheck,
              t: "Equipamentos com garantia",
              d: "Placas com 25 anos de garantia de desempenho. Inversores com 5 a 12 anos.",
            },
            {
              icon: TrendingDown,
              t: "Redução de até 95%",
              d: "Sistemas dimensionados para zerar ou quase zerar sua conta de luz.",
            },
            {
              icon: CheckCircle,
              t: "Projeto homologado",
              d: "A Sol Center cuida de toda a burocracia com a concessionária.",
            },
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
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-[#00b85a] transition hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
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
