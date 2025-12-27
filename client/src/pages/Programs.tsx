import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { usePrograms } from "@/hooks/use-content";
import { Loader2 } from "lucide-react";

export default function Programs() {
  const { data: programs, isLoading } = usePrograms();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Our Programs & Pillars" 
            subtitle="Comprehensive initiatives designed to empower, educate, and advocate through our three core pillars."
            centered={true}
          />
        </div>
      </div>

      {/* Our Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-4">1. Making communication Accessible</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Sign language Training</li>
                <li>• Sign language interpretation</li>
                <li>• Making Easy to read Materials</li>
                <li>• Translation of Text to braille</li>
                <li>• Training on the use of Text to speech softwares</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
              <h3 className="text-xl font-bold text-secondary-foreground mb-4">2. Advocacy</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Disability Inclusion and Awareness Training</li>
                <li>• Facilities Disability assessment Audit</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-4">3. Partnerships</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Projects Co-creation and design</li>
                <li>• Linkages</li>
              </ul>
              <div className="pt-6 border-t border-primary/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Companies Linked</span>
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Jobs Secured</span>
                  <span className="text-2xl font-bold text-primary">50+</span>
                </div>
              </div>
            </div>
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
                    title: "Accessible Agriculture", 
                    description: "Innovative farming techniques and adapted tools for farmers with physical disabilities.", 
                    category: "Livelihood", 
                    imageUrl: "https://images.unsplash.com/photo-1605000797499-95a053524076?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }} />
                  <ProgramCard program={{
                    id: 3, 
                    title: "Policy Watch", 
                    description: "Monitoring implementation of disability rights laws and engaging with policymakers.", 
                    category: "Advocacy", 
                    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }} />
                  <ProgramCard program={{
                    id: 4, 
                    title: "Women's Circle", 
                    description: "Peer support and leadership development specifically for women with disabilities.", 
                    category: "Community", 
                    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }} />
                 </>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
