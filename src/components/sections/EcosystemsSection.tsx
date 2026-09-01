import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ecosystems = [
  {
    id: "clinica",
    title: "CLÍNICA AUTÔNOMA",
    headline: "Sua agenda cheia. Sua recepção vazia.",
    promise: "O fim dos buracos na agenda. Um sistema que capta o paciente no Google e uma IA que agenda sozinha no WhatsApp.",
    stack: ["Landing Page Pro", "Sistema de Agenda", "IA Secretária"],
    ctaDefault: "Clique para saber mais",
    ctaHover: "DESCUBRA MAIS →",
    borderColor: "border-gold",
    glowClass: "glow-gold",
    accentColor: "text-gold",
  },
  {
    id: "delivery",
    title: "DELIVERY TECH",
    headline: "Pare de ser sócio dos aplicativos.",
    promise: "Recupere os 30% de lucro que você deixa na mesa. Sistema próprio, sem taxas, com atendimento automatizado.",
    stack: ["Web App Cardápio", "IA Garçom", "QR Code Mesa"],
    ctaDefault: "Clique para saber mais",
    ctaHover: "DESCUBRA MAIS →",
    borderColor: "border-secondary",
    glowClass: "glow-secondary",
    accentColor: "text-secondary",
  },
  {
    id: "local",
    title: "PRESENÇA LOCAL",
    headline: "Domine o mapa da sua cidade.",
    promise: "Colocamos sua marca no topo das buscas locais com uma estrutura digital profissional.",
    stack: ["Landing Page Start", "Google Meu Negócio", "Bio-Page"],
    ctaDefault: "Clique para saber mais",
    ctaHover: "DESCUBRA MAIS →",
    borderColor: "border-cyan",
    glowClass: "glow-cyan",
    accentColor: "text-cyan",
  },
  {
    id: "ecommerce",
    title: "E-COMMERCE COMPLETO",
    headline: "Sua loja online. Seu lucro total.",
    promise: "Montamos sua loja virtual do zero, integrada com gateways de pagamento confiáveis ou da sua escolha. Sem mensalidades abusivas, sem intermediários.",
    stack: ["Loja Virtual Completa", "Gateway de Pagamento", "Painel de Gestão", "Checkout Seguro"],
    ctaDefault: "Clique para saber mais",
    ctaHover: "MONTE SUA LOJA →",
    borderColor: "border-purple",
    glowClass: "glow-purple",
    accentColor: "text-purple",
  },
];

const EcosystemsSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá Paulo, vi o site e quero entender os Combos.";

  return (
    <section id="ecossistemas" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow - smaller on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-secondary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container px-5 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="terminal-text text-xs md:text-sm tracking-wider md:tracking-widest block mb-3 md:mb-4">
            // COMBOS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
            Soluções <span className="text-primary">Completas</span>
          </h2>
        </motion.div>

        {/* Ecosystem Cards */}
        <div className="space-y-5 md:space-y-8">
          {ecosystems.map((eco, index) => (
            <motion.div
              key={eco.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass ${eco.borderColor} border-2 p-5 md:p-8 lg:p-10 rounded-sm relative overflow-hidden group transition-all duration-500`}
            >
              {/* Progress bar decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  className="progress-fill"
                />
              </div>

              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 md:gap-8 items-start lg:items-center">
                {/* Left Content */}
                <div>
                  <span className={`font-mono text-xs tracking-widest ${eco.accentColor} mb-2 md:mb-3 block`}>
                    {eco.title}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                    {eco.headline}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {eco.promise}
                  </p>
                </div>

                {/* Right Content */}
                <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
                  {/* Stack List */}
                  <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 w-full lg:w-auto">
                    {eco.stack.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="font-mono text-xs md:text-sm flex items-center gap-2"
                      >
                        <span className="text-primary">[+]</span>
                        <span className="text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button with hover text animation */}
                  <Button
                    asChild
                    className={`group/btn relative bg-transparent ${eco.borderColor} border-2 hover:bg-foreground hover:text-background font-bold px-4 md:px-6 py-4 md:py-5 rounded-sm transition-all duration-300 overflow-hidden w-full sm:w-auto min-w-0 sm:min-w-[200px] md:min-w-[240px] text-sm md:text-base`}
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <span className="block transition-all duration-300 group-hover/btn:opacity-0 group-hover/btn:-translate-y-4">
                        {eco.ctaDefault}
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 text-xs md:text-sm">
                        {eco.ctaHover}
                      </span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Corner decorations - smaller on mobile */}
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 font-mono text-[10px] md:text-xs text-muted-foreground/50">
                v2.0
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemsSection;
