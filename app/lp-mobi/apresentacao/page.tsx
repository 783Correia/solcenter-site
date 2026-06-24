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
  Maximize2,
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
  { label: "Preta", hex: "#1a1a1a", studio: "/mobi/evox/preta-1.webp", badge: "Mais vendida" },
  { label: "Azul / Prata", hex: "#1e4d8c", studio: "/mobi/evox/azul-1.webp", badge: null },
  { label: "Vermelha / Prata", hex: "#c0392b", studio: "/mobi/evox/vermelha-1.webp", badge: "Novidade" },
  { label: "Branca", hex: "#d0d0d0", studio: "/mobi/evox/branca-1.webp", badge: null },
];

// Curadoria dos melhores detalhes reais — variedade + apelo de venda
const DETALHES = [
  { src: "/mobi/real/detalhe-4.jpg", alt: "Bateria de lítio removível" },
  { src: "/mobi/real/detalhe-2.jpg", alt: "Painel digital" },
  { src: "/mobi/real/detalhe-1.jpg", alt: "Porta-objetos com tomada de recarga" },
  { src: "/mobi/real/detalhe-3.jpg", alt: "Roda e freio a disco" },
  { src: "/mobi/real/detalhe-7.jpg", alt: "Lanterna LED e selo sem CNH" },
  { src: "/mobi/real/detalhe-9.jpg", alt: "Baú traseiro com espaço interno" },
];

const DIFERENCIAIS = [
  { icon: IdCard, title: "Sem CNH", desc: "Qualquer cliente compra e sai pilotando. Seu público de venda triplica." },
  { icon: BadgeDollarSign, title: "Sem IPVA", desc: "Zero imposto anual. Argumento de economia que fecha na hora." },
  { icon: Shield, title: "Sem emplacamento", desc: "Sem cartório, sem burocracia. Comprou, levou — venda rápida." },
  { icon: Leaf, title: "100% elétrica", desc: "Custo por km irrisório. O cliente faz a conta e decide sozinho." },
];

const OPORTUNIDADE = [
  { icon: BadgeDollarSign, title: "Margem atrativa", desc: "Ticket acessível com margem cheia. Volume que compensa o giro." },
  { icon: Package, title: "Pronta-entrega", desc: "Estoque disponível. Sem espera e sem importação travada." },
  { icon: Shield, title: "Suporte de verdade", desc: "Garantia, assistência técnica e reposição de peças por trás." },
  { icon: Zap, title: "Venda facilitada", desc: "Você revende, a gente entrega o argumento — inclusive esta apresentação." },
];

// Capa — motos passando em carrossel automático
const CAPA_IMGS = [
  "/mobi/evox/branca-3.webp",
  "/mobi/evox/azul-3.webp",
  "/mobi/evox/vermelha-3.webp",
  "/mobi/evox/preta-3.webp",
];

