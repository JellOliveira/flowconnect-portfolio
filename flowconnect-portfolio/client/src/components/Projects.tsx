import { useState } from "react";
import { Play, X } from "lucide-react";

/**
 * FLOWCONNECT DEV - Projects Section
 * Design Philosophy: Minimalismo Corporativo
 * - Grid de cards com efeito hover
 * - Modal para visualizar vídeos
 * - Animações suaves
 */

interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  videoPath: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Chatbot de Atendimento Automático",
    company: "C. Amorim",
    description:
      "Sistema de chatbot via WhatsApp com integração N8N para automação de atendimento ao cliente. Respostas inteligentes e roteamento de tickets.",
    technologies: ["N8N", "WhatsApp API", "Google Sheets", "Automação"],
    videoPath: "/images/chatbot-c-amorim-compressed.mp4",
  },
  {
    id: "2",
    title: "Site de Automação e Apresentação",
    company: "CDE Digital",
    description:
      "Desenvolvimento completo de site profissional em 4K com apresentação de soluções de automação. Design responsivo e otimizado para conversão.",
    technologies: ["HTML", "CSS", "Evolution API", "N8N", "Design Responsivo"],
    videoPath:
      "/images/[Em 4K] Apresentação do site FlowConnect Dev - Empresa CDE Digital.mp4",
  },
  {
    id: "3",
    title: "Automação de Lembretes de Agendamento",
    company: "Projeto Pessoal",
    description:
      "Sistema de automação que envia lembretes automáticos via WhatsApp para agendamentos. Integração com calendários e banco de dados.",
    technologies: ["N8N", "WhatsApp", "Python", "API Evolution"],
    videoPath: "/images/Automação de lembrete de agendamento automático via  Whatsapp.jpg",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const isImage = (path: string) => /\.(jpg|jpeg|png|gif)$/i.test(path);
  const isVideo = (path: string) => /\.(mp4|webm|mov)$/i.test(path);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Portfólio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções de automação e desenvolvimento que transformaram processos
            e geraram resultados reais para empresas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="shadow-float rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                {isImage(project.videoPath) ? (
                  <img
                    src={project.videoPath}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <>
                    <video
                      src={project.videoPath}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  </>
                )}

                {/* Play Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-blue-700 ml-1" />
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wide">
                  {project.company}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Vídeo */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in-up">
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Conteúdo Modal */}
            <div className="p-6">
              {isImage(selectedProject.videoPath) ? (
                <img
                  src={selectedProject.videoPath}
                  alt={selectedProject.title}
                  className="w-full rounded-lg"
                />
              ) : (
                <video
                  src={selectedProject.videoPath}
                  controls
                  autoPlay
                  className="w-full rounded-lg bg-black"
                />
              )}

              <div className="mt-6">
                <p className="text-sm font-semibold text-blue-700 mb-2 uppercase">
                  {selectedProject.company}
                </p>
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>

                <div>
                  <p className="font-semibold text-gray-900 mb-3">
                    Tecnologias Utilizadas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
