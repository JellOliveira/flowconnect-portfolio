/**
 * FLOWCONNECT DEV - Footer Component
 * Redesign 2026: tema escuro alinhado ao restante do site
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050608] border-t border-white/8 pt-16 pb-8 px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid gap-10 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <img
                src="/images/LOGO FLOWCONNECT.png"
                alt="FlowConnect"
                className="h-7 w-auto"
              />
              <span className="font-[Sora] font-extrabold text-[#f3f6fa]">
                FLOWCONNECT DEV
              </span>
            </div>
            <p className="text-[#6b7688] text-sm leading-[1.6]">
              Automação, desenvolvimento WEB e inteligência artificial para
              transformar seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#f3f6fa] mb-4">Links Rápidos</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#hero" className="text-[#6b7688] hover:text-[#2ec0ee] transition-colors">
                Início
              </a>
              <a href="#projects" className="text-[#6b7688] hover:text-[#2ec0ee] transition-colors">
                Projetos
              </a>
              <a href="#skills" className="text-[#6b7688] hover:text-[#2ec0ee] transition-colors">
                Habilidades
              </a>
              <a href="#certificates" className="text-[#6b7688] hover:text-[#2ec0ee] transition-colors">
                Certificados
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-[#f3f6fa] mb-4">Contato</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="mailto:jell.meira.30@gmail.com"
                className="text-[#6b7688] hover:text-[#2ec0ee] transition-colors"
              >
                jell.meira.30@gmail.com
              </a>
              <a
                href="https://wa.me/5577991410379"
                className="text-[#6b7688] hover:text-[#2ec0ee] transition-colors"
              >
                (77) 99141-0379
              </a>
              <span className="text-[#6b7688]">Vitória da Conquista - Bahia</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[13px] text-[#6b7688]">
            <p>&copy; {currentYear} FLOWCONNECT DEV. Todos os direitos reservados.</p>
            <p>Desenvolvido por Jéssica Oliveira Meira</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
