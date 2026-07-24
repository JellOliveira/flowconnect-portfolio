import { useState } from "react";
import { Award, Download, ExternalLink, X } from "lucide-react";
import Reveal from "./Reveal";

/**
 * FLOWCONNECT DEV - Certificates Section
 * Redesign 2026: diploma em destaque com borda neon animada, filtro por
 * categoria, PDFs abertos em iframe embutido no modal.
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

const categoryColors: Record<string, string> = {
  IA: "#A78BFA",
  Python: "#2BD98B",
  Informática: "#2BB7E8",
  "Banco de Dados": "#FFB454",
};

const diploma = {
  title: "Tecnóloga em Análise e Desenvolvimento de Sistemas",
  issuer: "Universidade Pitágoras Unopar Anhanguera",
  date: "2026",
  path: "/images/diploma-jessica-oliveira-2026.png",
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showDiploma, setShowDiploma] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(certificates.map((c) => c.category))),
  ];

  const filteredCerts =
    filter === "all"
      ? certificates
      : certificates.filter((c) => c.category === filter);

  const isPDF = (path: string) => path.toLowerCase().endsWith(".pdf");

  return (
    <section id="certificates" className="py-24 px-6 bg-[#050608] relative">
      <div className="max-w-[1240px] mx-auto">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-[7px] bg-white/4 border border-white/10 text-[#2ec0ee] rounded-full text-[12.5px] font-bold mb-4">
            Qualificações
          </span>
          <h2 className="font-[Sora] font-extrabold text-[clamp(2rem,3.8vw,2.8rem)] mb-3.5 tracking-[-0.02em] text-[#f3f6fa]">
            Certificados &amp; Cursos
          </h2>
          <p className="text-[#a9b4c4] text-[17px] max-w-[600px] mx-auto">
            Formação contínua em tecnologia, programação, automação e
            inteligência artificial.
          </p>
        </Reveal>

        {/* Diploma em Destaque - borda neon */}
        <Reveal className="relative max-w-[900px] mx-auto mb-12 rounded-[26px]">
          <div
            className="absolute -inset-[3px] rounded-[28px] blur-[26px] opacity-75 z-0 pointer-events-none animate-neon-spin"
            style={{
              background: "linear-gradient(0deg,#2EC0EE,#1577D6,#2BD98B,#2EC0EE)",
              backgroundSize: "100% 300%",
            }}
          />
          <div
            className="absolute -inset-0.5 rounded-[27px] z-0 pointer-events-none animate-neon-spin"
            style={{
              background: "linear-gradient(0deg,#2EC0EE,#1577D6,#2BD98B,#2EC0EE)",
              backgroundSize: "100% 300%",
            }}
          />
          <button
            onClick={() => setShowDiploma(true)}
            className="relative z-10 w-full text-left bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] rounded-[24px] p-2 cursor-pointer"
          >
            <div className="flex flex-wrap items-center gap-6 p-6">
              <div className="w-[180px] flex-shrink-0 rounded-2xl overflow-hidden border-[3px] border-white/30 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)]">
                <img
                  src={diploma.path}
                  alt={diploma.title}
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="text-white flex-1 min-w-[220px]">
                <span className="inline-block bg-white/20 px-3.5 py-1.5 rounded-full text-[11.5px] font-bold uppercase tracking-[.06em] mb-3">
                  Diploma
                </span>
                <h3 className="font-[Sora] font-extrabold text-[clamp(1.3rem,2.4vw,1.7rem)] mb-2">
                  {diploma.title}
                </h3>
                <p className="opacity-90 mb-0.5">{diploma.issuer}</p>
                <p className="opacity-75 text-sm mb-4">{diploma.date}</p>
                <span className="inline-flex items-center gap-2 bg-white text-[#1577d6] px-5 py-2.5 rounded-full font-bold text-sm">
                  <Award className="w-4 h-4" /> Ver Diploma
                </span>
              </div>
            </div>
          </button>
        </Reveal>

        {/* Filter Buttons */}
        <Reveal className="flex flex-wrap justify-center gap-2.5 mb-11">
          {categories.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-[22px] py-2.5 rounded-full font-bold text-[13.5px] border transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] text-[#04121f] border-transparent"
                    : "bg-white/3 text-[#a9b4c4] border-white/10 hover:border-white/25"
                }`}
              >
                {category === "all" ? "Todos" : category}
              </button>
            );
          })}
        </Reveal>

        {/* Certificates Grid */}
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {filteredCerts.map((cert, index) => {
            const color = categoryColors[cert.category] || "#2BB7E8";
            return (
              <Reveal
                key={cert.id}
                delay={index * 40}
                className="bg-white/2.5 border border-white/9 rounded-[18px] overflow-hidden cursor-pointer relative hover:border-[#2ec0ee]/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(31,148,224,0.3)] transition-all duration-300"
              >
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="w-full text-left"
                >
                  {isPDF(cert.path) && (
                    <span className="absolute top-2.5 right-2.5 z-10 bg-[#0a0c10] border border-white/15 text-[#2ec0ee] text-[10.5px] font-extrabold px-2.5 py-1 rounded-md tracking-[.04em]">
                      PDF
                    </span>
                  )}
                  <div
                    className="h-[130px] flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${color}22, ${color}0a)`,
                    }}
                  >
                    <Award className="w-9 h-9" style={{ color, opacity: 0.9 }} />
                  </div>
                  <div className="p-4">
                    <p
                      className="text-[11.5px] font-bold uppercase tracking-[.05em] mb-2"
                      style={{ color }}
                    >
                      {cert.category}
                    </p>
                    <h3 className="font-bold text-[14.5px] mb-2 leading-[1.35] text-[#f3f6fa] line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-[#a9b4c4] text-[13px] mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-[#6b7688] text-xs">{cert.date}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Modal do Diploma */}
      {showDiploma && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setShowDiploma(false)}
        >
          <div
            className="bg-[#0a0c10] border border-white/12 rounded-[22px] max-w-[640px] w-full max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start px-7 py-6 border-b border-white/8">
              <div>
                <p className="text-[#2ec0ee] text-xs font-bold uppercase mb-1.5">
                  Diploma
                </p>
                <h3 className="font-[Sora] font-bold text-xl text-[#f3f6fa]">
                  {diploma.title}
                </h3>
              </div>
              <button
                onClick={() => setShowDiploma(false)}
                className="w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-[10px] text-[#a9b4c4]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7">
              <p className="text-[#a9b4c4] mb-1">
                <strong className="text-[#f3f6fa]">Instituição:</strong>{" "}
                {diploma.issuer}
              </p>
              <p className="text-[#a9b4c4] mb-5">
                <strong className="text-[#f3f6fa]">Ano:</strong> {diploma.date}
              </p>
              <img
                src={diploma.path}
                alt={diploma.title}
                className="w-full rounded-2xl border border-white/10 mb-5"
              />
              <a
                href={diploma.path}
                download
                className="w-full py-3.5 bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] text-[#04121f] rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Baixar Diploma
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Certificado */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#0a0c10] border border-white/12 rounded-[22px] max-w-[680px] w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start px-6 py-6 border-b border-white/8">
              <div>
                <p
                  className="text-xs font-bold uppercase mb-1.5"
                  style={{ color: categoryColors[selectedCert.category] || "#2BB7E8" }}
                >
                  {selectedCert.category}
                </p>
                <h3 className="font-[Sora] font-bold text-[19px] text-[#f3f6fa]">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-[10px] text-[#a9b4c4]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-[#a9b4c4] mb-1">
                <strong className="text-[#f3f6fa]">Emissor:</strong>{" "}
                {selectedCert.issuer}
              </p>
              <p className="text-[#a9b4c4] mb-5">
                <strong className="text-[#f3f6fa]">Data:</strong>{" "}
                {selectedCert.date}
              </p>

              {isPDF(selectedCert.path) ? (
                <>
                  <div className="rounded-2xl overflow-hidden border border-white/10 mb-5 h-[60vh] bg-black">
                    <iframe
                      src={selectedCert.path}
                      title={selectedCert.title}
                      className="w-full h-full border-none"
                    />
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={selectedCert.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[180px] flex items-center justify-center gap-2 bg-white/6 border border-white/12 text-[#f3f6fa] py-3.5 rounded-xl font-bold"
                    >
                      <ExternalLink className="w-[17px] h-[17px]" /> Abrir em
                      nova aba
                    </a>
                    <a
                      href={selectedCert.path}
                      download
                      className="flex-1 min-w-[180px] flex items-center justify-center gap-2 bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] text-[#04121f] py-3.5 rounded-xl font-bold"
                    >
                      <Download className="w-[18px] h-[18px]" /> Download
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={selectedCert.path}
                    alt={selectedCert.title}
                    className="w-full rounded-2xl border border-white/10 mb-5"
                  />
                  <a
                    href={selectedCert.path}
                    download
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] text-[#04121f] py-3.5 rounded-xl font-bold"
                  >
                    <Download className="w-5 h-5" /> Download Certificado
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
