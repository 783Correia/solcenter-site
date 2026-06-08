"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight, CheckCircle, Star, MessageCircle, MapPin,
  ShieldCheck, TrendingDown, Zap, Sun, BarChart2,
  Tractor, Plus, Minus,
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
      `Olá! Me chamo ${name}, tenho uma propriedade rural em ${city} e tenho interesse em energia solar para o campo. Meu custo de energia atual é de ${bill}. WhatsApp: ${phone}`
    );
    fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, phone, city, source: 'lp-agro', 'Custo de energia': bill }) })
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
      <input name="city" type="text" required placeholder="Cidade / Município" className="glass-input" />
      <select name="bill" required className="glass-input">
        <option value="">Custo mensal de energia</option>
        <option value="entre R$500 e R$1.000">R$ 500 – R$ 1.000</option>
        <option value="entre R$1.000 e R$3.000">R$ 1.000 – R$ 3.000</option>
        <option value="entre R$3.000 e R$8.000">R$ 3.000 – R$ 8.000</option>
        <option value="acima de R$8.000">Acima de R$ 8.000</option>
      </select>
      <button
        type="submit"
        className="w-full bg-[#FFB100] text-white font-black py-4 rounded-xl hover:bg-[#e6a000] transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FFB100]/30 hover:-translate-y-0.5 animate-pulse-amber cursor-pointer"
      >
        Solicitar análise gratuita
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
      {open && <p className="text-gray-500 text-sm leading-relaxed mt-3 pr-8">{a}</p>}
    </button>
  );
}

