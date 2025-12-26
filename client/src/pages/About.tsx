import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Linkedin, Twitter, Mail } from "lucide-react";

// Mock Data for Team Members
const TEAM_MEMBERS = [
  {
    name: "Victor Maingi",
    role: "CEO & Founder",
    bio: "A disability rights advocate with over 15 years of experience in policy reform and inclusive development across East Africa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Roselyn Alaru",
    role: "Co-founder",
    bio: "Focuses on scaling our community outreach programs and ensuring resources reach the most remote areas effectively.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Grace Njoroge",
    role: "Lead Accessibility Tech",
    bio: "Driving our digital inclusion initiatives, ensuring that technology serves as a bridge rather than a barrier.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Samuel Kalu",
    role: "Community Liaison",
    bio: "Building trust and partnerships with local grassroots organizations to ensure our impact is sustainable.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

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

      {/* Story Section */}
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

      {/* Values Section */}
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

      {/* PREMIUM TEAM SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeader 
            title="Meet the Leadership" 
            subtitle="The passionate individuals driving our mission forward."
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {TEAM_MEMBERS.map((member, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col items-center text-center"
              >
                {/* Image Card */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative shadow-lg bg-gray-100">
                  {/* Overlay for social icons on hover (Desktop) */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                    <button className="p-2 bg-white rounded-full text-primary hover:text-secondary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <Linkedin size={20} />
                    </button>
                    <button className="p-2 bg-white rounded-full text-primary hover:text-secondary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <Twitter size={20} />
                    </button>
                    <button className="p-2 bg-white rounded-full text-primary hover:text-secondary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                      <Mail size={20} />
                    </button>
                  </div>
                  
                  {/* The Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Text Content */}
                <h4 className="text-xl font-bold text-primary font-display">{member.name}</h4>
                <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}