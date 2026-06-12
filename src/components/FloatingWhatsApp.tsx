import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5541999161529"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-75 group-hover:animate-none"></div>
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
}
