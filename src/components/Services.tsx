import { Globe, Search, MousePointerClick, PenTool, Video, Mail, BarChart, Plus } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website & Branding",
      description: "Landing pages, brand logos, e-commerce setup on Shopify/WordPress/Wix",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "On-page, off-page SEO, local SEO (GMB), keyword research, content optimization",
    },
    {
      icon: MousePointerClick,
      title: "PPC Advertising",
      description: "Google Ads, Meta Ads, LinkedIn Ads, remarketing, conversion tracking",
    },
    {
      icon: PenTool,
      title: "Social Media Marketing",
      description: "Strategy, content creation, posts/reels/stories, monthly analytics, influencer collaboration",
    },
    {
      icon: Video,
      title: "Content & Creative",
      description: "Content strategy, copywriting, blog writing, graphics, video creation, motion graphics",
    },
    {
      icon: Mail,
      title: "Email & WhatsApp Marketing",
      description: "Email campaigns, WhatsApp Business automation, customer retargeting",
    },
    {
      icon: BarChart,
      title: "Analytics & CRO",
      description: "Google Analytics, Tag Manager, conversion rate optimization, funnels & A/B testing",
    },
    {
      icon: Plus,
      title: "Additional Add-ons",
      description: "Domain & hosting help, business profile setup, ORM, 24/7 support",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
