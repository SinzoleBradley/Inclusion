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
  {
    id: 5,
    title: "Inclusive Disaster Management Training",
    date: "May 30th & June 6th, 2026",
    time: "9:00 AM - 1:00 PM",
    location: "All Saints' Cathedral, Nairobi",
    description: "A training focused on inclusive disaster preparedness, response, and recovery strategies to ensure that persons with disabilities are included and supported during emergencies.",
    category: "Training",
    image: "/images/poi7.png",
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
    imageUrl: "/images/poi6.jpeg",
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
    title: "International Day of Deaf Parents in Kenya 2026",
    content: "For the first time, I felt that Deaf parents had a space where our experiences were understood and our ideas mattered. The discussions gave me confidence to engage more actively in my child's education",
    longContent: "On 26 April 2026, Inclusion Bridge Africa hosted Kenya's first-ever celebration of the International Day of Deaf Parents, creating a unique platform for Deaf parents, Children of Deaf Adults (CODAs), disability advocates, educators, and other stakeholders to engage in meaningful dialogue on parenting, communication, and inclusion.\n\nThe event responded to a longstanding gap: despite the critical role Deaf parents play in raising and supporting their children, their experiences and perspectives are often overlooked in policy discussions, education systems, and public service delivery. Through structured discussions and participatory group sessions, participants explored barriers affecting Deaf families, including communication challenges, access to education, public services, co-parenting dynamics, and the evolving demands of modern parenting.\n\nParticular attention was given to the implications of Kenya's Competency-Based Curriculum (CBC), which requires active parental involvement in children's education. Participants highlighted the need for schools and education stakeholders to adopt accessible communication approaches that enable Deaf parents to fully participate in their children's learning journey.\n\nOur Commitment: Building on the success of this inaugural event, Inclusion Bridge Africa will scale up future celebrations to ensure more Deaf parents and families across Kenya have an opportunity to contribute their voices and experiences. The organization will also engage duty bearers, education stakeholders, and relevant government agencies to promote the implementation of recommendations generated during the discussions and strengthen inclusive parenting practices nationwide.",
    beneficiaryName: "Deaf Parent",
    reflection: "For the first time, I felt that Deaf parents had a space where our experiences were understood and our ideas mattered. The discussions gave me confidence to engage more actively in my child's education.",
    imageUrl: "/images/Parent.jpg",
    gallery: [
      { type: 'image', src: '/images/Parent.jpg' },
      { type: 'image', src: '/images/p1.jpg' },
      { type: 'image', src: '/images/p2.jpg' },
      { type: 'image', src: '/images/p3.jpg' },
      { type: 'image', src: '/images/p4.jpg' },
      { type: 'image', src: '/images/p5.jpg' }
    ],
    outcomes: [
      "Created Kenya's first dedicated platform for celebrating and discussing the experiences of Deaf parents.",
      "Increased awareness of barriers faced by Deaf parents in education, healthcare, and public service access.",
      "Strengthened collaboration between Deaf families, CODAs, disability advocates, and service providers.",
      "Generated practical recommendations aimed at improving accessibility and family inclusion."
    ],
    longTermImpact: "The event established a foundation for sustained advocacy on Deaf parenting and family inclusion. It also highlighted the importance of involving Deaf parents in decisions that affect their families and communities."
  },
  {
    id: 2,
    title: "Disaster Preparedness, Response and Evacuation Training",
    content: "I now understand what actions to take during an emergency and how to help others around me. The practical drills made the lessons easy to understand and apply.",
    longContent: "Climate change continues to increase the frequency and severity of disasters across Kenya and the African continent. Communities are experiencing more frequent floods, droughts, landslides, storms, heat waves, and disease outbreaks, with persons with disabilities often facing disproportionate risks due to inaccessible information systems, barriers to evacuation, and exclusion from disaster planning processes.\n\nRecognizing these challenges, Inclusion Bridge Africa conducted a two-day Disaster Preparedness, Response and Evacuation Training for Deaf persons, focusing on fire safety, emergency preparedness, occupational health and safety, and climate-related disaster resilience.\n\nThe training combined practical and theoretical learning, including emergency preparedness sessions, fire safety awareness, evacuation drills, hazard identification exercises, and discussions on participants' lived experiences during disasters such as flooding. Participants explored strategies for protecting themselves, their families, and their communities during emergencies.\n\nA key discussion centered on the unique challenges faced by Deaf persons during disasters. Participants highlighted how inaccessible early warning systems, emergency broadcasts without sign language interpretation, and limited access to emergency information significantly increase vulnerability during crises.\n\nOur Commitment: Inclusion Bridge Africa will continue advocating for disability-inclusive climate action and disaster risk reduction initiatives. Priority areas include:\n• Accessible early warning systems incorporating Kenyan Sign Language, visual alerts, and SMS notifications.\n• Sign language interpretation and captioning during emergency broadcasts.\n• Greater participation of Deaf persons and organizations of persons with disabilities in disaster planning and decision-making.\n• Capacity building for emergency responders on disability inclusion and accessible communication.\n• Regular community-based disaster preparedness and evacuation drills.",
    beneficiaryName: "Participant",
    reflection: "I now understand what actions to take during an emergency and how to help others around me. The practical drills made the lessons easy to understand and apply.",
    imageUrl: "/images/poi7.png",
    gallery: [
      { type: 'image', src: '/images/poi7.png' },
      { type: 'image', src: '/images/F.JPG' },
      { type: 'image', src: '/images/F1.JPG' },
      { type: 'image', src: '/images/F2.JPG' },
      { type: 'image', src: '/images/F3.JPG' },
      { type: 'image', src: '/images/F4.JPG' },
      { type: 'image', src: '/images/F5.JPG' },
      { type: 'image', src: '/images/F6.JPG' },
      { type: 'image', src: '/images/F7.JPG' },
      { type: 'image', src: '/images/F8.JPG' },
    ],
    outcomes: [
      "Improved participants' knowledge of emergency preparedness and response procedures.",
      "Increased awareness of climate-related disaster risks and their impact on persons with disabilities.",
      "Strengthened participants' ability to identify hazards and respond appropriately during emergencies.",
      "Promoted understanding of disability-inclusive disaster risk reduction approaches."
    ],
    longTermImpact: "The training contributed to building a more informed and resilient Deaf community capable of actively participating in disaster preparedness and response efforts. Participants also developed a stronger understanding of the importance of accessible communication during emergencies."
  },
  {
    id: 3,
    title: "World Autism Day 2026",
    content: "The event reminded us that autism is not a limitation. Every child has talents and abilities that deserve recognition and support.",
    longContent: "On 2 April 2026, Inclusion Bridge Africa partnered with Great for Greatness CBO and community stakeholders to commemorate World Autism Day under the theme \"Autism and Humanity – Every Life Has Value.\"\n\nThe event brought together children, parents, caregivers, educators, and community members to celebrate neurodiversity while raising awareness about the importance of acceptance, inclusion, and equal opportunities for autistic individuals.\n\nThrough interactive sessions, participants explored practical strategies for supporting neurodivergent children in education, family life, and community participation. The event also showcased the talents and abilities of children through art, music, and urban farming activities, demonstrating that every child has unique strengths that should be recognized and nurtured.\n\nOur Commitment: Inclusion Bridge Africa will continue promoting autism inclusion through awareness campaigns, caregiver support initiatives, and advocacy efforts aligned with recommendations advanced by autism stakeholders globally, including:\n• Increased access to inclusive education.\n• Greater community awareness and acceptance of neurodiversity.\n• Enhanced support services for autistic children and their families.\n• Increased opportunities for skills development, self-expression, and participation in community life.\n• Stronger collaboration among parents, educators, healthcare providers, and disability organizations.",
    beneficiaryName: "Parent",
    reflection: "The event reminded us that autism is not a limitation. Every child has talents and abilities that deserve recognition and support.",
    imageUrl: "/images/A.jpg",
    gallery: [
      { type: 'image', src: '/images/A.jpg' },
      { type: 'image', src: '/images/A1.jpg' },
      { type: 'image', src: '/images/A2.jpg' },
      { type: 'image', src: '/images/A3.jpg' },
      { type: 'image', src: '/images/A4.jpg' },
      { type: 'image', src: '/images/A5.jpg' },
      { type: 'image', src: '/images/A6.jpg' },
      { type: 'image', src: '/images/A7.jpg' }
    ],
    outcomes: [
      "Increased awareness and understanding of autism among parents, caregivers, and community members.",
      "Promoted positive attitudes toward neurodiversity and inclusion.",
      "Strengthened support networks for families raising autistic children.",
      "Provided opportunities for children to showcase their talents and abilities."
    ],
    longTermImpact: "The event contributed to reducing stigma and encouraging greater acceptance of neurodivergent individuals within families, schools, and communities."
  },
  {
    id: 4,
    title: "Technology and Digital Safety Training",
    content: "This training opened my eyes to opportunities in technology. I now feel more confident exploring digital skills and protecting myself online.",
    longContent: "As technology increasingly shapes access to education, employment, entrepreneurship, and civic participation, many Deaf persons continue to face barriers in accessing digital skills training and technology-related opportunities.\n\nTo address this gap, Inclusion Bridge Africa, in partnership with All Saints' Cathedral Nairobi and The Shield Maidens, conducted a Technology and Digital Safety Training for Deaf.\n\nThe training provided practical skills on digital literacy, online safety, cybersecurity awareness, privacy protection, responsible social media engagement, and safe internet use. Participants engaged in hands-on learning sessions designed to build confidence and strengthen their ability to navigate digital spaces safely and effectively.\n\nA recurring concern raised by participants was the limited access to information about technology courses, digital learning opportunities, and career pathways within the technology sector. Many expressed a desire to pursue careers in technology but lacked access to accessible information and mentorship networks.\n\nOur Commitment: Inclusion Bridge Africa will establish a community of Deaf technology enthusiasts to facilitate the sharing of information on digital skills training, scholarships, internships, employment opportunities, and emerging technologies.\nAdditionally, the organization will work towards creating the first network of Deaf Digital Safety and Cybersecurity Ambassadors, equipping participants with advanced skills and empowering them to champion digital safety, cybersecurity awareness, and responsible technology use within their communities.\nThrough this initiative, Deaf persons will not only become consumers of technology but also innovators, educators, and leaders shaping a safer and more inclusive digital future.",
    beneficiaryName: "Participant",
    reflection: "This training opened my eyes to opportunities in technology. I now feel more confident exploring digital skills and protecting myself online.",
    imageUrl: "/images/poi2.jpeg",
    gallery: [
      { type: 'image', src: '/images/poi2.jpeg' },
      { type: 'image', src: '/images/T.JPG' },
      { type: 'image', src: '/images/T2.JPG' },
      { type: 'image', src: '/images/T3.JPG' },
      { type: 'image', src: '/images/T4.JPG' },
      { type: 'image', src: '/images/T5.JPG' },
      { type: 'image', src: '/images/T6.JPG' },
    ],
    outcomes: [
      "Improved digital literacy and cybersecurity awareness among Deaf participants.",
      "Increased confidence in using technology for learning, communication, and professional growth.",
      "Strengthened awareness of online safety and digital wellbeing.",
      "Identified growing interest among Deaf youth in technology-related careers and entrepreneurship."
    ],
    longTermImpact: "The training laid the groundwork for a more digitally empowered Deaf community and highlighted the importance of ensuring equal access to technology education and opportunities."
  }
];

