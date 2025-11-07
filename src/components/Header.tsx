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
    { name: "Blog", href: "/blog" }, // This is the page link
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  // This function now only handles smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if we are on the homepage
    if (window.location.pathname === '/') {
      e.preventDefault(); // Stop default anchor behavior
      const targetId = href.split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If on another page (like /blog), the default 'a' tag behavior will
    // navigate back to the homepage and then to the hash. This is fine.
    setIsMobileMenuOpen(false); // Close menu on click
  };

  const renderNavItem = (item: { name: string, href: string }) => {
    const isBlogLink = item.href.startsWith('/blog');

    if (isBlogLink) {
      // Use <Link> for internal SPA routes
      return (
        <Link
          key={item.name}
          to={item.href}
          className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    // Use <a> for all other links (including hash links)
    return (
      <a
        key={item.name}
        href={item.href}
        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
        onClick={(e) => handleSmoothScroll(e, item.href)}
      >
        {item.name}
      </a>
    );
  };

  const renderMobileNavItem = (item: { name: string, href: string }) => {
    const isBlogLink = item.href.startsWith('/blog');

    if (isBlogLink) {
      // Use <Link> for internal SPA routes
      return (
        <Link
          key={item.name}
          to={item.href}
          className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    // Use <a> for all other links (including hash links)
    return (
      <a
        key={item.name}
        href={item.href}
        className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
        onClick={(e) => handleSmoothScroll(e, item.href)}
      >
        {item.name}
      </a>
    );
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
            <Link to="/" className="text-2xl font-bold gradient-text" onClick={(e) => handleSmoothScroll(e, '/#home')}>
              Apna Growth Media
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(renderNavItem)}
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
              {navItems.map(renderMobileNavItem)}
              <Button variant="glow" size="lg" className="w-full" asChild>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Get Free Consultation</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
