import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Heart, Award, Pause, Play } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { usePrograms, useStories } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import heroVideo from "@assets/generated_videos/inclusive_community_in_africa_video.mp4";

export default function Home() {
  const { data: programs, isLoading: programsLoading } = usePrograms();
  const { data: stories } = useStories();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] md:min-h-[110vh] flex items-center pt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-primary">
          <video
            ref={videoRef}
            src={heroVideo}
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-secondary">
              Building Bridges, Breaking Barriers
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-display text-balance">
              Empowering Abilities,{" "}
              <span className="text-secondary">Bridging Communities</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
              We champion disability inclusion across Africa through advocacy,
              skills training, and community empowerment programs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/programs">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full bg-white text-primary hover:bg-white/90 font-bold shadow-xl shadow-black/10"
                >
                  Get Involved
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-bold backdrop-blur-sm"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          ></motion.div>
        </div>

        {/* Wave Divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* MISSION / WHO WE ARE */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Who We Are"
            subtitle="Driven by the belief that every person deserves dignity, opportunity, and belonging."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Empowerment",
                desc: "Providing tools, skills, and confidence for economic independence.",
              },
              {
                icon: Users,
                title: "Inclusion",
                desc: "Creating spaces where persons with disabilities are valued leaders.",
              },
              {
                icon: Heart,
                title: "Dignity",
                desc: "Upholding the inherent worth and rights of every individual.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 border border-gray-100 hover:border-primary/20 transition-all"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 font-display">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="What We Do"
            subtitle="Holistic programs designed to create sustainable change."
          />

          {programsLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-96 bg-gray-200 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs?.map((program) => (
                <ProgramCard key={program.id} program={program} />
              )) || (
                // Fallback content if API is empty
                <>
                  <ProgramCard
                    program={{
                      id: 1,
                      title: "Inclusive Education",
                      description:
                        "Ensuring children with disabilities access quality education through teacher training and accessible resources.",
                      category: "Education",
                      imageUrl:
                        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    }}
                  />
                  <ProgramCard
                    program={{
                      id: 2,
                      title: "Vocational Skills",
                      description:
                        "Technical training and mentorship to support entrepreneurship and employment readiness.",
                      category: "Livelihood",
                      imageUrl:
                        "https://images.unsplash.com/photo-1590012314607-6abc9ddb4522?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    }}
                  />
                  <ProgramCard
                    program={{
                      id: 3,
                      title: "Advocacy & Rights",
                      description:
                        "Workshops and campaigns to promote policy change and community awareness.",
                      category: "Advocacy",
                      imageUrl:
                        "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    }}
                  />
                </>
              )}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary text-primary hover:bg-primary/5"
              >
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Be the Bridge to Inclusion
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Your support transforms lives. Whether through volunteering your
            time or donating funds, you can help build a more accessible Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/donate">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-black/20"
              >
                Donate Today
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto h-14 px-8 text-lg rounded-full text-white hover:bg-white/10 font-bold border border-white/30"
              >
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
