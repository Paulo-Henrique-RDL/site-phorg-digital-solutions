import { motion } from "framer-motion";
import { Zap, Code2, Brain, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  {
    icon: Code2,
    title: "SISTEMAS PERSONALIZADOS",
    description: "Cada negócio tem suas regras. Desenvolvemos a lógica exata que sua operação precisa. Sem gambiarras, sem limitações.",
    cta: "Ver Sistemas",
    href: "#",
  },
  {
    icon: Brain,
    title: "AUTOMAÇÃO COM IA",
    description: "Agentes treinados para replicar seus melhores processos. Atendem clientes e executam tarefas repetitivas 24h/dia.",
    cta: "Ver Automações",
    href: "#",
  },
  {
    icon: Zap,
    title: "PRESENÇA DIGITAL",
    description: "Sites de alta performance, preparados para tráfego pago. Rápidos, bonitos e funcionais.",
    cta: "Ver Sites",
    href: "#",
  },
  {
    icon: ShoppingCart,
    title: "E-COMMERCE",
    description: "Lojas virtuais completas com gateways de pagamento integrados. Sua escolha de plataforma, nosso padrão de qualidade.",
    cta: "Ver Lojas",
    href: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ModulesSection = () => {
  return (
    <section id="modulos" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container px-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="terminal-text text-xs md:text-sm tracking-wider md:tracking-widest block mb-3 md:mb-4">
            // SOLUÇÕES_PERSONALIZADAS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
            Sistemas <span className="text-primary">Sob Medida</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-card border border-border p-5 md:p-6 lg:p-8 rounded-sm transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,148,0.15)]"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6 relative">
                <module.icon className="w-10 h-10 md:w-12 md:h-12 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4 font-mono tracking-wide">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                {module.description}
              </p>

              {/* CTA */}
              <Button
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10 p-0 font-semibold group/btn text-sm md:text-base"
                asChild
              >
                <a href={module.href}>
                  {module.cta}
                  <span className="ml-2 transition-transform duration-200 group-hover/btn:translate-x-1">
                    →
                  </span>
                </a>
              </Button>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t border-r border-border group-hover:border-primary transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b border-l border-border group-hover:border-primary transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
