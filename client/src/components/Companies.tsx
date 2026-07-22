import { ExternalLink } from "lucide-react";

/**
 * FLOWCONNECT DEV - Companies Section
 * Design Philosophy: Minimalismo Corporativo
 * Apresenta as empresas fundadas/co-fundadas por Jéssica Oliveira
 */

interface Company {
  id: string;
  name: string;
  role: string;
  description: string;
  logo: string;
  url?: string;
}

const companies: Company[] = [
  {
    id: "flowconnect",
    name: "FlowConnect",
    role: "Fundadora",
    description:
      "Empresa de automações e desenvolvimento de soluções inteligentes com N8N, IA e integrações via API.",
    logo: "/images/logo-flowconnect-empresa.png",
  },
  {
    id: "triovision",
    name: "TrioVision Tech",
    role: "Co-fundadora",
    description:
      "Empresa de tecnologia criada em parceria com colegas, unindo automação, desenvolvimento e inteligência artificial.",
    logo: "/images/logo-triovision-tech.png",
    url: "https://triovisiontech.com.br/",
  },
];

export default function Companies() {
  return (
    <section
      id="companies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Empreendedorismo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Minhas Empresas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Além de desenvolver soluções para clientes, também construo meus
            próprios negócios em tecnologia.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companies.map((company, index) => {
            const cardClassName =
              "shadow-float rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 group animate-fade-in-up p-8 flex flex-col items-center text-center";
            const cardContent = (
              <>
                <div className="h-20 flex items-center justify-center mb-6">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-20 max-w-[180px] object-contain"
                  />
                </div>

                <p className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wide">
                  {company.role}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  {company.name}
                  {company.url && (
                    <ExternalLink className="w-4 h-4 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </h3>
                <p className="text-gray-600 text-sm">{company.description}</p>
              </>
            );

            return company.url ? (
              <a
                key={company.id}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={company.id}
                className={cardClassName}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
