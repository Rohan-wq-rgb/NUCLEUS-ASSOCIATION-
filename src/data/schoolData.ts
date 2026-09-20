import { 
  SchoolNotice, 
  SchoolEvent, 
  NucleusSocialData,
  SocialPostObservation
} from '../types';

export const SCHOOL_INFO = {
  name: 'NUCLEUS ASSOCIATION',
  shortName: 'Nucleus',
  facebookName: 'Nucleus Nabadwip',
  instagramHandle: '@nucleus_association',
  tagline: 'A Student Association of Nabadwip • Cultural Centre',
  descriptor: 'STUDENT ASSOCIATION & CULTURAL CENTRE • NABADWIP, WEST BENGAL',
  established: 'Over 20 Years of Fellowship',
  motto: 'Unity, Youth Energy & Cultural Heritage',
  category: 'Cultural centre',
  bio: 'A Student Association of Nabadwip.',
  address: 'Nabadwip, Nadia, West Bengal, India',
  hours: 'Always open',
  phone: 'Join our WhatsApp Group',
  email: 'contact via official WhatsApp group & social channels',
  whatsappGroup: 'https://chat.whatsapp.com/Ltx1pGT2YauKi5PtIJB8ah?s=cl&p=a&mlu=4&ilr=4',
  stats: {
    nature: 'Student Association',
    classification: 'Cultural Centre',
    location: 'Nabadwip, Nadia',
    hoursStatus: 'Always Open'
  },
  socials: {
    facebook: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/',
    instagram: 'https://www.instagram.com/nucleus_association/',
    whatsapp: 'https://chat.whatsapp.com/Ltx1pGT2YauKi5PtIJB8ah?s=cl&p=a&mlu=4&ilr=4'
  },
  insignia: {
    description: "Official circular emblem with neon lime-green outer ring, electric cyan atomic orbital paths with electron nodes, central stylized sharp 'N' core, and futuristic stencil 'NUCLEUS' typography",
    updatedDate: 'September 10'
  }
};

export const VERIFIED_OBSERVATIONS: SocialPostObservation[] = [
  {
    id: 'obs-1',
    platform: 'Facebook',
    dateOrTime: 'Recent Update',
    title: 'Community & Cultural Gathering',
    text: 'Active community engagement and cultural discussion organized by Nucleus members.',
    type: 'Community Gathering',
    category: 'Community',
    confidence: 'high',
    postUrl: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/'
  },
  {
    id: 'obs-2',
    platform: 'Instagram',
    dateOrTime: 'September Showcase',
    title: 'Creative Photography Feature',
    text: 'Visual showcase capturing student activities and youth creative spirit in Nabadwip.',
    type: 'Creative Showcase',
    category: 'Cultural',
    confidence: 'high',
    postUrl: 'https://www.instagram.com/nucleus_association/'
  },
  {
    id: 'obs-3',
    platform: 'Facebook',
    dateOrTime: 'August Milestone',
    title: '#20yearslater Milestone Celebration',
    text: 'Commemorating two decades of student fellowship, community initiatives, and shared journey in Nabadwip.',
    type: 'Milestone Reunion',
    category: 'Milestone',
    confidence: 'high',
    postUrl: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/'
  },
  {
    id: 'obs-4',
    platform: 'Facebook',
    dateOrTime: 'August Assembly',
    title: 'Nabadwip Bakultala Praktanee Assembly',
    text: 'Highlighting deep ties with the Nabadwip Bakultala Praktanee, fostering inter-generational community solidarity.',
    type: 'Community Assembly',
    category: 'Community',
    confidence: 'high',
    postUrl: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/'
  },
  {
    id: 'obs-5',
    platform: 'Facebook',
    dateOrTime: 'September Release',
    title: 'Official Insignia Launch',
    text: "Unveiling the official circular Nucleus logo with neon lime ring, atomic electron orbital paths, stylized sharp 'N', and futuristic stencil Nucleus wordmark symbolizing energy, intellect, and student solidarity.",
    type: 'Insignia Showcase',
    category: 'Branding',
    confidence: 'high',
    postUrl: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/'
  }
];

export const NUCLEUS_SOCIAL_DATA: NucleusSocialData = {
  entityName: 'Nucleus',
  facebookIdentity: 'Nucleus Nabadwip',
  instagramIdentity: 'Nucleus (@nucleus_association)',
  geographicAssociation: 'Nabadwip, West Bengal, India',
  organizationDescription: 'A Student Association of Nabadwip and Cultural Centre in Nabadwip, Nadia, West Bengal.',
  facebook: {
    platform: 'Facebook',
    displayName: 'Nucleus Nabadwip',
    usernameOrHandle: 'Nucleus-Nabadwip',
    url: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/',
    categoryOrBio: 'Cultural centre',
    location: 'Nabadwip, Nadia, West Bengal',
    hours: 'Always open',
    ratingStatus: 'Community Recommended',
    posts: VERIFIED_OBSERVATIONS.filter(p => p.platform === 'Facebook')
  },
  instagram: {
    platform: 'Instagram',
    displayName: 'Nucleus',
    usernameOrHandle: '@nucleus_association',
    url: 'https://www.instagram.com/nucleus_association/',
    categoryOrBio: 'A Student Association of Nabadwip.',
    location: 'Nabadwip, West Bengal',
    posts: VERIFIED_OBSERVATIONS.filter(p => p.platform === 'Instagram')
  }
};

