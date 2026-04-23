import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Molhos", href: "#molhos" },
  { label: "Receitas", href: "#receitas" },
  { label: "Nossa História", href: "#nossa-historia" },
  { label: "Contato", href: "#contato" },
];

const info = [
  "Validade: 30 dias refrigerado",
  "6 meses embalagem fechada",
  "Sem conservantes artificiais",
  "Produção artesanal em pequenos lotes",
];

export function Footer() {
  return (
    <footer className="bg-[#3D3630] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-1">La Cucina</h3>
            <p className="text-xs tracking-[0.15em] text-white/50 uppercase mb-4">
              Molhos Artesanais
            </p>
            <p className="text-sm text-white/60 mb-2">
              Tomate, azeite, tempo e nada mais.
            </p>
            <p className="text-sm text-white/60 mb-6">
              Do nosso fogão para a sua mesa, com cuidado.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <span className="text-sm text-white/60">WhatsApp</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.2em] text-white/50 uppercase mb-4">
              Navegação
            </p>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs tracking-[0.2em] text-white/50 uppercase mb-4">
              Informações
            </p>
            <ul className="space-y-2">
              {info.map((item, index) => (
                <li key={index} className="text-sm text-white/60">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs tracking-[0.1em] text-white/40 uppercase mt-6">
              Lote / Peso / Validação
            </p>
            <p className="text-xs text-white/40">Ver rótulo do produto</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2026 La Cucina — Todos os direitos reservados
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
