"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Zap,
  Package,
  Users,
  Battery,
  Gauge,
  Shield,
  Wrench,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Leaf,
  IdCard,
  BadgeDollarSign,
  Cpu,
  TrendingUp,
  Store,
  Menu,
  X,
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
    photos: [
      "/mobi/real/preta-1.jpg",
      "/mobi/real/preta-2.jpg",
      "/mobi/real/preta-3.jpg",
      "/mobi/real/preta-4.jpg",
      "/mobi/real/preta-5.jpg",
      "/mobi/real/preta-6.jpg",
      "/mobi/real/preta-7.jpg",
    ],
  },
  {
    id: "azul",
    label: "Azul / Prata",
    hex: "#1e4d8c",
    badge: null,
    hero: "/mobi/real/azul-1.jpg",
    photos: [
      "/mobi/real/azul-1.jpg",
      "/mobi/real/azul-2.jpg",
      "/mobi/real/azul-3.jpg",
      "/mobi/real/azul-4.jpg",
      "/mobi/real/azul-5.jpg",
      "/mobi/real/azul-6.jpg",
      "/mobi/real/azul-7.jpg",
      "/mobi/real/azul-8.jpg",
    ],
  },
  {
    id: "vermelha",
    label: "Vermelha / Prata",
    hex: "#c0392b",
    badge: "Novidade" as string | null,
    hero: "/mobi/real/vermelha-1.jpg",
    photos: [
      "/mobi/real/vermelha-1.jpg",
      "/mobi/real/vermelha-2.jpg",
      "/mobi/real/vermelha-3.jpg",
      "/mobi/real/vermelha-4.jpg",
      "/mobi/real/vermelha-5.jpg",
      "/mobi/real/vermelha-6.jpg",
      "/mobi/real/vermelha-7.jpg",
      "/mobi/real/vermelha-8.jpg",
      "/mobi/real/vermelha-9.jpg",
    ],
  },
  {
    id: "branca",
    label: "Branca",
    hex: "#e0e0e0",
    badge: null,
    hero: "/mobi/real/branca-1.jpg",
    photos: [
      "/mobi/real/branca-1.jpg",
      "/mobi/real/branca-2.jpg",
      "/mobi/real/branca-3.jpg",
      "/mobi/real/branca-4.jpg",
      "/mobi/real/branca-5.jpg",
      "/mobi/real/branca-6.jpg",
      "/mobi/real/branca-7.jpg",
      "/mobi/real/branca-8.jpg",
    ],
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

function LPNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
      <div
        className={`w-full max-w-5xl pointer-events-auto transition-all duration-300 rounded-2xl px-5 h-14 flex items-center justify-between ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl shadow-black/10 border border-gray-100"
            : "bg-white/8 backdrop-blur-sm border border-white/15"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo-mobi.svg"
            alt="Sol Center Mobi"
            width={140}
            height={34}
            className={`transition-all duration-300 ${scrolled ? "brightness-100" : "brightness-0 invert"}`}
          />
        </a>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${site.phone}`}
            className={`flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full transition ${
              scrolled
                ? "text-gray-500 hover:text-[#0a1628]"
                : "text-white/70 hover:text-white bg-white/8 hover:bg-white/15"
            }`}
          >
            <Phone size={12} />
            {site.phone}
          </a>
          <a
            href="#formulario"
            className="inline-flex items-center gap-1.5 bg-[#00a651] text-white font-bold text-xs px-5 py-2.5 rounded-full hover:bg-[#00c060] transition-all"
          >
            Seja revendedor
            <ArrowRight size={12} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#0a1628]" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 inset-x-0 md:hidden bg-white/97 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 px-6 py-5 flex flex-col gap-4">
          <a
            href={`tel:${site.phone}`}
            className="text-gray-600 font-medium text-sm flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Phone size={14} className="text-[#00a651]" />
            {site.phone}
          </a>
          <a
            href="#formulario"
            onClick={() => setOpen(false)}
            className="bg-[#00a651] text-white font-bold px-5 py-3 rounded-full text-center text-sm"
          >
            Quero ser revendedor
          </a>
        </div>
      )}
    </header>
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
      `Olá! Me chamo ${name}, da empresa ${company}. Tenho interesse em ${type}. WhatsApp: ${phone}`
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
          placeholder="Nome da loja / empresa"
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
        <option value="">Tipo de negócio</option>
        <option value="revenda — quero ter modelos EVOX na minha loja">
          Loja de motos / bicicletas / multi-marcas
        </option>
        <option value="revendedor — loja de eletrônicos e equipamentos">
          Loja de eletrônicos ou equipamentos
        </option>
        <option value="distribuição regional dos modelos EVOX">
          Distribuição regional
        </option>
        <option value="mais informações sobre como ser revendedor EVOX">
          Quero mais informações
        </option>
      </select>
      <button
        type="submit"
        className="w-full bg-[#00a651] text-white font-black py-4 rounded-xl hover:bg-[#00c060] active:scale-[0.98] transition text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
      >
        Quero ser revendedor EVOX
        <ArrowRight size={16} />
      </button>
      <p className="text-center text-[11px] text-gray-400">
        Atendimento comercial B2B · Retorno em até 24h
      </p>
    </form>
  );
}

