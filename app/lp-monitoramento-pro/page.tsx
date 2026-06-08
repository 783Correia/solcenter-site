"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Activity,
  Droplets,
  Wrench,
  Shield,
  AlertTriangle,
  TrendingDown,
  Zap,
  Clock,
  Star,
  Plus,
  Minus,
  Sun,
  Eye,
  Umbrella,
} from "lucide-react";
import { site } from "../data/site";
import SubFooterCTA from "../components/SubFooterCTA";

const WHATSAPP = site.whatsappLinkGiovani;

function useInView(threshold = 0.15) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
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
    const tipo = (f.elements.namedItem("tipo") as HTMLSelectElement).value;
    const tempo = (f.elements.namedItem("tempo") as HTMLSelectElement).value;
    const msg = encodeURIComponent(
      `Olá! Me chamo ${name}, moro em ${city} e tenho interesse no Monitoramento PRO. Tenho um sistema ${tipo} instalado há ${tempo}. WhatsApp: ${phone}`
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
        <p className="text-white/50 text-sm mt-1">
          Abrimos o WhatsApp. Retornamos em minutos.
        </p>
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
        className="glass-input"
      />
      <input
        name="phone"
        type="tel"
        required
        placeholder="WhatsApp"
        className="glass-input"
      />
      <input
        name="city"
        type="text"
        required
        placeholder="Cidade"
        className="glass-input"
      />
      <select name="tipo" required className="glass-input">
        <option value="">Tipo de instalação</option>
        <option value="residencial">Residencial</option>
        <option value="comercial">Comercial / Empresarial</option>
        <option value="rural">Rural / Agronegócio</option>
      </select>
      <select name="tempo" required className="glass-input">
        <option value="">Há quanto tempo foi instalado?</option>
        <option value="menos de 1 ano">Menos de 1 ano</option>
        <option value="1 a 2 anos">1 a 2 anos</option>
        <option value="2 a 4 anos">2 a 4 anos</option>
        <option value="mais de 4 anos">Mais de 4 anos</option>
      </select>
      <button
        type="submit"
        className="w-full bg-[#FFB100] text-white font-black py-4 rounded-xl hover:bg-[#e6a000] transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FFB100]/30 hover:-translate-y-0.5 animate-pulse-amber cursor-pointer"
      >
        Quero proteger meu sistema
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

export default function LPMonitoramentoPro() {
  const { ref: problemRef, inView: problemInView } = useInView();
  const { ref: servicosRef, inView: servicosInView } = useInView();
  const { ref: proofRef, inView: proofInView } = useInView();
  const { ref: trustRef, inView: trustInView } = useInView();

  return (
    <div className="min-h-screen font-sans antialiased">

      {/* ─── NAV DESKTOP ────────────────────────────── */}
      <div className="hidden md:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-4 bg-white/80 backdrop-blur-md shadow-sm shadow-black/5 border border-white/80 rounded-full px-5 py-2.5">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer"
          >
            <Image src="/logo-dark.svg" alt="SolCenter" width={110} height={23} />
          </a>
          <div className="w-px h-4 bg-gray-200" />
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 hover:text-[#25D366] transition text-xs font-medium cursor-pointer"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
          <div className="w-px h-4 bg-gray-200" />
          <a
            href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+539+Santo+Cristo+RS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 hover:text-[#0a1628] transition text-xs font-medium cursor-pointer"
          >
            <MapPin size={14} />
            Santo Cristo, RS
          </a>
        </nav>
      </div>

      {/* ─── NAV MOBILE ─────────────────────────────── */}
      <div className="md:hidden fixed bottom-5 inset-x-0 z-50 flex justify-center">
        <nav className="flex items-center gap-1 bg-white/90 backdrop-blur-md shadow-lg shadow-black/10 border border-white/80 rounded-full px-3 py-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-3 cursor-pointer"
          >
            <Image src="/logo-dark.svg" alt="SolCenter" width={80} height={17} />
          </a>
          <div className="w-px h-5 bg-gray-200 mx-1" />
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#25D366]/10 transition cursor-pointer"
          >
            <MessageCircle size={20} className="text-[#25D366]" />
          </a>
          <a
            href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+539+Santo+Cristo+RS"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-amber-50 transition cursor-pointer"
          >
            <MapPin size={20} className="text-[#FFB100]" />
          </a>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* 1. HERO — dark                                  */}
      {/* ═══════════════════════════════════════════════ */}
      <section
        id="formulario"
        className="relative min-h-[100dvh] flex items-center overflow-hidden"
      >
        <Image
          src="/images/hero-monitoramento.jpg"
          alt="Equipe técnica SolCenter realizando manutenção em painéis solares"
          fill
          className="object-cover object-left-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d18]/96 via-[#060d18]/80 to-[#060d18]/40" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#FFB100]/5 rounded-full blur-3xl pointer-events-none animate-glow-amber" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#FFB100]/10 border border-[#FFB100]/25 rounded-full px-4 py-1.5 mb-6 w-fit">
              <Activity size={13} className="text-[#FFB100]" />
              <span className="text-[#FFB100] text-xs font-bold tracking-wide">
                Proteção completa para o seu investimento
              </span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-black text-white leading-[1.05] tracking-[-0.02em] mb-5">
              Seu sistema solar está gerando{" "}
              <span className="text-[#FFB100]">o máximo</span> que deveria?
            </h1>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
              Você instalou, investiu, e agora confia que está funcionando. O
              Monitoramento PRO garante que essa confiança seja real — com
              acompanhamento, limpeza e proteção do seu sistema.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {[
                { icon: Eye, label: "Monitoramento 24/7" },
                { icon: Droplets, label: "Limpeza periódica" },
                { icon: Wrench, label: "Visita técnica anual" },
                { icon: Shield, label: "Seguro do equipamento" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-white/60 text-xs"
                >
                  <Icon size={13} className="text-[#FFB100]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="bg-white/8 backdrop-blur-xl border border-white/12 rounded-3xl p-7 shadow-2xl">
              <p className="text-white font-black text-lg mb-1">
                Solicitar diagnóstico gratuito
              </p>
              <p className="text-white/40 text-xs mb-5">
                Nossa equipe analisa seu sistema e apresenta o plano ideal.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* fundo claro — todas as seções abaixo */}
      <div className="lp-warm">

        {/* ═══════════════════════════════════════════════ */}
        {/* 2. O PROBLEMA — diagnóstico                     */}
        {/* ═══════════════════════════════════════════════ */}
        <section ref={problemRef} className="relative px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-12">
              <div>
                <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  O problema
                </p>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] leading-tight tracking-tight">
                  Desde que instalou, você olhou
                  <br />
                  <span className="text-gray-400 font-light">
                    pro painel quantas vezes?
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                A maioria das pessoas instala e esquece. O sistema fica no
                telhado, gerando — ou não — sem dar satisfação pra ninguém.
              </p>
            </div>

            <div
              className={`grid md:grid-cols-3 gap-5 transition-all duration-700 ${
                problemInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {[
                {
                  icon: TrendingDown,
                  stat: "Silencioso",
                  titulo: "Painel sujo não avisa que tá sujo",
                  desc: "Poeira e sujeira vão cobrindo os módulos devagar. O sistema continua ligado — só que gerando menos. Você não percebe.",
                },
                {
                  icon: AlertTriangle,
                  stat: "Sem alarme",
                  titulo: "Inversor com problema não pisca vermelho",
                  desc: "Quando o inversor falha, ele simplesmente para. Sem barulho, sem sinal. Você só descobre quando a conta de luz sobe.",
                },
                {
                  icon: ShieldCheck,
                  stat: "Letra miúda",
                  titulo: "A garantia tem condição",
                  desc: "Fabricante exige comprovante de manutenção pra honrar a garantia. Sem laudo, o conserto sai do seu bolso.",
                },
              ].map(({ icon: Icon, stat, titulo, desc }) => (
                <div key={titulo} className="glass-light rounded-3xl p-7 flex flex-col gap-5">
                  <div className="w-12 h-12 bg-[#FFB100]/10 rounded-2xl flex items-center justify-center">
                    <Icon size={22} className="text-[#FFB100]" />
                  </div>
                  <div>
                    <p className="text-[clamp(1.6rem,3vw,2rem)] font-black text-[#0a1628] leading-none tracking-tight mb-2">
                      {stat}
                    </p>
                    <p className="font-bold text-[#0a1628] text-sm mb-2">{titulo}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 3. OS 4 SERVIÇOS — bento grid                   */}
        {/* ═══════════════════════════════════════════════ */}
        <section ref={servicosRef} className="relative px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                O que está incluso
              </p>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black text-[#0a1628] leading-tight tracking-tight">
                Monitoramento PRO — cobertura completa
              </h2>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                servicosInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Card featured — Monitoramento */}
              <div className="rounded-3xl p-8 flex flex-col md:flex-row gap-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 border border-[#FFB100]/30 shadow-sm">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[#FFB100]/20 rounded-2xl flex items-center justify-center mb-4">
                    <Activity size={24} className="text-[#FFB100]" />
                  </div>
                  <span className="text-[10px] font-black text-[#FFB100] uppercase tracking-widest mb-3 block">
                    Diferencial principal
                  </span>
                  <h3 className="font-black text-[#0a1628] text-xl mb-3 leading-tight">
                    Monitoramento em tempo real
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                    Você acompanha a geração do seu sistema hora a hora via app.
                    Se o sistema parar ou cair abaixo do esperado, a gente avisa
                    antes de você perceber na conta.
                  </p>
                </div>
                <div className="flex md:flex-col gap-3 md:w-44 shrink-0 justify-start md:justify-center">
                  <div className="flex-1 md:flex-none bg-white/80 rounded-2xl p-4 text-center">
                    <p className="font-black text-[#0a1628] text-2xl leading-none mb-1">24/7</p>
                    <p className="text-gray-400 text-xs">geração monitorada</p>
                  </div>
                  <div className="flex-1 md:flex-none bg-white/80 rounded-2xl p-4 text-center">
                    <p className="font-black text-[#FFB100] text-lg leading-none mb-1">Alertas</p>
                    <p className="text-gray-400 text-xs">em tempo real</p>
                  </div>
                </div>
              </div>

              {/* 3 serviços menores */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Droplets,
                    title: "Limpeza periódica",
                    desc: "Poeira, fuligem, fezes de pássaro. A gente agenda e faz — você não precisa lembrar.",
                  },
                  {
                    icon: Wrench,
                    title: "Visita técnica anual",
                    desc: "Fiação, inversor, estrutura. Detectamos o problema antes de virar prejuízo.",
                  },
                  {
                    icon: Umbrella,
                    title: "Seguro do equipamento",
                    desc: "Raio, granizo, furto, defeito elétrico. Painéis e inversor cobertos.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="glass-light rounded-3xl p-6 flex flex-col gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Icon size={18} className="text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-black text-[#0a1628] text-sm mb-2">{title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={`${WHATSAPP}?text=Olá! Tenho interesse no Monitoramento PRO da SolCenter. Quero um diagnóstico gratuito.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFB100] text-white font-black px-8 py-4 rounded-full text-sm hover:bg-[#e6a000] transition hover:-translate-y-0.5 shadow-lg shadow-[#FFB100]/25 cursor-pointer"
              >
                Quero o Monitoramento PRO <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 4. COMO FUNCIONA — 4 passos                     */}
        {/* ═══════════════════════════════════════════════ */}
        <section id="como-funciona" className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Como funciona
              </p>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black text-[#0a1628] leading-tight tracking-tight">
                Simples. Você não precisa fazer nada.
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-md">
                A SolCenter cuida de tudo — do diagnóstico inicial até a
                manutenção periódica. Você só recebe o relatório.
              </p>
            </div>

            {/* Desktop: flex com setas conectoras */}
            <div className="hidden md:flex items-start gap-2">
              {[
                { n: "01", icon: Eye, t: "Diagnóstico gratuito", d: "Você preenche o formulário. Nossa equipe analisa o histórico do sistema e identifica o plano ideal." },
                { n: "02", icon: CheckCircle, t: "Plano ativado", d: "Escolhe a cobertura. Monitoramento em tempo real começa no mesmo dia." },
                { n: "03", icon: Wrench, t: "Visitas agendadas", d: "A gente agenda limpeza e visita técnica no horário que funcionar pra você." },
                { n: "04", icon: Activity, t: "Você só recebe", d: "Relatório mensal na palma da mão. Geração, visitas e status do seguro." },
              ].map(({ n, icon: Icon, t, d }, i) => (
                <Fragment key={n}>
                  <div className="flex-1 glass-light rounded-3xl p-6 relative">
                    <span className="text-[#FFB100]/15 font-black text-5xl leading-none absolute top-3 right-4 select-none">
                      {n}
                    </span>
                    <div className="w-10 h-10 bg-[#FFB100]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={17} className="text-[#FFB100]" />
                    </div>
                    <h3 className="font-black text-[#0a1628] text-sm mb-2">{t}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{d}</p>
                  </div>
                  {i < 3 && (
                    <div className="flex items-center pt-10 shrink-0 text-[#FFB100]/30">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            {/* Mobile: grid 2x2 */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {[
                { n: "01", icon: Eye, t: "Diagnóstico gratuito", d: "Formulário → nossa equipe analisa e indica o plano." },
                { n: "02", icon: CheckCircle, t: "Plano ativado", d: "Monitoramento começa no mesmo dia da confirmação." },
                { n: "03", icon: Wrench, t: "Visitas agendadas", d: "Limpeza e vistoria no seu horário." },
                { n: "04", icon: Activity, t: "Você só recebe", d: "Relatório mensal com tudo que aconteceu." },
              ].map(({ n, icon: Icon, t, d }) => (
                <div key={n} className="glass-light rounded-2xl p-5 relative">
                  <span className="text-[#FFB100]/15 font-black text-4xl leading-none absolute top-2 right-3 select-none">{n}</span>
                  <div className="w-8 h-8 bg-[#FFB100]/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon size={15} className="text-[#FFB100]" />
                  </div>
                  <h3 className="font-black text-[#0a1628] text-xs mb-1">{t}</h3>
                  <p className="text-gray-500 text-[11px] leading-snug">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 5. PROVA SOCIAL                                  */}
        {/* ═══════════════════════════════════════════════ */}
        <section ref={proofRef} className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              O que dizem nossos clientes
            </p>
            <h2 className="text-[clamp(1.6rem,2.8vw,2.4rem)] font-black text-[#0a1628] leading-tight tracking-tight mb-10">
              Quem protege, não se arrepende.
            </h2>

            <div
              className={`transition-all duration-700 ${
                proofInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* Depoimento destaque */}
              <div className="glass-light rounded-3xl overflow-hidden mb-4">
                <div className="bg-[#FFB100] px-6 py-3 flex items-center gap-2">
                  <Star size={13} className="text-white fill-white" />
                  <span className="text-white font-black text-xs uppercase tracking-widest">
                    Depoimento em destaque
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-[#FFB100] fill-[#FFB100]"
                      />
                    ))}
                  </div>
                  <p className="text-[#0a1628] text-base font-medium leading-relaxed mb-5">
                    "Instalei o sistema há 3 anos e nunca tinha feito nenhuma
                    manutenção. Quando a SolCenter fez o diagnóstico, descobrimos
                    que os painéis estavam gerando 22% menos por causa da sujeira.
                    Depois da limpeza, a conta voltou ao que deveria ser. Aprendi a
                    lição."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#FFB100]/10 rounded-full flex items-center justify-center font-black text-[#FFB100] text-sm">
                      A
                    </div>
                    <div>
                      <p className="font-black text-[#0a1628] text-sm">
                        Antônio Machado
                      </p>
                      <p className="text-gray-400 text-xs">Horizontina, RS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`grid md:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${
                  proofInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {[
                  {
                    name: "Daniel e Neide Wermuth",
                    city: "Santo Cristo, RS",
                    text: "O monitoramento via app é fantástico. Num sábado vimos que a geração havia caído à zero — a equipe da SolCenter identificou um problema no inversor e resolveu na segunda de manhã. Sem o monitoramento, só íamos perceber na próxima conta.",
                  },
                  {
                    name: "Patrick Fernandes",
                    city: "Três de Maio, RS",
                    text: "O seguro valeu o investimento. Tivemos uma tempestade com granizo e dois painéis quebraram. A SolCenter cuidou de tudo com a seguradora. Em 15 dias estávamos gerando 100% de novo, sem gastar nada extra.",
                  },
                ].map(({ name, city, text }) => (
                  <div key={name} className="glass-light rounded-3xl p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="text-[#FFB100] fill-[#FFB100]"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      "{text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400 text-xs">
                        {name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-[#0a1628] text-xs">{name}</p>
                        <p className="text-gray-400 text-[11px]">{city}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 6. PARA QUEM É                                  */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Para quem é
              </p>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black text-[#0a1628] leading-tight tracking-tight">
                Qualquer sistema solar instalado
                <br />
                <span className="text-gray-400 font-light">
                  merece essa proteção.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  img: "/images/solar-residencial.jpg",
                  title: "Residencial",
                  desc: "Para quem investiu na conta de casa e quer garantir que o retorno previsto se concretize por 25 anos.",
                },
                {
                  img: "/images/solar-empresarial.jpg",
                  title: "Empresarial",
                  desc: "Empresas que dependem da geração para cortar custos operacionais não podem se dar ao luxo de ter falhas.",
                },
                {
                  img: "/images/solar-agro.jpg",
                  title: "Rural / Agronegócio",
                  desc: "Propriedades com irrigação e motores elétricos que precisam de geração constante e sistema sempre operacional.",
                },
              ].map(({ img, title, desc }) => (
                <div
                  key={title}
                  className="relative rounded-3xl overflow-hidden aspect-[4/3] group"
                >
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-[#0a1628]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-white font-black text-base mb-1">
                      {title}
                    </h3>
                    <p className="text-white/65 text-xs leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 7. CONFIANÇA / GARANTIAS                        */}
        {/* ═══════════════════════════════════════════════ */}
        <section ref={trustRef} className="relative px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5">

              {/* card imagem + texto */}
              <div
                className={`relative rounded-3xl overflow-hidden min-h-[280px] transition-all duration-700 ${
                  trustInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <Image
                  src="/images/about.jpg"
                  alt="Equipe técnica SolCenter"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                    Equipe própria
                  </p>
                  <h3 className="text-white font-black text-lg leading-snug">
                    +10 anos de experiência
                    <br />
                    em energia solar no RS
                  </h3>
                  <p className="text-white/60 text-xs mt-2">
                    Técnicos certificados. Mesma equipe que instalou, cuida.
                  </p>
                </div>
              </div>

              {/* 4 garantias */}
              <div
                className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-100 ${
                  trustInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {[
                  {
                    icon: Activity,
                    t: "Monitoramento ativo",
                    d: "Alerta imediato se a geração cair ou o sistema parar.",
                  },
                  {
                    icon: Droplets,
                    t: "Limpeza sem risco",
                    d: "Produto certo pra painel solar. Sem risco de dano à célula.",
                  },
                  {
                    icon: Clock,
                    t: "Retorno garantido",
                    d: "Prazo de resposta garantido pra qualquer falha identificada.",
                  },
                  {
                    icon: Umbrella,
                    t: "Seguro de verdade",
                    d: "Apólice real. Raio, granizo, furto e defeito — cobertos.",
                  },
                ].map(({ icon: Icon, t, d }) => (
                  <div
                    key={t}
                    className="glass-light rounded-2xl p-5 flex flex-col items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-[#FFB100]/10 rounded-lg flex items-center justify-center">
                      <Icon size={15} className="text-[#FFB100]" />
                    </div>
                    <div>
                      <p className="font-black text-[#0a1628] text-xs mb-1">{t}</p>
                      <p className="text-gray-400 text-xs leading-snug">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 8. FAQ                                          */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="relative px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#FFB100] text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
              Perguntas frequentes
            </p>
            <h2 className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-black text-[#0a1628] text-center mb-10">
              Dúvidas sobre o Monitoramento PRO
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "Posso contratar mesmo que o sistema não tenha sido instalado pela SolCenter?",
                  a: "Sim. O Monitoramento PRO está disponível para qualquer sistema fotovoltaico instalado na nossa região de atendimento. Antes da ativação, nossa equipe faz um diagnóstico para verificar o estado atual do equipamento.",
                },
                {
                  q: "Com que frequência os painéis são limpos?",
                  a: "A frequência recomendada é de 2 vezes por ano, podendo ser ajustada conforme a localização (áreas com mais poeira, poluição ou aves podem exigir limpeza mais frequente). O plano PRO inclui a limpeza periódica já no calendário anual.",
                },
                {
                  q: "O que exatamente o seguro cobre?",
                  a: "A apólice cobre danos causados por descarga elétrica (raio), granizo, furto e defeito elétrico nos equipamentos principais (painéis e inversores). Os detalhes exatos de cobertura e franquia são apresentados no contrato antes da assinatura.",
                },
                {
                  q: "Como funciona o monitoramento em tempo real?",
                  a: "Após a ativação, você tem acesso a um app onde acompanha a geração do sistema hora a hora. A SolCenter também monitora remotamente e envia alertas automáticos caso a geração caia abaixo do esperado — sem você precisar verificar manualmente.",
                },
                {
                  q: "Atendem fora de Santo Cristo?",
                  a: "Sim. Atendemos mais de 60 municípios no noroeste gaúcho, incluindo Horizontina, Três de Maio, Santa Rosa, Ijuí, Tucunduva e região. Entre em contato para confirmar a disponibilidade na sua cidade.",
                },
                {
                  q: "O sistema precisa estar funcionando perfeitamente para contratar?",
                  a: "Não obrigatoriamente. Nossa equipe faz o diagnóstico inicial e, caso identifique algum problema, apresenta o orçamento para correção antes de ativar o plano. Queremos garantir que você tenha o máximo desde o início.",
                },
              ].map((item) => (
                <FAQItem key={item.q} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 9. CTA FINAL                                    */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="relative px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#0a1628] rounded-3xl p-10 relative overflow-hidden">
              {/* glow blob âmbar */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FFB100]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-[#FFB100]/6 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#FFB100]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sun size={24} className="text-[#FFB100]" />
                </div>
                <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white leading-tight tracking-tight mb-4">
                  Proteja o seu investimento.
                  <br />
                  <span className="text-[#FFB100]">Antes que custe mais caro.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  Diagnóstico gratuito. Nossa equipe analisa seu sistema e apresenta
                  o plano ideal — sem compromisso.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#formulario"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("formulario")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-[#FFB100] text-white font-black px-8 py-4 rounded-full text-sm hover:bg-[#e6a000] transition hover:-translate-y-0.5 shadow-lg shadow-[#FFB100]/30 cursor-pointer"
                  >
                    Solicitar diagnóstico grátis <ArrowRight size={14} />
                  </a>
                  <a
                    href={`${WHATSAPP}?text=Olá! Quero saber mais sobre o Monitoramento PRO da SolCenter.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 font-semibold px-8 py-4 rounded-full text-sm hover:border-[#FFB100] hover:text-[#FFB100] transition cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SubFooterCTA
          whatsappHref={`${WHATSAPP}?text=Olá! Quero o diagnóstico gratuito do Monitoramento PRO.`}
        />
      </div>
    </div>
  );
}
