import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * FLOWCONNECT DEV - Header Component
 * Design Philosophy: Minimalismo Corporativo
 * - Logo + navegação horizontal em desktop
 * - Menu mobile responsivo
 * - Transições suaves ao scroll
 */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Projetos", id: "projects" },
    { label: "Habilidades", id: "skills" },
    { label: "Certificados", id: "certificates" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/images/LOGO FLOWCONNECT.png"
              alt="FLOWCONNECT DEV"
              className="h-8 w-auto"
            />
            <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              FLOWCONNECT
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-700 font-medium text-sm transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Entrar em Contato
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-fade-in-up">
            <nav className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mx-4 mt-2 px-4 py-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Entrar em Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
