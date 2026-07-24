import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

/**
 * FLOWCONNECT DEV - Companies Section
 * Redesign 2026: cards com halo de gradiente rotativo (conic-gradient)
 */

interface Company {
  id: string;
  name: string;
  role: string;
  description: string;
  logo: string;
  logoHeight: string;
  url?: string;
}

const companies: Company[] = [
  {
    id: "flowconnect",
    name: "FlowConnect",
    role: "Fundadora",
    description:
      "Empresa de automações e desenvolvimento de soluções inteligentes com N8N, IA e integrações via API.",
    logo: "/images/logo-flowconnect-empresa-transp.png",
    logoHeight: "150px",
  },
  {
    id: "triovision",
    name: "TrioVision Tech",
    role: "Co-fundadora",
    description:
      "Empresa de tecnologia criada em parceria com colegas, unindo automação, desenvolvimento e inteligência artificial.",
    logo: "/images/logo-triovision-transp.png",
    logoHeight: "68px",
    url: "https://triovisiontech.com.br/",
  },
];

export default function Companies() {
  return (
    <section id="companies" className="py-24 px-6 bg-[#050608] relative">
      <div className="max-w-[1240px] mx-auto">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-[7px] bg-white/4 border border-white/10 text-[#2ec0ee] rounded-full text-[12.5px] font-bold mb-4">
            Empreendedorismo
          </span>
          <h2 className="font-[Sora] font-extrabold text-[clamp(2rem,3.8vw,2.8rem)] mb-3.5 tracking-[-0.02em] text-[#f3f6fa]">
            Minhas Empresas
          </h2>
          <p className="text-[#a9b4c4] text-[17px] max-w-[560px] mx-auto">
            Além de desenvolver soluções para clientes, também construo meus
            próprios negócios em tecnologia.
          </p>
        </Reveal>

        <div className="grid gap-6 max-w-[820px] mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {companies.map((company, index) => {
            const cardInner = (
              <>
                <div className="flex items-center justify-center h-[110px] mb-5">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="object-contain max-w-[240px]"
                    style={{ maxHeight: company.logoHeight }}
                  />
                </div>
                <p className="text-[#2ec0ee] text-xs font-bold uppercase tracking-[.07em] mb-2">
                  {company.role}
                </p>
                <h3 className="font-[Sora] font-bold text-[19px] mb-2.5 text-[#f3f6fa] flex items-center gap-2">
                  {company.name}
                  {company.url && (
                    <ExternalLink className="w-4 h-4 text-[#2ec0ee]" />
                  )}
                </h3>
                <p className="text-[#a9b4c4] text-[14.5px] leading-[1.6]">
                  {company.description}
                </p>
              </>
            );

            return (
              <Reveal key={company.id} delay={index * 100} className="relative isolate rounded-[22px]">
                <div
                  className="absolute -inset-2.5 rounded-[30px] blur-[22px] z-0 pointer-events-none animate-rotate-glow animate-glow-pulse"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #2EC0EE, #A78BFA, #2BD98B, #1577D6, #2EC0EE)",
                  }}
                />
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex flex-col items-center text-center bg-[#0a0c10] border border-white/9 rounded-[22px] px-7 py-10 hover:border-[#2ec0ee]/50 hover:-translate-y-1.5 transition-all duration-300"
                  >
                    {cardInner}
                  </a>
                ) : (
                  <div className="relative z-10 flex flex-col items-center text-center bg-[#0a0c10] border border-white/9 rounded-[22px] px-7 py-10 hover:border-[#2ec0ee]/50 hover:-translate-y-1.5 transition-all duration-300">
                    {cardInner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
