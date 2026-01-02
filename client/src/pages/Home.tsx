import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Heart, Award, Pause, Play, MessageSquare, Megaphone, Handshake, CheckCircle2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { usePrograms, useStories } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import heroVideo from "@assets/generated_videos/inclusive_community_in_africa_video.mp4";
import { PILLARS } from "@/lib/data";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { EventsSlider } from "@/components/EventsSlider";
import { useSEO } from "@/hooks/use-seo";

export default function Home() {
  useSEO("Home", "Inclusion Bridge Africa empowers persons with disabilities through education, advocacy, and community support.");
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
              HANDS ON INCLUSION
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-display text-balance">
              Inclusion Bridge Africa
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
              A society where every person with a disability is fully included, empowered, and engaged in all spheres of life
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

      {/* OUR PILLARS SECTION */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Pillars"
            subtitle="To achieve our mission, our work is structured around three core pillars that drive inclusive change."
          />

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {PILLARS.map((pillar, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative overflow-hidden p-10 rounded-3xl shadow-lg shadow-gray-100 border border-gray-100 hover:border-primary/20 transition-all flex flex-col items-center text-center h-full cursor-pointer group"
                  >
                    <div className="absolute inset-0 z-0">
                      <img src="/images/class.png" alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-primary/90" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center h-full w-full">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                        <pillar.icon className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white font-display">
                        {pillar.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed mb-8">
                        {pillar.description}
                      </p>

                      <div className="mt-auto text-white font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-4 text-2xl font-display text-gray-900">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                      {pillar.title}
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                      {pillar.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">
                      Activities & Services
                    </h4>
                    <ul className="space-y-4">
                      {pillar.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="flex flex-col gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-base text-gray-900 font-bold leading-relaxed">
                              {activity.text}
                            </span>
                          </div>
                          {activity.requestQuote && (
                            <div className="pl-8">
                              <Link href={`/contact?subject=Quote Request: ${activity.text}`}>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 text-xs font-semibold border-primary/20 hover:border-primary hover:bg-primary/5 text-primary rounded-full"
                                >
                                  Request Quote
                                </Button>
                              </Link>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS SLIDER */}
      <EventsSlider />

      {/* OUR PARTNERS SECTION */}
      <section className="py-20 bg-gray-50/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <SectionHeader
            title="Our Partners"
            subtitle="Working together with leading organizations to scale our impact."
            centered
          />
        </div>
        
        <PartnersCarousel />
      </section>

      {/* MISSION / WHO WE ARE */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Mission"
            subtitle="To empower organizations and communities to embrace and practice true disability inclusion by providing professional sign language services, inclusive training, accessibility support, and strategic linkages that connect people with disabilities to meaningful opportunities."
          />
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
                        "/images/placeholder.png",
                      gallery: [],
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
                        "/images/placeholder.png",
                      gallery: [],
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
                        "/images/placeholder.png",
                      gallery: [],
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
            Become the Bridge to Inclusion
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join us in empowering abilities and bridging communities across Africa. Your involvement helps us create a more accessible and equitable world for persons with disabilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-black/20"
              >
                Get In Touch
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

    </div>
  );
}
