export function AuthorityBand() {
  const items = [
    "Atendimento Humanizado",
    "•",
    "Monitoramento Contínuo",
    "•",
    "Protocolos Exclusivos",
    "•",
    "Medicina Baseada em Evidências",
    "•",
    "Infraestrutura Premium",
    "•",
    "Amor e Cuidado",
    "•",
  ];

  return (
    <div className="w-full py-8 border-y border-white/5 bg-[#0a0a0a] overflow-hidden whitespace-nowrap flex relative">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      
      <div className="flex animate-marquee min-w-max items-center">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`mx-8 font-display text-lg tracking-widest uppercase ${
              item === "•" ? "text-primary/50" : "text-gray-500 font-medium"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
