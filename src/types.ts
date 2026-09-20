export type PageId = 
  | 'home' 
  | 'about' 
  | 'activities' 
  | 'community' 
  | 'contact' 
  | 'programs' 
  | 'admissions' 
  | 'student-services' 
  | 'faculty-and-staff' 
  | 'news-and-events';

export interface SocialPostObservation {
  id: string;
  platform: 'Facebook' | 'Instagram';
  dateOrTime: string;
  title: string;
  text?: string;
  event?: string;
  postUrl?: string | null;
  likes?: number;
  comments?: number;
  type: string;
  category: 'Milestone' | 'Cultural' | 'Branding' | 'Community';
  confidence?: 'high' | 'medium' | 'low';
}

export interface SocialEntity {
  platform: 'Facebook' | 'Instagram';
  displayName: string;
  usernameOrHandle: string;
  url: string;
  sharedUrl?: string;
  resolvedPageId?: string;
  categoryOrBio: string;
  location?: string;
  hours?: string;
  ratingStatus?: string;
  audience?: {
    followers?: number | string;
    following?: number | string;
    likes?: number | string;
    posts?: number | string;
  };
  posts: SocialPostObservation[];
  verificationNote?: string;
}

export interface NucleusSocialData {
  datasetName?: string;
  entityName: string;
  facebookIdentity: string;
  instagramIdentity: string;
  geographicAssociation: string;
  organizationDescription: string;
  observedDate?: string;
  timezone?: string;
  scope?: string;
  privacyNote?: string;
  facebook: SocialEntity;
  instagram: SocialEntity;
}

export interface CommunityInquiry {
  name: string;
  email: string;
  phone?: string;
  associationRole: 'Student' | 'Alumni' | 'Cultural Enthusiast' | 'Community Member';
  subject: string;
  message: string;
}

// Backward-compatibility interfaces (so any legacy reference compiles cleanly)
export interface SchoolNotice {
  id: string;
  date: string;
  title: string;
  category: 'Community' | 'Cultural' | 'General' | 'Milestone' | 'Branding';
  summary: string;
  urgent?: boolean;
  publishedBy: string;
  postUrl?: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: 'Cultural' | 'Community' | 'Milestone';
  description: string;
  imageUrl: string;
  registrationOpen: boolean;
  chiefGuest?: string;
  postUrl?: string;
}

export interface ActivityGalleryItem {
  id: string;
  title: string;
  category: 'Milestones' | 'Cultural & Arts' | 'Community Initiatives';
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  aspectRatio?: string;
  tags: string[];
}
