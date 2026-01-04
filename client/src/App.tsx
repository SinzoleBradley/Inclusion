import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { Suspense, lazy } from "react";

// Lazy Page Imports
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Programs = lazy(() => import("@/pages/Programs"));
const Events = lazy(() => import("@/pages/Events"));
const Impact = lazy(() => import("@/pages/Impact"));
const Contact = lazy(() => import("@/pages/Contact"));
const Accessibility = lazy(() => import("@/pages/Accessibility"));
const ProgramDetails = lazy(() => import("@/pages/ProgramDetails"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Donate = lazy(() => import("@/pages/Donate"));

function Router() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    }>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/programs/:id" component={ProgramDetails} />
        <Route path="/events" component={Events} />
        <Route path="/impact" component={Impact} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route path="/volunteer" component={Contact} /> {/* Reusing contact page for volunteer for now */}
        <Route path="/accessibility" component={Accessibility} />
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
