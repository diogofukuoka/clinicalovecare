import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const y = useSpring(yRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={ref} id="sobre" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <motion.img
                style={{ y, scale: 1.25, willChange: 'transform' }}
                src="https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?q=80&w=2000&auto=format&fit=crop"
                alt="Profissional avaliando paciente"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-12 bg-[#121212] p-6 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <p className="font-display text-4xl text-primary font-bold mb-1">10+</p>
              <p className="text-sm text-gray-400 font-medium">Anos de Especialização<br/>em Medicina Baseada<br/>em Afeto.</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              show: { transition: { staggerChildren: 0.15 } }
            }}
            className="pl-0 lg:pl-12 pt-12 lg:pt-0"
          >
            <motion.h2 variants={fadeUp} className="text-primary font-bold tracking-widest text-sm uppercase mb-4">
              Nossa Clínica
            </motion.h2>
            <motion.h3 variants={fadeUp} className="font-display text-4xl md:text-5xl font-semibold text-white mb-6 leading-[1.1]">
              Medicina veterinária que transforma a longevidade.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed mb-8">
              A Clínica Love Care foi desenhada para ser um santuário de bem-estar. Unimos o rigor científico de uma equipe de especialistas à sensibilidade necessária para tratar quem não pode dizer onde dói.
            </motion.p>
            
            <motion.div variants={fadeUp} className="space-y-6 mb-12">
              {['Consultas Clínicas Detalhadas', 'Medicina Preventiva & Vacinas', 'Cirurgias Especializadas', 'Exames Laboratoriais e Imagem'].map((service, idx) => (
                <div key={idx} className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-200 text-lg">{service}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="https://wa.me/5541999161529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-primary/50 text-white font-medium rounded-full hover:bg-primary/10 transition-colors"
              >
                Falar com Atendimento
                <ArrowRight className="w-4 h-4 text-primary" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
