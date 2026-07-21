import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

/**
 * FLOWCONNECT DEV - Contact Section
 * Design Philosophy: Minimalismo Corporativo
 * - Formulário de contato simples
 * - Links diretos para redes sociais
 * - Informações de contato destacadas
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = "jell.meira.30@gmail.com";
    const subject = `Contato pelo Portfólio - ${formData.name}`;
    const body = [
      `Nome: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      "Mensagem:",
      formData.message,
    ].join("\n");

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Vamos Conversar
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estou disponível para novos projetos, parcerias e oportunidades.
            Vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:jell.meira.30@gmail.com"
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    jell.meira.30@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                  <a
                    href="https://wa.me/5577991410379"
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    (77) 99141-0379
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    WhatsApp disponível
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Localização</h3>
                  <p className="text-gray-600">Vitória da Conquista - Bahia</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Disponível para trabalhos remotos
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Conecte-se nas Redes Sociais
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/JellOliveira"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-all"
                    title="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jessica-oliveira-meira/"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-float"
            >
              {/* Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Enviar Mensagem
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  ✓ Mensagem enviada! Vou responder em breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
