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
  Star,
  MapPin,
} from "lucide-react";
import { site } from "../data/site";

const WHATSAPP = site.whatsappLink;

const COLORS = [
  { id: "preta", label: "Preta", hex: "#2a2a2a", img: "/mobi/preta-1.png", badge: "Mais vendida" },
  { id: "azul", label: "Azul", hex: "#1e4d8c", img: "/mobi/azul-1.png", badge: null },
  { id: "cinza", label: "Cinza", hex: "#7e7e7e", img: "/mobi/cinza-1.png", badge: null },
  { id: "vermelho", label: "Vermelha", hex: "#b52020", img: "/mobi/vermelho-1.png", badge: "Novidade" },
];

const SPECS = [
  { icon: Battery, label: "Autonomia", value: "até 120 km" },
  { icon: Gauge, label: "Velocidade", value: "até 70 km/h" },
  { icon: Zap, label: "Recarga", value: "4 a 6 horas" },
  { icon: Package, label: "Capacidade", value: "150 kg" },
];

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
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
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
        <p className="text-gray-500 text-sm">Abrimos o WhatsApp. Nossa equipe retorna em até 24h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Nome</label>
        <input
          name="name"
          type="text"
          required
          placeholder="Seu nome completo"
          className="w-full bg-[#f7f8f9] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Empresa</label>
          <input
            name="company"
            type="text"
            required
            placeholder="Nome da empresa"
            className="w-full bg-[#f7f8f9] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">WhatsApp</label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="(55) 99999-9999"
            className="w-full bg-[#f7f8f9] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a1628] placeholder-gray-300 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Interesse</label>
        <select
          name="type"
          required
          className="w-full bg-[#f7f8f9] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#00a651] focus:bg-white transition"
        >
          <option value="">Selecione seu interesse</option>
          <option value="revenda — quero ter modelos em minha loja">Revenda — quero ter modelos na minha loja</option>
          <option value="frota — preciso de motos elétricas para minha operação">Frota — preciso de motos para minha operação</option>
          <option value="distribuição regional dos modelos">Distribuição regional</option>
          <option value="mais informações sobre os modelos">Quero mais informações</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-[#00a651] text-white font-black py-4 rounded-xl hover:bg-[#00c060] transition text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
      >
        Falar com consultor comercial
        <ArrowRight size={16} />
      </button>
      <p className="text-center text-[11px] text-gray-400">Atendimento B2B · Retorno em até 24h</p>
    </form>
  );
}

