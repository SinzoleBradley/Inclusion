import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import logoUrl from "@assets/logo.png";

export function Footer() {
  const socialLinks = [
    { Icon: FaFacebook, href: "https://www.facebook.com/InclusionBridgeAfrica", label: "Facebook" },
    { Icon: FaInstagram, href: "https://www.instagram.com/inclusion_bridge_africa?igsh=M2ZmM3c5dXRxd3My", label: "Instagram" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/inclusion-bridge-africa", label: "LinkedIn" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@Inclusion.bridge", label: "TikTok" }
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoUrl}
                alt="Inclusion Bridge Africa Logo" 
                className="w-12 h-12 object-contain rounded-lg bg-white p-1"
              />
              <h3 className="text-2xl font-bold font-display">Inclusion Bridge Africa</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering persons with disabilities through advocacy, training, and community. Building a world where everyone belongs.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Programs", href: "/programs" },
                { label: "Impact Stories", href: "/impact" },
                { label: "Get Involved", href: "/volunteer" },
                { label: "Contact Us", href: "/contact" },
                { label: "Donate", href: "/donate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span className="text-primary-foreground/80">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">+254 723036604 / +245 718015101</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-6 text-secondary shrink-0" />
                <span className="text-primary-foreground/80 text-sm break-all">handsoninclusionke@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">Join our newsletter for updates on our latest programs and stories.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <button className="bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:bg-secondary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Inclusion Bridge Africa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
