"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Battery,
  Gauge,
  Package,
  MapPin,
  Cpu,
  IdCard,
  Leaf,
  BadgeDollarSign,
  Shield,
  X,
} from "lucide-react";

const SPECS = [
  { icon: Cpu, label: "Motor", value: "1000W", sub: "brushless sem escovas" },
  { icon: Battery, label: "Bateria", value: "60v/20Ah", sub: "lítio removível" },
  { icon: Gauge, label: "Velocidade", value: "32 km/h", sub: "velocidade máxima" },
  { icon: Zap, label: "Recarga", value: "6–8h", sub: "tomada comum 110/220V" },
  { icon: Package, label: "Carga", value: "200 kg", sub: "peso suportado" },
  { icon: MapPin, label: "Autonomia", value: "60 km", sub: "por carga completa" },
];

const CORES = [
  { label: "Preta", hex: "#1a1a1a", cutout: "/mobi/cutout/preta-hero.png", badge: "Mais vendida" },
  { label: "Azul / Prata", hex: "#1e4d8c", cutout: "/mobi/cutout/azul-hero.png", badge: null },
  { label: "Vermelha / Prata", hex: "#c0392b", cutout: "/mobi/cutout/vermelha-hero.png", badge: "Novidade" },
  { label: "Branca", hex: "#d0d0d0", cutout: "/mobi/cutout/branca-hero.png", badge: null },
];

const DETALHES = [
  "/mobi/real/detalhe-1.jpg",
  "/mobi/real/detalhe-2.jpg",
  "/mobi/real/detalhe-3.jpg",
  "/mobi/real/detalhe-4.jpg",
  "/mobi/real/detalhe-5.jpg",
  "/mobi/real/detalhe-6.jpg",
];

const DIFERENCIAIS = [
  { icon: IdCard, title: "Sem CNH", desc: "Não exige carteira de motorista. Qualquer pessoa pode usar." },
  { icon: BadgeDollarSign, title: "Sem IPVA", desc: "Zero imposto anual. Economia real todo ano." },
  { icon: Shield, title: "Sem emplacamento", desc: "Sem burocracia. Comprou, usou." },
  { icon: Leaf, title: "100% elétrica", desc: "Zero emissão, zero combustível. Custo por km irrisório." },
];

const TOTAL_SLIDES = 8;

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={onClose}>
      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition" onClick={onClose}>
        <X size={20} />
      </button>
      <div className="relative w-[90vw] h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <Image src={src} alt="Detalhe EVOX" fill className="object-contain" sizes="90vw" />
      </div>
    </div>
  );
}

