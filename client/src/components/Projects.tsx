import { useRef, useState } from "react";
import { Play, X, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

/**
 * FLOWCONNECT DEV - Projects Section
 * Redesign 2026: carrossel horizontal com scroll-snap, thumbnails estáticos
 * (posters) + botão play, modal com vídeo real e chips de tecnologia
 * coloridos por ferramenta.
 */

/** Um bloco de detalhe do projeto: string = parágrafo, string[] = lista com marcadores */
type DetailBlock = string | string[];

interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  /** Conteúdo estruturado (parágrafos + listas) exibido no modal. Se ausente, usa `description`. */
  details?: DetailBlock[];
  technologies: string[];
  video?: string;
  poster?: string;
  image?: string;
  gradient?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Chatbot de Encaminhamento de Atendimento Automático",
    company: "C. Amorim",
    description:
      "Sistema de chatbot inteligente via WhatsApp com automação N8N, menu interativo por loja e setor, distribuição automática por fila de funcionários, registro completo de atendimentos no Google Sheets, tratamento de mensagens fora do horário comercial e envio automático de pesquisa de satisfação com análise de conversão.",
    technologies: ["N8N", "WhatsApp API", "Google Sheets", "Automação"],
    video: "/images/chatbot-c-amorim-compressed.mp4",
    poster: "/images/poster-chatbot-amorim.jpg",
    gradient: "linear-gradient(135deg,#2EC0EE,#1577D6)",
  },
  {
    id: "2",
    title: "Site de Disparo e Agendamento de Mensagens",
    company: "CDE Digital",
    description:
      "Desenvolvimento completo de site profissional com apresentação de soluções de automação, onde é feito um disparo de mensagem para uma lista de leads e é feito um agendamento de mensagem individual e em grupos. Design responsivo e otimizado para anexar a mensagem que deseja disparar para os leads de uma só vez com espaçamento de segundos para cada lead.",
    technologies: ["HTML", "CSS", "Evolution API", "N8N", "Design Responsivo"],
    video: "/images/Apresentação do site FlowConnect Dev.mp4",
    poster: "/images/poster-cde-digital.jpg",
    gradient: "linear-gradient(135deg,#1F94E0,#A78BFA)",
  },
  {
    id: "3",
    title: "Automação de Lembretes de Agendamento",
    company: "Projeto Pessoal",
    description:
      "Sistema de automação que envia lembretes automáticos via WhatsApp para agendamentos. Integração com calendário do Google Agenda.",
    technologies: ["N8N", "WhatsApp", "Python", "API Evolution"],
    image: "/images/lembrete de agendamento.jpg",
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
    video: "/images/automacao-contrato-cde-educacao.mp4",
    poster: "/images/poster-contrato-cde.jpg",
    gradient: "linear-gradient(135deg,#2BD98B,#1577D6)",
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
    video: "/images/plataforma-cursos-escola-gideao.mp4",
    poster: "/images/poster-gideao.jpg",
    gradient: "linear-gradient(135deg,#A78BFA,#1577D6)",
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
    video: "/images/flowmoney-controle-financeiro.mp4",
    poster: "/images/poster-flowmoney.jpg",
    gradient: "linear-gradient(135deg,#2BB7E8,#2BD98B)",
  },
  {
    id: "7",
    title: "Sistema de Onboarding Automático",
    company: "CDE Educação e outras empresas",
    description:
      "Onboarding Painel — automação de pós-venda para mentorias e eventos. Sistema full-stack que elimina o atraso e o trabalho manual no onboarding de clientes, disparando automaticamente WhatsApp e e-mail assim que uma venda acontece.",
    details: [
      "Onboarding Painel — Automação de pós-venda para mentorias e eventos",
      "Sistema full-stack que elimina o atraso e o trabalho manual no onboarding de clientes: assim que uma venda acontece (via webhook de qualquer plataforma — Hotmart, Kiwify, Assiny, etc.), o sistema dispara automaticamente mensagens de WhatsApp e e-mail personalizadas, registra tudo em tempo real e dá visibilidade completa do funil pra equipe.",
      "Desenvolvi tanto o painel web (React + TypeScript) quanto a API/backend (Node + Express) que orquestra a automação, integrando com Google Sheets como banco de dados operacional, WhatsApp Business (via Evolution API) e envio de e-mail transacional, tudo coordenado por workflows n8n.",
      "Principais funcionalidades:",
      [
        "Cadastro de produtos (mentorias/eventos) com geração automática de webhook único e planilha de log — zero configuração manual por produto",
        "Editor de sequência de mensagens WhatsApp (texto, áudio, imagem, documento) com drag-and-drop para reordenar blocos",
        "Editor de e-mail rich-text (WYSIWYG) com inserção de botões/links customizados",
        "Histórico completo de envios com detecção automática de duplicatas, importação em massa (colar lista/CSV) e reenvio manual",
        "Sistema de credenciamento para eventos (check-in em tempo real, otimizado para tablet)",
        "White-label: cada cliente pode personalizar logo, cores e nome da marca no próprio painel, aplicado em tempo real via CSS custom properties",
        "Autenticação por sessão com dois níveis de acesso (admin/cliente)",
        "Dark mode completo, layout responsivo (desktop/tablet/mobile)",
      ],
      "Da concepção ao deploy: modelagem de dados, API REST, autenticação, integração com APIs externas (Google, WhatsApp, e-mail, upload de mídia), design system próprio e containerização para produção.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Google Sheets",
      "Evolution API",
      "N8N",
      "Docker",
      "Cloudinary",
      "Vite",
      "React Router",
      "Brevo",
      "Webhooks (Hotmart/Kiwify/Assiny)",
      "Typeform",
      "EasyPanel (VPS)",
    ],
    video: "/images/onboarding-automatico-cde.mp4",
    poster: "/images/poster-onboarding-cde.jpg",
    gradient: "linear-gradient(135deg,#1577D6,#2BD98B)",
  },
];

