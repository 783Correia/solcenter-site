"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Zap,
  TrendingDown,
  Package,
  Users,
  Battery,
  Gauge,
  Shield,
  Wrench,
  ChevronRight,
  ChevronLeft,
  Star,
  MapPin,
  Leaf,
  Calculator,
  IdCard,
  BadgeDollarSign,
  Cpu,
} from "lucide-react";
import { site } from "../data/site";

const WA = site.whatsappLink;

const COLORS = [
  {
    id: "preta",
    label: "Preta",
    hex: "#1a1a1a",
    badge: "Mais vendida" as string | null,
    hero: "/mobi/real/preta-1.jpg",
    gallery: [
      "/mobi/real/preta-2.jpg",
      "/mobi/real/preta-3.jpg",
      "/mobi/real/preta-4.jpg",
      "/mobi/real/preta-5.jpg",
    ],
  },
  {
    id: "azul",
    label: "Azul / Prata",
    hex: "#1e4d8c",
    badge: null,
    hero: "/mobi/real/azul-1.jpg",
    gallery: [
      "/mobi/real/azul-2.jpg",
      "/mobi/real/azul-3.jpg",
      "/mobi/real/azul-4.jpg",
      "/mobi/real/azul-5.jpg",
    ],
  },
  {
    id: "vermelha",
    label: "Vermelha / Prata",
    hex: "#c0392b",
    badge: "Novidade" as string | null,
    hero: "/mobi/real/vermelha-1.jpg",
    gallery: [
      "/mobi/real/vermelha-2.jpg",
      "/mobi/real/vermelha-3.jpg",
      "/mobi/real/vermelha-4.jpg",
    ],
  },
  {
    id: "branca",
    label: "Branca",
    hex: "#e0e0e0",
    badge: null,
    hero: "/mobi/real/branca-1.jpg",
    gallery: ["/mobi/real/branca-2.jpg", "/mobi/real/branca-3.jpg"],
  },
];

const SPECS = [
  { icon: Cpu, label: "Motor", value: "1000W", sub: "brushless sem escovas" },
  { icon: Battery, label: "Bateria", value: "60v/20Ah", sub: "lítio removível" },
  { icon: Gauge, label: "Velocidade", value: "32 km/h", sub: "velocidade máxima" },
  { icon: Zap, label: "Recarga", value: "6–8 h", sub: "tomada 110/220V" },
  { icon: Package, label: "Carga", value: "200 kg", sub: "peso suportado" },
  { icon: MapPin, label: "Autonomia", value: "40 km", sub: "por carga completa" },
];

const DETAILS = [
  "/mobi/real/detalhe-1.jpg",
  "/mobi/real/detalhe-2.jpg",
  "/mobi/real/detalhe-3.jpg",
  "/mobi/real/detalhe-4.jpg",
  "/mobi/real/detalhe-5.jpg",
  "/mobi/real/detalhe-6.jpg",
  "/mobi/real/detalhe-7.jpg",
  "/mobi/real/detalhe-8.jpg",
  "/mobi/real/detalhe-9.jpg",
  "/mobi/real/detalhe-10.jpg",
];

