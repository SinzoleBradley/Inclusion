import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { EVENTS } from "@/lib/data";
import { Link } from "wouter";

export function EventsSlider() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Upcoming Events & Trainings</h2>
            <p className="text-muted-foreground mt-2">Join us in our latest activities and workshops.</p>
          </div>
          <Link href="/events">
            <Button variant="outline" className="hidden md:flex">
              View All Events <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {EVENTS.map((event) => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 z-20 bg-white text-primary hover:bg-white/90">
                        {event.category}
                      </Badge>
                      <div className="absolute bottom-4 left-4 z-20 text-white flex flex-col">
                        <span className="font-bold text-lg leading-tight">{event.date}</span>
                        <span className="text-sm opacity-90">{event.time}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-1 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <p className="text-gray-600 line-clamp-2 text-sm mb-6">
                        {event.description}
                      </p>
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors">
                          Register Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 lg:-left-12" />
            <CarouselNext className="-right-4 lg:-right-12" />
          </div>
        </Carousel>
        
        <div className="mt-8 text-center md:hidden">
            <Link href="/events">
            <Button variant="outline" className="w-full">
              View All Events <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
