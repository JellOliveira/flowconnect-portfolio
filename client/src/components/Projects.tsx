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
    title: "Chatbot de Encaminhamento de Atendimento Automático",
    company: "C. Amorim",
    description:
      "Sistema de chatbot inteligente via WhatsApp com automação N8N, menu interativo por loja e setor, distribuição automática por fila de funcionários, registro completo de atendimentos no Google Sheets, tratamento de mensagens fora do horário comercial e envio automático de pesquisa de satisfação com análise de conversão.",
    technologies: ["N8N", "WhatsApp API", "Google Sheets", "Automação"],
    videoPath: "/images/chatbot-c-amorim-compressed.mp4",
  },
  {
    id: "2",
    title: "Site de Disparo e Agendamento de Mensagens",
    company: "CDE Digital",
    description:
      "Desenvolvimento completo de site profissional com apresentação de soluções de automação, onde é feito um disparo de mensagem para uma lista de leads e é feito um agendamento de mensagem individual e em grupos. Design responsivo e otimizado para anexar a mensagem que deseja disparar para os leads de uma só vez com espaçamento de segundos para cada lead.",
    technologies: ["HTML", "CSS", "Evolution API", "N8N", "Design Responsivo"],
    videoPath:
      "/images/Apresentação do site FlowConnect Dev.mp4",
  },
  {
    id: "3",
    title: "Automação de Lembretes de Agendamento",
    company: "Projeto Pessoal",
    description:
      "Sistema de automação que envia lembretes automáticos via WhatsApp para agendamentos. Integração com calendário do Google Agenda.",
    technologies: ["N8N", "WhatsApp", "Python", "API Evolution"],
    videoPath: "/images/lembrete de agendamento.jpg",
  },
  {
    id: "4",
    title: "Automação de Emissão de Contratos Automático",
    company: "CDE Educação",
    description:
      "Automação completa do ciclo de vida de contratos: captura de dados via formulário, geração automática do documento personalizado, envio para assinatura eletrônica com fluxo sequencial (cliente + 2 testemunhas) via Autentique, notificações automáticas por e-mail e WhatsApp em cada etapa da assinatura, e entrega automática do PDF final assinado — com todo o status sincronizado em tempo real numa planilha de controle.",
    technologies: [
      "Make",
      "Google Sheets",
      "Google Docs API",
      "Autentique API",
      "GraphQL",
      "Brevo",
      "Evolution API",
      "Automação",
      "Typeform",
    ],
    videoPath: "/images/automacao-contrato-cde-educacao.mp4",
  },
  {
    id: "5",
    title: "Plataforma de Cursos TrioVision Tech",
    company: "Escola Gideão",
    description:
      "Desenvolvemos uma plataforma completa de cursos online sob medida para a Escola Gideão, com arquitetura multi-tenant que permite escalar para novas escolas de forma independente — cada uma com seu próprio subdomínio, painel administrativo e identidade visual. O sistema conta com dashboard de gestão de alunos e conteúdos, portal para desenvolvedores, envio automatizado de e-mails de acesso e recuperação de senha com a marca da escola, e uma estrutura de banco de dados robusta para suportar múltiplos clientes simultaneamente. Projeto desenvolvido pela TrioVision Tech 👩‍💻 Jéssica Oliveira | Thiago Correia | Lucas Alves",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SQL (PostgreSQL)",
      "Supabase",
    ],
    videoPath: "/images/plataforma-cursos-escola-gideao.mp4",
  },
  {
    id: "6",
    title: "Automação e Dashboard de Controle Financeiro — FlowMoney",
    company: "Projeto Pessoal",
    description:
      "Desenvolvi um sistema pessoal de controle financeiro completo, tendo o WhatsApp como interface principal. Basta enviar uma mensagem de texto, foto de comprovante ou PDF de extrato para registrar qualquer transação — a IA interpreta a linguagem natural, extrai os dados automaticamente e confirma com o usuário antes de salvar. O sistema gerencia gastos, receitas, parcelas, contas recorrentes, faturas de cartão e valores a receber de terceiros. Alertas inteligentes chegam pelo próprio WhatsApp: lembretes de vencimento, avisos quando a fatura do cartão se aproxima, alertas ao atingir o limite mensal de gastos e cobranças de dívidas pendentes. Um relatório mensal completo é enviado automaticamente no último dia de cada mês. Tudo é visualizado em um dashboard web responsivo (FlowMoney), com login protegido, gráficos de evolução mensal e por categoria, controle de orçamento com barras de progresso, gestão de metas de economia, parcelas em andamento e muito mais — com modo demonstração para portfólio.",
    technologies: [
      "N8N",
      "Evolution API",
      "OpenAI",
      "Google Sheets",
      "Node.js",
      "Express.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Chart.js",
      "JWT + bcrypt",
    ],
    videoPath: "/images/flowmoney-controle-financeiro.mp4",
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
