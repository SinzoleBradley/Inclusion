import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoUrl from "@assets/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events & News" },
  { href: "/impact", label: "Impact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "top-4 flex justify-center"
          : "top-0 py-5"
      )}
    >
      <div className={cn(
        "container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-500",
        isScrolled && "max-w-4xl bg-white/80 backdrop-blur-lg shadow-lg border border-white/20 py-2 px-6 rounded-full"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={logoUrl}
            alt="Inclusion Bridge Africa Logo" 
            className={cn(
              "object-contain transition-all duration-500",
              isScrolled ? "w-8 h-8" : "w-12 h-12"
            )}
          />
          <span className={cn(
            "text-xl font-bold tracking-tight transition-all duration-500 hidden sm:inline-block",
            isScrolled ? "text-primary text-lg" : "text-white drop-shadow-md md:text-primary"
          )}>
            Inclusion Bridge
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                location === link.href
                  ? "text-primary font-semibold"
                  : isScrolled ? "text-gray-600" : "text-gray-800"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button 
              className={cn(
                "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-full",
                isScrolled ? "px-4 py-1 h-8 text-xs" : "px-6"
              )}
            >
              <PhoneCall className={cn("mr-2 fill-current", isScrolled ? "w-3 h-3" : "w-4 h-4")} />
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-primary" : "text-primary"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium px-4 py-2 rounded-lg transition-colors",
                        location === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t pt-6 px-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-secondary text-secondary-foreground font-bold rounded-xl h-12 text-lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
