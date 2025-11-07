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
// Blog pages are not imported here, App.tsx handles them

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main> {/* Wrap sections in main tag */}
        <Hero />
        <Services />
        <VideoProduction />
        <Packages />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main> {/* End main tag */}
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
