import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import NotFound from "@/pages/not-found";

// Page Imports
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Events from "@/pages/Events";
import Impact from "@/pages/Impact";
import Donate from "@/pages/Donate";
import Accessibility from "@/pages/Accessibility";
import Contact from "@/pages/Contact";
import ProgramDetails from "@/pages/ProgramDetails";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/programs/:id" component={ProgramDetails} />
      <Route path="/events" component={Events} />
      <Route path="/impact" component={Impact} />
      {/* <Route path="/donate" component={Donate} /> */}
      <Route path="/contact" component={Contact} />
      <Route path="/volunteer" component={Contact} /> {/* Reusing contact page for volunteer for now */}
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
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
