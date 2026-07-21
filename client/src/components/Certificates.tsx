import { useState } from "react";
import { Award, Download, X } from "lucide-react";

/**
 * FLOWCONNECT DEV - Certificates Section
 * Design Philosophy: Minimalismo Corporativo
 * - Galeria de certificados com preview
 * - Modal para visualizar em detalhes
 * - Animações ao scroll
 */

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  path: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Criando um Agente com Gemini",
    issuer: "Xpiria",
    date: "2025",
    path: "/images/Certificado/certificado-criando-um-agente-com-gemini.pdf",
    category: "IA",
  },
  {
    id: "2",
    title: "Imersão Dev com Google Gemini",
    issuer: "Alura",
    date: "2024",
    path: "/images/Certificado/certificado-imersão-dev-com-google-gemini.pdf",
    category: "IA",
  },
  {
    id: "3",
    title: "Imersão Inteligência Artificial",
    issuer: "Alura",
    date: "2024",
    path: "/images/Certificado/certificado-imersão-ia.pdf",
    category: "IA",
  },
  {
    id: "4",
    title: "Introdução à Linguagem Python",
    issuer: "Alura",
    date: "2023",
    path: "/images/Certificado/certificado-introdução-à-linguagem-python.pdf",
    category: "Python",
  },
  {
    id: "5",
    title: "Estruturas de Dados em Python",
    issuer: "Anhanguera",
    date: "2024",
    path: "/images/Certificado/certificado-estruturas-de-dados-em-python.pdf",
    category: "Python",
  },
  {
    id: "6",
    title: "Introdução à Análise de Dados com Python",
    issuer: "Anhanguera",
    date: "2024",
    path: "/images/Certificado/certificado-introdução-à-análise-de-dados-com-python.pdf",
    category: "Python",
  },
  {
    id: "7",
    title: "Curso de Informática Avançado",
    issuer: "Prime Cursos",
    date: "2023",
    path: "/images/Certificado/certificado-do-curso-de-informática-avançado.pdf",
    category: "Informática",
  },
  {
    id: "8",
    title: "Curso de Python",
    issuer: "Curso em Vídeo",
    date: "2024",
    path: "/images/Certificado/certificado-curso-de-python.png",
    category: "Python",
  },
  {
    id: "9",
    title: "Curso de MySQL",
    issuer: "Curso em Vídeo",
    date: "2024",
    path: "/images/Certificado/certificado-curso-de-mysql.png",
    category: "Banco de Dados",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(certificates.map((c) => c.category))),
  ];

  const filteredCerts =
    filter === "all"
      ? certificates
      : certificates.filter((c) => c.category === filter);

  const isPDF = (path: string) => path.endsWith(".pdf") || path.endsWith(".PDF");

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Qualificações
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Certificados & Cursos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Formação contínua em tecnologia, programação, automação e inteligência
            artificial.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${filter === category
                ? "bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category === "all" ? "Todos" : category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-float hover:border-blue-300 transition-all duration-300 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Preview */}
              <div className="h-40 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center relative overflow-hidden">
                <Award className="w-12 h-12 text-blue-700 opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/20 transition-all" />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">
                  {cert.category}
                </p>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>

              {/* Hover Action */}
              <div className="px-4 pb-4 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                  className="w-full py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors text-sm"
                >
                  Visualizar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">
              Nenhum certificado encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in-up">
          <div className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <p className="text-sm font-semibold text-blue-700 uppercase mb-1">
                  {selectedCert.category}
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold text-gray-900">Emissor:</span>{" "}
                  {selectedCert.issuer}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Data:</span>{" "}
                  {selectedCert.date}
                </p>
              </div>

              {/* Preview */}
              <div className="bg-gray-100 rounded-lg p-4 mb-6 min-h-96 flex items-center justify-center">
                {isPDF(selectedCert.path) ? (
                  <div className="text-center">
                    <Award className="w-16 h-16 text-blue-700 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-600 mb-4">Arquivo PDF</p>
                    <a
                      href={selectedCert.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                      <Download className="w-5 h-5" />
                      Abrir PDF
                    </a>
                  </div>
                ) : (
                  <img
                    src={selectedCert.path}
                    alt={selectedCert.title}
                    className="max-w-full max-h-96 object-contain rounded"
                  />
                )}
              </div>

              {/* Download Button */}
              <a
                href={selectedCert.path}
                download
                className="w-full py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Certificado
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
