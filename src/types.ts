export interface ProfileInfo {
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  cgpa: string;
  university: string;
  degree: string;
  department: string;
  focusPills: string[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export interface CareerHighlight {
  id: string;
  role: string;
  organization: string;
  subOrganization?: string;
  period: string;
  category: string;
  badge: string;
  badgeColor: string;
  shortIntro: string;
  description: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  imageUrl?: string;
  imageCaption?: string;
  tags: string[];
  subProjects?: {
    name: string;
    banglaName?: string;
    metric: string;
    description: string;
    iconName: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: 'leadership' | 'branding' | 'operations' | 'diplomacy';
  highlights: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  type: string;
  year: string;
  description?: string;
  featured?: boolean;
}

export interface CompetitionItem {
  name: string;
  stage: 'Semi-finalist' | 'Finalist' | 'Participant';
  year?: string;
  category: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  result: string;
  details?: string;
}

export interface AcademicReference {
  name: string;
  title: string;
  department: string;
  institution: string;
  email: string;
}
