import { MessageCircle, Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919877830757"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-glow-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Call Button (Mobile Only) */}
      <a
        href="tel:9877830757"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 md:hidden animate-glow-pulse"
        aria-label="Call Now"
        style={{ animationDelay: '0.5s' }}
      >
        <Phone className="w-7 h-7 text-primary-foreground" />
      </a>
    </>
  );
};

export default FloatingCTA;
