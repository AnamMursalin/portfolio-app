import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "amrood-labs",
    company: "Amrood Labs",
    role: "Software Engineer Intern",
    duration: "Jul – Sep 2025",
    location: "Lahore, Pakistan",
    description:
      "Software company focused on developing scalable web applications using Ruby on Rails",
    responsibilities: [
      "Built product catalog, cart, authentication, and order-workflow features for a production-style e-commerce app using Ruby on Rails.",
      "Designed relational database models and backend workflows for Hostel Hub, cutting manual allocation and fee-tracking effort by 40%.",
      "Self-acquired Ruby on Rails proficiency in 3 weeks through independent study, enabling immediate contribution to sprint tasks.",
    ],
    technologies: ["Ruby on Rails", "PostgreSQL", "Git"],
  },
  {
    id: "amal-academy",
    company: "Amal Academy",
    role: "Career Development Fellow",
    duration: "Aug – Nov 2025",
    location: "Lahore, Pakistan",
    description:
      "Education startup funded by Stanford University that teaches professional skills to students and corporations",
    responsibilities: [
      "Completed a competitive written application and interview process to be selected from over 4,500 applicants, gaining leadership and cross-functional communication skills.",
      "Designed and delivered a cyber-safety awareness session for student groups, reaching 80-100 students and achieving a 40% self-reported improvement in awareness.",
    ],
    technologies: ["Leadership", "Communication", "Cyber-Safety"],
  },
];
