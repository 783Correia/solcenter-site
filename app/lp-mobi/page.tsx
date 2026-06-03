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
    glow: "rgba(80,80,80,0.12)",
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
    glow: "rgba(30,77,140,0.18)",
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
    glow: "rgba(192,57,43,0.15)",
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
    glow: "rgba(220,220,220,0.08)",
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
  { icon: Battery, label: "Bateria", value: "60v/20Ah", sub: "bateria de lítio" },
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

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-sm font-bold tabular-nums pointer-events-none">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X size={20} />
      </button>

      <button
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        className="relative w-[90vw] h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`Detalhe EVOX ${index + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      <button
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Próxima"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

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
            : "bg-white/5 backdrop-blur-md border border-white/10"
        }`}
      >
        <a href="#" className="flex items-center">
          <Image
            src="/logo-mobi.svg"
            alt="Sol Center Mobi"
            width={140}
            height={34}
            className={`transition-all duration-300 ${scrolled ? "brightness-100" : "brightness-0 invert"}`}
          />
        </a>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${site.phone}`}
            className={`flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full transition ${
              scrolled
                ? "text-gray-500 hover:text-[#0a1628]"
                : "text-white/60 hover:text-white bg-white/5 hover:bg-white/10"
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
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#0a1628]" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 inset-x-0 md:hidden glass-form-card rounded-2xl px-6 py-5 flex flex-col gap-4">
          <a
            href={`tel:${site.phone}`}
            className="text-white/70 font-medium text-sm flex items-center gap-2"
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
        <div className="w-16 h-16 bg-[#00a651]/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-[#00a651]" size={32} />
        </div>
        <p className="font-black text-white text-xl mb-2">Mensagem enviada!</p>
        <p className="text-white/50 text-sm">Nossa equipe retorna em até 24h úteis.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="name"
        type="text"
        required
        placeholder="Seu nome completo"
        className="glass-input"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          name="company"
          type="text"
          required
          placeholder="Nome da loja / empresa"
          className="glass-input"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="WhatsApp"
          className="glass-input"
        />
      </div>
      <select name="type" required className="glass-input">
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
        className="w-full bg-[#00a651] text-white font-black py-4 rounded-xl hover:bg-[#00c060] active:scale-[0.98] transition text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
      >
        Quero ser revendedor EVOX
        <ArrowRight size={16} />
      </button>
      <p className="text-center text-[11px] text-white/30">
        Atendimento comercial B2B · Retorno em até 24h
      </p>
    </form>
  );
}

export default function LPMobi() {
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [activeDetailIdx, setActiveDetailIdx] = useState(0);
  const [colorPhotoIdx, setColorPhotoIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [colorLightboxIdx, setColorLightboxIdx] = useState<number | null>(null);

  function selectColor(c: (typeof COLORS)[0]) {
    setActiveColor(c);
    setColorPhotoIdx(0);
  }

  const prevDetail = () =>
    setActiveDetailIdx((i) => (i - 1 + DETAILS.length) % DETAILS.length);
  const nextDetail = () =>
    setActiveDetailIdx((i) => (i + 1) % DETAILS.length);

  return (
    <div className="lp-dark min-h-screen font-sans antialiased">

      {lightboxIdx !== null && (
        <Lightbox
          images={DETAILS}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((i) => (i! - 1 + DETAILS.length) % DETAILS.length)}
          onNext={() => setLightboxIdx((i) => (i! + 1) % DETAILS.length)}
        />
      )}
      {colorLightboxIdx !== null && (
        <Lightbox
          images={activeColor.photos}
          index={colorLightboxIdx}
          onClose={() => setColorLightboxIdx(null)}
          onPrev={() => setColorLightboxIdx((i) => (i! - 1 + activeColor.photos.length) % activeColor.photos.length)}
          onNext={() => setColorLightboxIdx((i) => (i! + 1) % activeColor.photos.length)}
        />
      )}

      <LPNav />

      {/* ── HERO — foto real de fundo (original) ────────────── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Fotos reais empilhadas com fade */}
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
                className={`object-cover object-center${c.id === "branca" ? " [transform:scaleX(-1)]" : ""}`}
                priority={c.id === "preta"}
                sizes="100vw"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050c1a]/92 via-[#050c1a]/55 to-[#050c1a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a] via-transparent to-[#050c1a]/35" />
        </div>


        {/* Conteúdo — verticalmente centralizado, pt compensa navbar fixa */}
        <div className="relative z-10 w-full pt-20 pb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-14 flex flex-col items-center lg:items-start text-center lg:text-left">

            <p className="text-white/30 text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Sol Center Mobi · Revenda
            </p>

            <h1 className="text-[clamp(2rem,4.8vw,5.5rem)] font-black text-white leading-[0.9] tracking-[-0.03em] mb-6 max-w-3xl">
              A scooter elétrica que qualquer pessoa pode comprar.
            </h1>

            <p className="text-[clamp(1rem,1.6vw,1.25rem)] font-black text-[#00a651] leading-none tracking-tight mb-5">
              EVOX 1000W · Sem CNH · Sem IPVA · Sem emplacamento
            </p>

            <p className="text-white/65 text-base leading-relaxed mb-8 max-w-lg">
              Existe um mercado enorme de pessoas que querem mobilidade mas não têm carteira de motorista.{" "}
              <strong className="text-white/90">Coloque a EVOX na sua loja e comece a atender esse público hoje.</strong>
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-9">
              {[
                { icon: IdCard, t: "Sem CNH" },
                { icon: BadgeDollarSign, t: "Sem IPVA" },
                { icon: Leaf, t: "Zero emissão" },
                { icon: Battery, t: "Bateria de lítio" },
              ].map(({ icon: Icon, t }, i) => (
                <div
                  key={t}
                  className="badge-glow flex items-center gap-2 rounded-full px-3.5 py-2 text-white/75 text-xs font-semibold"
                >
                  <span className="badge-shimmer" aria-hidden="true" style={{ animationDelay: `${i * 0.6}s` }} />
                  <Icon size={12} className="text-[#00a651] relative z-10" />
                  <span className="relative z-10">{t}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-[#00a651] text-white font-black px-8 py-4 rounded-full text-sm hover:bg-[#00c060] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/30 transition-all"
              >
                Quero ser revendedor
                <ArrowRight size={15} />
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-white/15 transition"
              >
                Ver a scooter
                <ChevronRight size={15} />
              </a>
            </div>

            {/* Stats + color picker numa linha */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-7">
              {[
                { v: "1000W", label: "motor brushless" },
                { v: "40km", label: "autonomia" },
                { v: "200kg", label: "carga máx." },
                { v: "4", label: "cores" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-[#00a651]/40 pl-3 text-left">
                  <div className="text-xl font-black text-white leading-none">{s.v}</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-wide mt-0.5">{s.label}</div>
                </div>
              ))}

              {/* Divisor */}
              <div className="hidden lg:block w-px h-8 bg-white/10" />

              {/* Color picker inline */}
              <div className="flex items-center gap-3">
                <span className="text-white/25 text-[10px] uppercase tracking-widest font-bold">Cor</span>
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => selectColor(c)}
                    aria-label={`Ver EVOX ${c.label}`}
                    className="flex flex-col items-center gap-1"
                  >
                    <div
                      className={`rounded-full border-2 transition-all duration-200 ${
                        activeColor.id === c.id
                          ? "w-8 h-8 border-white ring-2 ring-[#00a651] ring-offset-2 ring-offset-[#050c1a]"
                          : "w-6 h-6 border-white/30 hover:border-white/60 hover:scale-110"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                    {c.badge && activeColor.id === c.id && (
                      <span className="text-[7px] bg-[#f5c518] text-[#0a1628] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none">
                        {c.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GALERIA DE DETALHES ──────────────────────────────── */}
      <section id="galeria" className="py-20 section-sep overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">
          <div className="flex-shrink-0 w-full lg:w-80 xl:w-96 px-8 lg:pl-14 lg:pr-8 flex flex-col justify-center">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Sem filtro, sem render
            </p>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black text-white tracking-tight leading-tight mb-4">
              O produto exatamente como você vai receber.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              Fotos reais da EVOX, tiradas aqui no nosso estoque. Sem edição, sem promessa vazia.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={prevDetail}
                className="w-11 h-11 glass-card rounded-full flex items-center justify-center text-white"
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
                {String(activeDetailIdx + 1).padStart(2, "0")} / {String(DETAILS.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {DETAILS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDetailIdx(i)}
                  aria-label={`Ir para foto ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    activeDetailIdx === i ? "w-6 h-2 bg-[#00a651]" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

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
                  onClick={() => { setActiveDetailIdx(i); setLightboxIdx(i); }}
                  className={`relative flex-shrink-0 rounded-2xl overflow-hidden cursor-zoom-in transition-all duration-300 bg-white/5 ${
                    activeDetailIdx === i ? "opacity-100 scale-100" : "opacity-40 scale-[0.97] hover:opacity-70"
                  }`}
                  style={{ width: "min(360px, 72vw)", height: "min(280px, 56vw)" }}
                >
                  <Image src={src} alt={`Detalhe EVOX ${i + 1}`} fill className="object-cover" sizes="360px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CARD ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 section-sep">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">4 opções</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight">
              Escolha a sua EVOX.
            </h2>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden lg:grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px]">

            {/* ── Showcase da moto ── */}
            <div
              className="relative overflow-hidden cursor-zoom-in"
              onClick={() => setColorLightboxIdx(colorPhotoIdx)}
              style={{ minHeight: "clamp(400px, 75vw, 600px)", background: "#050c1a" }}
            >
              {/* Todas as fotos da cor ativa empilhadas — troca por opacity */}
              {activeColor.photos.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ opacity: colorPhotoIdx === i ? 1 : 0 }}
                >
                  <Image
                    src={src}
                    alt={`EVOX ${activeColor.label} — foto ${i + 1}`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center top" }}
                    sizes="(max-width: 1024px) 95vw, 60vw"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Gradient inferior */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(to bottom, transparent 55%, rgba(5,12,26,0.65) 100%)"
              }} />

              {/* Badge */}
              {activeColor.badge && (
                <div className="absolute top-4 left-4 bg-[#f5c518] text-[#0a1628] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest z-10">
                  {activeColor.badge}
                </div>
              )}

              {/* Contador de foto */}
              <div className="absolute bottom-4 left-4 text-white/40 text-xs font-bold tabular-nums z-10">
                {String(colorPhotoIdx + 1).padStart(2, "0")} / {String(activeColor.photos.length).padStart(2, "0")}
              </div>

              {/* Setas de navegação */}
              {colorPhotoIdx > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setColorPhotoIdx((i) => i - 1); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition z-10"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
              {colorPhotoIdx < activeColor.photos.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setColorPhotoIdx((i) => i + 1); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition z-10"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={18} />
                </button>
              )}
            </div>

            {/* ── Painel de info ── */}
            <div className="p-6 sm:p-7 border-t border-white/8 lg:border-t-0 lg:border-l lg:border-white/8 flex flex-col gap-4">
              <div>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">Sol Center Mobi</p>
                <div className="mb-3">
                  <h3 className="text-white font-black text-3xl leading-none mb-1">EVOX</h3>
                  <p
                    className="font-black text-xl leading-none"
                    style={{ color: activeColor.id === "branca" ? "#c0c0c0" : activeColor.hex }}
                  >
                    {activeColor.label}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  {[
                    { label: "Motor", value: "1000W" },
                    { label: "Bateria", value: "60v / 20Ah" },
                    { label: "Autonomia", value: "40 km" },
                    { label: "Velocidade", value: "32 km/h" },
                    { label: "Carga máx.", value: "200 kg" },
                    { label: "Recarga", value: "6–8 h" },
                  ].map(({ label, value }) => (
                    <div key={label} className="glass-card rounded-xl px-3.5 py-3">
                      <p className="text-white/30 text-[10px] uppercase tracking-wider font-bold mb-0.5">{label}</p>
                      <p className="text-white font-black text-sm leading-none">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Cor picker */}
                <div className="flex items-center gap-2.5 mt-1">
                  <span className="text-white/30 text-[11px] font-bold uppercase tracking-wider">Cor:</span>
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => selectColor(c)}
                      aria-label={`Cor ${c.label}`}
                      title={c.label}
                      className={`rounded-full border-2 transition-all duration-200 flex-shrink-0 ${
                        activeColor.id === c.id
                          ? "w-8 h-8 border-white ring-2 ring-[#00a651] ring-offset-2 ring-offset-[#0d1a2e]"
                          : "w-6 h-6 border-white/25 hover:border-white/60 hover:scale-110"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>

                {/* Miniaturas das fotos da cor ativa */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide mt-3">
                  {activeColor.photos.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setColorPhotoIdx(i)}
                      aria-label={`Foto ${i + 1}`}
                      className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 border-2 ${
                        colorPhotoIdx === i
                          ? "border-[#00a651] scale-105"
                          : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/30"
                      }`}
                      style={{ width: 56, height: 44 }}
                    >
                      <Image src={src} alt={`Foto ${i + 1}`} fill className="object-cover" sizes="56px" />
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 bg-[#00a651] text-white font-black py-4 rounded-xl text-sm hover:bg-[#00c060] active:scale-[0.98] transition shadow-lg shadow-green-500/15"
              >
                Quero ser revendedor
                <ArrowRight size={15} />
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* ── SPECS ────────────────────────────────────────────── */}
      <section className="px-6 py-20 section-sep">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">Especificações</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight">
              EVOX — feita para trabalhar todo dia.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {SPECS.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="glass-card glass-card-green rounded-2xl p-6">
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

      {/* ── DIFERENCIAIS DO PRODUTO ───────────────────────────── */}
      <section className="px-6 py-20 section-sep">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">Por que a EVOX</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight">
              Por que ela se vende sozinha.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { icon: IdCard, title: "Sem carteira de motorista", desc: "Não exige CNH. Qualquer pessoa pode pilotar — o público da sua loja aumenta do dia pra noite.", highlight: true },
              { icon: BadgeDollarSign, title: "Sem IPVA nem emplacamento", desc: "Zero burocracia para o comprador final. Ninguém vai deixar de comprar por causa de documentação.", highlight: true },
              { icon: Battery, title: "Bateria de lítio 60v/20Ah", desc: "40km por carga completa, recarga em qualquer tomada 110/220V. Serve pra rotina urbana sem adaptação.", highlight: false },
              { icon: Shield, title: "Freio a disco + Full LED", desc: "Produto completo saindo da caixa. Freio a disco dianteiro e traseiro, iluminação Full LED de série.", highlight: false },
            ].map(({ icon: Icon, title, desc, highlight }) => (
              <div
                key={title}
                className={`glass-card glass-card-green rounded-2xl p-6 ${highlight ? "border-[#00a651]/25" : ""}`}
              >
                <div className="w-11 h-11 bg-[#00a651]/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#00a651]" />
                </div>
                <h3 className="font-black text-white text-base mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Ficha técnica */}
          <div className="glass-card rounded-2xl p-6">
            <p className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-5">
              Ficha técnica completa
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
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
                  <span className="text-[10px] text-white/30 uppercase tracking-wider font-bold">{k}</span>
                  <span className="text-sm font-semibold text-white/80">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPORTUNIDADE DE MERCADO ───────────────────────────── */}
      <section className="px-6 py-20 section-sep">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">Por que agora</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight">
              O mercado que você não pode ignorar.
            </h2>
            <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
              A mobilidade elétrica cresce mais rápido do que qualquer outro segmento de veículos no Brasil. Quem entrar agora, entra cedo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: TrendingUp, stat: "+40%", label: "ao ano", desc: "crescimento do mercado de mobilidade elétrica no Brasil" },
              { icon: Leaf, stat: "Zero", label: "emissão", desc: "tendência regulatória e de consumo que só vai aumentar" },
              { icon: IdCard, stat: "CNH", label: "não precisa", desc: "público comprador muito maior que moto convencional" },
              { icon: Store, stat: "4", label: "cores", desc: "modelos prontos pra sair da caixa diretamente na sua loja" },
            ].map(({ icon: Icon, stat, label, desc }) => (
              <div key={stat + label} className="glass-card glass-card-green rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#00a651]/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#00a651]" />
                </div>
                <p className="text-white font-black text-3xl leading-none">{stat}</p>
                <p className="text-[#00a651] text-sm font-bold mb-2">{label}</p>
                <p className="text-white/30 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-2xl p-8 text-center border-[#00a651]/20">
            <p className="text-white/50 text-sm mb-3">
              Produto validado. Mercado em crescimento. Modelo de negócio simples.
            </p>
            <p className="text-[clamp(1.4rem,2.5vw,2rem)] font-black text-white leading-tight">
              Quem entra agora no mercado de scooters elétricas{" "}
              <span className="text-[#00a651]">vai estar anos à frente de quem esperar.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── COMO SER REVENDEDOR ───────────────────────────────── */}
      <section className="px-6 py-20 section-sep">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">Como funciona</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight">
              Você compra, coloca na loja, vende.
            </h2>
            <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
              Modelo simples de revenda: você adquire as unidades, expõe na sua loja e vende. A Sol Center Mobi cuida de tudo o que vem depois.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { step: "01", icon: Package, title: "Compre as unidades", desc: "Você adquire um lote de EVOXs da Sol Center Mobi. Produto entregue na caixa, pronto pra vender. Condições e quantidade mínima sob consulta." },
              { step: "02", icon: Store, title: "Exponha na sua loja", desc: "Coloque em exposição, treine sua equipe com o suporte da Sol Center Mobi e comece a vender. Produto diferenciado chama atenção por si só." },
              { step: "03", icon: Wrench, title: "Pós-venda com a gente", desc: "Seu cliente comprou — o suporte técnico e o pós-venda são responsabilidade da Sol Center Mobi. Você fecha a venda com respaldo total." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="glass-card glass-card-green rounded-2xl p-7">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#00a651]/20 font-black text-4xl leading-none">{step}</span>
                  <div className="w-11 h-11 bg-[#00a651]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#00a651]" />
                  </div>
                </div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Users, title: "10 anos em mobilidade elétrica", desc: "Operamos no Sul do Brasil há mais de uma década com produto testado e aprovado." },
              { icon: Wrench, title: "Suporte técnico incluído", desc: "Treinamento da equipe de vendas e suporte pós-venda para o consumidor final." },
              { icon: Package, title: "Logística gerenciada", desc: "Entrega e reposição gerenciadas pela Sol Center Mobi. Sem dor de cabeça." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card glass-card-green rounded-2xl flex gap-4 p-5">
                <div className="w-10 h-10 bg-[#00a651]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#00a651]" />
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-1">{title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ───────────────────────────────────────── */}
      <section id="formulario" className="px-6 py-20 section-sep">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-4">Atendimento comercial</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white tracking-tight leading-tight mb-5">
              Quer ter a EVOX na sua loja?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Fale com nosso comercial. Em até 24h você recebe as condições de revenda, lote mínimo e tudo que precisa saber para começar a vender.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Condições sob medida para o seu tipo de loja",
                "Resposta em até 24 horas úteis",
                "Produto entregue na caixa, pronto para expor",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle size={16} className="text-[#00a651] shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden">
              {["/mobi/real/vermelha-1.jpg", "/mobi/real/branca-1.jpg", "/mobi/real/azul-1.jpg"].map((src, i) => (
                <div key={i} className="relative aspect-square">
                  <Image src={src} alt="" fill className="object-cover" sizes="150px" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-form-card rounded-3xl p-8">
            <p className="text-white font-black text-xl mb-1">Fale com um consultor</p>
            <p className="text-white/40 text-sm mb-6">Preencha abaixo e abrimos o WhatsApp direto.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-black/30 px-6 py-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logo-mobi.svg" alt="Sol Center Mobi" width={110} height={27} className="brightness-0 invert opacity-40" />
          <p className="text-white/20 text-xs text-center">{site.address} · {site.phone}</p>
          <a href={WA} target="_blank" rel="noreferrer" className="text-[#00a651] text-xs font-bold hover:underline">
            WhatsApp comercial →
          </a>
        </div>
      </footer>

      {/* ── MOBILE CTA BAR ───────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-form-card border-t border-white/10 px-4 py-3 flex gap-3">
        <a
          href={`tel:${site.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-white/8 text-white text-xs font-bold py-3.5 rounded-xl border border-white/10"
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
