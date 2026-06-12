import { motion } from 'motion/react';
import { Stethoscope } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 min-h-[80px] flex items-center ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 w-full max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white">
            LOVE CARE
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-300">
          <a href="#sobre" className="hover:text-primary transition-colors">A Clínica</a>
          <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#localizacao" className="hover:text-primary transition-colors">Localização</a>
        </nav>

        <a 
          href="https://wa.me/5541999161529"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-[#050505] font-bold tracking-widest uppercase text-[12px] rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
        >
          Agendar Consulta
        </a>
      </div>
    </motion.header>
  );
}
