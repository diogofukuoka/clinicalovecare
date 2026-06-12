import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Heart, Activity, Target, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function BentoFeatures() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y = useSpring(yRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={ref} id="diferenciais" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="mb-20 max-w-2xl"
        >
          <motion.h2 variants={fadeUp} className="text-primary font-bold tracking-widest text-sm uppercase mb-4">
            Nossos Pilares
          </motion.h2>
          <motion.h3 variants={fadeUp} className="font-display leading-tight text-4xl md:text-5xl font-semibold text-white">
            Por que os tutores <br/> confiam na Love Care?
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Bento Item 1 - Large */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] p-8 md:p-12 hover:bg-white/[0.06] hover:border-primary/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Heart className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-8 text-white relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center border border-primary/20">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-2xl font-semibold mb-3">Atendimento Humanizado</h4>
                <p className="text-gray-400 font-sans leading-relaxed max-w-md">
                  Acreditamos que o carinho cura. Nossos profissionais são atenciosos e tratam o seu pet com amor genuíno e profundo respeito durante todo o processo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2 - Small */}
          <motion.div
            variants={fadeUp}
            className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] p-8 hover:bg-white/[0.06] hover:border-primary/30 transition-colors flex flex-col justify-between min-h-[320px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center border border-primary/20 mb-8">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-xl font-semibold mb-3 text-white">Abordagem Personalizada</h4>
              <p className="text-gray-400 font-sans leading-relaxed">
                Cada pet é único. Desenvolvemos protocolos guiados pelas necessidades individuais clínicas do paciente e rotina do tutor.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 3 - Small */}
          <motion.div
            variants={fadeUp}
            className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] p-8 hover:bg-white/[0.06] hover:border-primary/30 transition-colors flex flex-col justify-between min-h-[320px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center border border-primary/20 mb-8">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-xl font-semibold mb-3 text-white">Organização Profissional</h4>
              <p className="text-gray-400 font-sans leading-relaxed">
                Ambiente acolhedor aliado a uma estrutura clínica de alto padrão, organização rigorosa e tecnologia avançada.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 4 - Large */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#12100e] border border-primary/20 p-8 md:p-12"
          >
            <motion.div style={{ y, scale: 1.4, willChange: 'transform' }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596223575445-56b3eef0b9bb?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-end justify-between h-full">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  <Activity className="w-6 h-6 text-[#050505]" />
                </div>
                <h4 className="font-display text-2xl font-semibold mb-3 text-white">Acompanhamento Pós-Consulta</h4>
                <p className="text-gray-400 font-sans leading-relaxed max-w-sm">
                  Nossa dedicação não acaba quando você sai da clínica. Monitoramos proativamente a evolução do tratamento para garantir que seu pet se recupere.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
