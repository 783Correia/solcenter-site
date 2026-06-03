"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Star,
  MessageCircle,
  MapPin,
  ShieldCheck,
  TrendingDown,
  Zap,
  Sun,
  BarChart2,
  Home,
  Building2,
  Tractor,
} from "lucide-react";
import { site } from "../data/site";

const WHATSAPP = site.whatsappLinkGiovani;

function useInView(threshold = 0.25) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(end: number, duration = 1800, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, active]);
  return val;
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = (f.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (f.elements.namedItem("phone") as HTMLInputElement).value;
    const city = (f.elements.namedItem("city") as HTMLInputElement).value;
    const bill = (f.elements.namedItem("bill") as HTMLSelectElement).value;
    const msg = encodeURIComponent(
      `Olá! Me chamo ${name}, moro em ${city} e tenho interesse em energia solar. Minha conta de luz atual é de ${bill}. WhatsApp: ${phone}`
    );
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
    router.push("/obrigado");
  }

  if (sent) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 bg-[#FFB100]/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle size={24} className="text-[#FFB100]" />
        </div>
        <p className="font-bold text-white text-base">Recebido!</p>
        <p className="text-white/50 text-sm mt-1">Abrimos o WhatsApp. Retornamos em minutos.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="name" type="text" required placeholder="Nome completo" className="glass-input" />
      <input name="phone" type="tel" required placeholder="WhatsApp" className="glass-input" />
      <input name="city" type="text" required placeholder="Cidade" className="glass-input" />
      <select name="bill" required className="glass-input">
        <option value="">Valor da conta de luz</option>
        <option value="entre R$300 e R$500">R$ 300 – R$ 500</option>
        <option value="entre R$500 e R$800">R$ 500 – R$ 800</option>
        <option value="entre R$800 e R$1.200">R$ 800 – R$ 1.200</option>
        <option value="acima de R$1.200">Acima de R$ 1.200</option>
      </select>
      <button
        type="submit"
        className="w-full bg-[#FFB100] text-white font-black py-4 rounded-xl hover:bg-[#e6a000] transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FFB100]/30 hover:shadow-[#FFB100]/50 hover:-translate-y-0.5 animate-pulse-amber"
      >
        Solicitar simulação gratuita
        <ArrowRight size={15} />
      </button>
      <p className="text-center text-[11px] text-white/30 flex items-center justify-center gap-1">
        <ShieldCheck size={11} />
        Seus dados estão protegidos
      </p>
    </form>
  );
}

