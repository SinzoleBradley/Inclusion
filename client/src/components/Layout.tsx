import { useEffect } from "react";
import { useLocation } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="antialiased selection:bg-yellow-200 selection:text-purple-900 min-h-screen flex flex-col font-sans bg-background">
      <Preloader />
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <div id="google_translate_element" style={{ display: 'none' }} />
      <AccessibilityWidget />
      <Toaster />
    </div>
  );
}
