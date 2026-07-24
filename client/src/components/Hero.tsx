import { useRef, useState, type MouseEvent } from "react";
import { GraduationCap, Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * FLOWCONNECT DEV - Hero Section
 * Redesign 2026: fundo escuro com grid de pontos, spotlight que segue o
 * cursor, blobs animados, marquee de tecnologias e faixa de clientes.
 */

const techStack = [
  "N8N",
  "Make",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "OpenAI",
  "Google Gemini",
  "WhatsApp API",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-40 pb-14 px-6 bg-[#050608]"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      {/* Spotlight que segue o cursor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(560px circle at ${spotlight.x}% ${spotlight.y}%, rgba(46,192,238,.10), transparent 45%)`,
        }}
      />

      {/* Blobs animados */}
      <div className="absolute -top-16 -right-10 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] blur-[130px] opacity-20 animate-float-blob-a pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#2bd98b] to-[#1577d6] blur-[130px] opacity-14 animate-float-blob-b pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid gap-14 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))" }}>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-[7px] bg-white/4 border border-white/10 text-[#2ec0ee] rounded-full text-[12.5px] font-bold mb-6">
                <span className="w-[7px] h-[7px] rounded-full bg-[#2ec0ee] shadow-[0_0_10px_#2ec0ee]" />
                Disponível para novos projetos
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-[Sora] font-extrabold leading-[1.02] text-[clamp(2.6rem,6vw,4.6rem)] mb-6 tracking-[-0.03em]">
                <span className="text-[#f3f6fa]">Jéssica Oliveira</span>
                <br />
                <span className="bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] bg-clip-text text-transparent">
                  Automação &amp; IA
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="text-[#a9b4c4] text-[clamp(1.02rem,1.6vw,1.22rem)] leading-[1.7] max-w-[560px] mb-9">
                Construo automações com N8N e Make, sistemas web e agentes de
                IA com Gemini, ChatGPT e Claude — transformando processos
                manuais em produtos escaláveis, do zero à produção.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] text-[#04121f] px-8 py-4 rounded-2xl font-bold text-[15px] shadow-[0_14px_34px_-10px_rgba(31,148,224,0.6)] hover:-translate-y-1 transition-transform duration-200"
                >
                  Vamos conversar <ArrowRight className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 border-[1.5px] border-white/14 text-[#f3f6fa] px-8 py-4 rounded-2xl font-bold text-[15px] hover:bg-white/5 hover:border-[#1577d6] hover:-translate-y-1 transition-all duration-200"
                >
                  Ver Projetos
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="flex gap-3 items-center">
                <span className="text-[#6b7688] text-[13.5px] mr-1">Redes:</span>
                {[
                  { href: "https://github.com/JellOliveira", title: "GitHub", Icon: Github },
                  { href: "https://www.linkedin.com/in/jessica-oliveira-meira/", title: "LinkedIn", Icon: Linkedin },
                  { href: "mailto:jell.meira.30@gmail.com", title: "Email", Icon: Mail },
                  { href: "https://wa.me/5577991410379", title: "WhatsApp", Icon: Phone },
                ].map(({ href, title, Icon }) => (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    title={title}
                    className="w-[42px] h-[42px] flex items-center justify-center bg-white/4 border border-white/10 rounded-xl text-[#2ec0ee] hover:bg-gradient-to-br hover:from-[#2ec0ee] hover:to-[#1577d6] hover:text-[#04121f] hover:-translate-y-1 transition-all duration-200"
                  >
                    <Icon className="w-[19px] h-[19px]" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div className="w-full aspect-square rounded-[28px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] border border-white/12 relative">
                <img
                  src="/images/MINHA-FOTO-cortada.jpg"
                  alt="Jéssica Oliveira"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050608]/65" style={{ backgroundImage: "linear-gradient(180deg, transparent 55%, rgba(5,6,8,.65))" }} />
              </div>

              <div
                className="absolute -bottom-6 -right-4 p-0.5 rounded-[18px] bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] shadow-[0_20px_46px_-12px_rgba(31,148,224,0.65)] max-w-[230px] animate-grad-shift animate-float-badge"
                style={{ backgroundSize: "200% 200%" }}
              >
                <div className="bg-[#0a0c10] rounded-2xl px-5 py-4 flex gap-3 items-center">
                  <div className="w-[38px] h-[38px] flex-shrink-0 rounded-[11px] bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] flex items-center justify-center text-[#04121f]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-[Sora] font-extrabold text-[15px] text-[#2ec0ee] mb-0.5">
                      Formada em
                    </p>
                    <p className="text-[#a9b4c4] text-[12.5px] leading-[1.35]">
                      Análise e Desenvolvimento de Sistemas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee de tecnologias */}
      <Reveal>
        <div className="mt-24 py-7 border-t border-b border-white/8 overflow-hidden relative">
          <div className="flex w-max gap-16 animate-fc-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="font-[Sora] font-bold text-xl text-[#6b7688] whitespace-nowrap flex items-center gap-2.5"
              >
                {tech} <span className="text-[#2ec0ee] text-sm">✦</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
