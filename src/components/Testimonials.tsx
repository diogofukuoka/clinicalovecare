import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Testimonials() {
  const testimonials = [
    {
      text: "A equipe tratou o Max com um amor que eu nunca vi em outra clínica. O acompanhamento após a consulta fez toda a diferença na recuperação dele.",
      author: "Camila R.",
      role: "Tutora do Max (Golden Retriever)"
    },
    {
      text: "Profissionalismo impecável. O ambiente é tão calmo que a Luna nem percebe que está no veterinário. Referência absoluta em bem-estar animal.",
      author: "Fernando T.",
      role: "Tutor da Luna (Siamês)"
    },
    {
      text: "Eu confio na Love Care de olhos fechados. O protocolo que criaram para o tratamento renal do Thor garantiu que ele voltasse a brincar e viver plenamente.",
      author: "Marina S.",
      role: "Tutora do Thor (Bulldog)"
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-primary font-bold tracking-widest text-sm uppercase mb-4">
            Família Love Care
          </motion.h2>
          <motion.h3 variants={fadeUp} className="font-display text-4xl md:text-5xl font-semibold text-white">
            O que dizem os tutores
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-8 right-8" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 font-sans leading-relaxed mb-8 italic relative z-10">
                "{t.text}"
              </p>
              <div>
                <p className="text-white font-semibold font-display">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
