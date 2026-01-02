import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ArrowRight, Bell } from "lucide-react";
import { EVENTS, ANNOUNCEMENTS } from "@/lib/data";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";

export default function Events() {
  useSEO("Events", "Join our upcoming events, workshops, and training sessions promoting disability inclusion.");
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
            title="Events & Announcements"
            subtitle="Stay updated with our latest activities, trainings, and community news."
            centered={true}
            light={true}
          />
        </div>
      </div>

      {/* Announcements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Latest Announcements</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {ANNOUNCEMENTS.map((announcement) => (
              <Card key={announcement.id} className="border-l-4 border-l-secondary hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {announcement.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  </div>
                  <CardTitle className="text-xl">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Trainings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Upcoming Events & Trainings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((event) => (
              <Card key={event.id} className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden relative group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary hover:bg-white font-semibold">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2 line-clamp-2">{event.title}</CardTitle>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                        {/* <span>{event.date}</span> */}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 line-clamp-3">{event.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold group">
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
