/**
 * FLOWCONNECT DEV - Footer Component
 * Design Philosophy: Minimalismo Corporativo
 * - Informações de copyright
 * - Links rápidos
 * - Ano dinâmico
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/LOGO FLOWCONNECT.png"
                alt="FLOWCONNECT DEV"
                className="h-8 w-auto"
              />
              <span className="font-bold text-white">FLOWCONNECT DEV</span>
            </div>
            <p className="text-sm text-gray-400">
              Automação, desenvolvimento e inteligência artificial para
              transformar seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Certificados
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:jell.meira.30@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  jell.meira.30@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5577991410379"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  (77) 99141-0379
                </a>
              </li>
              <li className="text-gray-400">
                Vitória da Conquista - Bahia
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} FLOWCONNECT DEV. Todos os direitos
              reservados.
            </p>
            <p className="mt-4 md:mt-0">
              Desenvolvido com{" "}
              <span className="text-cyan-400">&#10084;</span> por Jéssica
              Oliveira
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
