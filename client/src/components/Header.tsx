import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * FLOWCONNECT DEV - Header Component
 * Redesign 2026: fundo escuro translúcido com blur, nav, drawer mobile
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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050608]/78 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex justify-between items-center h-[76px]">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2.5"
            >
              <img
                src="/images/LOGO FLOWCONNECT.png"
                alt="FlowConnect"
                className="h-8 w-auto"
              />
              <span className="font-[Sora] font-extrabold text-[17px] tracking-tight text-[#f3f6fa]">
                Flow
                <span className="bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] bg-clip-text text-transparent">
                  Connect
                </span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-7">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#a9b4c4] hover:text-[#f3f6fa] font-semibold text-sm transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] text-[#04121f] px-6 py-[11px] rounded-full font-bold text-sm whitespace-nowrap shadow-[0_10px_30px_-8px_rgba(31,148,224,0.55)] hover:-translate-y-0.5 hover:scale-[1.03] transition-transform duration-200"
              >
                Vamos conversar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center bg-white/4 border border-white/10 rounded-xl text-[#f3f6fa]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/78 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 bottom-0 w-[min(320px,86vw)] bg-[#0a0c10] border-l border-white/10 p-7 flex flex-col gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-[38px] h-[38px] flex items-center justify-center text-[#a9b4c4] bg-white/5 rounded-[10px] border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3.5 px-3 text-[#f3f6fa] font-bold text-base border-b border-white/7"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 text-center bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] text-[#04121f] py-3.5 px-5 rounded-xl font-bold"
            >
              Vamos conversar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
