import React, { useState, useEffect } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { useSEO } from "@/hooks/use-seo";
import {
  Heart,
  Users,
  TrendingUp,
  MapPin,
  Briefcase,
  ArrowRight,
  Mail,
  X,
  ClipboardList,
  UserCheck,
} from "lucide-react";

// Define the Job interface for TypeScript support
interface Job {
  title: string;
  referenceNo: string;
  positions: number;
  location: string;
  reportsTo: string;
  department: string;
  type: string;
  roleSummary: string;
  responsibilities: string[];
  qualifications: string[];
}

export default function Careers() {
  useSEO(
    "Careers",
    "Join Inclusion Bridge Africa. Help us build a more accessible and inclusive world.",
  );

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedJob]);

  const jobPostings: Job[] = [
    {
      title: "Leather Craft Technician",
      referenceNo: "IBA/01/26",
      positions: 3,
      location: "Kiambu Road & Two Rivers Mall, Nairobi",
      reportsTo: "Production Manager",
      department: "Production",
      type: "Full-time",
      roleSummary:
        "The Leather Craft Technician will be responsible for the production, assembly, finishing, and quality assurance of leather products. The role requires hands-on experience, strong craftsmanship skills, and a commitment to quality and safety standards.",
      responsibilities: [
        "Interpret production drawings, patterns, and job instructions accurately.",
        "Select appropriate leather types and materials based on product specifications.",
        "Measure, mark, cut, skive, bevel, and shape leather components using hand and machine tools.",
        "Assemble leather components using hand-stitching and machine-stitching techniques.",
        "Install accessories such as zippers, buckles, rivets, snaps, and handles.",
        "Carry out edge finishing, burnishing, polishing, dyeing, and conditioning.",
        "Inspect completed products for defects, durability, and visual consistency.",
        "Repair or rework items that do not meet quality standards.",
        "Maintain basic production and quality records.",
        "Operate and maintain tools and equipment safely and responsibly.",
        "Keep the workstation clean, organised, and compliant with safety standards.",
        "Work collaboratively with team members and support continuous improvement initiatives.",
      ],
      qualifications: [
        "KCSE or equivalent; vocational training in leather craft is an added advantage.",
        "Minimum of one (1) year proven experience in leather crafting or related production work.",
      ],
    },
    {
      title: "Flower Pots Production Assistant",
      referenceNo: "IBA/02/26",
      positions: 3,
      location: "Kiambu Road & Two Rivers Mall, Nairobi",
      reportsTo: "Landscaping Manager",
      department: "Landscaping Production",
      type: "Entry-level",
      roleSummary:
        "This is an entry-level position supporting the production, finishing, and handling of flower pots and related products. It is ideal for individuals who are eager to learn practical skills in a production environment.",
      responsibilities: [
        "Assist in preparing raw materials used in flower pot production.",
        "Support moulding, shaping, and forming processes.",
        "Smooth surfaces, remove excess material, and correct minor imperfections.",
        "Assist with drying, curing, and safe handling of finished products.",
        "Sort, package, and label products for storage or sale.",
        "Maintain cleanliness of tools, moulds, and work areas.",
        "Follow health, safety, and environmental procedures at all times.",
      ],
      qualifications: [
        "KCSE or equivalent.",
        "No prior experience required – this is an entry-level role.",
      ],
    },
    {
      title: "Plant Sales Associate",
      referenceNo: "IBA/03/26",
      positions: 1,
      location: "Kiambu Road & Two Rivers Mall, Nairobi",
      reportsTo: "Landscaping Manager",
      department: "Retail Sales",
      type: "Entry-level",
      roleSummary:
        "The Plant Sales Associate will support retail operations by assisting customers, maintaining plant displays, and providing basic plant care guidance. This is an entry-level role suited to individuals interested in plants and customer service.",
      responsibilities: [
        "Greet and assist customers with plant and product selection.",
        "Provide basic information on plant care and maintenance.",
        "Process sales transactions accurately and issue receipts.",
        "Maintain organised, clean, and attractive plant displays.",
        "Water, prune, and monitor plant health according to guidelines.",
        "Receive, unpack, and arrange stock.",
        "Maintain a safe and welcoming retail environment.",
      ],
      qualifications: [
        "KCSE or equivalent.",
        "No prior experience required.",
        "Interest in plants, gardening, or landscaping is an added advantage.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
          <SectionHeader
            title="Careers at Inclusion"
            centered={false}
            light={true}
          />
          <p className="text-primary-foreground/80 text-lg max-w-2xl mt-4">
            Join our team and make a tangible difference. We are
            always looking for passionate individuals to help us push the
            boundaries of accessibility and foster an inclusive
            community.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">

        {/* Current Openings */}
        <section className="mb-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Career Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl border-l-4 border-primary pl-4 py-1 bg-muted/30 rounded-r-lg">
              Inclusion Bridge Africa (IBA) invites applications from qualified
              and motivated individuals to fill the following positions based at
              Kiambu Road and Two Rivers Mall, Nairobi.
            </p>
          </div>

          <div className="flex items-center justify-between mb-6 border-b border-border pb-4 mt-8">
            <h3 className="text-2xl font-bold text-foreground">
              Open Positions
            </h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {jobPostings.length} Openings
            </span>
          </div>

          <div className="space-y-4">
            {jobPostings.map((job, index) => (
              <JobCard
                key={index}
                job={job}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              How to Apply (All Positions)
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Interested and qualified candidates are invited to apply by
              submitting the following documents:
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-sm">
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                An application letter clearly stating the position title and
                reference number
              </li>
              <li>
                A current Curriculum Vitae (CV) with reliable contact details
              </li>
              <li>
                Copies of relevant academic and professional certificates (where
                applicable)
              </li>
            </ul>
            <p className="flex items-center justify-center text-lg font-semibold text-primary mb-4 p-4 bg-primary/5 rounded-xl">
              <Mail className="w-5 h-5 mr-2" />
              Applications should be submitted via email to:{" "}
              <a
                href="mailto:hello@inclusionbridgeafrica.org"
                className="underline ml-2 hover:text-primary/80 transition-colors"
              >
                hello@inclusionbridgeafrica.org
              </a>
            </p>
            <p className="text-center text-sm text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">
                Application Deadline:
              </span>{" "}
              3 March 2026
            </p>
            <div className="border-t border-border pt-6 mt-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Important Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Each applicant may apply for one position only.</li>
                <li>
                  Applications received after the deadline will not be
                  considered.
                </li>
                <li>Only shortlisted candidates will be contacted.</li>
                <li>
                  The recruitment process may include interviews and/or
                  practical assessments depending on the role.
                </li>
                <li>
                  Inclusion Bridge Africa is an equal opportunity employer and
                  encourages applications from all qualified candidates,
                  including persons with disabilities.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* --- MODAL DIALOG --- */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedJob(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-border bg-muted/30 rounded-t-2xl shrink-0">
              <div>
                <h2
                  id="modal-title"
                  className="text-2xl font-bold text-foreground"
                >
                  {selectedJob.title}
                </h2>
                <div className="flex flex-wrap gap-2 mt-3 text-sm">
                  <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-md font-medium">
                    Ref: {selectedJob.referenceNo}
                  </span>
                  <span className="bg-muted text-muted-foreground px-2.5 py-1 rounded-md">
                    Positions: {selectedJob.positions}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto space-y-8">
              {/* Meta Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-muted/20 p-4 rounded-xl border border-border">
                <div>
                  <span className="block text-muted-foreground mb-1">
                    Location
                  </span>
                  <span className="font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />{" "}
                    {selectedJob.location}
                  </span>
                </div>
                <div>
                  <span className="block text-muted-foreground mb-1">
                    Reports To
                  </span>
                  <span className="font-medium text-foreground flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-primary" />{" "}
                    {selectedJob.reportsTo}
                  </span>
                </div>
              </div>

              {/* Role Summary */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" /> Role Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedJob.roleSummary}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-primary" /> Key
                  Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((req, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-primary" /> Qualifications
                  & Experience
                </h3>
                <ul className="space-y-2">
                  {selectedJob.qualifications.map((qual, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border bg-muted/30 rounded-b-2xl shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground font-medium">
                Deadline: 3 March 2026
              </p>
              <a
                href={`mailto:hello@inclusionbridgeafrica.org?subject=${encodeURIComponent(
                  `Application: ${selectedJob.title} (${selectedJob.referenceNo})`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Apply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper component for the "Why Work With Us" cards
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6",
        })}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// Helper component for Job Openings List
function JobCard({ job, onClick }: { job: Job; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left block p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 group"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground font-medium">
            <span className="bg-muted px-2.5 py-1 rounded-md">
              {job.department}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> {job.type}
            </span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-3xl line-clamp-2">
            {job.roleSummary}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex-shrink-0">
          <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-background border-2 border-primary text-foreground font-medium rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </button>
  );
}
