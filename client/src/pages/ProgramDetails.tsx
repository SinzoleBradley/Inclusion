import { useRoute } from "wouter";
import { usePrograms } from "@/hooks/use-content";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "wouter";

export default function ProgramDetails() {
  const [, params] = useRoute("/programs/:id");
  const { data: programs, isLoading } = usePrograms();
  
  const programId = params?.id ? parseInt(params.id) : null;
  const program = programs?.find(p => p.id === programId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
        <Link href="/programs">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/programs">
              <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Button>
            </Link>
          </div>
          <SectionHeader
            title={program.title}
            subtitle={program.description}
            centered={false}
          />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                {/* Check if this is the Inclusion Training program to show video placeholder */}
                {program.title === "Sign Language Training Sessions" ? (
                  <video 
                    className="w-full h-full object-cover"
                    src="/videos/program-highlight.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={program.imageUrl || ""}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={program.imageUrl || "/images/placeholder.png"} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">About the Program</h3>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Our {program.title} initiative is designed to create lasting impact through targeted interventions and community engagement. 
                  We believe in a holistic approach that addresses not just immediate needs but also structural barriers to inclusion.
                </p>
                <p>
                  Key components of this program include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Customized training modules and workshops</li>
                  <li>Community outreach and sensitization</li>
                  <li>Monitoring and evaluation to ensure impact</li>
                  <li>Partnership with local stakeholders</li>
                </ul>
              </div>
              
              <div className="pt-6">
                <Link href="/contact">
                  <Button size="lg" className="w-full md:w-auto">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Program Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {(program.gallery || [
                 { type: 'image', src: '/images/placeholder.png' },
                 { type: 'image', src: '/images/placeholder.png' },
                 { type: 'image', src: '/images/placeholder.png' }
               ]).map((item, index) => (
                 <div key={index} className="aspect-square rounded-xl overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow">
                    {item.type === 'video' ? (
                      <video 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img 
                        src={item.src}
                        alt={`Gallery item ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    )}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