export default function LPMobi() {
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [activeDetailIdx, setActiveDetailIdx] = useState(0);
  const [colorPhotoIdx, setColorPhotoIdx] = useState(0);

  function selectColor(c: typeof COLORS[0]) {
    setActiveColor(c);
    setColorPhotoIdx(0);
  }

  const prevDetail = () =>
    setActiveDetailIdx((i) => (i - 1 + DETAILS.length) % DETAILS.length);
  const nextDetail = () =>
    setActiveDetailIdx((i) => (i + 1) % DETAILS.length);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      <LPNav />

      {/* ── HERO — fullbleed foto real ───────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {COLORS.map((c) => (
            <div
              key={c.id}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: activeColor.id === c.id ? 1 : 0 }}
            >
              <Image
                src={c.hero}
                alt={`EVOX Sol Center Mobi ${c.label}`}
                fill
                className="object-cover object-center"
                priority={c.id === "preta"}
                sizes="100vw"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-[#0a1628]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/20 to-[#0a1628]/40" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-4xl mx-auto px-6 lg:px-14 pb-24 pt-32 text-center flex flex-col items-center">

              <div className="inline-flex items-center gap-2 bg-[#00a651]/15 border border-[#00a651]/30 rounded-full px-3.5 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-[#00a651] rounded-full animate-pulse" />
                <span className="text-[#00a651] text-[11px] font-bold uppercase tracking-[0.15em]">
                  O mercado que mais cresce no Brasil
                </span>
              </div>

              <p className="text-white/30 text-sm font-bold uppercase tracking-[0.3em] mb-2">
                Sol Center Mobi · EVOX
              </p>

              <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-black text-white leading-[0.85] tracking-[-0.04em] mb-3">
                EVOX
              </h1>
              <p className="text-[clamp(1.4rem,3vw,2.2rem)] font-black text-[#00a651] leading-none tracking-tight mb-6">
                1000W · 100% Elétrica
              </p>

              <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-xl">
                A scooter elétrica <strong className="text-white/85">mais bonita, mais forte e mais completa</strong>{" "}
                do mercado. Coloque na sua loja e entre no segmento que mais cresce no país.
              </p>

              {/* Diferenciais rápidos */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { icon: IdCard, t: "Sem CNH" },
                  { icon: BadgeDollarSign, t: "Sem IPVA" },
                  { icon: Leaf, t: "Zero emissão" },
                  { icon: Battery, t: "Bateria removível" },
                ].map(({ icon: Icon, t }) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-3.5 py-2 text-white/70 text-xs font-semibold"
                  >
                    <Icon size={12} className="text-[#00a651]" />
                    {t}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-16">
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

              {/* Stats reais */}
              <div className="flex flex-wrap justify-center gap-8">
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

            {/* Color picker */}
            <div className="mt-10 flex items-center justify-center gap-5 flex-wrap">
              <span className="text-white/30 text-xs uppercase tracking-widest font-bold">
                Cor:
              </span>
              {COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveColor(c)}
                  aria-label={`Ver EVOX ${c.label}`}
                  className="flex flex-col items-center gap-1.5"
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
                    className={`text-[10px] font-semibold transition leading-tight text-center ${
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

      {/* ── GALERIA DE DETALHES — carrossel ─────────────────── */}
      <section id="galeria" className="py-20 bg-[#111] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">

          {/* Coluna esquerda — texto */}
          <div className="flex-shrink-0 w-full lg:w-80 xl:w-96 px-8 lg:pl-14 lg:pr-8 flex flex-col justify-center">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Produto de verdade
            </p>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black text-white tracking-tight leading-tight mb-4">
              Qualidade que vende sozinha.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              Fotos reais da EVOX — sem filtro, sem render. O produto que você vai ter na sua loja.
            </p>

            {/* Navegação */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={prevDetail}
                className="w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full flex items-center justify-center transition"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextDetail}
                className="w-11 h-11 bg-[#00a651] hover:bg-[#00c060] text-white rounded-full flex items-center justify-center transition"
                aria-label="Próxima"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-white/30 text-sm font-bold tabular-nums">
                {String(activeDetailIdx + 1).padStart(2, "0")} /{" "}
                {String(DETAILS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5 flex-wrap">
              {DETAILS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDetailIdx(i)}
                  aria-label={`Ir para foto ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    activeDetailIdx === i
                      ? "w-6 h-2 bg-[#00a651]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Coluna direita — carrossel deslizante */}
          <div className="w-full lg:flex-1 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out pl-4 lg:pl-6"
              style={{
                transform: `translateX(calc(-${activeDetailIdx} * (min(360px, 72vw) + 16px)))`,
              }}
            >
              {DETAILS.map((src, i) => (
                <div
                  key={src}
                  onClick={() => setActiveDetailIdx(i)}
                  className={`relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    activeDetailIdx === i
                      ? "opacity-100 scale-100"
                      : "opacity-50 scale-[0.97] hover:opacity-75"
                  }`}
                  style={{
                    width: "min(360px, 72vw)",
                    height: "min(280px, 56vw)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Detalhe EVOX ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── GALERIA POR COR ─────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                4 opções
              </p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
                Disponível em 4 cores.
              </h2>
            </div>
            {/* Setas */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setColorPhotoIdx(Math.max(0, colorPhotoIdx - 1))}
                disabled={colorPhotoIdx === 0}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 rounded-full flex items-center justify-center transition"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} className="text-[#0a1628]" />
              </button>
              <span className="text-gray-400 text-sm font-bold tabular-nums">
                {String(colorPhotoIdx + 1).padStart(2, "0")} / {String(activeColor.photos.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setColorPhotoIdx(Math.min(activeColor.photos.length - 1, colorPhotoIdx + 1))}
                disabled={colorPhotoIdx === activeColor.photos.length - 1}
                className="w-10 h-10 bg-[#0a1628] hover:bg-[#14253d] disabled:opacity-30 rounded-full flex items-center justify-center transition"
                aria-label="Próxima"
              >
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* Tabs de cor */}
          <div className="flex flex-wrap gap-2 mt-6">
            {COLORS.map((c) => (
              <button
                key={c.id}
                onClick={() => selectColor(c)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeColor.id === c.id
                    ? "bg-[#0a1628] text-white shadow-lg"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full border border-black/10 flex-shrink-0"
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
        </div>

        {/* Carrossel de fotos da cor */}
        <div className="overflow-hidden pl-6">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${colorPhotoIdx} * (min(480px, 85vw) + 16px)))`,
            }}
          >
            {activeColor.photos.map((src, i) => (
              <div
                key={`${activeColor.id}-${i}`}
                onClick={() => setColorPhotoIdx(i)}
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-[#edf1f5] ${
                  colorPhotoIdx === i
                    ? "opacity-100"
                    : "opacity-55 hover:opacity-80"
                }`}
                style={{
                  width: "min(480px, 85vw)",
                  height: "min(380px, 67vw)",
                }}
              >
                <Image
                  src={src}
                  alt={`EVOX ${activeColor.label} ${i + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="480px"
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
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00a651]/30 transition"
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

      {/* ── DIFERENCIAIS DO PRODUTO ──────────────────────────── */}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              {
                icon: IdCard,
                title: "Sem carteira de motorista",
                desc: "Não exige CNH. Qualquer pessoa pode pilota — amplia muito o público.",
                dark: true,
              },
              {
                icon: BadgeDollarSign,
                title: "Sem IPVA nem emplacamento",
                desc: "Zero burocracia e zero custo anual com documentação. Só ligar e usar.",
                dark: true,
              },
              {
                icon: Battery,
                title: "Bateria de lítio removível",
                desc: "Carrega em casa, no trabalho, em qualquer tomada 110/220V.",
                dark: false,
              },
              {
                icon: Shield,
                title: "Freio a disco + Full LED",
                desc: "Mais segurança na frenagem e na visibilidade. Produto completo.",
                dark: false,
              },
            ].map(({ icon: Icon, title, desc, dark }) => (
              <div
                key={title}
                className={`rounded-2xl p-6 border transition-all hover:shadow-md ${
                  dark
                    ? "bg-[#0a1628] border-[#00a651]/30"
                    : "bg-[#f7f8f9] border-gray-100 hover:border-[#00a651]/30"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    dark ? "bg-[#00a651]/20" : "bg-[#00a651]/10"
                  }`}
                >
                  <Icon size={20} className="text-[#00a651]" />
                </div>
                <h3
                  className={`font-black text-base mb-2 ${dark ? "text-white" : "text-[#0a1628]"}`}
                >
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-white/50" : "text-gray-500"}`}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ficha técnica completa */}
          <div className="bg-[#f7f8f9] rounded-2xl p-6 border border-gray-100">
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
                ["Peso suportado", "200 kg"],
                ["Pneus", "3.00 – 10 pol."],
                ["Entre eixos", "1.350 mm"],
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

      {/* ── OPORTUNIDADE DE MERCADO ──────────────────────────── */}
      <section className="px-6 py-20 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Por que agora
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight">
              O mercado que você não pode ignorar.
            </h2>
            <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
              A mobilidade elétrica cresce mais rápido do que qualquer outro segmento de veículos no Brasil.
              Quem entrar agora, entra cedo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                icon: TrendingUp,
                stat: "+40%",
                label: "ao ano",
                desc: "crescimento do mercado de mobilidade elétrica no Brasil",
              },
              {
                icon: Leaf,
                stat: "Zero",
                label: "emissão",
                desc: "tendência regulatória e de consumo que só vai aumentar",
              },
              {
                icon: IdCard,
                stat: "CNH",
                label: "não precisa",
                desc: "público comprador muito maior que moto convencional",
              },
              {
                icon: Store,
                stat: "4",
                label: "cores",
                desc: "modelos prontos pra sair da caixa diretamente na sua loja",
              },
            ].map(({ icon: Icon, stat, label, desc }) => (
              <div
                key={stat + label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00a651]/30 transition"
              >
                <div className="w-10 h-10 bg-[#00a651]/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#00a651]" />
                </div>
                <p className="text-white font-black text-3xl leading-none">{stat}</p>
                <p className="text-[#00a651] text-sm font-bold mb-2">{label}</p>
                <p className="text-white/30 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#00a651]/10 border border-[#00a651]/25 rounded-2xl p-8 text-center">
            <p className="text-white/60 text-sm mb-3">
              Os modelos mais bonitos, mais fortes e mais completos do segmento.
            </p>
            <p className="text-[clamp(1.4rem,2.5vw,2rem)] font-black text-white leading-tight">
              A EVOX é o produto certo, no momento certo,{" "}
              <span className="text-[#00a651]">para quem quer entrar no mercado elétrico com o pé direito.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── COMO SER REVENDEDOR ──────────────────────────────── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Como funciona
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Você compra, coloca na loja, vende.
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
              Modelo simples de revenda: você adquire as unidades, expõe na sua loja e vende.
              A Sol Center Mobi cuida de tudo o que vem depois.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                step: "01",
                icon: Package,
                title: "Compre as unidades",
                desc: "Você adquire um lote de EVOXs da Sol Center Mobi. Produto entregue na caixa, pronto pra vender. Condições e quantidade mínima sob consulta.",
              },
              {
                step: "02",
                icon: Store,
                title: "Exponha na sua loja",
                desc: "Coloque em exposição, treine sua equipe com o suporte da Sol Center Mobi e comece a vender. Produto diferenciado chama atenção por si só.",
              },
              {
                step: "03",
                icon: Wrench,
                title: "Pós-venda com a gente",
                desc: "Seu cliente comprou — o suporte técnico e o pós-venda são responsabilidade da Sol Center Mobi. Você fecha a venda com respaldo total.",
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div
                key={step}
                className="bg-[#f7f8f9] rounded-2xl p-7 border border-gray-100 hover:border-[#00a651]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#00a651]/30 font-black text-4xl leading-none">{step}</span>
                  <div className="w-11 h-11 bg-[#00a651]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#00a651]" />
                  </div>
                </div>
                <h3 className="font-black text-[#0a1628] text-base mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Users,
                title: "10 anos em mobilidade elétrica",
                desc: "Operamos no Sul do Brasil há mais de uma década com produto testado e aprovado.",
              },
              {
                icon: Wrench,
                title: "Suporte técnico incluído",
                desc: "Treinamento da equipe de vendas e suporte pós-venda para o consumidor final.",
              },
              {
                icon: Package,
                title: "Logística gerenciada",
                desc: "Entrega e reposição gerenciadas pela Sol Center Mobi. Sem dor de cabeça.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-[#00a651]/30 transition"
              >
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#00a651]" />
                </div>
                <div>
                  <h3 className="font-black text-[#0a1628] text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
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
              Pronto para entrar no mercado elétrico?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Fale com nossa equipe comercial. Vamos apresentar as condições de revenda, o lote mínimo e tudo que você precisa saber para ter a EVOX na sua loja.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Condições reais para o seu perfil de negócio",
                "Retorno em até 24 horas úteis",
                "Produto na caixa, pronto pra expor e vender",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle size={16} className="text-[#00a651] shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden">
              {[
                "/mobi/real/vermelha-1.jpg",
                "/mobi/real/branca-1.jpg",
                "/mobi/real/azul-1.jpg",
              ].map((src, i) => (
                <div key={i} className="relative aspect-square">
                  <Image src={src} alt="" fill className="object-cover" sizes="150px" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <p className="text-[#0a1628] font-black text-xl mb-1">
              Fale com um consultor
            </p>
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
          <Image
            src="/logo-mobi.svg"
            alt="Sol Center Mobi"
            width={110}
            height={27}
            className="brightness-0 invert opacity-40"
          />
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
          Quero ser revendedor
        </a>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
}
