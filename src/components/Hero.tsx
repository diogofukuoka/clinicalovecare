import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textFadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y = useSpring(yRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y, scale: 1.15, willChange: 'transform' }}
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=3000&auto=format&fit=crop"
          alt="Veterinário examinando um cachorro com carinho"
          className="w-full h-full object-cover object-center opacity-70 origin-bottom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={textFadeUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-primary">Medicina Veterinária Premium</span>
          </motion.div>

          <motion.h1
            variants={textFadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-1px] text-white mb-8 leading-[1.1]"
          >
            Excelência e Cuidado<br className="hidden md:block" />
            Para Quem Você <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FADF8F] italic">Mais Ama.</span>
          </motion.h1>

          <motion.p
            variants={textFadeUp}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Nossa missão é proporcionar máxima qualidade de vida ao seu pet. Atendimento clínico especializado, acompanhamento contínuo e infraestrutura de ponta para que ele viva melhor e por muito mais tempo.
          </motion.p>

          <motion.div variants={textFadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/5541999161529"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-sm rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              <span className="absolute inset-0 w-full h-full bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                Começar Tratamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="#diferenciais"
              className="inline-flex flex-col items-center justify-center text-sm font-medium text-gray-400 hover:text-white transition-colors gap-2"
            >
              Conheça Nossa Abordagem
              <span className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
