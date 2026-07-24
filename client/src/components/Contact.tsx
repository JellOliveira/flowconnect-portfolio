import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import Reveal from "./Reveal";

/**
 * FLOWCONNECT DEV - Contact Section
 * Redesign 2026: tema escuro, envio via FormSubmit AJAX (sem abrir o
 * cliente de e-mail do usuário).
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);
    setSendError(false);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/jell.meira.30@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Novo contato pelo portfólio - ${formData.name}`,
            _template: "table",
          }),
        }
      );

      if (!response.ok) throw new Error("fail");

      setSending(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4500);
    } catch {
      setSending(false);
      setSendError(true);
      setTimeout(() => setSendError(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#050608] relative">
      <div className="max-w-[1240px] mx-auto">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-[7px] bg-white/4 border border-white/10 text-[#2ec0ee] rounded-full text-[12.5px] font-bold mb-4">
            Vamos Conversar
          </span>
          <h2 className="font-[Sora] font-extrabold text-[clamp(2rem,3.8vw,2.8rem)] mb-3.5 tracking-[-0.02em] text-[#f3f6fa]">
            Entre em Contato
          </h2>
          <p className="text-[#a9b4c4] text-[17px] max-w-[600px] mx-auto">
            Estou disponível para novos projetos, parcerias e oportunidades.
            Vamos criar algo incrível juntos!
          </p>
        </Reveal>

        <div className="grid gap-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))" }}>
          {/* Contact Info */}
          <Reveal className="flex flex-col gap-7">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#f3f6fa] mb-1">Email</h3>
                <a
                  href="mailto:jell.meira.30@gmail.com"
                  className="text-[#a9b4c4] hover:text-[#2ec0ee] transition-colors"
                >
                  jell.meira.30@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#f3f6fa] mb-1">Telefone</h3>
                <a
                  href="https://wa.me/5577991410379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a9b4c4] hover:text-[#2ec0ee] transition-colors"
                >
                  (77) 99141-0379
                </a>
                <p className="text-[#6b7688] text-[13px] mt-1">
                  WhatsApp disponível
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#f3f6fa] mb-1">Localização</h3>
                <p className="text-[#a9b4c4]">Vitória da Conquista - Bahia</p>
                <p className="text-[#6b7688] text-[13px] mt-1">
                  Disponível para trabalhos remotos
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-white/8">
              <h3 className="font-bold text-[#f3f6fa] mb-4">
                Conecte-se nas Redes Sociais
              </h3>
              <div className="flex gap-3.5">
                <a
                  href="https://github.com/JellOliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="w-12 h-12 flex items-center justify-center bg-white/4 border border-white/10 rounded-2xl text-[#a9b4c4] hover:bg-gradient-to-br hover:from-[#2ec0ee] hover:to-[#1577d6] hover:text-[#04121f] hover:-translate-y-1 transition-all duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jessica-oliveira-meira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-12 h-12 flex items-center justify-center bg-white/4 border border-white/10 rounded-2xl text-[#a9b4c4] hover:bg-gradient-to-br hover:from-[#2ec0ee] hover:to-[#1577d6] hover:text-[#04121f] hover:-translate-y-1 transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="bg-white/2.5 border border-white/9 rounded-[22px] p-8 shadow-[0_30px_70px_-25px_rgba(31,148,224,0.45)]"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-[11.5px] font-bold text-[#a9b4c4] uppercase tracking-[.05em] mb-2"
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
                  placeholder="Seu nome"
                  className="w-full bg-white/3 border border-[#2ec0ee]/35 shadow-[0_0_12px_rgba(46,192,238,0.18)] rounded-xl px-3.5 py-3 text-[#f3f6fa] text-sm placeholder:text-[#6b7688] focus:outline-none focus:border-[#2ec0ee] focus:shadow-[0_0_18px_rgba(46,192,238,0.4)] focus:ring-4 focus:ring-[#1f94e0]/16 transition-all"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-[11.5px] font-bold text-[#a9b4c4] uppercase tracking-[.05em] mb-2"
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
                  placeholder="seu@email.com"
                  className="w-full bg-white/3 border border-[#2ec0ee]/35 shadow-[0_0_12px_rgba(46,192,238,0.18)] rounded-xl px-3.5 py-3 text-[#f3f6fa] text-sm placeholder:text-[#6b7688] focus:outline-none focus:border-[#2ec0ee] focus:shadow-[0_0_18px_rgba(46,192,238,0.4)] focus:ring-4 focus:ring-[#1f94e0]/16 transition-all"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[11.5px] font-bold text-[#a9b4c4] uppercase tracking-[.05em] mb-2"
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
                  placeholder="Conte-me sobre seu projeto..."
                  className="w-full bg-white/3 border border-[#2ec0ee]/35 shadow-[0_0_12px_rgba(46,192,238,0.18)] rounded-xl px-3.5 py-3 text-[#f3f6fa] text-sm placeholder:text-[#6b7688] resize-none focus:outline-none focus:border-[#2ec0ee] focus:shadow-[0_0_18px_rgba(46,192,238,0.4)] focus:ring-4 focus:ring-[#1f94e0]/16 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-[#2ec0ee] to-[#1577d6] text-[#04121f] py-[15px] rounded-xl font-bold text-[15px] shadow-[0_14px_34px_-10px_rgba(31,148,224,0.55)] hover:-translate-y-0.5 transition-transform duration-200 disabled:opacity-75"
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-[#04121f]/35 border-t-[#04121f] animate-fc-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-[18px] h-[18px]" />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {submitted && (
                <div className="mt-4 p-3.5 bg-[#2bd98b]/12 border border-[#2bd98b]/35 rounded-xl text-[#2bd98b] text-[13.5px]">
                  ✓ Mensagem enviada! Vou responder em breve no seu email.
                </div>
              )}
              {sendError && (
                <div className="mt-4 p-3.5 bg-[#ff5a5a]/10 border border-[#ff5a5a]/30 rounded-xl text-[#ff7a7a] text-[13.5px]">
                  Não consegui enviar agora. Tente novamente ou escreva para
                  jell.meira.30@gmail.com.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