const techColors: Record<string, string> = {
  N8N: "#FF6B8A",
  Make: "#8B7CF6",
  "WhatsApp API": "#2BD98B",
  WhatsApp: "#2BD98B",
  "Google Sheets": "#34C77B",
  "Google Docs API": "#34C77B",
  Automação: "#2EC0EE",
  HTML: "#FF8A65",
  HTML5: "#FF8A65",
  CSS: "#4FC3F7",
  CSS3: "#4FC3F7",
  "Evolution API": "#2BD8C4",
  Python: "#FFD166",
  JavaScript: "#F5D547",
  TypeScript: "#5B9BF6",
  "SQL (PostgreSQL)": "#6FA8DC",
  PostgreSQL: "#6FA8DC",
  Supabase: "#3ECF8E",
  OpenAI: "#74E0C4",
  "Node.js": "#8CD867",
  "Express.js": "#8CD867",
  "Autentique API": "#C792EA",
  Typeform: "#FF6B6B",
  "API Evolution": "#2BD8C4",
  GraphQL: "#E434AA",
  Brevo: "#0B996E",
  "JWT + bcrypt": "#F6A45C",
  "Chart.js": "#FF6384",
  "Design Responsivo": "#2EC0EE",
  React: "#61DAFB",
  "React Router": "#CA4245",
  "Tailwind CSS": "#38BDF8",
  Docker: "#2496ED",
  Cloudinary: "#3448C5",
  Vite: "#A78BFA",
  "Webhooks (Hotmart/Kiwify/Assiny)": "#FF8A65",
  "EasyPanel (VPS)": "#8CD867",
};

