import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#modulos", label: "Soluções" },
    { href: "#ecossistemas", label: "Combos" },
    { href: "#autoridade", label: "Sobre" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-3 px-4 md:py-4 md:px-6 bg-background/90 backdrop-blur-md border-b border-border/50"
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-primary flex items-center justify-center rounded-sm">
            <span className="text-primary-foreground font-bold text-xs md:text-sm">P</span>
          </div>
          <span className="font-mono text-base md:text-lg font-bold tracking-tight">
            PHORG<span className="text-primary">_</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-mono"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status indicator - Desktop */}
        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span>ONLINE</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-t border-border/50 mt-3"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-3 px-4 text-base text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200 font-mono"
                >
                  {link.label}
                </motion.a>
              ))}
              {/* Mobile Status */}
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground px-4 pt-4 mt-2 border-t border-border/50">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>STATUS: ONLINE</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
