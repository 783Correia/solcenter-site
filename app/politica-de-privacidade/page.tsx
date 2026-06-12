import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Solcenter",
  description:
    "Saiba como a Solcenter coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei Geral de Proteção de Dados).",
  alternates: { canonical: "https://www.solcenter.com.br/politica-de-privacidade" },
  openGraph: { url: "https://www.solcenter.com.br/politica-de-privacidade" },
};

const sections = [
  {
    title: "1. Quem somos",
    body: `A Solcenter Soluções em Energia ("Solcenter", "nós") é uma empresa de energia solar com sede na Av. Dom Pedro II, 539 — Santo Cristo / RS. Somos responsáveis pelo tratamento dos dados pessoais coletados neste site (www.solcenter.com.br), na condição de controladora, nos termos da Lei nº 13.709/2018 (LGPD).`,
  },
  {
    title: "2. Quais dados coletamos",
    body: `Coletamos apenas os dados que você nos fornece voluntariamente ao preencher nossos formulários de contato e simulação: nome, telefone/WhatsApp, cidade e informações sobre seu interesse (como tipo de imóvel e valor médio da conta de energia). Também coletamos dados de navegação de forma anônima por meio do Google Analytics (páginas visitadas, tempo de visita, dispositivo e região), utilizados exclusivamente para estatísticas de uso do site.`,
  },
  {
    title: "3. Para que usamos seus dados",
    body: `Os dados informados nos formulários são usados exclusivamente para: entrar em contato com você por telefone ou WhatsApp para apresentar a proposta solicitada; elaborar a simulação ou orçamento de energia solar; e melhorar nosso atendimento. A base legal para esse tratamento é o seu consentimento (art. 7º, I, da LGPD), manifestado no envio do formulário, e a execução de procedimentos preliminares a contrato (art. 7º, V).`,
  },
  {
    title: "4. Com quem compartilhamos",
    body: `Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing. Seus dados ficam armazenados em provedores de infraestrutura contratados pela Solcenter (hospedagem do site e banco de dados), que atuam como operadores e seguem padrões de segurança de mercado. Dados podem ser compartilhados com autoridades quando exigido por lei.`,
  },
  {
    title: "5. Por quanto tempo guardamos",
    body: `Mantemos seus dados de contato pelo tempo necessário para o atendimento da sua solicitação e por período razoável posterior para histórico comercial. Você pode solicitar a exclusão a qualquer momento.`,
  },
  {
    title: "6. Seus direitos",
    body: `Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento: confirmação do tratamento, acesso aos dados, correção, anonimização, portabilidade, exclusão e revogação do consentimento. Para exercer qualquer um desses direitos, fale conosco pelos canais abaixo.`,
  },
  {
    title: "7. Cookies",
    body: `Utilizamos cookies essenciais ao funcionamento do site e cookies de estatística (Google Analytics). Você pode bloquear cookies nas configurações do seu navegador — o site continuará funcionando normalmente.`,
  },
  {
    title: "8. Contato",
    body: `Para dúvidas sobre esta política ou sobre seus dados pessoais, entre em contato: e-mail atendimento@solcenter.com.br ou telefone (55) 98449-1054. Endereço: Av. Dom Pedro II, 539 — Santo Cristo / RS.`,
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#f5c518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            {site.name}
          </p>
          <h1 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black text-[#0a1628] leading-tight tracking-[-0.03em] mb-4">
            Política de Privacidade
          </h1>
          <p className="text-gray-400 text-sm mb-12">
            Última atualização: junho de 2026
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">{s.title}</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
