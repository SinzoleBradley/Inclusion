import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Heart } from "lucide-react";

const donateFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  amount: z.string().optional(),
  message: z.string().min(10, "Please leave a short message").max(500),
});

type DonateFormValues = z.infer<typeof donateFormSchema>;

export default function Donate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<DonateFormValues>({
    resolver: zodResolver(donateFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: DonateFormValues) {
    setIsSubmitting(true);
    // In a real app, this would integrate with Stripe/PayPal
    // Here we treat it as a pledge/contact inquiry for donation
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "donation-pledge",
        name: data.name,
        email: data.email,
        amount: data.amount || "",
        message: data.message,
      }).toString(),
    })
      .then(() => {
        toast({
          title: "Thank you for your support!",
          description: "We will contact you shortly with donation details.",
        });
        form.reset();
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Please try again later.",
        });
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Support Our Mission" 
            subtitle="Your contribution directly empowers persons with disabilities across Africa." 
            centered={true}
            light={true}
          />
        </div>
      </div>

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Impact Stats / Info */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border space-y-8 h-fit">
              <h3 className="text-2xl font-bold font-display text-primary">Why Donate?</h3>
              <ul className="space-y-6">
                {[
                  { title: "Direct Impact", desc: "90% of funds go directly to program implementation." },
                  { title: "Sustainability", desc: "We invest in long-term skills and community structures." },
                  { title: "Transparency", desc: "We provide regular reports on how every dollar is used." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-sm text-primary font-medium italic">
                  "Inclusion Bridge gave me the skills to start my own business. Now I support my entire family." — Program Graduate
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border">
              <h3 className="text-2xl font-bold font-display mb-6">Make a Pledge</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-netlify="true" name="donation-pledge">
                  <input type="hidden" name="form-name" value="donation-pledge" />
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
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pledge Amount (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="$50" className="h-12 rounded-xl" {...field} />
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
                        <FormLabel>Message of Support</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Why are you supporting us today?" className="min-h-[100px] rounded-xl resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-14 rounded-xl text-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : (
                      <>
                        <Heart className="w-5 h-5 mr-2 fill-current" />
                        Pledge Support
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
