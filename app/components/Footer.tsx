import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-[#060e1a] border-t border-white/8 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#00a651] font-black text-lg">SOL</span>
              <span className="text-white font-bold text-lg">CENTER</span>
            </div>
            <p className="text-gray-500 text-sm">{site.address}</p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#00a651] transition-colors">Instagram</a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#00a651] transition-colors">Facebook</a>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#00a651] transition-colors">YouTube</a>
          </div>

          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Solcenter. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
