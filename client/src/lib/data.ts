import { MessageSquare, Award, Handshake } from "lucide-react";

export const PILLARS = [
  {
    id: "accessible-communication",
    title: "Accessible Communication",
    icon: MessageSquare,
    description: "Ensuring information is accessible to everyone.",
    activities: [
      {
        text: "Sign language training for individuals and organizations",
        requestQuote: true
      },
      {
        text: "Professional sign language interpretation services",
        requestQuote: true
      },
      {
        text: "Promoting barrier-free information access for persons with diverse disabilities",
        requestQuote: false
      }
    ]
  },
  {
    id: "inclusive-systems",
    title: "Inclusive Systems & Environments",
    icon: Award,
    description: "Creating environments that accommodate everyone.",
    activities: [
      {
        text: "Disability inclusion training (workplace, programs, events, and community)",
        requestQuote: true
      },
      {
        text: "Accessibility audits with practical recommendations for organizations and companies",
        requestQuote: true
      },
      {
        text: "Co-creation of inclusive policies, practices, and environments",
        requestQuote: true
      }
    ]
  },
  {
    id: "empowerment-advocacy",
    title: "Empowerment & Advocacy",
    icon: Handshake,
    description: "Empowering individuals and advocating for rights.",
    activities: [
      {
        text: "Linkages for persons with disabilities to programs, training, and employment opportunities",
        requestQuote: false
      },
      {
        text: "Connecting organizations with disability-focused networks and communities",
        requestQuote: false
      },
      {
        text: "Advocacy for the rights, visibility, and meaningful participation of persons with disabilities",
        requestQuote: false
      }
    ]
  }
];
