import { motion } from 'motion/react';

export function Location() {
  return (
    <section id="localizacao" className="py-20 bg-[#020202] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 text-center md:text-left">
             <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-4">Como Chegar</h2>
             <h3 className="font-display text-4xl md:text-5xl font-semibold text-white">Nossa Localização</h3>
        </div>
        <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <iframe 
            src="https://www.google.com/maps?q=Rua+joao+reffo+1529,+Curitiba,+Brazil+82410-000&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Clínica Love Care"
          />
        </div>
      </div>
    </section>
  )
}
