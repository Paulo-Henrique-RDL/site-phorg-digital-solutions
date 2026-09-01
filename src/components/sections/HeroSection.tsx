import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MatrixRain from "@/components/MatrixRain";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá Paulo, vi o site e quero entender os Combos.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern pt-16">
      {/* Matrix rain effect in corners */}
      <MatrixRain />

      {/* Glow effect behind text - moderate intensity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] rounded-full bg-primary/30 blur-[70px] md:blur-[100px] animate-glow-pulse" />
      </div>

      <div className="container relative z-10 px-5 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Terminal Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <span className="terminal-text text-xs md:text-sm tracking-wider md:tracking-widest">
              {">"} SYSTEM.STATUS: ONLINE
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 md:mb-6 px-2"
          >
            Seu negócio merece um{" "}
            <span className="text-primary">Sistema Próprio</span>.
            <br />
            <span className="block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground">
              Feito sob medida. Sem limitações.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2"
          >
            Desenvolvemos sistemas personalizados que automatizam sua operação e 
            resolvem os problemas únicos do seu negócio.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground font-bold text-sm md:text-base lg:text-lg px-6 md:px-10 py-5 md:py-6 rounded-sm border-2 border-primary hover:bg-background hover:text-primary hover:border-primary transition-all duration-300 w-full sm:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                INICIAR DIAGNÓSTICO
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - hidden on small mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Fade transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default HeroSection;
