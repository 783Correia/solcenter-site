import { MapPin, Phone, Mail } from "lucide-react";
import { site } from "../data/site";

const navLinks = [
  { label: "A Solcenter", href: "#sobre" },
  { label: "Soluções", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f7f8f9] border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-[#f5c518] font-black text-2xl tracking-tight">SOL</span>
              <span className="text-[#0a1628] font-bold text-2xl tracking-tight">CENTER</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Com mais de 10 anos no mercado, a Solcenter tem experiência e compromisso para oferecer as melhores soluções em energia solar no Noroeste Gaúcho.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00a651] transition-colors text-sm">Instagram</a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00a651] transition-colors text-sm">Facebook</a>
              <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00a651] transition-colors text-sm">YouTube</a>
            </div>
          </div>

          <div>
            <h4 className="text-[#0a1628] font-bold text-sm mb-5 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-[#00a651] transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#0a1628] font-bold text-sm mb-5 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#00a651]" />
                <a href={`tel:${site.phone}`} className="hover:text-[#00a651] transition-colors">{site.phone}</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#00a651]" />
                <a href={`tel:${site.phoneGiovani}`} className="hover:text-[#00a651] transition-colors">{site.phoneGiovani}</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#00a651]" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail size={14} className="mt-0.5 shrink-0 text-[#00a651]" />
                <a href={`mailto:${site.email}`} className="hover:text-[#00a651] transition-colors">{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Solcenter Soluções em Energia. Todos os direitos reservados.</p>
          <p className="text-gray-300 text-xs">Santo Cristo / RS</p>
        </div>
      </div>
    </footer>
  );
}
