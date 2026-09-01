import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "JAVA",
  "SPRING",
  "REACT",
  "DOCKER",
  "AWS",
  "OPENAI",
];

// Matrix rain effect component
const MatrixRain = () => {
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    const chars = "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF";
    const cols = [];
    for (let i = 0; i < 10; i++) {
      let str = "";
      for (let j = 0; j < 25; j++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      cols.push(str);
    }
    setColumns(cols);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div className="flex gap-3 md:gap-4 h-full">
        {columns.map((col, i) => (
          <motion.div
            key={i}
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className="font-mono text-primary text-[10px] md:text-xs leading-relaxed whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            {col}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <span className="terminal-text text-xs md:text-sm tracking-wider md:tracking-widest">
            {">"} ADMIN_PROFILE: PAULO_HENRIQUE
          </span>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Photo Section with Matrix Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-1 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0"
          >
            <div className="relative aspect-square overflow-hidden rounded-sm border border-border">
              {/* Matrix rain background */}
              <MatrixRain />
              
              {/* Placeholder avatar */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-muted to-background rounded-sm border border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-1 md:mb-2">PH</div>
                    <span className="font-mono text-[10px] md:text-xs text-muted-foreground">DEV_SENIOR</span>
                  </div>
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
            </div>

            {/* Decorative elements - smaller on mobile */}
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border border-primary/30 rounded-sm" />
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 border border-primary/20 rounded-sm" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2"
          >
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 text-muted-foreground">
              <p className="mb-4 md:mb-6">
                "Na internet, <span className="text-foreground font-semibold">'bonito' não paga conta</span>. 
                O que paga é funcionalidade e estabilidade.
              </p>
              <p className="mb-4 md:mb-6">
                Utilizo tecnologias de nível bancário (Java, Spring Boot) e interfaces 
                reativas (React) para garantir que seu projeto seja um{" "}
                <span className="text-primary font-semibold">Ativo</span>, não uma dor de cabeça.
              </p>
              <p>
                <span className="text-primary font-bold">Eu vendo lógica, código e resultado.</span>"
              </p>
            </blockquote>

            {/* Skills Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-2 md:gap-3 pt-6 md:pt-8 border-t border-border"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="font-mono text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 border border-border bg-muted/50 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