const TOTAL_SLIDES = 9;

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
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [capaIdx, setCapaIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCapaIdx((i) => (i + 1) % CAPA_IMGS.length), 3500);
    return () => clearInterval(t);
  }, []);

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
        <div className="w-full h-full relative overflow-hidden">
          {CAPA_IMGS.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="EVOX Solcenter Mobi"
              fill
              priority={i === 0}
              className="object-cover transition-opacity duration-1000 ease-in-out"
              style={{ objectPosition: "58% center", opacity: capaIdx === i ? 1 : 0 }}
              sizes="100vw"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d18] via-[#060d18]/75 to-[#060d18]/25 z-10 pointer-events-none" />
          {/* indicador de cores da capa */}
          <div className="absolute bottom-8 right-8 z-20 flex gap-2">
            {CAPA_IMGS.map((src, i) => (
              <span
                key={src}
                className={`h-1.5 rounded-full transition-all duration-300 ${capaIdx === i ? "w-5 bg-[#00a651]" : "w-1.5 bg-white/30"}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center px-12 md:px-24 z-20">
            <div className="max-w-lg">
              <Image src="/logo-mobi.svg" alt="Solcenter Mobi" width={160} height={40} className="mb-10 brightness-0 invert opacity-70" />
              <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-4">Linha de Revenda · Mobilidade Elétrica</p>
              <h1 className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.88] tracking-[-0.04em] mb-6">
                EVOX<br /><span className="text-[#00a651]">1000W</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                O produto elétrico que gira<br />rápido no seu showroom.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Slide 1 — O Produto ─────────────────────── */}
      {slide === 1 && (
        <div className="w-full h-full relative overflow-hidden">
          <Image src="/mobi/evox/azul-3.webp" alt="EVOX Azul / Prata" fill className="object-cover" style={{ objectPosition: '72% center' }} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d18] via-[#060d18]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 flex items-center px-12 md:px-24 z-20">
            <div className="max-w-md">
              <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-4">O produto</p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-[-0.03em] leading-tight mb-5">
                Vende antes de você abrir a boca.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Motor brushless 1000W, bateria de lítio removível e visual que para o cliente na vitrine. Pouca objeção, giro rápido.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Motor Brushless", "Bateria Removível", "4 Cores", "Até 200 kg"].map((t) => (
                  <span key={t} className="bg-[#00a651]/15 text-[#00a651] text-xs font-bold px-4 py-2 rounded-full border border-[#00a651]/20">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Slide 2 — Cores ─────────────────────────── */}
      {slide === 2 && (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16 relative">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Mix de showroom</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-1">4 cores. 4 perfis de cliente cobertos.</h2>
          <p className="text-white/50 text-sm mb-8 text-center">Preta gira sozinha, vermelha não fica em estoque. Clique numa moto pra ampliar.</p>

          <div className="grid grid-cols-4 gap-4 w-full max-w-5xl">
            {CORES.map((cor) => (
              <button
                key={cor.label}
                onClick={() => setLightbox(cor.studio)}
                className="group relative flex flex-col items-center rounded-2xl border-2 border-white/10 bg-black/30 pt-3 pb-5 px-3 transition-all duration-200 hover:border-[#00a651] hover:bg-[#00a651]/10"
              >
                {cor.badge && (
                  <span className="absolute top-2 right-2 z-10 bg-[#00a651] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {cor.badge}
                  </span>
                )}
                <div className="relative w-full h-44 mb-3 rounded-xl overflow-hidden">
                  <Image
                    src={cor.studio}
                    alt={cor.label}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/30">
                    <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0a1628] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <Maximize2 size={13} /> Ampliar
                    </span>
                  </div>
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
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-1">Acabamento que justifica o preço no balcão.</h2>
          <p className="text-white/50 text-sm mb-8 text-center">Qualidade que reduz troca e garantia — e fecha a venda na hora. Clique pra ampliar.</p>
          <div className="grid grid-cols-3 gap-3 w-full max-w-3xl">
            {DETALHES.map(({ src, alt }) => (
              <button
                key={src}
                onClick={() => setLightbox(src)}
                className="relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-[#00a651]/50 transition-all hover:scale-[1.02]"
              >
                <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 33vw, 250px" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Slide 4 — Specs ─────────────────────────── */}
      {slide === 4 && (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Ficha técnica</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-10">As respostas do cliente — todas prontas.</h2>
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
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Munição de venda</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-2 text-center max-w-xl leading-tight">
            Quatro argumentos que fecham a venda sozinhos.
          </h2>
          <p className="text-white/50 text-sm mb-10 text-center">Você não precisa convencer. É só apresentar.</p>
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
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">Argumento de fechamento</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-2 text-center leading-tight">
            O comparativo que fecha a venda no balcão.
          </h2>
          <p className="text-white/50 text-sm mb-10 text-center">Gasolina a R$6,50 contra R$0,02/km de energia. O cliente faz a conta e decide.</p>
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

      {/* ── Slide 7 — Oportunidade de Revenda ───────── */}
      {slide === 7 && (
        <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.3em] mb-3">A oportunidade</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.03em] mb-2 text-center leading-tight">
            Uma linha pronta pra girar no seu showroom.
          </h2>
          <p className="text-white/50 text-sm mb-10 text-center">Não é só vender uma scooter. É entrar numa categoria que só cresce — com a estrutura toda por trás.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
            {OPORTUNIDADE.map(({ icon: Icon, title, desc }) => (
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

      {/* ── Slide 8 — Encerramento ──────────────────── */}
      {slide === 8 && (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060d18]/60 pointer-events-none z-10" />
          <div className="absolute inset-0 w-full h-full">
            <Image src="/mobi/evox/preta-2.webp" alt="EVOX" fill className="object-cover object-center opacity-30" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[#060d18]/55 z-[5] pointer-events-none" />
          <div className="relative z-20 text-center px-8">
            <Image src="/logo-mobi.svg" alt="Solcenter Mobi" width={220} height={56} className="mx-auto mb-6 brightness-0 invert" />
            <p className="text-[clamp(1.5rem,3vw,2.25rem)] font-black tracking-[-0.02em] mb-4">Seja uma revenda <span className="text-[#00a651]">Solcenter Mobi</span>.</p>
            <p className="text-white/50 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">Vamos montar seu primeiro pedido e o mix ideal pro seu balcão.</p>
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
