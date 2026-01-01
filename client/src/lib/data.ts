import { MessageSquare, Award, Handshake } from "lucide-react";
import { type Program } from "@shared/schema";

export const PILLARS = [
  {
    id: "accessible-communication",
    title: "Accessible Communication",
    icon: MessageSquare,
    description: "We promote accessible and inclusive communication by advancing sign language access, alternative and augmentative communication, and inclusive information-sharing practices. Our work ensures that persons with disabilities can receive, share, and participate in information equally across education, healthcare, governance, and community spaces.",
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
    description: "We advance inclusive systems and communities by addressing structural and attitudinal barriers within institutions, public services, and social spaces. Through accessibility audits, customized capacity-building trainings, and the co-creation of inclusive programs and events, we support organizations to meet accessibility standards and uphold the rights, participation, and dignity of persons with disabilities.",
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
    description: "We empower persons with disabilities through skills development, leadership training, and rights-based advocacy, amplifying lived experiences, shaping policy. We also connects skilled persons with disabilities to prospective employers, service providers, and advocacy networks, thereby linking talent to opportunity and advancing meaningful, sustainable inclusion.",
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

export const PARTNERS = [
  { name: "iFORGE", logo: "/partners/iforge.png" },
  { name: "Inclusive Haven", logo: "/partners/inclusive.jpg" },
  { name: "ACK St Augustine Madaraka", logo: "/partners/ACK.png" },
  { name: "HESED Africa", logo: "/partners/hessed.jpg" },
  { name: "Kenya National Library Services", logo: "/partners/knls.png" },
];

export const EVENTS = [  {
   id: 1,
   title: "Sign Language Class for Adults",
   //date: "January 15, 2026",
   time: "7:00 PM - 9:00 PM",
   location: "TBC",
   description: "An introductory course to Kenyan Sign Language (KSL) for individuals interested in learning basic communication skills.",
   category: "Training",
   image: "/images/po.png",
    registrationLink: "https://forms.gle/ET2JUra4xDRTMpEr8"
  },
  {
    id: 2,
    title: "Sign Language Class for kids",
    //date: "June 10, 2026",
    time: "9:00 AM - 1:00 PM",
    location: "TBC",
    description: "A fun and interactive sign language training designed specifically for children to learn basic KSL vocabulary and phrases.",
    category: "Training",
    image: "/images/poi.png",
    registrationLink: "https://forms.gle/Edjd6zVSjxRDRRZd9"
  },
  //{
    //id: 3,
    //title: "Community Charity Gala",
    //date: "July 20, 2024",
    //time: "6:00 PM - 10:00 PM",
    //location: "Sarit Centre, Nairobi",
    //description: "Join us for an evening of networking, celebration, and fundraising to support our ongoing programs.",
    //category: "Event",
    //image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfD_example_form_id/viewform"
  //}
];

export const ANNOUNCEMENTS = [
  {
    id: 1,
    title: "New Partnership Announcement",
    date: "April 5, 2024",
    content: "We are thrilled to announce a new partnership with TechForAll to expand our digital literacy programs to rural areas.",
    type: "News"
  },
  {
    id: 2,
    title: "Call for Volunteers",
    date: "March 28, 2024",
    content: "We are seeking passionate volunteers to assist with our upcoming youth mentorship program. Sign up today to make a difference!",
    type: "Opportunity"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "Sign Language Training Sessions",
    description: "We offer Basic and Advanced Kenya Sign Language (KSL) training for children and adults, designed for individual learners and organizations seeking inclusive communication skills.",
    category: "training",
    imageUrl: "/images/placeholder.png",
    gallery: [
      { type: 'video', src: '/videos/inclusion-training.mp4' },
      { type: 'image', src: '/images/class.png' },
      { type: 'video', src: '/videos/speller.mp4' },
      { type: 'video', src: '/videos/children.mp4' },
      { type: 'video', src: '/videos/classes.mp4' },
      { type: 'video', src: '/videos/program-highlight.mp4' }
    ]
  },
  {
    id: 2,
    title: "Community Empowerment",
    description: "We partner with organizations, communities, and event organizers to build disability-inclusive spaces. Through participatory accessibility assessments, tailored trainings, and co-created solutions with persons with disabilities, we support inclusive, responsive, and community-owned initiatives.",
    category: "community",
    imageUrl: "/images/com.png",
    gallery: [
      { type: 'image', src: '/images/com.png' },
      { type: 'image', src: '/images/_com1.png' },
      { type: 'image', src: '/images/_com3.png' },
      { type: 'image', src: '/images/_com5.png' },
      { type: 'image', src: '/images/_com6.png' }
    ]
  },
  {
    id: 3,
    title: "Skills Development and Linkages for Persons with Disabilities",
    description: "We equip persons with disabilities with life skills and technical skills that enhance independence, employability, and meaningful participation in society. Our rights-based trainings strengthen confidence, leadership, communication, and practical competencies aligned to diverse livelihood and career pathways.",
    category: "advocacy",
    imageUrl: "/images/_com5.png",
    gallery: [
      { type: 'image', src: '/images/placeholder.png' },
      { type: 'image', src: '/images/placeholder.png' },
      { type: 'image', src: '/images/placeholder.png' }
    ]
  }
];

export const STORIES = [
  {
    id: 1,
    title: "Finding My Voice",
    content: "Through the advocacy program, I learned to speak up for my rights and now mentor others.",
    beneficiaryName: "Sarah M.",
    imageUrl: "/images/placeholder.png"
  },
  {
    id: 2,
    title: "Skills for Life",
    content: "The vocational training gave me the skills to start my own tailoring business.",
    beneficiaryName: "David O.",
    imageUrl: "/images/placeholder.png"
  }
];