export default function LPAgro() {
  const { ref: bentoRef, inView: bentoInView } = useInView();
  const { ref: proofRef, inView: proofInView } = useInView();
  const { ref: trustRef, inView: trustInView } = useInView();

  return (
    <div className="min-h-screen font-sans antialiased">

      {/* NAV DESKTOP */}
      <div className="hidden md:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-4 bg-white/80 backdrop-blur-md shadow-sm shadow-black/5 border border-white/80 rounded-full px-5 py-2.5">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="cursor-pointer">
            <Image src="/logo-dark.svg" alt="SolCenter" width={110} height={23} />
          </a>
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

      {/* NAV MOBILE */}
      <div className="md:hidden fixed bottom-5 inset-x-0 z-50 flex justify-center">
        <nav className="flex items-center gap-1 bg-white/90 backdrop-blur-md shadow-lg shadow-black/10 border border-white/80 rounded-full px-3 py-3">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="px-3 cursor-pointer">
            <Image src="/logo-dark.svg" alt="SolCenter" width={80} height={17} />
          </a>
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

      {/* 1. HERO */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <Image src="/images/solar-agro.jpg" alt="Energia solar para agronegócio instalada pela SolCenter no RS" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d18]/96 via-[#060d18]/80 to-[#060d18]/40" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#FFB100]/5 rounded-full blur-3xl pointer-events-none animate-glow-amber" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#FFB100]/10 border border-[#FFB100]/25 rounded-full px-4 py-1.5 mb-6 w-fit">
              <Tractor size={13} className="text-[#FFB100]" />
              <span className="text-[#FFB100] text-xs font-bold tracking-wide">Especialistas em energia solar rural no RS</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-black text-white leading-[1.05] tracking-[-0.02em] mb-5">
              Corte até <span className="text-[#FFB100]">95%</span> do custo de energia na sua propriedade.
            </h1>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
              Do motor de irrigação ao silo, do secador à câmara fria. Feito pra quem produz — sem burocracia, sem parar a operação.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#formulario"
                className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#e6a000] transition hover:-translate-y-0.5 shadow-lg shadow-[#FFB100]/25 cursor-pointer">
                Análise gratuita para o campo <ArrowRight size={14} />
              </a>
              <a href="#como-funciona"
                className="inline-flex items-center gap-2 border border-white/20 text-white/75 font-medium px-7 py-3.5 rounded-full text-sm hover:bg-white/8 transition cursor-pointer">
                Como funciona
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { icon: ShieldCheck, label: "25 anos de garantia de eficiência" },
                { icon: Zap, label: "Instalação sem parar a produção" },
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
                <Tractor size={16} className="text-[#FFB100]" />
              </div>
              <div>
                <h3 className="font-black text-white text-base leading-tight">Análise gratuita para o campo</h3>
                <p className="text-white/35 text-xs">Resposta em minutos</p>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <div className="lp-warm relative">
        <div className="fixed top-[110vh] left-[-10vw] w-[600px] h-[600px] bg-[#FFB100]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed top-[160vh] right-[-10vw] w-[500px] h-[500px] bg-[#FFB100]/6 rounded-full blur-3xl pointer-events-none" />

        {/* 2. PROBLEMA */}
        <section className="relative px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">O problema</p>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  Irrigação, secador, câmara fria.<br />Você sabe quanto cada hora custa?
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                No interior gaúcho, energia já é um dos maiores custos de quem produz. Sobe todo ano — independente do clima.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Card grande col-span-2 */}
              <div className="md:col-span-2 relative rounded-3xl overflow-hidden h-72 md:h-auto min-h-[280px]">
                <Image src="/images/solar-agro.jpg" alt="Energia solar no agronegócio" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-amber-400/80 text-xs font-bold uppercase tracking-widest mb-3">Propriedade rural — Noroeste RS</p>
                  <p className="text-white text-2xl md:text-3xl font-black leading-tight mb-2">
                    R$ 0 por hora de irrigação.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                    Com solar, o pivô central roda sem custo variável de energia. O que era despesa vira margem de volta.
                  </p>
                </div>
              </div>
              {/* Coluna direita — 2 glass cards */}
              <div className="flex flex-col gap-4">
                <div className="glass-light rounded-2xl p-6 flex-1 flex flex-col justify-between min-h-[130px]">
                  <p className="text-[#FFB100] text-4xl font-black leading-none">R$ 57 mil</p>
                  <div>
                    <p className="text-[#0a1628] font-bold text-sm mt-3 leading-snug">Custo médio de energia em uma propriedade com irrigação por safra</p>
                    <p className="text-gray-400 text-xs mt-1 leading-snug">Pivô central de 50 ha. Tarifa rural média 2024.</p>
                  </div>
                </div>
                <div className="glass-light rounded-2xl p-6 flex-1 flex flex-col justify-between min-h-[130px]">
                  <p className="text-[#FFB100] text-4xl font-black leading-none">3 safras</p>
                  <div>
                    <p className="text-[#0a1628] font-bold text-sm mt-3 leading-snug">Retorno do investimento em propriedades rurais</p>
                    <p className="text-gray-400 text-xs mt-1 leading-snug">Não "anos" — safras. Paga em colheita, não em calendário.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TRANSFORMAÇÃO */}
        <section ref={bentoRef} className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">A virada</p>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  Energia própria.<br />Margem de volta pra você.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                Resultados reais de propriedades rurais atendidas pela SolCenter.
              </p>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 ${bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="col-span-2 glass-light rounded-2xl p-7 flex flex-col justify-between min-h-[200px]">
                <p className="text-gray-400 text-xs font-medium mb-4 uppercase tracking-widest">Caso real — Noroeste RS</p>
                <div className="flex items-end gap-6 flex-wrap">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Antes</p>
                    <p className="text-4xl font-black text-red-400 line-through decoration-2">R$ 4.200</p>
                    <p className="text-gray-400 text-xs mt-1">por mês</p>
                  </div>
                  <ArrowRight size={20} className="text-[#FFB100] mb-3" />
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Depois</p>
                    <p className="text-4xl font-black text-green-600">R$ 310</p>
                    <p className="text-gray-400 text-xs mt-1">por mês</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                  Propriedade com irrigação economiza <span className="text-[#0a1628] font-semibold">R$ 3.890 todo mês</span> — mais de <span className="text-[#FFB100] font-semibold">R$ 46.000 por ano</span>.
                </p>
              </div>

              <div className="glass-light rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-9 h-9 bg-[#FFB100]/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingDown size={16} className="text-[#FFB100]" />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#0a1628] mb-1">4–5<span className="text-base font-medium text-gray-400"> anos</span></p>
                  <p className="text-gray-400 text-xs leading-relaxed">Retorno do investimento. Depois disso, mais de 20 anos de energia praticamente de graça.</p>
                </div>
              </div>

              <div className="col-span-2 relative rounded-2xl overflow-hidden h-52">
                <Image src="/images/solar-agro.jpg" alt="Instalação SolCenter no campo" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-white font-bold text-sm">Projetos para irrigação, silos e cooperativas</p>
                  <p className="text-white/60 text-xs">Em operação desde 2016</p>
                </div>
              </div>

              <div className="glass-light rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart2 size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#0a1628] mb-1">95<span className="text-base font-medium text-gray-400">%</span></p>
                  <p className="text-gray-400 text-xs leading-relaxed">Redução média no custo de energia dos clientes rurais.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMO FUNCIONA */}
        <section id="como-funciona" className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">Do contato à colheita</p>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  4 passos.<br />A SolCenter cuida de tudo.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                Do projeto até o sistema ligar — você continua produzindo enquanto a gente trabalha.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { n: "1", t: "Análise da propriedade", d: "Analisamos seu consumo de energia (irrigação, motores, silos) e mostramos o retorno exato para o seu caso." },
                { n: "2", t: "Projeto e aprovação", d: "Fazemos o projeto pro tamanho da sua propriedade e cuidamos de toda a burocracia com a concessionária. Você só assina." },
                { n: "3", t: "Instalação no campo", d: "Equipe técnica instala sem interromper sua produção, no prazo combinado." },
                { n: "4", t: "Economizando", d: "No primeiro mês você já vê a diferença na conta. Monitoramento via app disponível." },
              ].map((s, i) => (
                <div key={s.n} className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#FFB100] flex items-center justify-center mb-4 text-white font-black text-sm shadow-md shadow-[#FFB100]/30">{s.n}</div>
                  <h3 className="font-bold text-[#0a1628] text-sm mb-2">{s.t}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                  {i < 3 && <div className="hidden md:block absolute top-5 left-[calc(100%)] w-full h-px border-t border-dashed border-gray-300" />}
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="#formulario"
                className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-[#0d1f3c] transition hover:-translate-y-0.5 shadow-lg shadow-black/10 cursor-pointer">
                Solicitar análise gratuita para minha propriedade <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* 5. PROVA SOCIAL */}
        <section ref={proofRef} className="relative px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
              <div className="flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">Clientes SolCenter</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                  Do campo para o campo.<br />Resultados reais.
                </h2>
              </div>
              <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed md:mb-1">
                Mais de 1.400 sistemas instalados no RS desde 2016. Nota 5.0 no Google.
              </p>
            </div>

            <div className={`glass-light rounded-3xl overflow-hidden mb-4 transition-all duration-700 ${proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="bg-[#FFB100] px-7 py-5 flex items-center gap-3">
                <div className="w-9 h-9 bg-white/25 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-xs">R</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Rogério Antes</p>
                  <p className="text-white/70 text-xs">Três de Maio, RS</p>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={13} className="fill-white/90 text-white/90" />)}
                </div>
              </div>
              <div className="px-7 py-8">
                <blockquote className="text-[#0a1628] text-lg md:text-xl font-medium leading-snug mb-3">
                  "Processo simples do começo ao fim. A equipe resolveu tudo, eu não precisei me preocupar com nada."
                </blockquote>
                <p className="text-gray-400 text-xs">Sistema instalado pela SolCenter — Três de Maio, RS.</p>
              </div>
            </div>

            <div className={`grid md:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {[
                { name: "Patrick Fernandes", city: "Santo Cristo, RS", text: "Atendimento impecável, preço competitivo e pontualidade na instalação. Recomendo a SolCenter sem hesitar." },
                { name: "Daniel e Neide Wermuth", city: "Santo Cristo, RS", text: "A equipe é dedicada e o retorno que estamos tendo superou as expectativas. Muito satisfeitos." },
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

            <a
              href="https://www.google.com/maps/place/Solcenter+Soluções+em+Energia/@-27.8286,-54.3358,17z"
              target="_blank" rel="noopener noreferrer"
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

        {/* 6. FAQ */}
        <section className="relative px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">Perguntas frequentes</p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0a1628] leading-[1.05] tracking-tight">
                Dúvidas do campo,<br />respostas diretas.
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { q: "Vale a pena para irrigação?", a: "É onde o retorno é mais rápido. Motores de irrigação são os maiores consumidores de energia no campo. Com solar, o custo cai até 95% e o payback pode ser de 3 a 4 anos." },
                { q: "Funciona para silos e secadores?", a: "Sim. Dimensionamos o sistema para o pico de consumo da safra, garantindo que o custo de energia não impacte sua operação no período crítico." },
                { q: "E no inverno, gera energia?", a: "O Rio Grande do Sul tem excelente irradiação solar mesmo no inverno. O sistema continua gerando — em dias nublados a geração é menor, mas nunca cessa." },
                { q: "Precisa parar a produção para instalar?", a: "Não. Nossa equipe instala sem interromper as atividades da propriedade. A instalação leva de 1 a 3 dias dependendo do porte do projeto." },
                { q: "Tem financiamento para produtor rural?", a: "Sim. Trabalhamos com linhas de crédito específicas para o agronegócio, incluindo Sicredi e BNDES. A parcela costuma ser menor do que a economia gerada." },
              ].map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* SUBFOOTER */}
        <SubFooterCTA
          whatsappHref={`${site.whatsappLinkGiovani}?text=Olá, tenho uma propriedade rural e quero uma análise de energia solar para o campo`}
          formHref="#formulario"
        />

        <footer className="px-6 py-6 text-center border-t border-black/5">
          <p className="text-gray-400 text-xs">
            SolCenter Energia · {site.address} · {site.phone}
          </p>
        </footer>
      </div>
    </div>
  );
}
