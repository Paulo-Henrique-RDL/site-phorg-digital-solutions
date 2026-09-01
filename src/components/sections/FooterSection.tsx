import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FooterSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá Paulo, vi o site e quero entender os Combos.";

  return (
    <footer id="contato" className="py-16 md:py-24 lg:py-32 relative border-t border-border">
      {/* Background glow - smaller on mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] lg:w-[600px] h-[200px] md:h-[300px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="container px-5 relative z-10">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8 px-2">
            Pronto para o próximo nível?
          </h2>
        </motion.div>

        {/* Big CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 md:mb-20 px-2"
        >
          <Button
            asChild
            size="lg"
            className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto flex items-center justify-center gap-2 md:gap-3 bg-primary text-primary-foreground font-bold text-sm sm:text-base md:text-lg lg:text-xl py-6 md:py-8 rounded-sm border-2 border-primary hover:bg-background hover:text-primary transition-all duration-300"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden sm:inline">AGENDAR REUNIÃO NO WHATSAPP</span>
              <span className="sm:hidden">FALAR NO WHATSAPP</span>
            </a>
          </Button>
        </motion.div>

        {/* Technical Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-border pt-6 md:pt-8"
        >
          <div className="flex flex-col gap-4 text-xs md:text-sm font-mono text-muted-foreground">
            <div className="text-center md:text-left">
              © 2025 PHORG DIGITAL SOLUTIONS.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 lg:gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                ONLINE
              </span>
              <span>12ms</span>
              <span>BRAZIL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
