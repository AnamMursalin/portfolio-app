export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  availability: string;
  socialLinks: Record<string, string>;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  stats: Stat[];
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export type ProficiencyLevel = "Advanced" | "Intermediate" | "Familiar";

export interface Skill {
  name: string;
  proficiency: ProficiencyLevel;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image?: string;
  categories: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
  role: string;
  duration: string;
  problem: string;
  solution: string;
  features: string[];
  myContribution: string;
  challenges: string;
  lessonsLearned: string;
  futureImprovements: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
  certificateUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  verifyUrl?: string;
  image?: string;
}

export interface Volunteering {
  id: string;
  organization: string;
  role: string;
  location: string;
  duration?: string;
  description: string;
  contributions: string[];
  image?: string;
  certificateUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  cgpa?: string;
  duration: string;
  honors: string[];
  coursework?: string[];
}

export type LanguageProficiency = "Native" | "Professional" | "Intermediate" | "Beginner";

export interface Language {
  name: string;
  proficiency: LanguageProficiency;
}

export interface Supervisor {
  name: string;
  role: string;
  department?: string;
  university: string;
  email: string;
  linkedin?: string;
  photo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export type FeedbackStatus = "pending" | "approved" | "rejected";

export interface ProjectFeedback {
  id: string;
  projectId: string;
  name: string;
  email?: string;
  comment: string;
  status: FeedbackStatus;
  createdAt: Date;
}

export const CONTACT_REASONS = [
  "Internship Opportunity",
  "Freelance Project",
  "Project Collaboration",
  "Research",
  "Project Feedback",
  "General Inquiry",
  "Other",
] as const;

export const PROJECT_CATEGORIES = [
  "All",
  "Web Development",
  "AI/ML",
  "Python",
  "C++",
  "Database",
  "Other",
] as const;
