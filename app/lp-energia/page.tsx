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
  Plus,
  Minus,
} from "lucide-react";
import { site } from "../data/site";
import SubFooterCTA from "../components/SubFooterCTA";

const WHATSAPP = site.whatsappLinkGiovani;

function useInView(threshold = 0.15) {
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
        className="w-full bg-[#FFB100] text-white font-black py-4 rounded-xl hover:bg-[#e6a000] transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FFB100]/30 hover:-translate-y-0.5 animate-pulse-amber cursor-pointer"
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left glass-light rounded-2xl px-6 py-5 hover:shadow-md transition group cursor-pointer"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-[#0a1628] text-sm leading-snug">{q}</p>
        <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#FFB100] group-hover:text-[#FFB100] transition text-gray-400">
          {open ? <Minus size={11} /> : <Plus size={11} />}
        </div>
      </div>
      {open && (
        <p className="text-gray-500 text-sm leading-relaxed mt-3 pr-8">{a}</p>
      )}
    </button>
  );
}

export default function LPEnergia() {
  const { ref: bentoRef, inView: bentoInView } = useInView();
  const { ref: proofRef, inView: proofInView } = useInView();
  const { ref: trustRef, inView: trustInView } = useInView();

  return (
    <div className="min-h-screen font-sans antialiased">

      {/* ─── NAV DESKTOP ─────────────────────────────── */}
      <div className="hidden md:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-4 bg-white/80 backdrop-blur-md shadow-sm shadow-black/5 border border-white/80 rounded-full px-5 py-2.5">
          <Image src="/logo-dark.svg" alt="SolCenter" width={110} height={23} />
          <div className="w-px h-4 bg-gray-200" />
          <a href={site.whatsappLinkGiovani} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 hover:text-[#25D366] transition text-xs font-medium cursor-pointer">
            <MessageCircle size={14} />WhatsApp
          </a>
          <div className="w-px h-4 bg-gray-200" />
          <a href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+539+Santo+Cristo+RS" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 hover:text-[#0a1628] transition text-xs font-medium cursor-pointer">
            <MapPin size={14} />Santo Cristo, RS
          </a>
        </nav>
      </div>

      {/* ─── NAV MOBILE ──────────────────────────────── */}
      <div className="md:hidden fixed bottom-5 inset-x-0 z-50 flex justify-center">
        <nav className="flex items-center gap-1 bg-white/90 backdrop-blur-md shadow-lg shadow-black/10 border border-white/80 rounded-full px-3 py-3">
          <div className="px-3">
            <Image src="/logo-dark.svg" alt="SolCenter" width={80} height={17} />
          </div>
          <div className="w-px h-5 bg-gray-200 mx-1" />
          <a href={site.whatsappLinkGiovani} target="_blank" rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#25D366]/10 transition cursor-pointer">
            <MessageCircle size={20} className="text-[#25D366]" />
          </a>
          <a href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+539+Santo+Cristo+RS" target="_blank" rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-amber-50 transition cursor-pointer">
            <MapPin size={20} className="text-[#FFB100]" />
          </a>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* 1. HERO — dark, inalterado                     */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <Image
          src="/images/solar-residencial.jpg"
          alt="Casa com painéis solares instalados pela SolCenter"
          fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d18]/96 via-[#060d18]/80 to-[#060d18]/40" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#FFB100]/5 rounded-full blur-3xl pointer-events-none animate-glow-amber" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#FFB100]/10 border border-[#FFB100]/25 rounded-full px-4 py-1.5 mb-6 w-fit">
              <Sun size={13} className="text-[#FFB100]" />
              <span className="text-[#FFB100] text-xs font-bold tracking-wide">+1.400 projetos entregues no RS</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-black text-white leading-[1.05] tracking-[-0.02em] mb-5">
              Reduza até <span className="text-[#FFB100]">95%</span> da sua conta de energia.
            </h1>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
              Sistema solar projetado, instalado e homologado do começo ao fim. Sem burocracia, sem surpresa — com garantia real e suporte técnico.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#formulario"
                className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#e6a000] transition hover:-translate-y-0.5 shadow-lg shadow-[#FFB100]/25 cursor-pointer">
                Simular agora — grátis <ArrowRight size={14} />
              </a>
              <a href="#como-funciona"
                className="inline-flex items-center gap-2 border border-white/20 text-white/75 font-medium px-7 py-3.5 rounded-full text-sm hover:bg-white/8 transition cursor-pointer">
                Como funciona
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { icon: ShieldCheck, label: "25 anos de garantia" },
                { icon: Zap, label: "Instalação em 1–2 dias" },
                { icon: BarChart2, label: "Monitoramento em tempo real" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/35 text-xs">
                  <Icon size={12} className="text-[#FFB100]/50" />{label}
                </div>
              ))}
            </div>
          </div>

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

      {/* ═══════════════════════════════════════════════ */}
      {/* GLASSMORPHISM WRAPPER — tudo abaixo do hero    */}
      {/* ═══════════════════════════════════════════════ */}
      <div className="lp-warm relative">

        {/* Blobs decorativos globais */}
        <div className="fixed top-[110vh] left-[-10vw] w-[600px] h-[600px] bg-[#FFB100]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed top-[160vh] right-[-10vw] w-[500px] h-[500px] bg-[#FFB100]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed top-[230vh] left-[20vw] w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* ─── 2. PROBLEMA ────────────────────────────── */}
        <section className="relative px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Heading assimétrico */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">O problema</p>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  A conta de energia<br />não para de subir.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                Bandeiras tarifárias, inflação energética, taxas escondidas. A concessionária cobra mais a cada ciclo — e você não tem controle sobre isso.
              </p>
            </div>

            {/* Photo stat cards — estilo editorial */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { img: "/images/lp-conta-energia.jpg", stat: "↑ 102%",   label: "Aumento na tarifa de energia no Brasil nos últimos 10 anos" },
                { img: "/images/lp-economia.jpg",       stat: "R$ 7.500", label: "Economia anual média de um cliente SolCenter" },
                { img: "/images/lp-retorno.jpg",        stat: "4–5 anos", label: "Retorno do investimento. Garantia de eficiência de geração por 25 anos" },
              ].map((card) => (
                <div key={card.stat} className="group relative rounded-2xl overflow-hidden h-64 shadow-md shadow-black/8 cursor-default">
                  <Image src={card.img} alt={card.label} fill className="object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-white text-3xl font-black leading-none mb-1">{card.stat}</p>
                    <p className="text-white/65 text-xs leading-snug">{card.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. TRANSFORMAÇÃO — Bento glass ─────────── */}
        <section ref={bentoRef} className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">A virada</p>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  Com solar, você para<br />de pagar pra deles.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                Resultados reais de clientes SolCenter — números verificados após a instalação.
              </p>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 ${bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

              {/* Card principal antes/depois */}
              <div className="col-span-2 glass-light rounded-2xl p-7 flex flex-col justify-between min-h-[200px]">
                <p className="text-gray-400 text-xs font-medium mb-4 uppercase tracking-widest">Caso real — Santo Cristo, RS</p>
                <div className="flex items-end gap-6 flex-wrap">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Antes</p>
                    <p className="text-4xl font-black text-red-400 line-through decoration-2">R$ 680</p>
                    <p className="text-gray-400 text-xs mt-1">por mês</p>
                  </div>
                  <ArrowRight size={20} className="text-[#FFB100] mb-3" />
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Depois</p>
                    <p className="text-4xl font-black text-green-600">R$ 47</p>
                    <p className="text-gray-400 text-xs mt-1">por mês</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                  Andrieli e Leonardo economizam <span className="text-[#0a1628] font-semibold">R$ 633 todo mês</span> — mais de <span className="text-[#FFB100] font-semibold">R$ 7.500 por ano</span>.
                </p>
              </div>

              {/* Card payback */}
              <div className="glass-light rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-9 h-9 bg-[#FFB100]/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingDown size={16} className="text-[#FFB100]" />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#0a1628] mb-1">4–5<span className="text-base font-medium text-gray-400"> anos</span></p>
                  <p className="text-gray-400 text-xs leading-relaxed">Retorno do investimento. Garantia de eficiência de geração por 25 anos.</p>
                </div>
              </div>

              {/* Card foto real */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden h-52">
                <Image src="/images/solar-empresarial.jpg" alt="Instalação SolCenter" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-white font-bold text-sm">Mais de 1.400 instalações no RS</p>
                  <p className="text-white/60 text-xs">Em operação desde 2016</p>
                </div>
              </div>

              {/* Card redução */}
              <div className="glass-light rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart2 size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#0a1628] mb-1">95<span className="text-base font-medium text-gray-400">%</span></p>
                  <p className="text-gray-400 text-xs leading-relaxed">Redução média na conta de luz dos clientes.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── 4. COMO FUNCIONA ───────────────────────── */}
        <section id="como-funciona" className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">Do contato à economia</p>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  4 passos.<br />Você não faz nada.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                A SolCenter cuida de tudo — do projeto à homologação. Você só precisa aprovar e esperar a conta cair.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { n: "1", t: "Simulação gratuita", d: "Você preenche o formulário. Mostramos o retorno exato no seu caso — sem compromisso." },
                { n: "2", t: "Projeto e aprovação", d: "Cuidamos do projeto técnico e de toda a homologação junto à concessionária. Você só assina." },
                { n: "3", t: "Instalação", d: "Equipe técnica instala em 1 a 2 dias, no prazo combinado. Sem obra, sem surpresa." },
                { n: "4", t: "Economizando", d: "No primeiro mês você já vê na conta. Monitoramento via app disponível." },
              ].map((s, i) => (
                <div key={s.n} className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#FFB100] flex items-center justify-center mb-4 text-white font-black text-sm shadow-md shadow-[#FFB100]/30">
                    {s.n}
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-sm mb-2">{s.t}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-5 left-[calc(100%)] w-full h-px border-t border-dashed border-gray-300" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="#formulario"
                className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-[#0d1f3c] transition hover:-translate-y-0.5 shadow-lg shadow-black/10 cursor-pointer">
                Começar agora — simulação grátis <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── 5. PROVA SOCIAL ────────────────────────── */}
        <section ref={proofRef} className="relative px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">Clientes SolCenter</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  Quem instalou,<br />não voltou atrás.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                Mais de 1.400 sistemas instalados no RS desde 2016. Nota 5.0 no Google.
              </p>
            </div>

            {/* Depoimento destaque */}
            <div className={`glass-light rounded-3xl overflow-hidden mb-4 transition-all duration-700 ${proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="bg-[#FFB100] px-7 py-5 flex items-center gap-3">
                <div className="w-9 h-9 bg-white/25 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-xs">A</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Andrieli e Leonardo Espindola</p>
                  <p className="text-white/70 text-xs">Santo Cristo, RS</p>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={13} className="fill-white/90 text-white/90" />)}
                </div>
              </div>
              <div className="px-7 py-8">
                <blockquote className="text-[#0a1628] text-lg md:text-xl font-medium leading-snug mb-3">
                  "Antes pagava <span className="font-black text-red-500 line-through">R$ 680/mês</span>. Depois da instalação, a conta caiu pra <span className="font-black text-green-600">R$ 47</span>. São mais de <span className="font-black">R$ 7.500 que ficam na nossa conta todo ano."</span>
                </blockquote>
                <p className="text-gray-400 text-xs">Sistema instalado pela SolCenter — Santo Cristo, RS.</p>
              </div>
            </div>

            {/* Depoimentos secundários */}
            <div className={`grid md:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {[
                { name: "Patrick Fernandes", city: "Santo Cristo, RS", text: "Atendimento impecável, preço competitivo e pontualidade na instalação. Recomendo sem hesitar." },
                { name: "Rogério Antes", city: "Três de Maio, RS", text: "Processo simples do começo ao fim. A equipe resolveu tudo, eu não precisei me preocupar com nada." },
              ].map((t) => (
                <div key={t.name} className="glass-light rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((i) => <Star key={i} size={12} className="fill-[#FFB100] text-[#FFB100]" />)}
                  </div>
                  <p className="text-[#0a1628] text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-[#0a1628] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.city}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Badge Google */}
            <a
              href="https://www.google.com/maps/place/Solcenter+Soluções+em+Energia/@-27.8286,-54.3358,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-white border border-gray-100 shadow-sm rounded-2xl px-5 py-3 hover:shadow-md transition group"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FFB100"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                  <span className="text-sm font-black text-[#0a1628] ml-1">5,0</span>
                </div>
                <p className="text-xs text-gray-400 leading-tight">Ver avaliações no Google</p>
              </div>
            </a>
          </div>
        </section>

        {/* ─── 6. PARA QUEM É ─────────────────────────── */}
        <section className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">Atendemos</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  Do sítio ao galpão,<br />do apto à indústria.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                Projetos dimensionados para cada tipo de consumo — residencial, rural ou empresarial.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { img: "/images/solar-residencial.jpg", icon: Home, title: "Residencial", desc: "Casas e apartamentos. Sistema dimensionado pro seu consumo real." },
                { img: "/images/solar-empresarial.jpg", icon: Building2, title: "Empresarial", desc: "Comércio, indústria e condomínio. Redução real de custo operacional." },
                { img: "/images/solar-agro.jpg", icon: Tractor, title: "Agronegócio", desc: "Propriedades rurais, silos e cooperativas. Projetos de grande porte." },
              ].map((s) => (
                <a key={s.title} href="#formulario" className="group relative rounded-2xl overflow-hidden cursor-pointer block shadow-md shadow-black/5">
                  <div className="relative h-64">
                    <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <s.icon size={13} className="text-[#FFB100]" />
                      <p className="text-white font-bold text-sm">{s.title}</p>
                    </div>
                    <p className="text-white/65 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. CONFIANÇA ───────────────────────────── */}
        <section ref={trustRef} className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">Segurança</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  Você investe.<br />A gente garante.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                Equipamentos certificados, financiamento facilitado e suporte técnico após a instalação.
              </p>
            </div>
            <div className={`grid md:grid-cols-2 gap-6 items-start transition-all duration-700 ${trustInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

              {/* Financiamento — card horizontal */}
              <div className="glass-light rounded-2xl overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/financiamento.jpg"
                    alt="Financiamento junto aos parceiros"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[#FFB100] text-xs font-bold uppercase tracking-widest mb-2">Financiamento</p>
                  <h3 className="text-[#0a1628] font-black text-lg mb-3 leading-tight">Financie junto aos nossos parceiros.</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Condições especiais para clientes SolCenter. A economia mensal costuma superar a parcela do financiamento.</p>
                </div>
              </div>

              {/* Garantias */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: ShieldCheck, t: "25 anos de garantia de desempenho", d: "Placas garantidas pelo fabricante por 25 anos. Inversores: 5 a 12 anos." },
                  { icon: CheckCircle, t: "Projeto homologado e regularizado", d: "A SolCenter cuida de toda a burocracia com a concessionária. Você não faz nada." },
                  { icon: TrendingDown, t: "Redução garantida na conta", d: "Sistemas dimensionados para reduzir em até 95% o valor da sua fatura." },
                  { icon: Zap, t: "Suporte técnico pós-instalação", d: "Monitoramento contínuo com a Solcenter PRO. Qualquer problema, a gente resolve." },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t} className="glass-light rounded-2xl p-5 flex gap-4">
                    <div className="w-9 h-9 bg-[#FFB100]/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-[#FFB100]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a1628] text-sm mb-0.5">{t}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. FAQ ─────────────────────────────────── */}
        <section className="relative px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">Perguntas frequentes</p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                Tira as dúvidas<br />antes de ligar.
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "Vale a pena no meu caso?", a: "A simulação gratuita mostra o retorno exato para o seu consumo. Como regra geral: contas acima de R$ 300/mês já têm payback excelente de 4 a 5 anos." },
                { q: "E se não tiver sol suficiente aqui?", a: "O Rio Grande do Sul tem índice solar muito bom o ano todo — inclusive no inverno. A tecnologia moderna gera mesmo em dias nublados." },
                { q: "Preciso fazer obra na casa?", a: "Não. A instalação leva 1 a 2 dias e não exige obra. Nossa equipe faz tudo com organização e sem bagunça." },
                { q: "Tem financiamento disponível?", a: "Sim. Trabalhamos com parceiros financeiros com condições facilitadas. Muitos clientes financiam e já economizam desde o primeiro mês." },
                { q: "Quanto tempo demora até gerar energia?", a: "A instalação leva 1 a 2 dias. A homologação junto à concessionária pode levar 30 a 60 dias — e a SolCenter cuida de tudo isso pra você." },
              ].map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9. CTA FINAL ───────────────────────────── */}
        <section className="relative px-6 py-24 overflow-hidden">
          {/* Blob central */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[700px] h-[500px] bg-[#FFB100]/10 rounded-full blur-3xl animate-glow-amber" />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#FFB100]/10 border border-[#FFB100]/25 rounded-full px-4 py-1.5 mb-6">
              <Sun size={13} className="text-[#FFB100]" />
              <span className="text-[#FFB100] text-xs font-bold">Análise gratuita, sem compromisso</span>
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] font-black text-[#0a1628] leading-tight tracking-tight mb-5">
              Pare de pagar pra<br />
              <span className="text-[#FFB100]">concessionária.</span>
            </h2>
            <p className="text-gray-500 text-base mb-10 max-w-md mx-auto leading-relaxed">
              Fale com um especialista da SolCenter agora. Respondemos em minutos e mostramos quanto você pode economizar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`${site.whatsappLinkGiovani}?text=Ol%C3%A1%2C+quero+uma+simula%C3%A7%C3%A3o+de+energia+solar`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-9 py-4 rounded-full text-sm hover:bg-[#e6a000] transition hover:shadow-xl hover:shadow-[#FFB100]/25 hover:-translate-y-0.5 animate-pulse-amber cursor-pointer"
              >
                Fale com um especialista <ArrowRight size={16} />
              </a>
              <a href="#formulario"
                className="inline-flex items-center gap-2 border border-[#0a1628]/15 text-[#0a1628]/60 font-medium px-9 py-4 rounded-full text-sm hover:bg-[#0a1628]/5 transition cursor-pointer">
                Preencher formulário
              </a>
            </div>
          </div>
        </section>

        {/* SUBFOOTER CTA */}
        <SubFooterCTA
          whatsappHref={`${site.whatsappLinkGiovani}?text=Ol%C3%A1%2C+quero+uma+simula%C3%A7%C3%A3o+de+energia+solar`}
          formHref="#formulario"
        />

        {/* FOOTER */}
        <footer className="px-6 py-6 text-center border-t border-black/5">
          <p className="text-gray-400 text-xs">
            SolCenter Energia · {site.address} · {site.phone}
          </p>
        </footer>

      </div>{/* end lp-warm */}
    </div>
  );
}