function SavingsCalc() {
  const [qty, setQty] = useState(5);
  const monthly = qty * 740;
  const yearly = monthly * 12;

  return (
    <div className="bg-[#0a1628] rounded-3xl p-8 lg:p-10 border border-white/10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-[#00a651]/20 rounded-xl flex items-center justify-center">
          <Calculator size={18} className="text-[#00a651]" />
        </div>
        <div>
          <p className="font-black text-white text-lg leading-none">Calculadora de economia</p>
          <p className="text-white/40 text-xs mt-1">Baseado em 2.000 km/mês por moto</p>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-white/50 text-xs uppercase tracking-wider font-bold mb-4">
          Quantas motos na frota?
        </label>
        <div className="flex items-center gap-5 mb-4">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full text-white font-black text-xl flex items-center justify-center transition"
          >
            −
          </button>
          <span className="text-[#00a651] font-black text-5xl w-20 text-center tabular-nums">
            {qty}
          </span>
          <button
            onClick={() => setQty(Math.min(100, qty + 1))}
            className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full text-white font-black text-xl flex items-center justify-center transition"
          >
            +
          </button>
        </div>
        <input
          type="range"
          min={1}
          max={50}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-full accent-[#00a651] h-2"
        />
        <div className="flex justify-between text-white/20 text-xs mt-2">
          <span>1 moto</span>
          <span>50 motos</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-2xl p-5">
          <p className="text-white/40 text-xs uppercase tracking-wide mb-2">Economia mensal</p>
          <p className="text-[#00a651] font-black text-2xl tabular-nums">
            R${" "}
            {monthly.toLocaleString("pt-BR")}
          </p>
        </div>
        <div className="bg-[#00a651]/15 border border-[#00a651]/30 rounded-2xl p-5">
          <p className="text-[#00a651]/60 text-xs uppercase tracking-wide mb-2">Economia anual</p>
          <p className="text-[#00a651] font-black text-2xl tabular-nums">
            R${" "}
            {yearly.toLocaleString("pt-BR")}
          </p>
        </div>
      </div>

      <p className="text-white/20 text-xs mt-5 text-center">
        R$860/mês (combustão) vs R$120/mês (elétrica) por unidade
      </p>
    </div>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  const router = useRouter();

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
    window.open(`${WA}?text=${msg}`, "_blank");
    setSent(true);
    router.push("/obrigado");
  }

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-[#00a651]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-[#00a651]" size={32} />
        </div>
        <p className="font-black text-[#0a1628] text-xl mb-2">Mensagem enviada!</p>
        <p className="text-gray-500 text-sm">Nossa equipe retorna em até 24h úteis.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        required
        placeholder="Seu nome completo"
        className="w-full bg-[#f7f8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          name="company"
          type="text"
          required
          placeholder="Empresa"
          className="w-full bg-[#f7f8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="WhatsApp"
          className="w-full bg-[#f7f8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
        />
      </div>
      <select
        name="type"
        required
        className="w-full bg-[#f7f8f9] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-500 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
      >
        <option value="">Selecione seu interesse</option>
        <option value="revenda — quero ter modelos na minha loja">
          Revenda — quero ter modelos na minha loja
        </option>
        <option value="frota — preciso de motos para minha operação">
          Frota — motos para minha operação
        </option>
        <option value="distribuição regional dos modelos">Distribuição regional</option>
        <option value="mais informações sobre os modelos">Quero mais informações</option>
      </select>
      <button
        type="submit"
        className="w-full bg-[#00a651] text-white font-black py-4 rounded-xl hover:bg-[#00c060] active:scale-[0.98] transition text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
      >
        Falar com consultor agora
        <ArrowRight size={16} />
      </button>
      <p className="text-center text-[11px] text-gray-400">
        Atendimento B2B exclusivo · Retorno em até 24h
      </p>
    </form>
  );
}

export default function LPMobi() {
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [activeDetailIdx, setActiveDetailIdx] = useState(0);

  const prevDetail = () =>
    setActiveDetailIdx((i) => (i - 1 + DETAILS.length) % DETAILS.length);
  const nextDetail = () =>
    setActiveDetailIdx((i) => (i + 1) % DETAILS.length);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-white/5 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#00a651] rounded-lg flex items-center justify-center">
            <Zap size={15} className="text-white" />
          </div>
          <span className="text-white font-black text-sm tracking-tight">
            Sol Center <span className="text-[#00a651]">Mobi</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#formulario"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#00a651]/10 border border-[#00a651]/30 text-[#00a651] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#00a651]/20 transition"
          >
            Seja revendedor
          </a>
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-medium px-4 py-2 rounded-full transition"
          >
            <Phone size={12} />
            {site.phone}
          </a>
        </div>
      </nav>

      {/* ── HERO — fullbleed foto real ───────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Fotos empilhadas com fade */}
        <div className="absolute inset-0">
          {COLORS.map((c) => (
            <div
              key={c.id}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: activeColor.id === c.id ? 1 : 0 }}
            >
              <Image
                src={c.hero}
                alt={`Moto elétrica Sol Center Mobi ${c.label}`}
                fill
                className="object-cover object-center"
                priority={c.id === "preta"}
                sizes="100vw"
              />
            </div>
          ))}
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/40" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-14 pb-24 pt-32">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#00a651]/15 border border-[#00a651]/30 rounded-full px-3.5 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-[#00a651] rounded-full animate-pulse" />
                <span className="text-[#00a651] text-[11px] font-bold uppercase tracking-[0.15em]">
                  B2B · Revendas & Frotas
                </span>
              </div>

              {/* Model name */}
              <p className="text-white/30 text-sm font-bold uppercase tracking-[0.3em] mb-2">
                Sol Center Mobi
              </p>

              {/* Headline */}
              <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-black text-white leading-[0.85] tracking-[-0.04em] mb-3">
                EVOX
              </h1>
              <p className="text-[clamp(1.4rem,3vw,2.2rem)] font-black text-[#00a651] leading-none tracking-tight mb-6">
                1000W · 100% Elétrica
              </p>

              <p className="text-white/60 text-base leading-relaxed mb-6 max-w-lg">
                A scooter elétrica ideal para{" "}
                <strong className="text-white/85">
                  revendas, frotas e operações delivery
                </strong>{" "}
                no Sul do Brasil. Motor 1000W, bateria de lítio removível e zero custo de combustível.
              </p>

              {/* Diferenciais-chave */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: IdCard, t: "Sem carteira de motorista" },
                  { icon: BadgeDollarSign, t: "Sem IPVA nem emplacamento" },
                  { icon: Leaf, t: "Zero emissão" },
                ].map(({ icon: Icon, t }) => (
                  <div key={t} className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-3.5 py-2 text-white/70 text-xs font-semibold">
                    <Icon size={13} className="text-[#00a651]" />
                    {t}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-16">
                <a
                  href="#formulario"
                  className="inline-flex items-center gap-2 bg-[#00a651] text-white font-black px-8 py-4 rounded-full text-sm hover:bg-[#00c060] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/30 transition-all"
                >
                  Quero ser revendedor
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#galeria"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-white/20 transition"
                >
                  Ver o produto
                  <ChevronRight size={15} />
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {[
                  { v: "1000W", label: "motor brushless" },
                  { v: "40km", label: "de autonomia" },
                  { v: "200kg", label: "peso suportado" },
                  { v: "4", label: "cores disponíveis" },
                ].map((s) => (
                  <div key={s.label} className="border-l-2 border-[#00a651]/40 pl-3">
                    <div className="text-2xl font-black text-white leading-none">{s.v}</div>
                    <div className="text-[11px] text-white/35 uppercase tracking-wide mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color picker */}
            <div className="mt-16 flex items-center gap-5 flex-wrap">
              <span className="text-white/30 text-xs uppercase tracking-widest font-bold">
                Cor:
              </span>
              {COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveColor(c)}
                  aria-label={`Ver moto ${c.label}`}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                      activeColor.id === c.id
                        ? "border-white scale-110 ring-2 ring-[#00a651] ring-offset-2 ring-offset-[#0a1628]"
                        : "border-white/30 hover:border-white/60 hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                  <span
                    className={`text-[10px] font-semibold transition ${
                      activeColor.id === c.id ? "text-white" : "text-white/30"
                    }`}
                  >
                    {c.label}
                  </span>
                  {c.badge && (
                    <span className="text-[8px] bg-[#f5c518] text-[#0a1628] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {c.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────── */}
      <section className="bg-[#060d18] px-6 py-5 border-y border-white/5">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { icon: Shield, t: "10 anos de operação" },
            { icon: MapPin, t: "Santo Cristo — RS" },
            { icon: Wrench, t: "Suporte técnico incluso" },
            { icon: Leaf, t: "Zero emissão de CO₂" },
            { icon: Star, t: "Parceiro de negócio real" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-2 text-white/40 text-xs font-medium">
              <Icon size={13} className="text-[#00a651]" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIA DE DETALHES ──────────────────────────────── */}
      <section id="galeria" className="px-6 py-20 bg-[#f7f8f9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Produto de verdade
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Qualidade que você pode ver.
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
              Fotos reais da Sol Center Mobi — sem filtro, sem render. O que você vende é exatamente isso.
            </p>
          </div>

          {/* Foto principal do detalhe */}
          <div className="relative w-full aspect-[16/10] lg:aspect-[21/9] rounded-3xl overflow-hidden mb-4 bg-[#dfe5ec]">
            {DETAILS.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: activeDetailIdx === i ? 1 : 0 }}
              >
                <Image
                  src={src}
                  alt={`Detalhe moto elétrica Sol Center ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
            ))}
            <button
              onClick={prevDetail}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white rounded-full flex items-center justify-center transition z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextDetail}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white rounded-full flex items-center justify-center transition z-10"
              aria-label="Próxima foto"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
              {activeDetailIdx + 1} / {DETAILS.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {DETAILS.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveDetailIdx(i)}
                aria-label={`Ver detalhe ${i + 1}`}
                className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-200 ${
                  activeDetailIdx === i
                    ? "ring-2 ring-[#00a651] ring-offset-1 scale-105"
                    : "opacity-50 hover:opacity-90 hover:scale-105"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIA POR COR ─────────────────────────────────── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              4 opções
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Disponível em 4 cores.
            </h2>
          </div>

          {/* Tabs de cor */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {COLORS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveColor(c)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeColor.id === c.id
                    ? "bg-[#0a1628] text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full border border-black/10"
                  style={{ backgroundColor: c.hex }}
                />
                {c.label}
                {c.badge && (
                  <span className="bg-[#f5c518] text-[#0a1628] text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                    {c.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid de fotos da cor ativa */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
            {[activeColor.hero, ...activeColor.gallery].slice(0, 4).map((src, i) => (
              <div
                key={`${activeColor.id}-${i}`}
                className={`relative rounded-2xl overflow-hidden bg-[#edf1f5] transition-all duration-300 ${
                  i === 0 ? "col-span-2 row-span-1" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Moto Sol Center Mobi ${activeColor.label} ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS ───────────────────────────────────────────── */}
      <section className="px-6 py-20 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Especificações
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight">
              EVOX — feita para trabalhar todo dia.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {SPECS.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00a651]/30 transition group"
              >
                <div className="w-10 h-10 bg-[#00a651]/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#00a651]" />
                </div>
                <p className="text-white font-black text-3xl leading-none mb-1">{value}</p>
                <p className="text-white/60 text-sm font-semibold mb-0.5">{label}</p>
                <p className="text-white/30 text-xs">{sub}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-white/20 text-xs">
            * Especificações técnicas completas disponíveis com nosso consultor comercial
          </p>
        </div>
      </section>

      {/* ── DIFERENCIAIS DO PRODUTO ─────────────────────────── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Por que a EVOX
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Vantagens que vendem sozinhas.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: IdCard,
                title: "Sem carteira de motorista",
                desc: "Qualquer pessoa pode pilota — não exige CNH. Amplia muito o público comprador.",
                highlight: true,
              },
              {
                icon: BadgeDollarSign,
                title: "Sem IPVA nem emplacamento",
                desc: "Zero burocracia e zero custo anual com documentação. Só ligar e usar.",
                highlight: true,
              },
              {
                icon: Battery,
                title: "Bateria de lítio removível",
                desc: "Carrega em casa ou no trabalho. Sem precisar de tomada na garagem.",
                highlight: false,
              },
              {
                icon: Shield,
                title: "Freio a disco dianteiro",
                desc: "Mais segurança na frenagem para uso urbano diário com carga.",
                highlight: false,
              },
            ].map(({ icon: Icon, title, desc, highlight }) => (
              <div
                key={title}
                className={`rounded-2xl p-6 border transition-all hover:shadow-md ${
                  highlight
                    ? "bg-[#0a1628] border-[#00a651]/30"
                    : "bg-[#f7f8f9] border-gray-100 hover:border-[#00a651]/30"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    highlight ? "bg-[#00a651]/20" : "bg-[#00a651]/10"
                  }`}
                >
                  <Icon size={20} className="text-[#00a651]" />
                </div>
                <h3
                  className={`font-black text-base mb-2 ${
                    highlight ? "text-white" : "text-[#0a1628]"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    highlight ? "text-white/50" : "text-gray-500"
                  }`}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Specs detalhados */}
          <div className="mt-10 bg-[#f7f8f9] rounded-2xl p-6 border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
              Ficha técnica completa
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
              {[
                ["Motor", "1000W brushless sem escovas"],
                ["Bateria", "60v / 20Ah de lítio"],
                ["Tempo de carga", "6 a 8 horas"],
                ["Autonomia", "Até 40 km"],
                ["Velocidade máxima", "32 km/h"],
                ["Transmissão", "3 velocidades"],
                ["Suspensão", "Dianteira e traseira"],
                ["Pesos suportado", "200 kg"],
                ["Pneus", "3.00 – 10 pol."],
                ["Distância entre eixos", "1.350 mm"],
                ["Iluminação", "Full LED"],
                ["Freios", "Disco dianteiro e traseiro"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                    {k}
                  </span>
                  <span className="text-sm font-semibold text-[#0a1628]">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ─────────────────────────────────────── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Para quem é
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Dois modelos de negócio.<br />Um produto comprovado.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Revendas */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 hover:border-[#00a651]/30 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative bg-gradient-to-br from-[#0a1628] to-[#14253d] p-8 min-h-[220px] overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#00a651] rounded-2xl flex items-center justify-center mb-4">
                    <Package size={22} className="text-white" />
                  </div>
                  <h3 className="font-black text-white text-2xl leading-tight mb-2">
                    Para Revendas
                  </h3>
                  <p className="text-white/40 text-sm">
                    Amplie seu portfólio sem dor de cabeça
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-48 h-full overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity">
                  <Image
                    src="/mobi/real/preta-2.jpg"
                    alt=""
                    fill
                    className="object-cover object-left"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] to-transparent" />
                </div>
              </div>
              <div className="p-7 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Tem uma loja de motos, bicicletas ou multi-marcas? Adicione motos elétricas ao portfólio. A Sol Center Mobi cuida do suporte técnico e pós-venda — você só vende.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Modelos testados no mercado sul-brasileiro",
                    "Suporte técnico pós-venda pela Sol Center",
                    "Margem atrativa por unidade vendida",
                    "Treinamento da equipe de vendas incluso",
                    "Sem investimento em grande estoque inicial",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle
                        size={14}
                        className="text-[#00a651] shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#formulario"
                  className="flex items-center gap-1.5 text-[#00a651] text-sm font-black hover:gap-3 transition-all"
                >
                  Quero ser revendedor <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Frotas */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 hover:border-[#00a651]/30 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative bg-gradient-to-br from-[#003d1f] to-[#006b34] p-8 min-h-[220px] overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingDown size={22} className="text-white" />
                  </div>
                  <h3 className="font-black text-white text-2xl leading-tight mb-2">
                    Para Frotas
                  </h3>
                  <p className="text-white/60 text-sm">86% de redução no custo por km</p>
                </div>
                <div className="absolute right-0 bottom-0 w-48 h-full overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity">
                  <Image
                    src="/mobi/real/azul-2.jpg"
                    alt=""
                    fill
                    className="object-cover object-left"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003d1f] to-transparent" />
                </div>
              </div>
              <div className="p-7 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Delivery, logística urbana ou mobilidade de equipe? Motos elétricas reduzem custo operacional por km em até 86%. Sem gasolina, sem óleo, sem complicação.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Custo por km até 86% menor que moto a combustão",
                    "Zero gasolina — carrega na tomada 110/220V",
                    "Manutenção muito mais simples (sem óleo, velas)",
                    "Suporte técnico dedicado para sua frota",
                    "Condições especiais por volume e pagamento",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle
                        size={14}
                        className="text-[#00a651] shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#formulario"
                  className="flex items-center gap-1.5 text-[#00a651] text-sm font-black hover:gap-3 transition-all"
                >
                  Montar frota elétrica <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULADORA ─────────────────────────────────────── */}
      <section className="px-6 py-20 bg-[#f7f8f9]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Vantagem financeira
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight leading-tight mb-5">
              Quanto você vai<br />economizar por mês?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Baseado em 2.000 km rodados por moto ao mês. A diferença entre R$860 (combustão) e R$120 (elétrica) se traduz em economia real desde o primeiro mês de operação.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Combustão</p>
                <p className="font-black text-2xl text-red-500">R$ 860</p>
                <p className="text-gray-400 text-xs mt-0.5">por moto / mês</p>
              </div>
              <div className="bg-[#00a651] rounded-2xl p-5">
                <p className="text-white/70 text-xs uppercase tracking-wide mb-1">
                  Sol Center Mobi
                </p>
                <p className="font-black text-2xl text-white">R$ 120</p>
                <p className="text-white/60 text-xs mt-0.5">por moto / mês</p>
              </div>
            </div>
          </div>
          <SavingsCalc />
        </div>
      </section>

      {/* ── POR QUE SOL CENTER ──────────────────────────────── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Por que a Sol Center Mobi
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Você vende. A gente cuida do resto.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Users,
                title: "10 anos em mobilidade elétrica",
                desc: "Operamos no Sul do Brasil há mais de uma década. Conhecemos os modelos, os fornecedores e as necessidades de cada perfil de cliente.",
              },
              {
                icon: Wrench,
                title: "Suporte técnico pós-venda",
                desc: "Seu cliente comprou na sua loja — mas o suporte técnico é responsabilidade da Sol Center Mobi. Você fecha a venda com respaldo total.",
              },
              {
                icon: Package,
                title: "Logística e reposição",
                desc: "A Sol Center Mobi cuida da logística de entrega e reposição. Sem dor de cabeça com armazenagem ou controle de estoque.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#f7f8f9] rounded-2xl p-7 border border-gray-100 hover:border-[#00a651]/30 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 bg-[#00a651]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#00a651]" />
                </div>
                <h3 className="font-black text-[#0a1628] text-base mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ──────────────────────────────────────── */}
      <section id="formulario" className="px-6 py-20 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Atendimento comercial
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white tracking-tight leading-tight mb-5">
              Pronto para ampliar seu portfólio ou montar uma frota?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Nossa equipe atende exclusivamente B2B — revendas, frotas e operadores. Sem enrolação, com respostas objetivas e proposta real para o seu volume.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Atendimento dedicado ao seu perfil de negócio",
                "Retorno em até 24 horas úteis",
                "Proposta com condições reais para seu volume",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle size={16} className="text-[#00a651] shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            {/* Mini galeria de fotos reais */}
            <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden">
              {[
                "/mobi/real/vermelha-1.jpg",
                "/mobi/real/branca-1.jpg",
                "/mobi/real/azul-1.jpg",
              ].map((src, i) => (
                <div key={i} className="relative aspect-square">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <p className="text-[#0a1628] font-black text-xl mb-1">Fale com um consultor</p>
            <p className="text-gray-400 text-sm mb-6">
              Preencha abaixo e abrimos o WhatsApp direto.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-[#040a12] px-6 py-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#00a651] rounded-lg flex items-center justify-center">
              <Zap size={13} className="text-white" />
            </div>
            <span className="text-white/50 text-sm">
              Sol Center <strong className="text-white/70">Mobi</strong>
            </span>
          </div>
          <p className="text-white/20 text-xs text-center">
            {site.address} · {site.phone}
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="text-[#00a651] text-xs font-bold hover:underline"
          >
            WhatsApp comercial →
          </a>
        </div>
      </footer>

      {/* ── MOBILE CTA BAR ──────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a1628]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex gap-3">
        <a
          href={`tel:${site.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 text-white text-xs font-bold py-3.5 rounded-xl"
        >
          <Phone size={14} />
          Ligar
        </a>
        <a
          href="#formulario"
          className="flex-[2] flex items-center justify-center gap-2 bg-[#00a651] text-white text-xs font-black py-3.5 rounded-xl hover:bg-[#00c060] transition"
        >
          <ArrowRight size={14} />
          Falar com consultor
        </a>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
}