const techColor = (name: string) => techColors[name] || "#2EC0EE";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hover, setHover] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#050608] relative">
      <div className="max-w-[1240px] mx-auto">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-[7px] bg-white/4 border border-white/10 text-[#2ec0ee] rounded-full text-[12.5px] font-bold mb-4">
            Portfólio
          </span>
          <h2 className="font-[Sora] font-extrabold text-[clamp(2rem,3.8vw,2.8rem)] mb-3.5 tracking-[-0.02em] text-[#f3f6fa]">
            Projetos em Destaque
          </h2>
          <p className="text-[#a9b4c4] text-[17px] max-w-[600px] mx-auto">
            Soluções de automação e desenvolvimento que transformaram
            processos e geraram resultados reais.
          </p>
        </Reveal>

        <div className="flex md:hidden items-center justify-center gap-2 text-[#6b7688] text-xs font-semibold mb-4 -mt-6">
          <ArrowLeft className="w-3.5 h-3.5 animate-swipe-hint-left" />
          Arraste para o lado para ver mais projetos
          <ArrowRight className="w-3.5 h-3.5 animate-swipe-hint-right" />
        </div>

        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative"
        >
          <button
            onClick={() => scrollBy("left")}
            aria-label="Anterior"
            className={`absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-[46px] h-[46px] rounded-full bg-[#0a0c10]/85 border border-white/15 text-[#f3f6fa] flex items-center justify-center backdrop-blur transition-opacity duration-300 ${
              hover ? "opacity-100" : "opacity-0"
            } hidden md:flex`}
          >
            <ChevronLeft className="w-[22px] h-[22px]" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            aria-label="Próximo"
            className={`absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-[46px] h-[46px] rounded-full bg-[#0a0c10]/85 border border-white/15 text-[#f3f6fa] flex items-center justify-center backdrop-blur transition-opacity duration-300 ${
              hover ? "opacity-100" : "opacity-0"
            } hidden md:flex`}
          >
            <ChevronRight className="w-[22px] h-[22px]" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-5 pt-1.5 px-1 fc-scrollbar-blue"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {projects.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 60}
                className="flex-shrink-0 bg-white/2.5 border border-white/9 rounded-[22px] overflow-hidden flex flex-col hover:border-[#2ec0ee]/40 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(31,148,224,0.35)] transition-all duration-300"
                as="div"
              >
                <div
                  style={{ scrollSnapAlign: "start", width: "320px" }}
                  className="flex flex-col h-full"
                >
                  {project.video ? (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="h-[175px] overflow-hidden relative cursor-pointer w-full"
                    >
                      <img
                        src={project.poster}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/28 flex items-center justify-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-white/92 flex items-center justify-center text-[#1577d6] shadow-[0_10px_26px_-6px_rgba(0,0,0,0.5)]">
                          <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </button>
                  ) : project.image ? (
                    <div className="h-[175px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[#2ec0ee] text-[11.5px] font-bold uppercase tracking-[.07em] mb-2">
                      {project.company}
                    </p>
                    <h3 className="font-[Sora] font-bold text-[18px] mb-2.5 leading-[1.35] text-[#f3f6fa]">
                      {project.title}
                    </h3>
                    <p className="text-[#a9b4c4] text-sm leading-[1.6] mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <p className="text-[#6b7688] text-[10.5px] font-bold uppercase tracking-[.08em] mb-2.5">
                      Stack principal
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => {
                        const color = techColor(tech);
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                            style={{
                              background: "rgba(255,255,255,.03)",
                              border: `1px solid ${color}55`,
                              color,
                            }}
                          >
                            <span
                              className="w-[7px] h-[7px] rounded-full"
                              style={{ background: color }}
                            />
                            {tech}
                          </span>
                        );
                      })}
                      {project.technologies.length > 4 && (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-dashed border-[#2ec0ee]/50 text-[#2ec0ee] hover:bg-[#2ec0ee]/10 transition-colors"
                        >
                          <Sparkles className="w-3 h-3" />+
                          {project.technologies.length - 4} no detalhe
                        </button>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-auto inline-flex items-center gap-1.5 text-[#1577d6] font-bold text-sm"
                    >
                      Ver detalhes <ArrowRight className="w-[15px] h-[15px]" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Projeto */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0a0c10] border border-white/12 rounded-[22px] max-w-[720px] w-full max-h-[88vh] overflow-y-auto shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 px-7 py-6 border-b border-white/8">
              <div>
                <p className="text-[#2ec0ee] text-xs font-bold uppercase tracking-[.06em] mb-1.5">
                  {selectedProject.company}
                </p>
                <h3 className="font-[Sora] font-bold text-[22px] text-[#f3f6fa]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-[10px] text-[#a9b4c4]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7">
              {selectedProject.video && (
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  className="w-full rounded-2xl bg-black mb-5 max-h-[50vh]"
                />
              )}
              <div className="text-[#a9b4c4] leading-[1.75] mb-6 flex flex-col gap-4">
                {(selectedProject.details ?? [selectedProject.description]).map(
                  (block, i) =>
                    Array.isArray(block) ? (
                      <ul key={i} className="flex flex-col gap-2 pl-1">
                        {block.map((item, j) => (
                          <li key={j} className="flex gap-2.5">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#2ec0ee] mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i}>{block}</p>
                    )
                )}
              </div>
              <p className="font-bold text-[#f3f6fa] mb-3">
                Tecnologias utilizadas:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {selectedProject.technologies.map((tech) => {
                  const color = techColor(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[13.5px]"
                      style={{
                        background: "rgba(255,255,255,.03)",
                        border: `1px solid ${color}55`,
                        color,
                      }}
                    >
                      <span
                        className="w-[7px] h-[7px] rounded-full"
                        style={{ background: color }}
                      />
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
