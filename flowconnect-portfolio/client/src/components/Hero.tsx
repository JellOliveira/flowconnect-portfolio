import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

/**
 * FLOWCONNECT DEV - Hero Section
 * Design Philosophy: Minimalismo Corporativo
 * - Layout assimétrico com foto grande e texto descritivo
 * - Gradiente azul/ciano como destaque
 * - CTA prominente com animação
 */

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Bem-vindo ao meu portfólio
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-gray-900">Jéssica Oliveira Meira</span>
                <br />
                <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  Automação & IA
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Especialista em automação com N8N, desenvolvimento web e criação de agentes de IA com Gemini.
              Transformo processos manuais em soluções inteligentes e escaláveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => {
                  const contact = document.getElementById("contact");
                  contact?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Vamos conversar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-700 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Ver Projetos
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 items-center pt-8 border-t border-gray-200">
              <span className="text-sm text-gray-600">Conecte-se comigo:</span>
              <a
                href="https://github.com/JellOliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-blue-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/jessica-oliveira-meira/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-700" />
              </a>
              <a
                href="mailto:jell.meira.30@gmail.com"
                className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5 text-blue-700" />
              </a>
              <a
                href="https://wa.me/5577991410379"
                className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-5 h-5 text-blue-700" />
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/MINHA-FOTO-cortada.jpg"
                alt="Jéssica Oliveira"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Badge flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200 shadow-float">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">5º Semestre</p>
                <p className="text-sm text-gray-600">Análise e Desenvolvimento de Sistemas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Empresas que trabalhou */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-600 font-semibold mb-8">
            Desenvolveu soluções para:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <img
              src="/images/Logo das empresas que fiz sistema/C-Amorim-removebg.png"
              alt="C. Amorim"
              className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/Logo das empresas que fiz sistema/CDE-Digital-removebg.png"
              alt="CDE Digital"
              className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
