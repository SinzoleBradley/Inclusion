import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactSubmit } from "@/hooks/use-content";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required").max(100),
  message: z.string().min(10, "Please leave a detailed message").max(500),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { mutate, isPending } = useContactSubmit();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    mutate(data,
      {
        onSuccess: () => {
          toast({
            title: "Message Sent!",
            description: "We will get back to you shortly.",
          });
          form.reset();
        },
        onError: (err) => {
          toast({
            variant: "destructive",
            title: "Something went wrong",
            description: err.message,
          });
        }
      }
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Get In Touch" 
            subtitle="We'd love to hear from you. Reach out to us for inquiries, partnerships, or support." 
            centered={true}
            light={true}
          />
        </div>
      </div>

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border space-y-8 h-fit">
              <h3 className="text-2xl font-bold font-display text-primary">Our Details</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-muted-foreground text-sm">123 Inclusion Way, Nairobi, Kenya</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-muted-foreground text-sm">+254 700 123 456</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-muted-foreground text-sm">hello@inclusionbridge.org</p>
                  </div>
                </li>
              </ul>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-sm text-primary font-medium italic">
                  "Every voice matters. Let's work together for a more inclusive future."
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border">
              <h3 className="text-2xl font-bold font-display mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Inquiry about partnerships" className="h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Type your message here." className="min-h-[120px] rounded-xl resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-14 rounded-xl text-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20"
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : (
                      <>
                        <Mail className="w-5 h-5 mr-2 fill-current" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
