import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import ClientsStrip from "@/components/ClientsStrip";
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
 * 3. Companies - Empresas fundadas/co-fundadas
 * 4. Projects - Portfólio de projetos
 * 5. Skills - Habilidades técnicas
 * 6. Certificates - Certificados e cursos
 * 7. Contact - Formulário e informações de contato
 * 8. Footer - Rodapé
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050608]">
      <Header />
      <main>
        <Hero />
        <Companies />
        <ClientsStrip />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
