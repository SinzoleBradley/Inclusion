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
            title="Our Programs" 
            subtitle="Comprehensive initiatives designed to empower, educate, and advocate."
            centered={true}
          />
        </div>
      </div>

      <section className="py-20">
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