export default function LPEnergia() {
  const { ref: statsRef, inView: statsInView } = useInView(0.3);
  const cities = useCounter(60, 1300, statsInView);

  return (
    <div className="min-h-screen bg-[#060d18] font-sans antialiased">

      {/* NAV desktop */}
      <div className="hidden md:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-4 bg-white/90 backdrop-blur-md shadow-lg shadow-black/8 border border-gray-100 rounded-full px-5 py-2.5">
          <Image src="/logo-dark.svg" alt="Sol Center" width={110} height={23} />
          <div className="w-px h-4 bg-gray-200" />
          <a href={site.whatsappLinkGiovani} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 hover:text-[#25D366] transition text-xs font-medium">
            <MessageCircle size={14} />
            WhatsApp
          </a>
          <div className="w-px h-4 bg-gray-200" />
          <a href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+539+Santo+Cristo+RS" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 hover:text-[#0a1628] transition text-xs font-medium">
            <MapPin size={14} />
            Santo Cristo, RS
          </a>
        </nav>
      </div>

      {/* NAV mobile bottom */}
      <div className="md:hidden fixed bottom-5 inset-x-0 z-50 flex justify-center">
        <nav className="flex items-center gap-1 bg-white/95 backdrop-blur-md shadow-2xl shadow-black/15 border border-gray-100 rounded-full px-3 py-3">
          <div className="px-3">
            <Image src="/logo-dark.svg" alt="Sol Center" width={80} height={17} />
          </div>
          <div className="w-px h-5 bg-gray-200 mx-1" />
          <a href={site.whatsappLinkGiovani} target="_blank" rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#25D366]/10 transition">
            <MessageCircle size={20} className="text-[#25D366]" />
          </a>
          <a href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+539+Santo+Cristo+RS" target="_blank" rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
            <MapPin size={20} className="text-[#FFB100]" />
          </a>
        </nav>
      </div>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <Image
          src="/images/solar-residencial.jpg"
          alt="Casa com painéis solares instalados pela Sol Center"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d18]/96 via-[#060d18]/80 to-[#060d18]/40" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#FFB100]/5 rounded-full blur-3xl pointer-events-none animate-glow-amber" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FFB100]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* LEFT — copy */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFB100]/10 border border-[#FFB100]/25 rounded-full px-4 py-1.5 mb-6 w-fit">
              <Sun size={13} className="text-[#FFB100]" />
              <span className="text-[#FFB100] text-xs font-bold tracking-wide">+1.400 projetos entregues no RS</span>
            </div>

            <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-black text-white leading-[1.05] tracking-[-0.02em] mb-5">
              Reduza até{" "}
              <span className="text-[#FFB100]">95%</span>{" "}
              da sua conta de energia.
            </h1>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
              Sistema solar projetado, instalado e homologado do começo ao fim.
              Sem burocracia, sem surpresa — com garantia real e suporte técnico.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#e6a000] transition hover:-translate-y-0.5 shadow-lg shadow-[#FFB100]/25"
              >
                Simular agora — grátis
                <ArrowRight size={14} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 border border-white/20 text-white/75 font-medium px-7 py-3.5 rounded-full text-sm hover:bg-white/8 transition"
              >
                Como funciona
              </a>
            </div>

            {/* Trust tags */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { icon: ShieldCheck, label: "25 anos de garantia" },
                { icon: Zap, label: "Instalação em 1–2 dias" },
                { icon: BarChart2, label: "Monitoramento em tempo real" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/35 text-xs">
                  <Icon size={12} className="text-[#FFB100]/50" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form card */}
          <div id="formulario" className="w-full lg:w-[360px] shrink-0 glass-form-card rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-[#FFB100]/15 rounded-xl flex items-center justify-center shrink-0">
                <Sun size={16} className="text-[#FFB100]" />
              </div>
              <div>
                <h3 className="font-black text-white text-base leading-tight">Simulação gratuita</h3>
                <p className="text-white/35 text-xs">Responda em 1 minuto</p>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF STRIP ────────────────────────────────── */}
      <div ref={statsRef} className="bg-[#0b1628] border-y border-white/5 py-4 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-0 gap-y-2">
          {[
            { pre: "Em operação", val: "desde 2013", post: "" },
            { pre: "Mais de", val: "1.400 sistemas", post: "instalados no RS" },
            { pre: "Atendemos", val: `${cities}+ cidades`, post: "pelo estado" },
            { pre: "Nota", val: "5.0 no Google", post: "— sem patrocínio" },
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="text-white/30 text-xs px-4">
                {item.pre}{" "}
                <span className="text-white/70 font-semibold">{item.val}</span>
                {item.post ? ` ${item.post}` : ""}
              </span>
              {i < 3 && <span className="text-white/10 text-lg select-none">·</span>}
            </div>
          ))}
        </div>
      </div>

      {/* ─── DEPOIMENTO DESTAQUE ───────────────────────────────── */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-[#FFB100] px-7 py-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/25 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm">Andrieli e Leonardo Espindola</p>
                <p className="text-white/70 text-xs">Santo Cristo, RS · Cliente Sol Center</p>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-white/90 text-white/90" />
                ))}
              </div>
            </div>
            <div className="bg-[#fffcf0] px-7 py-8">
              <blockquote className="text-[#0a1628] text-xl md:text-2xl font-medium leading-snug mb-4">
                "Antes pagava{" "}
                <span className="font-black text-red-500 line-through decoration-2">R$ 680/mês</span>.
                {" "}Depois da instalação, a conta caiu para{" "}
                <span className="font-black text-green-600">R$ 47</span>.
                {" "}São mais de{" "}
                <span className="font-black text-[#0a1628]">R$ 7.500 que ficam na nossa conta todo ano.</span>"
              </blockquote>
              <p className="text-gray-400 text-xs">Sistema instalado pela Sol Center — Santo Cristo, RS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUÇÕES COM IMAGENS ──────────────────────────────── */}
      <section
        className="bg-[#060d18] px-6 py-16"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,177,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Soluções</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white text-center mb-10 tracking-tight">
            Para cada necessidade, <span className="text-[#FFB100]">um projeto.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { img: "/images/solar-residencial.jpg", icon: Home, title: "Residencial", desc: "Projetos dimensionados para casas e apartamentos. Você economiza desde o primeiro mês." },
              { img: "/images/solar-empresarial.jpg", icon: Building2, title: "Empresarial", desc: "Redução real de custos operacionais para comércios, indústrias e condomínios." },
              { img: "/images/solar-agro.jpg", icon: Tractor, title: "Agronegócio", desc: "Sistemas rurais de grande porte para propriedades, silos e cooperativas." },
            ].map((s) => (
              <a key={s.title} href="#formulario" className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <div className="relative h-72">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/40 to-transparent group-hover:via-[#060d18]/30 transition duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <s.icon size={13} className="text-[#FFB100]" />
                    <p className="text-[#FFB100] text-xs font-bold uppercase tracking-wider">{s.title}</p>
                  </div>
                  <p className="text-white/65 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMO FUNCIONA ─────────────────────────────────────── */}
      <section id="como-funciona" className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Como funciona</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-12 tracking-tight">
            Do contato à primeira geração — sem dor de cabeça.
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Simulação grátis", d: "Você preenche o formulário. Analisamos sua conta e projetamos o retorno exato no seu caso." },
              { n: "02", t: "Proposta e projeto", d: "Aprovando, montamos o projeto técnico e cuidamos de toda a homologação com a concessionária." },
              { n: "03", t: "Instalação", d: "Nossa equipe instala no prazo combinado, com segurança e pontualidade." },
              { n: "04", t: "Gerando economia", d: "Já no primeiro mês aparece na sua conta. Monitoramento em tempo real disponível." },
            ].map((s, i) => (
              <div key={s.n} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px border-t border-dashed border-gray-200 -translate-x-4" />
                )}
                <div className="w-14 h-14 bg-[#FFB100]/8 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-[#FFB100]/60">{s.n}</span>
                </div>
                <h3 className="font-bold text-[#0a1628] mb-2 text-sm">{s.t}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINANCIAMENTO ─────────────────────────────────────── */}
      <section className="bg-[#0a1628] px-6 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full md:w-[480px] shrink-0 rounded-2xl overflow-hidden h-72 md:h-80">
            <Image src="/images/financiamento.jpg" alt="Financiamento Sicredi" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/20 to-transparent" />
          </div>
          <div className="flex-1">
            <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3">Financiamento</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white mb-4 tracking-tight">
              Parcele e já <span className="text-[#FFB100]">economize</span> no primeiro mês.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-7">
              A Sol Center trabalha com o Sicredi para oferecer condições especiais de financiamento.
              Muitos clientes parcelam o sistema e já têm saldo positivo desde o primeiro mês — a economia supera a parcela.
            </p>
            <div className="flex flex-col gap-3 mb-7">
              {[
                "Parcelas que cabem no bolso",
                "Taxa especial pelo Sicredi",
                "Aprovação rápida, sem burocracia",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/70 text-sm">
                  <CheckCircle size={14} className="text-[#FFB100] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-6 py-3 rounded-full text-sm hover:bg-[#e6a000] transition hover:-translate-y-0.5 shadow-lg shadow-[#FFB100]/20"
            >
              Simular financiamento
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-[#f7f8f9] px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Dúvidas comuns</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-10 tracking-tight">
            Respostas diretas.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "Vale a pena no meu caso?", a: "A simulação gratuita mostra o retorno exato. Contas acima de R$ 300/mês costumam ter payback de 4 a 5 anos." },
              { q: "E se não tiver sol suficiente?", a: "O RS tem índice solar excelente o ano todo — inclusive no inverno. A tecnologia moderna gera mesmo em dias nublados." },
              { q: "E a manutenção?", a: "Os sistemas são praticamente sem manutenção. A Sol Center ainda oferece monitoramento contínuo com a Solcenter PRO." },
              { q: "Tem financiamento?", a: "Sim. Trabalhamos com Sicredi com condições facilitadas. Muitos clientes financiam e já economizam desde o primeiro mês." },
              { q: "Quanto tempo leva a instalação?", a: "A instalação leva 1 a 2 dias. A homologação junto à concessionária pode levar 30–60 dias após aprovação." },
              { q: "Quanto tempo até o retorno?", a: "A maioria dos clientes recupera o investimento em 4 a 5 anos — e o sistema gera por 25 anos com garantia." },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <p className="font-bold text-[#0a1628] text-sm mb-2">{item.q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ───────────────────────────────────────── */}
      <section
        className="bg-[#060d18] px-6 py-16"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,177,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Quem já instalou</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white text-center mb-10 tracking-tight">
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
              <div key={t.name} className="glass-card glass-card-green rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={13} className="fill-[#FFB100] text-[#FFB100]" />
                  ))}
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GARANTIAS ─────────────────────────────────────────── */}
      <section className="bg-[#0a1628] px-6 py-12 border-y border-white/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, t: "Equipamentos com garantia", d: "Placas com 25 anos de garantia de desempenho. Inversores com 5 a 12 anos." },
            { icon: TrendingDown, t: "Redução de até 95%", d: "Sistemas dimensionados para zerar ou quase zerar sua conta de luz." },
            { icon: CheckCircle, t: "Projeto homologado", d: "A Sol Center cuida de toda a burocracia com a concessionária de energia." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass-card glass-card-green rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 bg-[#FFB100]/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#FFB100]" />
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">{t}</p>
                <p className="text-white/40 text-xs leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA FINAL ─────────────────────────────────────────── */}
      <section className="relative bg-[#060d18] px-6 py-24 overflow-hidden">
        {/* Glow central */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] bg-[#FFB100]/6 rounded-full blur-3xl animate-glow-amber" />
        </div>
        {/* Solar 3D ghost */}
        <div className="absolute right-0 bottom-0 w-[420px] h-[420px] opacity-[0.07] pointer-events-none hidden lg:block">
          <Image src="/images/solar-3d.png" alt="" fill className="object-contain object-right-bottom" />
        </div>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,177,0,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB100]/10 border border-[#FFB100]/20 rounded-full px-4 py-1.5 mb-6">
            <Sun size={13} className="text-[#FFB100]" />
            <span className="text-[#FFB100] text-xs font-bold">Energia solar para o seu imóvel</span>
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] font-black text-white leading-tight tracking-tight mb-5">
            Comece a <span className="text-[#FFB100]">economizar</span><br />
            ainda este mês.
          </h2>
          <p className="text-white/45 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Análise gratuita, sem compromisso. Nossa equipe responde em minutos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`${site.whatsappLinkGiovani}?text=Ol%C3%A1%2C+quero+um+or%C3%A7amento+de+energia+solar`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-9 py-4 rounded-full text-sm hover:bg-[#e6a000] transition hover:shadow-2xl hover:shadow-[#FFB100]/30 hover:-translate-y-0.5 animate-pulse-amber"
            >
              Fale com um especialista
              <ArrowRight size={16} />
            </a>
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-medium px-9 py-4 rounded-full text-sm hover:bg-white/5 transition"
            >
              Preencher formulário
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#040a12] px-6 py-6 text-center border-t border-white/5">
        <p className="text-white/20 text-xs">
          Sol Center Energia · {site.address} · {site.phone}
        </p>
      </footer>
    </div>
  );
}
