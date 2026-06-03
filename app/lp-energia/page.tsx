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

const WHATSAPP = site.whatsappLinkGiovani;

function useInView(threshold = 0.2) {
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-white rounded-2xl border border-gray-100 px-6 py-5 hover:border-gray-200 transition group"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-[#0a1628] text-sm leading-snug">{q}</p>
        <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#FFB100] group-hover:text-[#FFB100] transition">
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </div>
      {open && (
        <p className="text-gray-500 text-sm leading-relaxed mt-3 pr-8">{a}</p>
      )}
    </button>
  );
}

export default function LPEnergia() {
  const { ref: bentoRef, inView: bentoInView } = useInView(0.15);
  const { ref: proofRef, inView: proofInView } = useInView(0.15);

  return (
    <div className="min-h-screen bg-[#060d18] font-sans antialiased">

      {/* ─── NAV DESKTOP ───────────────────────────────────────── */}
      <div className="hidden md:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-4 bg-white/90 backdrop-blur-md shadow-lg shadow-black/8 border border-gray-100 rounded-full px-5 py-2.5">
          <Image src="/logo-dark.svg" alt="Sol Center" width={110} height={23} />
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

      {/* ─── NAV MOBILE BOTTOM ─────────────────────────────────── */}
      <div className="md:hidden fixed bottom-5 inset-x-0 z-50 flex justify-center">
        <nav className="flex items-center gap-1 bg-white/95 backdrop-blur-md shadow-2xl shadow-black/15 border border-gray-100 rounded-full px-3 py-3">
          <div className="px-3">
            <Image src="/logo-dark.svg" alt="Sol Center" width={80} height={17} />
          </div>
          <div className="w-px h-5 bg-gray-200 mx-1" />
          <a href={site.whatsappLinkGiovani} target="_blank" rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#25D366]/10 transition cursor-pointer">
            <MessageCircle size={20} className="text-[#25D366]" />
          </a>
          <a href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+539+Santo+Cristo+RS" target="_blank" rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer">
            <MapPin size={20} className="text-[#FFB100]" />
          </a>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 1. HERO — Hook + Form                                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <Image
          src="/images/solar-residencial.jpg"
          alt="Casa com painéis solares instalados pela Sol Center"
          fill
          className="object-cover object-center"
          priority
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
              Sistema solar projetado, instalado e homologado do começo ao fim.
              Sem burocracia, sem surpresa — com garantia real e suporte técnico.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#formulario"
                className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#e6a000] transition hover:-translate-y-0.5 shadow-lg shadow-[#FFB100]/25 cursor-pointer">
                Simular agora — grátis
                <ArrowRight size={14} />
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
                  <Icon size={12} className="text-[#FFB100]/50" />
                  {label}
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

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 2. PROBLEMA — A conta não para de subir               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">O problema</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] leading-tight tracking-tight mb-5">
            A conta de energia subiu <span className="relative inline-block">
              <span className="relative z-10">mais de 100%</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#FFB100]/20 -z-0 rounded" />
            </span>{" "}
            nos últimos 10 anos.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Bandeiras tarifárias, inflação energética, taxas escondidas. A concessionária cobra mais a cada ciclo
            — e você não tem controle sobre isso. Até agora.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              { n: "↑ 102%", label: "Aumento médio na tarifa de energia no Brasil entre 2014 e 2024", color: "text-red-500" },
              { n: "R$ 7.500", label: "Economia anual média de um cliente Sol Center após a instalação", color: "text-green-600" },
              { n: "4–5 anos", label: "Tempo de retorno do investimento. O sistema dura 25 anos.", color: "text-[#0a1628]" },
            ].map((item) => (
              <div key={item.n} className="bg-[#f7f8f9] rounded-2xl p-6 border border-gray-100">
                <p className={`text-2xl font-black mb-2 ${item.color}`}>{item.n}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 3. TRANSFORMAÇÃO — Bento grid antes/depois             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        ref={bentoRef}
        className="bg-[#060d18] px-6 py-16"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,177,0,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">A virada</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white text-center mb-10 tracking-tight">
            Com energia solar, você para de pagar<br className="hidden md:block" /> pra concessionária.
          </h2>

          {/* BENTO GRID */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 ${bentoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Card principal — antes/depois */}
            <div className="col-span-2 glass-card rounded-2xl p-7 flex flex-col justify-between min-h-[200px]">
              <p className="text-white/40 text-xs font-medium mb-4 uppercase tracking-widest">Caso real — Santo Cristo, RS</p>
              <div className="flex items-end gap-6 flex-wrap">
                <div>
                  <p className="text-white/30 text-xs mb-1">Antes</p>
                  <p className="text-4xl font-black text-red-400 line-through decoration-2">R$ 680</p>
                  <p className="text-white/30 text-xs mt-1">por mês</p>
                </div>
                <ArrowRight size={20} className="text-[#FFB100] mb-3" />
                <div>
                  <p className="text-white/30 text-xs mb-1">Depois</p>
                  <p className="text-4xl font-black text-green-400">R$ 47</p>
                  <p className="text-white/30 text-xs mt-1">por mês</p>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-5 leading-relaxed">
                Andrieli e Leonardo economizam <span className="text-white/90 font-semibold">R$ 633 todo mês</span> — mais de <span className="text-[#FFB100] font-semibold">R$ 7.500 por ano</span>.
              </p>
            </div>

            {/* Card — payback */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
              <div className="w-9 h-9 bg-[#FFB100]/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingDown size={16} className="text-[#FFB100]" />
              </div>
              <div>
                <p className="text-3xl font-black text-white mb-1">4–5<span className="text-lg font-medium text-white/40"> anos</span></p>
                <p className="text-white/40 text-xs leading-relaxed">Retorno do investimento. O sistema gera por 25 anos.</p>
              </div>
            </div>

            {/* Card — imagem real */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden h-52">
              <Image src="/images/solar-empresarial.jpg" alt="Instalação Sol Center" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-bold text-sm">Mais de 1.400 instalações no RS</p>
                <p className="text-white/50 text-xs">Em operação desde 2013</p>
              </div>
            </div>

            {/* Card — redução */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
              <div className="w-9 h-9 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart2 size={16} className="text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-black text-white mb-1">95<span className="text-lg font-medium text-white/40">%</span></p>
                <p className="text-white/40 text-xs leading-relaxed">Redução média na conta de luz dos nossos clientes.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 4. COMO FUNCIONA — 4 passos                           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="bg-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Do contato à economia</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-14 tracking-tight">
            4 passos. Você não precisa<br className="hidden md:block" /> se preocupar com nada.
          </h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { n: "1", t: "Simulação gratuita", d: "Você preenche o formulário. Analisamos sua conta e mostramos o retorno exato no seu caso — sem compromisso." },
              { n: "2", t: "Projeto e aprovação", d: "Cuidamos do projeto técnico e de toda a homologação junto à concessionária. Você só assina." },
              { n: "3", t: "Instalação", d: "Equipe técnica da Sol Center instala em 1 a 2 dias, no prazo combinado. Sem surpresa, sem obra." },
              { n: "4", t: "Economizando", d: "No primeiro mês você já vê na conta. Monitoramento em tempo real disponível via aplicativo." },
            ].map((s, i) => (
              <div key={s.n} className="relative">
                <div className="w-10 h-10 rounded-full bg-[#FFB100] flex items-center justify-center mb-4 text-white font-black text-sm">
                  {s.n}
                </div>
                <h3 className="font-bold text-[#0a1628] text-sm mb-2">{s.t}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%-0px)] w-full h-px border-t border-dashed border-gray-200" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#formulario"
              className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-[#0d1f3c] transition hover:-translate-y-0.5 cursor-pointer">
              Começar agora — simulação grátis
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 5. PROVA SOCIAL — Depoimentos reais                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section ref={proofRef} className="bg-[#f7f8f9] px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Clientes Sol Center</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-10 tracking-tight">
            Quem instalou, não voltou atrás.
          </h2>

          {/* Featured testimonial */}
          <div className={`bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-4 transition-all duration-700 ${proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="bg-[#0a1628] px-7 py-5 flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-black text-xs">A</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Andrieli e Leonardo Espindola</p>
                <p className="text-white/40 text-xs">Santo Cristo, RS</p>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={13} className="fill-[#FFB100] text-[#FFB100]" />
                ))}
              </div>
            </div>
            <div className="px-7 py-8">
              <blockquote className="text-[#0a1628] text-lg md:text-xl font-medium leading-snug mb-3">
                "Antes pagava <span className="font-black text-red-500 line-through">R$ 680/mês</span>. Depois da instalação, a conta caiu pra <span className="font-black text-green-600">R$ 47</span>. São mais de <span className="font-black">R$ 7.500 que ficam na nossa conta todo ano."</span>
              </blockquote>
              <p className="text-gray-400 text-xs">Sistema instalado pela Sol Center — Santo Cristo, RS.</p>
            </div>
          </div>

          {/* Secondary testimonials */}
          <div className={`grid md:grid-cols-2 gap-4 transition-all duration-700 delay-150 ${proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[
              { name: "Patrick Fernandes", city: "Santo Cristo, RS", text: "Atendimento impecável, preço competitivo e pontualidade na instalação. Recomendo sem hesitar." },
              { name: "Rogério Antes", city: "Três de Maio, RS", text: "Processo simples do começo ao fim. A equipe resolveu tudo, eu não precisei me preocupar com nada." },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} className="fill-[#FFB100] text-[#FFB100]" />
                  ))}
                </div>
                <p className="text-[#0a1628] text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-[#0a1628] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 6. PARA QUEM É — Residencial / Empresarial / Agro      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#060d18] px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Atendemos</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white text-center mb-10 tracking-tight">
            Do sítio ao galpão, do apartamento à indústria.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { img: "/images/solar-residencial.jpg", icon: Home, title: "Residencial", desc: "Casas e apartamentos. Sistema dimensionado pro seu consumo real." },
              { img: "/images/solar-empresarial.jpg", icon: Building2, title: "Empresarial", desc: "Comércio, indústria e condomínio. Redução real de custo operacional." },
              { img: "/images/solar-agro.jpg", icon: Tractor, title: "Agronegócio", desc: "Propriedades rurais, silos e cooperativas. Projetos de grande porte." },
            ].map((s) => (
              <a key={s.title} href="#formulario" className="group relative rounded-2xl overflow-hidden cursor-pointer block">
                <div className="relative h-64">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <s.icon size={13} className="text-[#FFB100]" />
                    <p className="text-white font-bold text-sm">{s.title}</p>
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 7. CONFIANÇA — Sicredi + Garantias                    */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Segurança em cada detalhe</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-12 tracking-tight">
            Você investe. A gente garante.
          </h2>

          {/* Financiamento + Garantias lado a lado */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sicredi */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0a1628] flex flex-col">
              <div className="relative h-44 shrink-0">
                <Image src="/images/financiamento.jpg" alt="Financiamento Sicredi" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1628]" />
              </div>
              <div className="p-6 flex-1">
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-widest mb-2">Financiamento</p>
                <h3 className="text-white font-black text-lg mb-3 leading-tight">Financie junto aos nossos parceiros.</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Condições especiais para clientes Sol Center. A economia mensal costuma superar a parcela do financiamento.
                </p>
              </div>
            </div>

            {/* Garantias */}
            <div className="flex flex-col gap-3">
              {[
                { icon: ShieldCheck, t: "25 anos de garantia de desempenho", d: "As placas são garantidas pelo fabricante por 25 anos. Inversores: 5 a 12 anos." },
                { icon: CheckCircle, t: "Projeto homologado e regularizado", d: "A Sol Center cuida de toda a burocracia com a concessionária. Você não precisa fazer nada." },
                { icon: TrendingDown, t: "Redução garantida na conta", d: "Os sistemas são dimensionados para reduzir em até 95% o valor da sua fatura." },
                { icon: Zap, t: "Suporte técnico pós-instalação", d: "Monitoramento contínuo disponível com a Solcenter PRO. Qualquer problema, a gente resolve." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 bg-[#f7f8f9] rounded-2xl p-5 border border-gray-100">
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

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 8. FAQ — Objeções                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f8f9] px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Perguntas frequentes</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#0a1628] text-center mb-10 tracking-tight">
            Tira suas dúvidas antes de falar com a gente.
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { q: "Vale a pena no meu caso?", a: "A simulação gratuita mostra o retorno exato para o seu consumo. Como regra geral: contas acima de R$ 300/mês já têm payback excelente de 4 a 5 anos." },
              { q: "E se não tiver sol suficiente aqui?", a: "O Rio Grande do Sul tem índice solar muito bom o ano todo — inclusive no inverno. A tecnologia moderna gera mesmo em dias nublados." },
              { q: "Preciso fazer obra na casa?", a: "Não. A instalação leva 1 a 2 dias e não exige obra. Nossa equipe faz tudo com organização e sem bagunça." },
              { q: "Tem financiamento disponível?", a: "Sim. Trabalhamos com o Sicredi com condições facilitadas. Muitos clientes financiam o sistema e já economizam desde o primeiro mês — a parcela sai mais barata que a conta atual." },
              { q: "Quanto tempo demora do contrato até gerar energia?", a: "A instalação leva 1 a 2 dias. A homologação junto à concessionária pode levar entre 30 e 60 dias após a aprovação — e a Sol Center cuida de tudo isso pra você." },
            ].map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 9. CTA FINAL — Fechamento                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#060d18] px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] bg-[#FFB100]/5 rounded-full blur-3xl animate-glow-amber" />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,177,0,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB100]/10 border border-[#FFB100]/20 rounded-full px-4 py-1.5 mb-6">
            <Sun size={13} className="text-[#FFB100]" />
            <span className="text-[#FFB100] text-xs font-bold">Análise gratuita, sem compromisso</span>
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] font-black text-white leading-tight tracking-tight mb-5">
            Pare de pagar pra<br />
            <span className="text-[#FFB100]">concessionária.</span>
          </h2>
          <p className="text-white/45 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Fale com um especialista da Sol Center agora. Respondemos em minutos e te mostramos quanto você pode economizar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`${site.whatsappLinkGiovani}?text=Ol%C3%A1%2C+quero+uma+simula%C3%A7%C3%A3o+de+energia+solar`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-9 py-4 rounded-full text-sm hover:bg-[#e6a000] transition hover:shadow-2xl hover:shadow-[#FFB100]/25 hover:-translate-y-0.5 animate-pulse-amber cursor-pointer"
            >
              Fale com um especialista
              <ArrowRight size={16} />
            </a>
            <a href="#formulario"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-medium px-9 py-4 rounded-full text-sm hover:bg-white/5 transition cursor-pointer">
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
