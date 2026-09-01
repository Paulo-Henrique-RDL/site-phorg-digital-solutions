import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ModulesSection from "@/components/sections/ModulesSection";
import EcosystemsSection from "@/components/sections/EcosystemsSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <ModulesSection />
      <EcosystemsSection />
      <AuthoritySection />
      <FooterSection />
    </main>
  );
};

export default Index;