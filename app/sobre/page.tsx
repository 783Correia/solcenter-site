import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Sobre a Solcenter — Energia Solar no Noroeste Gaúcho",
  description:
    "Fundada em 2016, a Solcenter já entregou mais de 1.400 projetos de energia solar no RS. Conheça nossa história, missão, visão e valores.",
  alternates: { canonical: "https://www.solcenter.com.br/sobre" },
  openGraph: { url: "https://www.solcenter.com.br/sobre" },
};

const timeline = [
  {
    year: "2016",
    title: "O sonho vira empresa",
    text: "Em agosto de 2016, pelas mãos de Cleiton Giorgio Holz, nasce a Solcenter Soluções em Energia em Campina das Missões, no noroeste do Rio Grande do Sul — num momento em que a energia fotovoltaica ainda era restrita e desconhecida para a maioria das pessoas.",
  },
  {
    year: "2020",
    title: "Nova sede em Santo Cristo",
    text: "A Solcenter transfere sua sede administrativa e de armazenagem para Santo Cristo/RS, ampliando a estrutura de atendimento, suporte e logística para toda a região.",
  },
  {
    year: "Hoje",
    title: "Referência no RS",
    text: "Um time de consultores, engenheiros e técnicos executa projetos fotovoltaicos nos mais diversos setores — são mais de 1.400 projetos executados e homologados em todo o estado do Rio Grande do Sul.",
  },
];

const valores = [
  {
    title: "Ética que guia",
    text: "Agimos com integridade em todas as relações, valorizando a transparência, o respeito e a responsabilidade em cada decisão.",
  },
  {
    title: "Cliente no centro",
    text: "Entregamos mais do que soluções: buscamos entender e superar expectativas, cultivando confiança e proximidade.",
  },
  {
    title: "Resultados que geram impacto",
    text: "Somos movidos por entregas que fazem a diferença, com foco em eficiência, economia e transformação real.",
  },
  {
    title: "Compromisso que vira ação",
    text: "Cumprimos o que prometemos. Nosso comprometimento se reflete em atitude, agilidade e responsabilidade no dia a dia.",
  },
  {
    title: "Conhecimento que evolui",
    text: "Acreditamos no aprendizado contínuo como ferramenta para inovar, melhorar processos e entregar com excelência.",
  },
  {
    title: "Espírito de dono",
    text: "Agimos com responsabilidade. Valorizamos cada detalhe com visão de futuro, zelo e orgulho por fazer parte dessa jornada.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-white pt-36 pb-4">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Sobre nós
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-[#0a1628] leading-[1.05] tracking-[-0.03em] mb-4 max-w-2xl">
              Uma história movida{" "}
              <span className="text-[#0a1628]/30">pela energia do sol</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed max-w-xl font-light">
              A Solcenter nasceu do sonho de levar a geração da própria energia
              elétrica a qualquer pessoa — na residência, na empresa ou na
              propriedade rural.
            </p>
          </div>
        </section>

        <About />

        {/* Nossa História — timeline */}
        <section className="bg-[#f7f8f9] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-14">
              <div>
                <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  Nossa história
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black text-[#0a1628] leading-[1.1] tracking-[-0.03em]">
                  De Campina das Missões{" "}
                  <span className="text-[#0a1628]/30">para todo o RS</span>
                </h2>
              </div>
              <p className="text-gray-400 text-base leading-relaxed font-light lg:pt-10">
                Transformamos a energia do sol — fonte inesgotável e limpa — em
                energia elétrica que alimenta residências e empresas que anseiam
                por um futuro sustentável, com economia imediata e contínua.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((t) => (
                <div key={t.year} className="bg-white border border-gray-100 rounded-2xl p-8">
                  <div className="text-3xl font-black text-[#00a651] tracking-tight mb-3">{t.year}</div>
                  <h3 className="text-[#0a1628] font-bold text-base mb-3">{t.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
            <div className="bg-[#0a1628] rounded-2xl p-10">
              <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Nossa missão
              </p>
              <p className="text-white text-xl font-bold leading-relaxed">
                Criar oportunidades para uma vida mais consciente e leve, unindo
                tecnologia, atenção e propósito em cada entrega.
              </p>
            </div>
            <div className="bg-[#f7f8f9] border border-gray-100 rounded-2xl p-10">
              <p className="text-[#00a651] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Nossa visão
              </p>
              <p className="text-[#0a1628] text-xl font-bold leading-relaxed">
                Ser reconhecida como uma marca que transforma realidades,
                promovendo acesso, autonomia e confiança em soluções
                sustentáveis e inovadoras.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-[#f7f8f9] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Nossos valores
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black text-[#0a1628] leading-[1.1] tracking-[-0.03em] max-w-xl">
                O que guia cada projeto{" "}
                <span className="text-[#0a1628]/30">que entregamos</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valores.map((v, i) => (
                <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-8">
                  <div className="w-9 h-9 rounded-lg bg-[#00a651]/10 text-[#00a651] font-black text-sm flex items-center justify-center mb-5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-base mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
