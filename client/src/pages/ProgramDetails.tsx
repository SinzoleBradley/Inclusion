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
                {program.title === "Sign Language Training Sessions" ? (
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Basic Conversational Kenya Sign Language (KSL)</h4>
                      <p className="mb-4">
                        Learn everyday Kenya Sign Language skills for daily communication.
                      </p>
                      <p className="font-semibold mb-2">You will learn:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Common signs used in daily conversations</li>
                        <li>Fingerspelling and basic sentence structure</li>
                        <li>Cultural awareness and communication best practices</li>
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Advanced Kenya Sign Language (KSL)</h4>
                      <p className="mb-4">
                        This program helps you build fluency and confidence for complex conversations. It is ideal for individuals working or engaging in professional, academic, or institutional environments where effective communication with the Deaf community is essential.
                      </p>
                      <p className="font-semibold mb-2">You will learn:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Advanced vocabulary and grammar</li>
                        <li>Professional and workplace communication in KSL</li>
                        <li>Culturally appropriate interaction in formal settings</li>
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Practical Attachment Opportunities</h4>
                      <p className="mb-4">
                        Gain real-world experience through hands-on learning with the Deaf community. These attachments help you apply what you have learned, improve fluency, and interact naturally in everyday situations.
                      </p>
                      <p className="font-semibold mb-2">Benefits include:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Real-life KSL communication practice</li>
                        <li>Increased confidence and fluency</li>
                        <li>Direct engagement with the Deaf community</li>
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Who Can Enroll?</h4>
                      <p className="mb-4">Our programs are open to learners from all backgrounds, including:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Individuals seeking Kenya Sign Language training</li>
                        <li>Companies and corporate teams</li>
                        <li>Children and adults</li>
                        <li>Educators, caregivers, service providers, and advocates</li>
                      </ul>
                    </section>
                  </div>
                ) : program.title === "Community Empowerment" ? (
                  <div className="space-y-8">
                    <p>
                      We partner with organizations, communities, and event organizers to build disability-inclusive spaces. Through participatory accessibility assessments, tailored trainings, and co-created solutions with persons with disabilities, we support inclusive, responsive, and community-owned initiatives.
                    </p>

                    <section>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-semibold text-gray-900">Tailored Trainings</h5>
                          <p>Practical disability inclusion and accessibility training.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Inclusion-Led Facilitation</h5>
                          <p>Sessions led by Disability Inclusion Facilitators, grounded in lived experience.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Accessibility Assessments</h5>
                          <p>Participatory reviews of physical, communication, digital, and attitudinal access.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Co-Created Programs</h5>
                          <p>Inclusive programs and events designed with persons with disabilities.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Partnerships & Capacity Building</h5>
                          <p>Collaborations that strengthen systems and sustain inclusive practice</p>
                        </div>
                      </div>
                    </section>
                  </div>
                ) : (
                  <>
                    <p>
                      Our {program.title} initiative is designed to create lasting impact through targeted interventions and community engagement. 
                      We believe in a holistic approach that addresses not just immediate needs but also structural barriers to inclusion.
                    </p>
                  </>
                )}
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
