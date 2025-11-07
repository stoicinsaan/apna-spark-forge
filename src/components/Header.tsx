import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Packages", href: "/#packages" },
    { name: "Blog", href: "/blog" }, // New Blog Link
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  // Helper function to handle navigation
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // If it's a new page route like /blog
    if (href.startsWith('/blog')) {
      window.location.href = href; // Use standard navigation
    } else {
      // For smooth scroll hash links
      const targetId = href.split("#")[1];
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = href; // Fallback
        }
      } else {
         window.location.href = href;
      }
    }
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold gradient-text">Apna Growth Media</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
               <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  // Prevent default for hash links and blog link to use our handler
                  if (item.href.startsWith('/#') || item.href === '/blog') {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="glow" size="lg" asChild>
              <a href="#contact">Get Free Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                   onClick={(e) => {
                    if (item.href.startsWith('/#') || item.href === '/blog') {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="glow" size="lg" className="w-full" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Free Consultation</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
