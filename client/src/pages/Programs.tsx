import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { usePrograms } from "@/hooks/use-content";
import { Loader2, CheckCircle2 } from "lucide-react";
import { PILLARS } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Programs() {
  const { data: programs, isLoading } = usePrograms();
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Add a temporary highlight effect
          element.classList.add("ring-2", "ring-primary", "ring-offset-4");
          setTimeout(() => element.classList.remove("ring-2", "ring-primary", "ring-offset-4"), 2000);
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Programs"
            subtitle="We are committed to advancing Disability rights, inclusion, and wholistic wellbeing of persons with disabilities. Our work centers on advocacy, capacity building, and community-driven solutions that challenge systemic barriers and promote equal access to opportunities.
Through targeted technical and life-skills training, we equip persons with disabilities with the tools needed to achieve economic independence and meaningfully participate in the community .Our advocacy efforts promote inclusive policies, accessible systems, and accountability across public and private institutions."
            centered={true}
          />
        </div>
      </div>

      {/* Our Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                id={pillar.id}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl scroll-mt-32 flex flex-col"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                    {pillar.description}
                </p>

                <div className="space-y-4 flex-grow">
                    <ul className="space-y-4">
                        {pillar.activities.map((activity, i) => (
                        <li key={i} className="flex flex-col gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600 font-medium leading-relaxed">{activity.text}</span>
                            </div>
                            {activity.requestQuote && (
                                <div className="pl-7">
                                    <Link href={`/contact?subject=Quote Request: ${activity.text}`}>
                                        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold border-primary/20 hover:border-primary hover:bg-primary/5 text-primary">
                                            Request Quote
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </li>
                        ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs?.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
              {!programs?.length && (
                 // If no data, show comprehensive static list for demo
                 <>
                   <ProgramCard program={{
                    id: 1, 
                    title: "Tech for All", 
                    description: "Digital literacy training equipping youth with disabilities with coding and design skills.", 
                    category: "Technology", 
                    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }} />
                  <ProgramCard program={{
                    id: 2, 
                    title: "Policy Watch", 
                    description: "Monitoring implementation of disability rights laws and engaging with policymakers.", 
                    category: "Advocacy", 
                    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }} />
                 </>
              )}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
