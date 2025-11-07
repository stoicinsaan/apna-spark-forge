import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // 'X' is no longer needed here, Sheet handles it
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"; // --- IMPORTS ADDED ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // This will control the Sheet
  const location = useLocation();

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
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // We still want to close the menu on click
    setIsMobileMenuOpen(false); 

    if (location.pathname === '/') {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If on /blog, let the link navigate normally
  };

  // --- Helper for Desktop Nav ---
  const renderNavItem = (item: { name: string, href: string }) => {
    const isBlogLink = item.href === '/blog';

    if (isBlogLink) {
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

  // --- Helper for Mobile Nav (links inside the Sheet) ---
  const renderMobileNavItem = (item: { name: string, href: string }) => {
    const isBlogLink = item.href === '/blog';

    if (isBlogLink) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-lg" // Made text larger
          onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-lg" // Made text larger
        onClick={(e) => handleSmoothScroll(e, item.href)} // handleSmoothScroll already closes menu
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

          {/* --- NEW: Mobile Menu Button & Sheet --- */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu size={28} />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                {/* Logo inside menu */}
                <div className="flex items-center mb-6 pt-4">
                  <Link 
                    to="/" 
                    className="text-2xl font-bold gradient-text" 
                    onClick={(e) => handleSmoothScroll(e, '/#home')}
                  >
                    Apna Growth Media
                  </Link>
                </div>
                {/* Nav items inside menu */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map(renderMobileNavItem)}
                  <Button variant="glow" size="lg" className="w-full mt-4" asChild>
                    <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                      Get Free Consultation
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>

        {/* --- OLD MOBILE MENU (THE "BLACK SQUARE") IS NOW REMOVED --- */}

      </div>
    </header>
  );
};

export default Header;
