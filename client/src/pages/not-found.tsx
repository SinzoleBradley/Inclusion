import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home, Info, Heart, Mail, ArrowLeft, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoUrl from "@assets/logo.png";

export default function NotFound() {
  const quickLinks = [
    { name: "Home", href: "/", icon: Home, description: "Back to the main landing page" },
    { name: "About Us", href: "/about", icon: Info, description: "Learn about our mission and vision" },
    { name: "Programs", href: "/programs", icon: BookOpen, description: "See what we offer" },
    { name: "Donate", href: "/donate", icon: Heart, description: "Support our inclusive community" },
    { name: "Contact", href: "/contact", icon: Mail, description: "Get in touch with our team" },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full relative z-10"
      >
        <div className="text-center mb-12">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block cursor-pointer mb-8"
            >
              <img
                src={logoUrl}
                alt="Inclusion Bridge Africa Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-2xl shadow-lg border-4 border-white"
              />
            </motion.div>
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-display opacity-20">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Oops! This bridge seems to be under construction.
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's help you find your way back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {quickLinks.map((link, index) => (
            <Link key={link.name} href={link.href}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="hover-elevate cursor-pointer border-none bg-card/50 backdrop-blur-sm group-hover:bg-primary/5 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="gap-2 rounded-full px-8">
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
