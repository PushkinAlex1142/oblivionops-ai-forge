
import { ArrowRight, Bot, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 animate-fade-up">
            <img
              src="/lovable-uploads/968f78b9-60e4-4a2b-9b22-2399b2b52870.png"
              alt="OblivionOps Logo"
              className="h-20 mx-auto mb-8"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
              Future-proof your business operations
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Custom AI Solutions for Digital Pioneers. Revolutionizing operations through intelligent automation.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg card-glow bg-secondary/10">
            <Bot className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Automations</h3>
            <p className="text-gray-400">Tailored AI solutions designed specifically for your unique operational needs.</p>
          </div>
          <div className="p-6 rounded-lg card-glow bg-secondary/10">
            <Zap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ultra-Low Cost</h3>
            <p className="text-gray-400">Efficient automations that run at a fraction of traditional operational costs.</p>
          </div>
          <div className="p-6 rounded-lg card-glow bg-secondary/10">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Extreme Flexibility</h3>
            <p className="text-gray-400">Adaptable solutions that evolve with your business requirements.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">About OblivionOps</h2>
          <p className="text-gray-400 text-lg">
            We empower digital businesses with AI automations that are tailored, efficient, and future-proof. Our mission is to revolutionize operations through intelligent solutions that scale with your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Work With Us</h2>
          <p className="text-gray-400 mb-8">
            Ready to transform your operations? Let's discuss your automation needs.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
