import Reveal from "./Reveal";

/**
 * FLOWCONNECT DEV - "Desenvolveu soluções para" strip
 * Marquee infinito com logos de clientes, exibido logo após "Minhas Empresas".
 */

const clientLogos = [
  { name: "C. Amorim", logo: "/images/Logo das empresas que fiz sistema/C-Amorim-v2.png" },
  { name: "CDE Educação", logo: "/images/Logo das empresas que fiz sistema/CDE-Educacao-v2.png" },
  { name: "Escola Gideão", logo: "/images/Logo das empresas que fiz sistema/Gideao-v2.png" },
];

export default function ClientsStrip() {
  return (
    <section className="px-6 pb-14 bg-[#050608]">
      <div className="max-w-[1240px] mx-auto">
        <Reveal>
          <p className="text-center text-[#6b7688] font-bold text-[13.5px] uppercase tracking-[.08em] mb-7">
            Desenvolveu soluções para:
          </p>
        </Reveal>
        <Reveal>
          <div
            className="overflow-hidden relative"
            style={{
              maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <div className="flex w-max items-center animate-fc-marquee-slow" style={{ gap: "88px" }}>
              {[...clientLogos, ...clientLogos].map((client, i) => (
                <img
                  key={i}
                  src={client.logo}
                  alt={client.name}
                  className="h-[88px] w-auto object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
