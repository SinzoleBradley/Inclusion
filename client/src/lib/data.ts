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
        text: "Accessibility assessment and audit with practical recommendations for organizations and companies",
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
   {
    id: 2,
    title: "Leadership & Advocacy Training",
    date: "April 18th and 25th, 2026",
    time: "8:00 AM - 3:00 PM",
    location: "All Saints' Cathedral, Nairobi",
    description: "A training focused on building leadership skills, advocacy strategies, and rights-based approaches for persons with disabilities to amplify their voices and drive change in their communities.",
    category: "Training",
    image: "/images/poi3.jpeg",
    registrationLink: "https://forms.gle/gRxWHQT698WcEifeA"
  },
  {
    id: 3,
    title: "Technology & Digital Inclusion Training",
    date: "June 20th and 27th, 2026",
    time: "8:00 AM - 3:00 PM",
    location: "All Saints' Cathedral, Nairobi",
    description: "A comprehensive training on assistive technologies, digital accessibility, and inclusive design principles to enhance digital literacy and access for persons with disabilities.",
    category: "Training",
    image: "/images/poi2.jpeg",
    registrationLink: "https://forms.gle/igmQ8RaiF2XSv6Yk6"
  },
   {
    id: 4,
    title: "Unstoppable Voices - Advancing Rights and Justice for All Women",
    date: "March 12th, 2026",
    time: "9:30 AM - 10:30 PM",
    location: "Nairobi, Kenya",
    description: "A panel discussion and advocacy event focused on advancing the rights, visibility, and meaningful",
    category: "Training",
    image: "/images/poi4.jpeg",
  },
  {
    id: 5,
    title: "Safeguarding Young Minds: Addressing Child Abuse and Building Resilience",
    date: "March 12th, 2026",
    time: "12:30 AM - 2:00 PM",
    location: "Webinar",
    description: "A webinar focused on raising awareness about child abuse, providing strategies for prevention, and building resilience among children and caregivers.",
    category: "Training",
    image: "/images/poi5.jpeg",
  },
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
    title: "Sustainable Development Goals (SDGs)",
    description: "We integrate disability inclusion into SDG-focused initiatives, ensuring that persons with disabilities are visible and included in efforts to achieve the SDGs. Through advocacy, capacity-building, and inclusive program design, we work to ensure that no one is left behind in the pursuit of sustainable development.",
    category: "advocacy",
    imageUrl: "data:image/jpeg;base64,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",
    gallery: [
      { type: 'image', src: '/images/QE.PNG' },
      { type: 'image', src: '/images/DW.png' },
      { type: 'image', src: '/images/III.png' },
      { type: 'image', src: '/images/RI.png' },
      { type: 'image', src: '/images/PJ.png' }
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