// Clean, verified mapping for components that consume notices or events:
export const INITIAL_NOTICES: SchoolNotice[] = VERIFIED_OBSERVATIONS.map(obs => ({
  id: obs.id,
  date: obs.dateOrTime,
  title: obs.title,
  category: obs.category,
  summary: obs.text || obs.title,
  urgent: obs.category === 'Milestone',
  publishedBy: obs.platform === 'Facebook' ? 'Nucleus Nabadwip' : '@nucleus_association',
  postUrl: obs.postUrl || undefined
}));

export const INITIAL_EVENTS: SchoolEvent[] = [
  {
    id: 'ev-1',
    title: '#20yearslater Commemorative Assembly',
    date: 'August 11',
    time: 'Community Gathering',
    location: 'Nabadwip, West Bengal',
    category: 'Milestone',
    description: 'Special milestone gathering honoring two decades of student camaraderie, creative initiatives, and cultural heritage in Nabadwip.',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
    registrationOpen: true,
    chiefGuest: 'Student Representatives & Alumni Members',
    postUrl: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/'
  },
  {
    id: 'ev-2',
    title: 'Nabadwip Bakultala Praktanee Fellowship',
    date: 'August 10',
    time: 'Student & Alumni Forum',
    location: 'Nabadwip, Nadia, West Bengal',
    category: 'Community',
    description: 'Joint fellowship connecting students and distinguished alumni in Nabadwip to foster cultural dialogue and mentorship.',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
    registrationOpen: false,
    chiefGuest: 'Bakultala Praktanee Association Representatives',
    postUrl: 'https://www.facebook.com/people/Nucleus-Nabadwip/61550786618685/'
  },
  {
    id: 'ev-3',
    title: 'Youth Cultural & Photography Session',
    date: 'September Showcase',
    time: 'Creative Arts Showcase',
    location: 'Nabadwip Cultural Centre',
    category: 'Cultural',
    description: 'Public visual showcase capturing the life, traditions, and active energy of students across Nabadwip.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    registrationOpen: false,
    postUrl: 'https://www.instagram.com/nucleus_association/'
  }
];

export const HISTORIC_MILESTONES = [
  {
    year: '2000s',
    title: 'Foundations of the Student Fellowship',
    desc: 'Began as an active cohort of dedicated students in Nabadwip united by academic enthusiasm, literature, and social service.'
  },
  {
    year: '2023',
    title: 'Digital Identity & Circular Atom Emblem',
    desc: 'Formally launched the official circular Nucleus atom-symbol logo emblem on social media representing energy and fellowship.'
  },
  {
    year: 'August',
    title: 'Nabadwip Bakultala Praktanee Ties',
    desc: 'Strengthened fellowship and public association with the historic Nabadwip Bakultala student & alumni community.'
  },
  {
    year: '#20YearsLater',
    title: 'Two Decades Commemorative Milestone',
    desc: 'Commemorating 20 years of association journey, solidarity, and cultural initiatives in Nabadwip (#20yearslater).'
  },
  {
    year: 'Ongoing',
    title: 'Active Cultural & Student Platform',
    desc: 'Connecting students, youth, and alumni with an active digital presence and welcoming community access in Nabadwip.'
  }
];

export interface AssociationService {
  id: string;
  title: string;
  desc: string;
  timing: string;
  features: string[];
}

export const STUDENT_SERVICES: AssociationService[] = [
  {
    id: 'cultural-centre',
    title: 'Cultural Centre & Student Assemblies',
    desc: 'An open collective platform in Nabadwip organizing student meetups, literary discussions, and youth fellowship sessions.',
    timing: 'Always open • Nabadwip',
    features: [
      'Youth literary and artistic open forums',
      'Community cultural observances and celebrations',
      'Inclusive space for students from across Nadia'
    ]
  },
  {
    id: 'alumni-fellowship',
    title: 'Alumni Network & #20yearslater Fellowship',
    desc: 'Bridging current students with senior alumni and veteran members who have contributed to Nabadwip over the past two decades.',
    timing: 'Periodic Assemblies & Reunions',
    features: [
      'Guidance and mentorship for school and college youth',
      'Commemorating two decades of student solidarity',
      'Lifelong camaraderie across batches'
    ]
  },
  {
    id: 'community-heritage',
    title: 'Local Heritage Collaboration (Bakultala Praktanee)',
    desc: 'Collaborative programs partnering with historic associations like Nabadwip Bakultala Praktanee to honor local cultural tradition.',
    timing: 'Nabadwip, West Bengal',
    features: [
      'Preserving Nabadwip\'s intellectual history',
      'Collaborative meetings and community forums',
      'Support for educational and heritage causes'
    ]
  },
  {
    id: 'media-showcase',
    title: 'Digital Photography & Media Showcase',
    desc: 'Public broadcasts and creative visual arts capturing the youth vibrancy, architectural heritage, and natural beauty of Nabadwip.',
    timing: 'Instagram (@nucleus_association)',
    features: [
      'Showcasing student visual arts and photography',
      'Fostering youth creativity and community participation',
      'Digital archiving of association moments'
    ]
  }
];

