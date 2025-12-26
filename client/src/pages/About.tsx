import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Our Story & Vision" 
            subtitle="Founded on the principle that disability is not inability, but diversity."
            centered={true}
          />
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg text-muted-foreground">
              <h3 className="text-2xl font-bold text-primary font-display mb-4">A Bridge to Opportunity</h3>
              <p>
                Inclusion Bridge Africa was established to close the gap between potential and opportunity for persons with disabilities across the continent. We recognized that while talent is universal, access is not.
              </p>
              <p>
                By partnering with local communities, governments, and international organizations, we create sustainable pathways for social and economic inclusion. Our approach is holistic—addressing not just physical barriers, but attitudinal and systemic ones as well.
              </p>
              <p>
                We envision an Africa where every individual, regardless of ability, can learn, work, and lead with dignity.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                 {/* group of people working together diverse */}
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-2xl shadow-lg max-w-xs hidden md:block">
                <p className="font-bold text-secondary-foreground text-lg italic">
                  "Nothing about us without us."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title="Our Core Values" centered={true} />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Community-Led", text: "We believe solutions must be rooted in the lived experiences of the people we serve." },
              { title: "Sustainable Impact", text: "We focus on long-term capacity building rather than short-term aid." },
              { title: "Radical Inclusion", text: "We go beyond accommodation to create environments of true belonging." },
              { title: "Integrity", text: "We operate with transparency, accountability, and respect in all we do." },
              { title: "Innovation", text: "We embrace new technologies and methods to break down old barriers." },
              { title: "Partnership", text: "We believe we are stronger together, collaborating across sectors for change." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all">
                <h4 className="text-xl font-bold text-primary mb-3 font-display">{value.title}</h4>
                <p className="text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
