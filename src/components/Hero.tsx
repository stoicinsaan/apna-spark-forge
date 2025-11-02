import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,168,255,0.1),transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Trial Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-glow-pulse">
            <span className="text-primary font-semibold">🎉 7-Day Free Trial</span>
            <span className="text-muted-foreground">— Try Risk-Free</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Grow Your Brand with{" "}
            <span className="gradient-text">Creative & Result-Driven</span> Marketing
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Websites • SEO • Ads • Video Shoots — 7-Day Free Trial included
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <a href="#packages">
                Get Started <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button variant="outlineGlow" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <a href="#portfolio">
                <Play className="mr-2" size={20} /> Watch Demo Video
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "150+", label: "Active Clients" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
