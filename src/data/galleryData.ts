import { ActivityGalleryItem } from '../types';
import reunionImg from '../assets/images/nucleus_reunion_assembly_1789889339599.jpg';
import culturalFestImg from '../assets/images/nucleus_cultural_fest_1789889353573.jpg';
import photographyImg from '../assets/images/nucleus_creative_photography_1789889367818.jpg';
import bakultalaImg from '../assets/images/nucleus_bakultala_fellowship_1789889380237.jpg';
import bookDriveImg from '../assets/images/nucleus_book_drive_1789889399426.jpg';
import heritageWalkImg from '../assets/images/nucleus_heritage_walk_1789889413735.jpg';

export const GALLERY_ACTIVITIES: ActivityGalleryItem[] = [
  {
    id: 'gal-1',
    title: '#20yearslater Commemorative Assembly',
    category: 'Milestones',
    date: 'August 11',
    location: 'Nabadwip Community Hall',
    description: 'Celebrating two decades of fellowship with past and present student cohorts, reflecting on community bonds and shared heritage in Nabadwip.',
    imageUrl: reunionImg,
    tags: ['#20yearslater', 'Student Fellowship', 'Alumni Reunion']
  },
  {
    id: 'gal-2',
    title: 'Nabadwip Bakultala Praktanee Joint Gathering',
    category: 'Community Initiatives',
    date: 'August 10',
    location: 'Bakultala Courtyard, Nabadwip',
    description: 'Inter-generational dialogue and student mentorship forum connecting historical alumni members and active youth organizers.',
    imageUrl: bakultalaImg,
    tags: ['Bakultala Praktanee', 'Mentorship', 'Nabadwip Heritage']
  },
  {
    id: 'gal-3',
    title: 'Youth Cultural Evening & Musical Night',
    category: 'Cultural & Arts',
    date: 'Autumn Showcase',
    location: 'Cultural Centre Stage, Nabadwip',
    description: 'A vibrant evening of acoustic performances, traditional recitation, and collegiate music performances organized by Nucleus members.',
    imageUrl: culturalFestImg,
    tags: ['Music & Arts', 'Youth Festival', 'Stage Performance']
  },
  {
    id: 'gal-4',
    title: 'Creative Visual Photography Showcase',
    category: 'Cultural & Arts',
    date: 'September Showcase',
    location: 'Nabadwip Town Exhibition Hall',
    description: 'Curated photo gallery celebrating the architecture, riverbanks, and everyday life in Nabadwip captured through the student lens.',
    imageUrl: photographyImg,
    tags: ['Photography', 'Visual Arts', 'Exhibition']
  },
  {
    id: 'gal-5',
    title: 'Community Book Drive & Student Aid Desk',
    category: 'Community Initiatives',
    date: 'July Outreach',
    location: 'Nadia District Library Circle',
    description: 'Annual textbook collection, reference guide sharing, and study kit distribution to assist local school students in the region.',
    imageUrl: bookDriveImg,
    tags: ['Education Support', 'Book Drive', 'Social Outreach']
  },
  {
    id: 'gal-6',
    title: 'Nabadwip Heritage & Architecture Walk',
    category: 'Milestones',
    date: 'Morning Expedition',
    location: 'Heritage Ghats & Temples, Nabadwip',
    description: 'Students and local historians documenting centuries of terracotta heritage, town lore, and cultural roots of Nadia.',
    imageUrl: heritageWalkImg,
    tags: ['Heritage Walk', 'Town History', 'Field Study']
  }
];
