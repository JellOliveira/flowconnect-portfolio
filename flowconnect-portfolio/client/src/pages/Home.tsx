import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * FLOWCONNECT DEV - Home Page
 * Design Philosophy: Minimalismo Corporativo com Gradientes Dinâmicos
 *
 * Estrutura:
 * 1. Header - Navegação fixa
 * 2. Hero - Apresentação principal
 * 3. Projects - Portfólio de projetos
 * 4. Skills - Habilidades técnicas
 * 5. Certificates - Certificados e cursos
 * 6. Contact - Formulário e informações de contato
 * 7. Footer - Rodapé
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
