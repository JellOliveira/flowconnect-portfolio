import {
  Code2,
  Zap,
  Database,
  Brain,
  MessageSquare,
  Workflow,
} from "lucide-react";

/**
 * FLOWCONNECT DEV - Skills Section
 * Design Philosophy: Minimalismo Corporativo
 * - Categorias de habilidades com ícones
 * - Grid responsivo com badges
 * - Animações ao scroll
 */

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Automação",
    icon: <Workflow className="w-6 h-6" />,
    skills: ["N8N", "API Evolution", "Integração com APIs", "WhatsApp Automation"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Desenvolvimento Web",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Backend & Banco de Dados",
    icon: <Database className="w-6 h-6" />,
    skills: ["Python", "MySQL", "Supabase", "Node.js"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Inteligência Artificial",
    icon: <Brain className="w-6 h-6" />,
    skills: ["Google Gemini", "ChatGPT", "Agentes de IA", "Processamento de Linguagem"],
    color: "from-purple-500 to-purple-600",
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
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Ferramentas & Plataformas",
    icon: <Zap className="w-6 h-6" />,
    skills: [
      "Google Workspace",
      "GitHub",
      "Windows",
      "VS Code",
      "Figma",
    ],
    color: "from-orange-500 to-orange-600",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url(/images/skills-pattern.jpg)`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Competências
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertise em automação, desenvolvimento web e inteligência artificial
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} text-white mb-6 group-hover:scale-110 transition-transform`}
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cursos em Andamento */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📚 Cursos em Andamento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-700 rounded-full" />
              <span className="text-gray-700">Node.js - Desenvolvimento Backend</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-700 rounded-full" />
              <span className="text-gray-700">Especialização em IA Avançada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
