import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, Package, BookOpen, Users, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    { name: "Home", href: "/#home", icon: Home },
    { name: "Services", href: "/#services", icon: Briefcase },
    { name: "Packages", href: "/#packages", icon: Package },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "About Us", href: "/#about", icon: Users },
    { name: "Contact", href: "/#contact", icon: Phone },
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
  const renderNavItem = (item: { name: string, href: string, icon: any }) => {
    const isBlogLink = item.href === '/blog';
    const isActive = isBlogLink ? location.pathname === '/blog' : location.pathname === '/' && location.hash === item.href.split('#')[1];

    if (isBlogLink) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative pb-1 ${
            isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-glow' : ''
          }`}
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
        className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative pb-1 ${
          isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-glow' : ''
        }`}
        onClick={(e) => handleSmoothScroll(e, item.href)}
      >
        {item.name}
      </a>
    );
  };

  // --- Helper for Mobile Nav (links inside the Sheet) ---
  const renderMobileNavItem = (item: { name: string, href: string, icon: any }) => {
    const isBlogLink = item.href === '/blog';
    const isActive = isBlogLink ? location.pathname === '/blog' : location.pathname === '/' && location.hash === item.href.split('#')[1];
    const Icon = item.icon;

    if (isBlogLink) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 font-medium py-3 text-lg border-b border-border/30 ${
            isActive ? 'text-primary border-b-2 border-primary' : ''
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Icon className="w-5 h-5" />
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={`flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 font-medium py-3 text-lg border-b border-border/30 ${
          isActive ? 'text-primary border-b-2 border-primary' : ''
        }`}
        onClick={(e) => handleSmoothScroll(e, item.href)}
      >
        <Icon className="w-5 h-5" />
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
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/10">
                  <div className="relative">
                    <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                  </div>
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[320px] sm:w-[400px] bg-gradient-to-b from-background via-background to-background/95 backdrop-blur-xl border-l border-primary/20"
              >
                {/* Logo inside menu */}
                <div className="flex items-center mb-8 pt-4">
                  <Link 
                    to="/" 
                    className="text-2xl font-bold gradient-text" 
                    onClick={(e) => handleSmoothScroll(e, '/#home')}
                  >
                    Apna Growth Media
                  </Link>
                </div>
                {/* Nav items inside menu */}
                <nav className="flex flex-col">
                  {navItems.map(renderMobileNavItem)}
                  
                  {/* CTA Section */}
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <p className="text-sm text-center text-muted-foreground mb-3">
                      Ready to grow your business?
                    </p>
                    <Button 
                      variant="glow" 
                      size="lg" 
                      className="w-full transition-transform hover:scale-105" 
                      asChild
                    >
                      <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                        Get Free Consultation
                      </a>
                    </Button>
                  </div>
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
