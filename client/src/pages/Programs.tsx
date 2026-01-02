import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { usePrograms } from "@/hooks/use-content";
import { Loader2, CheckCircle2 } from "lucide-react";
import { PILLARS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

export default function Programs() {
  useSEO("Our Programs", "Explore our programs focused on disability rights, inclusion, vocational training, and advocacy.");
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
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/class.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeader
            title="Our Programs"
            subtitle="We are committed to advancing Disability rights, inclusion, and wholistic wellbeing of persons with disabilities. Our work centers on advocacy, capacity building, and community-driven solutions that challenge systemic barriers and promote equal access to opportunities.
Through targeted technical and life-skills training, we equip persons with disabilities with the tools needed to achieve economic independence and meaningfully participate in the community .Our advocacy efforts promote inclusive policies, accessible systems, and accountability across public and private institutions."
            centered={true}
            light={true}
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
                className="relative overflow-hidden p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl scroll-mt-32 flex flex-col group"
              >
                <div className="absolute inset-0 z-0">
                  <img src="/images/class.png" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/90" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-white">
                      <pillar.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-6">
                        {pillar.description}
                    </p>

                    <div className="space-y-4 flex-grow">
                        <ul className="space-y-4">
                            {pillar.activities.map((activity, i) => (
                            <li key={i} className="flex flex-col gap-3 pb-3 border-b border-white/10 last:border-0 last:pb-0">
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                    <span className="text-base text-white font-bold leading-relaxed">{activity.text}</span>
                                </div>
                                {activity.requestQuote && (
                                    <div className="pl-7">
                                        <Link href={`/contact?subject=Quote Request: ${activity.text}`}>
                                            <Button variant="outline" size="sm" className="h-8 text-xs font-semibold border-white/30 text-white hover:bg-white/10 rounded-full">
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
                    imageUrl: "/images/placeholder.png",
                    gallery: []
                  }} />
                  <ProgramCard program={{
                    id: 2, 
                    title: "Policy Watch", 
                    description: "Monitoring implementation of disability rights laws and engaging with policymakers.", 
                    category: "Advocacy", 
                    imageUrl: "/images/placeholder.png",
                    gallery: []
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
