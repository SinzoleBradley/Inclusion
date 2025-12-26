import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <SectionHeader title="Accessibility Statement" centered={false} />
        
        <div className="prose prose-lg max-w-3xl text-muted-foreground">
          <p className="lead text-xl text-primary font-medium">
            At Inclusion Bridge Africa, accessibility is not just a feature—it is our foundation.
          </p>
          
          <h3>Commitment to Digital Accessibility</h3>
          <p>
            We are committed to ensuring that our website is accessible to people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
          
          <h3>Measures to Support Accessibility</h3>
          <p>Inclusion Bridge Africa takes the following measures to ensure accessibility:</p>
          <ul>
            <li>Include accessibility as part of our mission statement.</li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Provide continual accessibility training for our staff.</li>
            <li>Include people with disabilities in our design personas and user testing.</li>
          </ul>
          
          <h3>Conformance Status</h3>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Inclusion Bridge Africa is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
          </p>
          
          <h3>Feedback</h3>
          <p>
            We welcome your feedback on the accessibility of the Inclusion Bridge Africa website. Please let us know if you encounter accessibility barriers:
          </p>
          <p>
            <strong>E-mail:</strong> accessibility@inclusionbridge.org<br/>
            <strong>Phone:</strong> +254 700 123 456
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
