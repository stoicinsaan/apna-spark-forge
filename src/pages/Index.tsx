import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoProduction from "@/components/VideoProduction";
import Packages from "@/components/Packages";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <VideoProduction />
      <Packages />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