export default function ApresentacaoMobi() {
  const [slide, setSlide] = useState(0);
  const [corIdx, setCorIdx] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const prev = useCallback(() => setSlide((s) => Math.max(0, s - 1)), []);
  const next = useCallback(() => setSlide((s) => Math.min(TOTAL_SLIDES - 1, s + 1)), []);

  useEffect(() => {
    if (lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, lightbox]);

  return (
    <div className="fixed inset-0 bg-[#060d18] text-white overflow-hidden select-none">
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}

      {/* ── Slide 0 — Capa ─────────────────────────── */}
      {slide === 0 && (
        <div className="w-full h-full flex items-center justify-between px-12 md:px-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d18] via-[#060d18]/80 to-transparent z-10 pointer-events-none" />
          <div className="relative z-20 max-w-lg">
            <Image src="/logo-mobi.svg" alt="Solcenter Mobi" width={160} height={40} className="mb-10 brightness-0 invert opacity-70" />
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-4">Scooter Elétrica</p>
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.88] tracking-[-0.04em] mb-6">
              EVOX<br /><span className="text-[#00a651]">1000W</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
              A scooter que todo mundo<br />vai parar pra olhar.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-[65%] h-full z-10 overflow-hidden">
            <Image src="/mobi/cutout/preta-hero.png" alt="EVOX Preta" fill className="object-contain object-center drop-shadow-[0_0_80px_rgba(0,166,81,0.15)]" sizes="65vw" style={{ transform: 'scale(1.45)', transformOrigin: 'center center' }} />
          </div>
        </div>
      )}

      {/* ── Slide 1 — O Produto ─────────────────────── */}
      {slide === 1 && (
        <div className="w-full h-full flex items-center justify-between px-12 md:px-24 relative overflow-hidden">
          <div className="relative z-10 max-w-md">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-4">O produto</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-[-0.03em] leading-tight mb-5">
              Design que vende antes de você abrir a boca.
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              Motor brushless 1000W. Bateria de lítio removível. Carrega em qualquer tomada doméstica.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Motor Brushless", "Bateria Removível", "4 Cores", "Até 200 kg"].map((t) => (
                <span key={t} className="bg-[#00a651]/15 text-[#00a651] text-xs font-bold px-4 py-2 rounded-full border border-[#00a651]/20">{t}</span>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 w-[65%] h-full overflow-hidden">
            <Image src="/mobi/cutout/azul-hero.png" alt="EVOX Azul" fill className="object-contain object-center drop-shadow-[0_0_80px_rgba(30,77,140,0.25)]" sizes="65vw" style={{ transform: 'scale(1.45)', transformOrigin: 'center center' }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d18] via-[#060d18]/70 to-transparent pointer-events-none" />
        </div>
      )}

      {/* ── Slide 2 — Cores ─────────────────────────── */}
      {slide === 2 && (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16 relative">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Disponível em</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-1">4 cores. Uma pra cada estilo.</h2>
          <p className="text-white/50 text-sm mb-8 text-center">Preta é a mais vendida. Vermelha não fica em estoque.</p>

          <div className="grid grid-cols-4 gap-4 w-full max-w-5xl">
            {CORES.map((cor, i) => (
              <button
                key={cor.label}
                onClick={() => setCorIdx(i)}
                className={`relative flex flex-col items-center rounded-2xl border-2 pt-4 pb-5 px-3 transition-all duration-200 ${
                  corIdx === i ? "border-[#00a651] bg-[#00a651]/10" : "border-white/10 bg-white/5 hover:border-white/25"
                }`}
              >
                {cor.badge && (
                  <span className="absolute top-2 right-2 bg-[#00a651] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {cor.badge}
                  </span>
                )}
                <div className="relative w-full h-40 mb-3">
                  <Image
                    src={cor.cutout}
                    alt={cor.label}
                    fill
                    className="object-contain"
                    sizes="25vw"
                    style={{ transform: 'scale(1.3)', transformOrigin: 'center center' }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-white/30" style={{ background: cor.hex }} />
                  <p className="text-sm font-bold text-white">{cor.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Slide 3 — Detalhes ──────────────────────── */}
      {slide === 3 && (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Qualidade</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-1">Acabamento que você só vê de perto.</h2>
          <p className="text-white/50 text-sm mb-8 text-center">Clique em qualquer foto para ampliar.</p>
          <div className="grid grid-cols-3 gap-3 w-full max-w-3xl">
            {DETALHES.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(src)}
                className="relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-[#00a651]/50 transition-all hover:scale-[1.02]"
              >
                <Image src={src} alt={`Detalhe ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 33vw, 250px" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Slide 4 — Specs ─────────────────────────── */}
      {slide === 4 && (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Ficha técnica</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-10">Os números por trás da EVOX.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {SPECS.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00a651]/15 flex items-center justify-center">
                  <Icon size={18} className="text-[#00a651]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-2xl md:text-3xl font-black text-white">{value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Slide 5 — Diferenciais ──────────────────── */}
      {slide === 5 && (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Por que a EVOX</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-2 text-center max-w-xl leading-tight">
            A única conta que você vai pagar é a de luz.
          </h2>
          <p className="text-white/50 text-sm mb-10 text-center">Comprou, ligou, foi. Sem papel, sem cartório, sem burocracia.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
            {DIFERENCIAIS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#00a651]/15 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-[#00a651]" />
                </div>
                <div>
                  <p className="font-black text-lg mb-1">{title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Slide 6 — Custo por km ──────────────────── */}
      {slide === 6 && (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Economia real</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-2 text-center leading-tight">
            12x mais barato por quilômetro.
          </h2>
          <p className="text-white/50 text-sm mb-10 text-center">Gasolina a R$6,50. Energia elétrica a R$0,02/km. Faça as contas.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">Moto a gasolina</p>
              <p className="text-5xl font-black text-white mb-2">~R$0,25</p>
              <p className="text-white/50 text-sm mb-6">por quilômetro rodado</p>
              <div className="space-y-2 text-left">
                {["+ IPVA todo ano", "+ emplacamento", "+ CNH obrigatória", "+ manutenção frequente"].map((t) => (
                  <p key={t} className="text-white/40 text-sm">{t}</p>
                ))}
              </div>
            </div>
            <div className="bg-[#00a651]/10 border border-[#00a651]/30 rounded-2xl p-8 text-center">
              <p className="text-[#00a651] text-xs font-bold uppercase tracking-widest mb-4">EVOX elétrica</p>
              <p className="text-5xl font-black text-white mb-2">~R$0,02</p>
              <p className="text-white/50 text-sm mb-6">por quilômetro rodado</p>
              <div className="space-y-2 text-left">
                {["Zero IPVA", "Zero emplacamento", "Sem CNH", "Manutenção mínima"].map((t) => (
                  <p key={t} className="text-[#00a651] text-sm font-medium">✓ {t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Slide 7 — Encerramento ──────────────────── */}
      {slide === 7 && (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060d18]/60 pointer-events-none z-10" />
          <div className="absolute inset-0 w-full h-full">
            <Image src="/mobi/cutout/preta-hero.png" alt="EVOX" fill className="object-contain object-center opacity-15" sizes="100vw" style={{ transform: 'scale(1.6)', transformOrigin: 'center center' }} />
          </div>
          <div className="relative z-20 text-center">
            <Image src="/logo-mobi.svg" alt="Solcenter Mobi" width={220} height={56} className="mx-auto mb-8 brightness-0 invert" />
            <p className="text-white/40 text-sm uppercase tracking-[0.4em]">Santo Cristo, RS</p>
          </div>
        </div>
      )}

      {/* ── Navegação ───────────────────────────────── */}
      <button
        onClick={prev}
        disabled={slide === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition disabled:opacity-0 disabled:pointer-events-none backdrop-blur-sm border border-white/10 z-50"
        aria-label="Anterior"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        disabled={slide === TOTAL_SLIDES - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition disabled:opacity-0 disabled:pointer-events-none backdrop-blur-sm border border-white/10 z-50"
        aria-label="Próximo"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === slide ? "w-6 h-2 bg-[#00a651]" : "w-2 h-2 bg-white/25 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Contador */}
      <div className="fixed top-5 right-6 text-white/30 text-xs font-bold tabular-nums z-50">
        {String(slide + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
      </div>
    </div>
  );
}
