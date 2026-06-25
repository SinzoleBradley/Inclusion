import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { useStories } from "@/hooks/use-content";
import { useSEO } from "@/hooks/use-seo";
import { STORIES } from "@/lib/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, ArrowRight, Video, Image as ImageIcon } from "lucide-react";

export default function Impact() {
  useSEO("Our Impact", "Read inspiring stories of transformation and impact from our community and beneficiaries.");
  const { data: stories } = useStories();
  const [selectedStory, setSelectedStory] = useState<any | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  const displayStories = stories?.length ? stories : STORIES;

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
            title="Real Stories, Real Change" 
            subtitle="Meet the individuals and communities transforming their narratives."
            centered={true}
            light={true}
          />
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12">
            {displayStories.map((story, index) => (
              <div 
                key={story.id} 
                onClick={() => {
                  setSelectedStory(story);
                  setActiveMediaIndex(0);
                }}
                className="group flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
              >
                <div className={`w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-md ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={story.imageUrl || ""} 
                    alt={story.beneficiaryName} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="inline-block text-xs font-semibold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                    Success Story
                  </span>
                  <h3 className="text-2xl font-bold text-primary font-display group-hover:text-primary-dark transition-colors duration-300">
                    {story.title}
                  </h3>
                  <div className="h-1 w-12 bg-secondary rounded-full group-hover:w-20 transition-all duration-300" />
                  <p className="text-lg text-muted-foreground leading-relaxed">"{story.content}"</p>
                  <div className="flex items-center justify-between pt-2">
                    <p className="font-bold text-gray-900">— {story.beneficiaryName}</p>
                    <div className="flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      <span>Read Story & Gallery</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog 
        open={!!selectedStory} 
        onOpenChange={(open) => {
          if (!open) setSelectedStory(null);
        }}
      >
        <DialogContent className="max-w-full sm:max-w-3xl md:max-w-5xl p-0 overflow-hidden rounded-3xl bg-white border-0 shadow-2xl">
          {selectedStory && (
            <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[75vh] overflow-y-auto md:overflow-hidden">
              {/* Left Side: Media Viewer */}
              <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center relative aspect-video md:aspect-auto md:h-full min-h-[320px]">
                {selectedStory.gallery && selectedStory.gallery.length > 0 ? (
                  <>
                    {selectedStory.gallery[activeMediaIndex].type === 'video' ? (
                      <video
                        key={selectedStory.gallery[activeMediaIndex].src}
                        src={selectedStory.gallery[activeMediaIndex].src}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <img
                        src={selectedStory.gallery[activeMediaIndex].src}
                        alt={`${selectedStory.beneficiaryName} Gallery`}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {/* Media type indicator */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs flex items-center gap-1.5 z-10">
                      {selectedStory.gallery[activeMediaIndex].type === 'video' ? (
                        <>
                          <Video className="w-3.5 h-3.5" />
                          <span>Video</span>
                        </>
                      ) : (
                        <>
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>Photo</span>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <img
                    src={selectedStory.imageUrl || "/images/placeholder.png"}
                    alt={selectedStory.beneficiaryName}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Right Side: Narrative and Gallery Thumbnails */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between md:overflow-y-auto md:h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-2.5 py-1 rounded-full">
                      Impact Story
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display leading-tight">
                    {selectedStory.title}
                  </h2>
                  <div className="h-0.5 w-full bg-gray-100" />
                  
                  <div className="space-y-5">
                    {selectedStory.reflection && (
                      <blockquote className="border-l-4 border-secondary pl-4 italic text-base text-gray-700 font-medium bg-secondary/5 py-3 pr-4 rounded-r-2xl">
                        "{selectedStory.reflection}"
                        <span className="block text-xs font-bold text-primary mt-2 not-italic tracking-wider uppercase">
                          — {selectedStory.beneficiaryName || "Participant"}
                        </span>
                      </blockquote>
                    )}
                    
                    <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
                      {selectedStory.longContent ? (
                        selectedStory.longContent.split("\n\n").map((para: string, idx: number) => {
                          if (para.startsWith("Our Commitment:") || para.startsWith("Our commitment:")) {
                            return (
                              <div key={idx} className="mt-4 p-4 bg-primary/5 border-l-4 border-primary rounded-r-2xl">
                                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-wider">Our Commitment</h4>
                                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                  {para.replace(/Our (c|C)ommitment:\s*/, "")}
                                </p>
                              </div>
                            );
                          }
                          return <p key={idx}>{para}</p>;
                        })
                      ) : (
                        <p>{selectedStory.content}</p>
                      )}
                    </div>

                    {selectedStory.outcomes && selectedStory.outcomes.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <h4 className="font-bold text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          Outcomes & Deliverables
                        </h4>
                        <ul className="grid gap-2 text-sm text-gray-600">
                          {selectedStory.outcomes.map((outcome: string, idx: number) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <span className="text-secondary font-bold text-xs mt-0.5">•</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedStory.longTermImpact && (
                      <div className="space-y-2 pt-2">
                        <h4 className="font-bold text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          Long-Term Impact
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {selectedStory.longTermImpact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Thumbnails Section */}
                {selectedStory.gallery && selectedStory.gallery.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Media Gallery ({selectedStory.gallery.length})
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {selectedStory.gallery.map((media: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setActiveMediaIndex(idx)}
                          className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 transition-all ${
                            activeMediaIndex === idx
                              ? 'border-secondary scale-[0.98] shadow-md'
                              : 'border-transparent hover:border-gray-300'
                          }`}
                        >
                          {media.type === 'video' ? (
                            <div className="w-full h-full relative">
                              <video src={media.src} className="w-full h-full object-cover" muted playsInline />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Play className="w-4 h-4 text-white fill-white" />
                              </div>
                            </div>
                          ) : (
                            <img src={media.src} alt="" className="w-full h-full object-cover" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

