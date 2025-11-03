import { Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-float">
            <Users className="w-8 h-8 text-primary" />
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Us
          </h2>
          
          {/* Content */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              We started ApnaGrowthAgency with one simple goal — to help small and growing businesses succeed online without wasting money on guesswork.
            </p>
            <p>
              We understand the struggles of managing social media, running ads, and building a strong brand presence — that's why we handle it all for you.
            </p>
            <p>
              No big promises, just real results you can see in 7 days with our free trial.
            </p>
            <p className="text-xl font-semibold text-white">
              Your growth is our mission — because when you grow, we grow too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
