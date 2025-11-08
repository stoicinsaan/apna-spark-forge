// Filename: src/components/Footer.tsx
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

// --- 1. Import 'Link' from react-router-dom ---
// This is needed to navigate to the /privacy-policy page
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Apna Growth Media</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              We help businesses grow online with data-driven marketing, creative videos, and result-oriented strategies.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a href="mailto:apnagrowthmedia@gmail.com" className="hover:text-primary transition-colors">
                  apnagrowthmedia@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Call:</span>{" "}
                <a href="tel:9877830757" className="hover:text-primary transition-colors">
                  98778 30757
                </a>{" "}
                /{" "}
                <a href="tel:8218697384" className="hover:text-primary transition-colors">
                  82186 97384
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Locations:</span>
              </p>
              <p className="text-muted-foreground pl-2">• Bijnor, Uttar Pradesh</p>
              <p className="text-muted-foreground pl-2">• Ludhiana, Punjab</p>
            </div>
            <Button variant="glow" className="mt-4" asChild>
              <a href="#contact">Book Free Consultation</a>
            </Button>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Packages", "Portfolio", "About Us", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Social Media Marketing</li>
              <li>SEO Optimization</li>
              <li>Google & Meta Ads</li>
              <li>Website Design</li>
              <li>Video Production & Photography</li>
              <li>Email & WhatsApp Marketing</li>
            </ul>
          </div>

          {/* Column 4 - Legal & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal & Connect</h4>
            
            {/* --- 2. CHANGE: Updated this section --- */}
            {/* Replaced the .map() array with a hardcoded list
                so we can use <Link> for Privacy Policy
            */}
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Refund & 7-Day Trial Policy
                </a>
              </li>
            </ul>
            
            <div className="flex gap-3">
              <a
                href="#" // <-- Facebook link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-primary hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/apnagrowthmedia/?utm_source=ig_web_button_share_sheet" // <-- Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-primary hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.youtube.com/@ApnaGrowthMedia" // <-- YouTube link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Youtube className="w-5 h-5 text-primary hover:text-primary-foreground" />
              </a>
              <a
                href="https://wa.me/919877830757" // <-- WhatsApp link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-primary hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Apna Growth Media. All Rights Reserved. Designed & Managed by Apna Growth Media.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
