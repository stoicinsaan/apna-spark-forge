import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current page location

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

  // This function now only handles smooth scrolling on the home page
  const handleSmoothScroll = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavItem = (item: { name: string, href: string }, isMobile: boolean = false) => {
    const isHomePage = location.pathname === '/';
    const isBlogLink = item.href.startsWith('/blog');
    const isHashLink = item.href.startsWith('/#');

    const mobileClasses = "text-foreground hover:text-primary transition-colors duration-300 font-medium py-2";
    const desktopClasses = "text-foreground hover:text-primary transition-colors duration-300 font-medium";

    if (isBlogLink) {
      // Use <Link> for internal SPA routes
      return (
        <Link
          key={item.name}
          to={item.href}
          className={isMobile ? mobileClasses : desktopClasses}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    if (isHashLink) {
      // If we are on the home page, use smooth scroll
      if (isHomePage) {
        return (
          <a
            key={item.name}
            href={item.href}
            className={isMobile ? mobileClasses : desktopClasses}
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll(item.href);
            }}
          >
            {item.name}
          </a>
        );
      } else {
        // If we are on another page (like /blog), use a normal <a> tag
        // to force navigation back to the home page.
        return (
          <a
            key={item.name}
            href={item.href}
            className={isMobile ? mobileClasses : desktopClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        );
      }
    }

    // Fallback for other links (if any)
    return (
      <a
        key={item.name}
        href={item.href}
        className={isMobile ? mobileClasses : desktopClasses}
        onClick={() => setIsMobileMenuOpen(false)}
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
            <Link to="/" className="text-2xl font-bold gradient-text" onClick={() => handleSmoothScroll('/#home')}>
              Apna Growth Media
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => renderNavItem(item, false))}
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
              {navItems.map((item) => renderNavItem(item, true))}
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
