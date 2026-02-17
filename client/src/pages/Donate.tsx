import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Heart, Smartphone } from "lucide-react"; // Added Smartphone icon
import { useSEO } from "@/hooks/use-seo";

const donateFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  amount: z.string().optional(),
  message: z.string().min(10, "Please leave a short message").max(500),
});

type DonateFormValues = z.infer<typeof donateFormSchema>;

export default function Donate() {
  useSEO("Donate", "Support Inclusion Bridge Africa with a donation to empower persons with disabilities.");
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
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/class.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
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
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Payment Details Card */}
            <div className="bg-secondary/10 border-2 border-secondary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Direct Mobile Payment</h3>
                  <p className="text-muted-foreground">Support us via M-PESA Paybill</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
                <div className="text-center md:text-left">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Paybill</p>
                  <p className="text-2xl font-black text-primary">542542</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Account No</p>
                  <p className="text-2xl font-black text-primary">015101</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Recipient</p>
                  <p className="text-lg font-bold text-primary leading-tight">Inclusion Bridge Africa</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                            <Input placeholder="john@example.com" {...field} />
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
                            <Input placeholder="e.g. 5,000 KES" {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us why you are supporting our cause..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Send Pledge"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}