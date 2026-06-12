import { Stethoscope, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-white">
                LOVE CARE
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Elevando o padrão de qualidade de vida animal através de uma medicina veterinária baseada em afeto, ciência e inovação.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/clinicalovecare?igshid=MzRlODBiNWFlZA%3D%3D" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram da Clínica Love Care"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Rua João Reffo, 1529 - Santa Felicidade<br/>, Curitiba - PR, 82410-000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(41) 999161529</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>contato@clinicalovecare.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-400 text-sm flex flex-col">
              <a href="#sobre" className="hover:text-primary transition-colors w-fit">A Clínica</a>
              <a href="#diferenciais" className="hover:text-primary transition-colors w-fit">Diferenciais</a>
              <a href="#servicos" className="hover:text-primary transition-colors w-fit">Serviços</a>
              <a href="#depoimentos" className="hover:text-primary transition-colors w-fit">Avaliações</a>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm font-sans text-center md:text-left">
            &copy; {new Date().getFullYear()} Saúde e Bem-estar Animal (Medicina Veterinária). Todos os direitos reservados.
          </p>
          <div className="text-gray-600 text-sm font-sans text-center md:text-right">
            Clínica Love Care
          </div>
        </div>
      </div>
    </footer>
  );
}
