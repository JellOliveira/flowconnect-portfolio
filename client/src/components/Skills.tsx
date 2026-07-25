import {
  Code2,
  Zap,
  Database,
  Cpu,
  MessageSquare,
  Activity,
} from "lucide-react";
import Reveal from "./Reveal";

/**
 * FLOWCONNECT DEV - Skills Section
 * Redesign 2026: cards com efeito "shine border" (feixe cônico rotativo)
 */

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
  accent: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Automação",
    icon: <Activity className="w-6 h-6" />,
    skills: ["N8N", "Make", "API Evolution", "Integração com APIs", "WhatsApp Automation"],
    gradient: "linear-gradient(135deg,#1F94E0,#1577D6)",
    accent: "#1F94E0",
  },
  {
    title: "Desenvolvimento Web",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Chart.js"],
    gradient: "linear-gradient(135deg,#2BB7E8,#1F94E0)",
    accent: "#2BB7E8",
  },
  {
    title: "Backend & Banco de Dados",
    icon: <Database className="w-6 h-6" />,
    skills: ["Python", "MySQL", "PostgreSQL", "Supabase", "Node.js", "Express.js", "GraphQL", "JWT + bcrypt", "Cloudflare"],
    gradient: "linear-gradient(135deg,#5B6EE8,#1577D6)",
    accent: "#5B6EE8",
  },
  {
    title: "Inteligência Artificial",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Google Gemini", "ChatGPT", "OpenAI", "Claude AI", "Lovable", "Agentes de IA", "Processamento de Linguagem"],
    gradient: "linear-gradient(135deg,#A78BFA,#5B6EE8)",
    accent: "#A78BFA",
  },
  {
    title: "Comunicação & Integração",
    icon: <MessageSquare className="w-6 h-6" />,
    skills: [
      "WhatsApp API",
      "Email Automático",
      "Google Sheets",
      "Google Docs",
      "API Brevo",
      "Autentique API",
      "Typeform",
    ],
    gradient: "linear-gradient(135deg,#FF6BA6,#A78BFA)",
    accent: "#FF6BA6",
  },
  {
    title: "Ferramentas & Plataformas",
    icon: <Zap className="w-6 h-6" />,
    skills: [
      "Google Workspace",
      "Google Cloud Platform",
      "GitHub",
      "Windows",
      "VS Code",
      "Figma",
    ],
    gradient: "linear-gradient(135deg,#FFB454,#FF6BA6)",
    accent: "#FFB454",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050608] relative">
      <div className="max-w-[1240px] mx-auto relative z-10">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-[7px] bg-white/4 border border-white/10 text-[#2ec0ee] rounded-full text-[12.5px] font-bold mb-4">
            Competências
          </span>
          <h2 className="font-[Sora] font-extrabold text-[clamp(2rem,3.8vw,2.8rem)] mb-3.5 tracking-[-0.02em] text-[#f3f6fa]">
            Habilidades Técnicas
          </h2>
          <p className="text-[#a9b4c4] text-[17px] max-w-[600px] mx-auto">
            Experiência em automação, desenvolvimento web e inteligência
            artificial.
          </p>
        </Reveal>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={index * 80}
              className="relative rounded-[22px] p-0.5 hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div
                className="absolute -inset-[2px] rounded-[22px] pointer-events-none"
                style={{
                  background: `conic-gradient(from 0deg, ${category.accent}, transparent 25%, ${category.accent}aa 50%, transparent 75%, ${category.accent})`,
                  animation: `rotateGlow ${5 + index * 0.6}s linear infinite`,
                }}
              />
              <div className="relative z-10 bg-[#0a0c10] rounded-[20px] p-7 h-full">
                <div
                  className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-white mb-5"
                  style={{ background: category.gradient }}
                >
                  {category.icon}
                </div>
                <h3 className="font-[Sora] font-bold text-[18px] mb-4 text-[#f3f6fa]">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/5 text-[#a9b4c4] px-3 py-1.5 rounded-full text-[12.5px] font-semibold border border-[#2ec0ee]/40 shadow-[0_0_10px_rgba(46,192,238,0.25)] hover:border-[#2ec0ee]/80 hover:shadow-[0_0_14px_rgba(46,192,238,0.45)] hover:text-[#f3f6fa] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 bg-gradient-to-br from-[#2ec0ee]/8 to-[#1577d6]/5 border border-[#2ec0ee]/20 rounded-[22px] p-8">
          <h3 className="font-[Sora] font-bold text-[19px] mb-5 text-[#f3f6fa]">
            📚 Cursos em Andamento
          </h3>
          <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2ec0ee] flex-shrink-0" />
              <span className="text-[#a9b4c4]">Node.js — Desenvolvimento Backend</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2ec0ee] flex-shrink-0" />
              <span className="text-[#a9b4c4]">Especializando em Full Stack</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