export default function LPMobi() {
  const [activeColor, setActiveColor] = useState(COLORS[0]);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* NAV */}
      <nav className="bg-[#0a1628] px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#00a651] rounded-lg flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <span className="text-white font-black text-base tracking-tight leading-none block">
              Sol Center <span className="text-[#00a651]">Mobi</span>
            </span>
            <span className="text-white/30 text-[10px] tracking-widest uppercase leading-none">Mobilidade Elétrica</span>
          </div>
        </div>
        <a
          href={`tel:${site.phone}`}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 transition px-4 py-2 rounded-full text-white/70 text-xs font-medium hover:text-white"
        >
          <Phone size={13} />
          {site.phone}
        </a>
      </nav>

      {/* HERO */}
      <section className="bg-[#0a1628] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[640px] lg:min-h-[700px]">

          {/* copy */}
          <div className="px-8 lg:px-14 py-14 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#00a651]/10 border border-[#00a651]/20 rounded-full px-3 py-1.5 mb-6 w-fit">
              <div className="w-1.5 h-1.5 bg-[#00a651] rounded-full animate-pulse" />
              <span className="text-[#00a651] text-[11px] font-bold uppercase tracking-[0.15em]">B2B · Revendas & Frotas</span>
            </div>
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-white leading-[0.92] tracking-[-0.03em] mb-5">
              A moto elétrica<br />
              que faz o seu<br />
              <span className="text-[#00a651]">negócio andar.</span>
            </h1>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-md">
              A Sol Center Mobi fornece motos elétricas para{" "}
              <strong className="text-white/80">revendas, frotas e operações delivery</strong> no Sul do Brasil.
              Produto, suporte técnico e logística — você só foca em vender.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { v: "10", label: "anos em mobilidade" },
                { v: "4", label: "cores disponíveis" },
                { v: "B2B", label: "foco comercial" },
                { v: "RS", label: "com suporte local" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-[#00a651] leading-none">{s.v}</div>
                  <div className="text-[11px] text-white/35 uppercase tracking-wide mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-[#00a651] text-white font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#00c060] transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/25"
              >
                Quero ser revendedor
                <ArrowRight size={15} />
              </a>
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-white/20 transition"
              >
                Montar frota elétrica
              </a>
            </div>
          </div>

          {/* produto + color picker */}
          <div className="relative order-1 lg:order-2 bg-gradient-to-br from-[#edf1f5] to-[#dfe5ec] flex flex-col items-center justify-end overflow-hidden">
            {activeColor.badge && (
              <div className="absolute top-5 right-5 bg-[#f5c518] text-[#0a1628] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest z-10">
                {activeColor.badge}
              </div>
            )}
            <div className="relative w-full max-w-sm flex-1 flex items-end justify-center mt-8">
              <Image
                src={activeColor.img}
                alt={`Moto elétrica Sol Center Mobi — ${activeColor.label}`}
                width={380}
                height={440}
                className="object-contain object-bottom drop-shadow-2xl transition-all duration-300"
                priority
              />
            </div>
            <div className="w-full bg-white/70 backdrop-blur-sm border-t border-white/80 px-6 py-5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 text-center">
                Escolha a cor
              </p>
              <div className="flex items-center justify-center gap-5">
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveColor(c)}
                    className="flex flex-col items-center gap-1.5 transition-all"
                    aria-label={`Ver cor ${c.label}`}
                  >
                    <div
                      className={`w-9 h-9 rounded-full border-2 transition-all duration-200 ${
                        activeColor.id === c.id
                          ? "scale-110 border-white shadow-lg ring-2 ring-offset-1 ring-[#00a651]"
                          : "border-white/60 hover:scale-105 hover:border-white"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                    <span
                      className={`text-[10px] font-semibold transition ${
                        activeColor.id === c.id ? "text-[#0a1628]" : "text-gray-400"
                      }`}
                    >
                      {c.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#060d18] px-6 py-5">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { icon: Shield, t: "10 anos de operação" },
            { icon: MapPin, t: "Sul do Brasil" },
            { icon: Wrench, t: "Suporte técnico incluso" },
            { icon: Package, t: "Logística gerenciada" },
            { icon: Star, t: "Parceiro de negócio real" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-2 text-white/40 text-xs font-medium">
              <Icon size={13} className="text-[#00a651]" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">Para quem é</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Dois modelos de negócio.<br />Um produto comprovado.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Revendas */}
            <div className="group rounded-3xl overflow-hidden border border-gray-100 hover:border-[#00a651]/30 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#14253d] p-8 flex items-end justify-between min-h-[200px]">
                <div>
                  <div className="w-12 h-12 bg-[#00a651] rounded-2xl flex items-center justify-center mb-4">
                    <Package size={22} className="text-white" />
                  </div>
                  <h3 className="font-black text-white text-2xl leading-tight">
                    Para<br />Revendas
                  </h3>
                </div>
                <Image
                  src="/mobi/preta-1.png"
                  alt="Moto elétrica para revenda"
                  width={110}
                  height={140}
                  className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300 self-end"
                />
              </div>
              <div className="p-7 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Tem uma loja de motos, bicicletas, equipamentos ou multi-marcas? Adicione motos elétricas ao portfólio. A Sol Center Mobi cuida de suporte técnico, pós-venda e reposição — você só vende.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Modelos testados e aprovados no mercado sul-brasileiro",
                    "Suporte técnico e pós-venda pela Sol Center — não pela sua loja",
                    "Margem atrativa por unidade vendida",
                    "Treinamento da equipe de vendas incluso",
                    "Sem necessidade de investir em grande estoque inicial",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-[#00a651] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#formulario"
                  className="flex items-center gap-1.5 text-[#00a651] text-sm font-bold hover:gap-2.5 transition-all"
                >
                  Quero ser revendedor <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Frotas */}
            <div className="group rounded-3xl overflow-hidden border border-gray-100 hover:border-[#00a651]/30 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#003d1f] to-[#00a651] p-8 flex items-end justify-between min-h-[200px]">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingDown size={22} className="text-white" />
                  </div>
                  <h3 className="font-black text-white text-2xl leading-tight">
                    Para<br />Frotas
                  </h3>
                </div>
                <Image
                  src="/mobi/azul-1.png"
                  alt="Moto elétrica para frota"
                  width={110}
                  height={140}
                  className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300 self-end"
                />
              </div>
              <div className="p-7 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Delivery, logística urbana, mobilidade de equipe? Motos elétricas reduzem custo operacional por km em até 80% comparado às motos a combustão. Sem gasolina, sem óleo, sem complicação.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Custo por km até 80% menor que moto a combustão",
                    "Zero abastecimento de gasolina — carrega na tomada 110/220V",
                    "Manutenção muito mais simples (sem óleo, correia, velas)",
                    "Suporte técnico dedicado para sua frota",
                    "Condições especiais para volume e pagamento",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-[#00a651] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#formulario"
                  className="flex items-center gap-1.5 text-[#00a651] text-sm font-bold hover:gap-2.5 transition-all"
                >
                  Montar frota elétrica <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST COMPARISON */}
      <section className="px-6 py-20 bg-[#f7f8f9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">Vantagem de custo</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Os números não mentem.
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
              Para frota com 2.000 km/mês por moto, a economia começa no primeiro mês.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-6">

            {/* Combustão */}
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl">⛽</div>
                <div>
                  <p className="font-black text-[#0a1628] text-sm">Moto a combustão</p>
                  <p className="text-gray-400 text-xs">Custo por moto / mês</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Combustível (2.000 km × R$0,30/km)", val: "R$ 600" },
                  { label: "Manutenção preventiva (média)", val: "R$ 180" },
                  { label: "Óleo, filtros, correias, velas", val: "R$ 80" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex justify-between items-center text-sm border-b border-gray-50 pb-2.5"
                  >
                    <span className="text-gray-500 text-xs max-w-[200px]">{r.label}</span>
                    <span className="font-bold text-[#0a1628]">{r.val}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-1">
                  <span className="font-black text-sm text-[#0a1628]">Total mensal</span>
                  <span className="font-black text-2xl text-red-500">R$ 860</span>
                </div>
              </div>
            </div>

            {/* Elétrica */}
            <div className="bg-white rounded-2xl p-7 border-2 border-[#00a651] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#00a651] text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wide">
                Economia real
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-xl flex items-center justify-center text-xl">⚡</div>
                <div>
                  <p className="font-black text-[#0a1628] text-sm">Moto elétrica Sol Center</p>
                  <p className="text-gray-400 text-xs">Custo por moto / mês</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Energia elétrica (2.000 km × R$0,04/km)", val: "R$ 80" },
                  { label: "Manutenção (muito reduzida)", val: "R$ 40" },
                  { label: "Sem óleo, sem velas, sem correia", val: "R$ 0" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex justify-between items-center text-sm border-b border-gray-50 pb-2.5"
                  >
                    <span className="text-gray-500 text-xs max-w-[200px]">{r.label}</span>
                    <span className="font-bold text-[#0a1628]">{r.val}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-1">
                  <span className="font-black text-sm text-[#0a1628]">Total mensal</span>
                  <span className="font-black text-2xl text-[#00a651]">R$ 120</span>
                </div>
              </div>
            </div>
          </div>

          {/* highlight */}
          <div className="bg-[#0a1628] rounded-2xl p-8 text-center">
            <p className="text-white/50 text-sm mb-2">Economia por moto / mês</p>
            <p className="text-[clamp(3rem,8vw,5rem)] font-black text-[#00a651] leading-none mb-3">R$ 740</p>
            <p className="text-white/40 text-sm">
              Frota de 5 motos →{" "}
              <strong className="text-white/70">R$ 3.700/mês de economia</strong>
              {"  ·  "}
              Frota de 10 →{" "}
              <strong className="text-white/70">R$ 7.400/mês</strong>
            </p>
          </div>
        </div>
      </section>

      {/* PRODUTO — SPECS */}
      <section className="px-6 py-20 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">O produto</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white tracking-tight">
              Feita para trabalhar todo dia.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div
              className="relative bg-gradient-to-br from-[#edf1f5] to-[#dfe5ec] rounded-3xl overflow-hidden flex items-end justify-center"
              style={{ height: "420px" }}
            >
              <Image
                src="/mobi/cinza-1.png"
                alt="Moto elétrica Sol Center Mobi — especificações"
                width={340}
                height={420}
                className="object-contain object-bottom"
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {SPECS.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
                  >
                    <Icon size={20} className="text-[#00a651] mb-3" />
                    <p className="text-white font-black text-xl leading-none mb-1">{value}</p>
                    <p className="text-white/40 text-xs uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
                <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold mb-3">
                  Disponível em 4 cores
                </p>
                <div className="flex items-center gap-4">
                  {COLORS.map((c) => (
                    <div key={c.id} className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-full border border-white/20"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-white/45 text-xs">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-white/25 text-xs">
                * Especificações técnicas completas disponíveis com nosso consultor comercial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE SOL CENTER MOBI */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-3">Por que a Sol Center Mobi</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#0a1628] tracking-tight">
              Você vende. A gente cuida do resto.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Users,
                title: "10 anos em mobilidade elétrica",
                desc: "Operamos no mercado de mobilidade elétrica há mais de uma década no Sul do Brasil. Conhecemos os modelos, os fornecedores e as necessidades de cada perfil de cliente.",
              },
              {
                icon: Wrench,
                title: "Suporte técnico pós-venda",
                desc: "Seu cliente comprou na sua loja — mas o suporte técnico é responsabilidade da Sol Center Mobi. Você fecha a venda com respaldo de quem entende do produto.",
              },
              {
                icon: Package,
                title: "Logística e reposição",
                desc: "Sem dor de cabeça com armazenagem ou controle de estoque. A Sol Center Mobi cuida da logística de entrega e reposição para sua operação.",
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

      {/* FORM */}
      <section id="formulario" className="px-6 py-20 bg-[#f7f8f9]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-4">Atendimento comercial</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#0a1628] tracking-tight leading-tight mb-5">
              Pronto para ampliar seu portfólio ou montar uma frota?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Nossa equipe atende exclusivamente B2B — revendas, frotas e operadores. Sem enrolação, com respostas objetivas e proposta real para o seu volume.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Atendimento dedicado ao seu perfil de negócio",
                "Retorno em até 24 horas úteis",
                "Proposta com condições reais para seu volume",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-[#00a651] shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-5 pt-6 border-t border-gray-200">
              <Image
                src="/mobi/vermelho-1.png"
                alt="Sol Center Mobi"
                width={80}
                height={100}
                className="object-contain drop-shadow"
              />
              <div>
                <p className="font-black text-[#0a1628]">Sol Center Mobi</p>
                <p className="text-gray-400 text-xs mb-1">Santo Cristo — RS · Sul do Brasil</p>
                <a
                  href={`tel:${site.phone}`}
                  className="text-[#00a651] text-sm font-bold hover:underline"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <p className="text-[#0a1628] font-black text-xl mb-1">Fale com um consultor</p>
            <p className="text-gray-400 text-sm mb-6">Preencha abaixo e abrimos o WhatsApp direto com você.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#060d18] px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#00a651] rounded-lg flex items-center justify-center">
              <Zap size={13} className="text-white" />
            </div>
            <span className="text-white/50 text-sm">
              Sol Center <strong className="text-white/70">Mobi</strong>
            </span>
          </div>
          <p className="text-white/25 text-xs text-center">{site.address} · {site.phone}</p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="text-[#00a651] text-xs font-bold hover:underline"
          >
            WhatsApp comercial →
          </a>
        </div>
      </footer>
    </div>
  );
}
