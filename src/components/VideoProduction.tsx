import { Button } from "@/components/ui/button";
import { Camera, Home, Building2, Package, Mic, Plane, Calendar } from "lucide-react";

const VideoProduction = () => {
  const videoServices = [
    { icon: Home, title: "Property Shoots", description: "Interior + Drone coverage" },
    { icon: Building2, title: "Business Profiles", description: "Company showcase videos" },
    { icon: Package, title: "Product Videos", description: "Professional product demos" },
    { icon: Mic, title: "Corporate Interviews", description: "Executive testimonials" },
    { icon: Plane, title: "Drone Shoots", description: "Aerial cinematography" },
    { icon: Calendar, title: "Event Coverage", description: "Conferences & launches" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Video Production</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Video Shoots</span> & Photography
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Capture your brand's story with stunning visuals. From property tours to corporate profiles,
              we deliver cinematic quality that engages your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Book a Video Shoot</a>
              </Button>
              <Button variant="outlineGlow" size="lg" asChild>
                <a href="#portfolio">View Shoots</a>
              </Button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {videoServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProduction;
