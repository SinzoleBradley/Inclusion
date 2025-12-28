import { SectionHeader } from "@/components/SectionHeader";
import { useStories } from "@/hooks/use-content";

export default function Impact() {
  const { data: stories } = useStories();

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Real Stories, Real Change" 
            subtitle="Meet the individuals and communities transforming their narratives."
            centered={true}
          />
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12">
            {(stories?.length ? stories : [
              {
                id: 1,
                title: "From Student to Mentor",
                content: "After losing his sight, David struggled to find his place in the education system. Through our adaptive tech program, he not only mastered screen readers but now teaches other visually impaired students.",
                beneficiaryName: "David O.",
                imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                id: 2,
                title: "Breaking Barriers in Business",
                content: "Sarah, a wheelchair user, faced rejection when applying for jobs. With our entrepreneurship grant and mentorship, she launched a successful tailoring business that now employs three others.",
                beneficiaryName: "Sarah K.",
                imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ]).map((story, index) => (
              <div key={story.id} className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                <div className={`w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-md ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={story.imageUrl || ""} alt={story.beneficiaryName} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-primary font-display">{story.title}</h3>
                  <div className="h-1 w-12 bg-secondary rounded-full" />
                  <p className="text-lg text-muted-foreground leading-relaxed">"{story.content}"</p>
                  <p className="font-bold text-gray-900">— {story.beneficiaryName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
