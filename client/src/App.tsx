import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { Preloader } from "@/components/Preloader";
import NotFound from "@/pages/not-found";

// Page Imports
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Impact from "@/pages/Impact";
import Donate from "@/pages/Donate";
import Accessibility from "@/pages/Accessibility";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/impact" component={Impact} />
      <Route path="/donate" component={Donate} />
      <Route path="/volunteer" component={Donate} /> {/* Reusing donate page for volunteer/contact for now */}
      <Route path="/accessibility" component={Accessibility} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="antialiased selection:bg-yellow-200 selection:text-purple-900">
          <Preloader />
          <Router />
          <div id="google_translate_element" style={{ display: 'none' }} />
          <AccessibilityWidget />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
