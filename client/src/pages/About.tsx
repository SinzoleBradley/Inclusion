import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { PARTNERS } from "@/lib/data";

// Mock Data for Team Members
const TEAM_MEMBERS = [
  {
    name: "Victor Mbatia",
    role: "Co-Director IBA",
    bio: "",
    image: "/images/placeholder.png",
  },
  {
    name: "Roslyn Njuguna",
    role: "Co-Director IBA",
    bio: "",
    image: "/images/placeholder.png",
  },
  {
    name: "Rev Ignitious Malimo",
    role: "Board Member",
    bio: "",
    image: "/images/placeholder.png",
  },
  {
    name: "Rev Edwin Masai",
    role: "Disability Inclusion Advisor",
    bio: "",
    image: "/team/rev.jpg",
  },
  {
    name: "Simon Ngina",
    role: "Sign Language Trainer",
    bio: "",
    image: "/images/placeholder.png",
  },
  {
    name: "Benson Kigotho",
    role: "Sign Language Trainer",
    bio: "",
    image: "/images/placeholder.png",
  },
  {
    name: "Macnum Vita",
    role: "Disability Inclusion Facilitator",
    bio: "",
    image: "/images/placeholder.png",
  },
  {
    name: "Bradley Sinzole",
    role: "IT Specialist",
    bio: "",
    image: "/team/brad.jpg",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Inclusion Bridge Africa" 
            subtitle="Hands On Inclusion"
            centered={true}
          />
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg text-muted-foreground">
              <h3 className="text-2xl font-bold text-primary font-display mb-4">Our Vision</h3>
              <p>
                A society where every person with a disability is fully included, empowered, and engaged in all spheres of life.
              </p>
              
              <h3 className="text-2xl font-bold text-primary font-display mb-4 mt-8">Our Mission</h3>
              <p>
                To empower organizations and communities to embrace and practice true disability inclusion by providing professional sign language services, inclusive training, accessibility support, and strategic linkages that connect people with disabilities to meaningful opportunities.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/placeholder.png"
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Rights-Based Inclusion", text: "We are guided by the UNCRPD and uphold disability inclusion as a human rights issue, ensuring persons with disabilities are central to decisions that affect their lives." },
              { title: "Accessibility & Universal Design", text: "We champion accessible communication, environments, and systems that enable full participation, in line with SDG 10 (Reduced Inequalities)." },
              { title: "Equity & Empowerment", text: "We recognize diverse needs and promote tailored support that empowers persons with disabilities to participate independently and meaningfully." },
              { title: "Participation & Co-Creation", text: "We believe in “nothing about us without us.” We work collaboratively with persons with disabilities to design solutions that reflect lived experience." },
              { title: "Partnerships for Impact", text: "We build strong, inclusive partnerships across sectors to expand opportunities, strengthen systems, and contribute to sustainable development (SDG 17)." },
              { title: "Integrity & Accountability", text: "We act with transparency, professionalism, and responsibility, ensuring our work delivers measurable and lasting impact." }
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
            title="The Team" 
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
                  
                  {/* The Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
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

           <div className="mt-16 text-center">
            <h4 className="text-xl font-bold text-primary mb-4">Also supporting our mission:</h4>
            <div className="flex flex-wrap justify-center gap-4">
               <span className="bg-primary/5 px-6 py-3 rounded-full text-primary font-semibold">Sign Language Interpreters</span>
               <span className="bg-primary/5 px-6 py-3 rounded-full text-primary font-semibold">Disability Advisory Board</span>
            </div>
           </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-20 bg-gray-50/50 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title="Our Partners" subtitle="Collaborating for impact." centered={true} />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mt-12 items-center">
             {PARTNERS.map((partner, i) => (
                <div key={i} className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 h-32 hover:shadow-md transition-all hover:-translate-y-1">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 w-full object-contain"
                  />
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
