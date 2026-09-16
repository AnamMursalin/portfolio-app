import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "classroom-engagement",
    title: "Classroom Engagement Detection",
    shortDescription:
      "Real-time AI classroom monitoring system using computer vision",
    description:
      "Semester capstone at Namal University building a real-time AI classroom-monitoring system that analyzes student engagement through video processing.",
    categories: ["AI/ML"],
    technologies: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
    role: "Group Lead",
    duration: "Oct 2025 – Jan 2026",
    problem:
      "Instructors lack real-time feedback on student engagement levels during lectures, making it difficult to adjust teaching methods dynamically.",
    solution:
      "A computer vision system that monitors students and analyzes their posture and gaze to determine engagement levels using a non-intrusive approach.",
    features: [
      "Real-time video processing pipeline",
      "Pose and gaze estimation using MediaPipe",
      "Aggregated engagement analytics dashboard",
      "92% precision with classical ML baseline",
      "Custom 50-video dataset collection",
    ],
    myContribution:
      "Led the team as Group Lead, engineered the complete video pipeline using OpenCV and MediaPipe, collected and curated the 50-video dataset, and achieved 92% precision with the ML baseline.",
    challenges:
      "Building a reliable video processing pipeline that works in real-time with varying classroom lighting conditions and camera angles.",
    lessonsLearned:
      "Gained deep understanding of computer vision pipelines, MediaPipe integration, and the importance of dataset quality in ML projects.",
    futureImprovements: [
      "Add deep learning models for higher accuracy",
      "Support multi-camera setups",
      "Build real-time alert system for instructors",
      "Expand dataset with more diverse classrooms",
    ],
    github: "https://github.com/AnamMursalin/ClassroomEngagmentSystem.git",
  },
  {
    id: "alchemist-ai",
    title: "Alchemist AI – LangChain Persistent Memory",
    shortDescription:
      "Retrieval-augmented memory layer for LLM applications",
    description:
      "Independent project building a retrieval-augmented memory layer for LLM applications to enable persistent cross-session context.",
    categories: ["AI/ML", "Web Development"],
    technologies: ["Python", "LangChain", "OpenAI API"],
    role: "Lead Developer",
    duration: "In Progress",
    problem:
      "LLMs typically lose context across sessions, making long-term personalized interactions impossible without an external memory management system.",
    solution:
      "A memory layer utilizing retrieval-augmented generation (RAG) to safely store and dynamically recall user preferences and historical context.",
    features: [
      "Persistent cross-session memory",
      "Semantic search retrieval",
      "10+ structured recall test cases",
      "Preference extraction and retention",
      "Factual validation system",
    ],
    myContribution:
      "Designed and built the entire retrieval-augmented memory layer using LangChain and OpenAI API, created structured test suites for validating recall accuracy.",
    challenges:
      "Balancing retrieval accuracy with response latency, and designing test cases that comprehensively validate memory retention.",
    lessonsLearned:
      "Deepened understanding of RAG architectures, LangChain framework, and the nuances of building reliable memory systems for LLMs.",
    futureImprovements: [
      "Add vector database integration for scalability",
      "Implement memory prioritization algorithms",
      "Build a web interface for memory management",
      "Add multi-user support",
    ],
    github: "https://github.com/ShahHaseebAhmadKhan/Final_AlchemistAIOfficial.git",
    liveDemo: "https://www.alchemistaiofficial.com/",
  },
  {
    id: "banking-database",
    title: "Banking Database System",
    shortDescription:
      "Normalized relational database for banking operations",
    description:
      "Academic project designing a fully normalized relational database for banking operations with complex queries and ACID-safe transactions.",
    categories: ["Database"],
    technologies: ["PostgreSQL", "SQL"],
    role: "Database Designer",
    duration: "Academic Project",
    problem:
      "Banking systems require robust, consistent, and fast data storage structures to handle complex financial transactions safely.",
    solution:
      "A scalable, 3NF normalized database schema utilizing PostgreSQL's advanced transactional features to ensure ACID compliance.",
    features: [
      "Fully normalized (3NF) schema",
      "12 interconnected entities",
      "20+ optimized SQL queries",
      "ACID-safe transactions",
      "Comprehensive data integrity constraints",
    ],
    myContribution:
      "Designed the complete normalized schema across 12 entities, implemented all queries, and ensured ACID compliance across all transaction types.",
    challenges:
      "Balancing normalization with query performance, and ensuring referential integrity across all entity relationships.",
    lessonsLearned:
      "Strengthened understanding of database normalization, transaction management, and PostgreSQL's advanced features.",
    futureImprovements: [
      "Add stored procedures for common operations",
      "Implement database triggers for audit logging",
      "Build a REST API layer",
      "Add performance benchmarking",
    ],
    github: "https://github.com/AnamMursalin/EasyTrust-Bank.git",
  },
  {
    id: "banking-chatbot",
    title: "Banking Support Chatbot – LLM Evaluation Pipeline",
    shortDescription:
      "LLM evaluation harness benchmarking prompt variants for banking FAQ",
    description:
      "Academic project building a reusable LLM evaluation pipeline that benchmarks prompt variants for a banking FAQ chatbot across multiple quality dimensions.",
    categories: ["AI/ML"],
    technologies: ["Python", "LLM APIs"],
    role: "Developer",
    duration: "AI/ML Project",
    problem:
      "Deploying LLMs in financial domains poses risks due to hallucinations and incorrect advice, requiring rigorous testing prior to launch.",
    solution:
      "An automated evaluation pipeline that scores different LLM prompts against a suite of metrics to identify the safest and most accurate configuration.",
    features: [
      "Reusable evaluation harness",
      "50+ prompt variant benchmarking",
      "4-dimension scoring (correctness, latency, hallucination rate, failure taxonomy)",
      "Automated metric collection",
      "Comprehensive failure analysis",
    ],
    myContribution:
      "Built the complete evaluation harness in Python, designed the benchmarking methodology, and analyzed results across all four dimensions.",
    challenges:
      "Designing comprehensive evaluation metrics that capture both safety and quality aspects of LLM responses in a financial context.",
    lessonsLearned:
      "Learned systematic approaches to LLM evaluation, prompt engineering best practices, and the importance of multi-dimensional quality assessment.",
    futureImprovements: [
      "Add A/B testing framework",
      "Implement continuous evaluation pipeline",
      "Add cost-per-query analysis",
      "Build visualization dashboard for results",
    ],
    github: "https://github.com/AnamMursalin/banking-FAQ-chatbot.git",
  },
  {
    id: "hostel-hub",
    title: "Hostel Hub",
    shortDescription: "Backend workflows and database models for hostel management",
    description: "Designed relational database models and backend workflows for Hostel Hub, a scalable web application that cuts manual allocation and fee-tracking effort by 40%.",
    image: "/images/projects/hostel_hub.png",
    categories: ["Web Development", "Database"],
    technologies: ["Ruby on Rails", "PostgreSQL", "Backend API"],
    role: "Software Engineer Intern",
    duration: "Jul – Sep 2025",
    problem: "Hostel administration involved high manual effort for room allocation and fee tracking, leading to inefficiencies and errors.",
    solution: "A web-based backend solution utilizing Ruby on Rails and PostgreSQL to automate allocation and track fees dynamically.",
    features: [
      "Relational database modeling",
      "Automated room allocation workflow",
      "Fee-tracking system",
      "40% reduction in manual effort",
    ],
    myContribution: "Designed the relational database models and implemented the backend workflows in Ruby on Rails.",
    challenges: "Handling edge cases in room allocation algorithms and ensuring data consistency during concurrent fee updates.",
    lessonsLearned: "Gained significant proficiency in Ruby on Rails and complex relational database design.",
    futureImprovements: [
      "Add a frontend dashboard for students",
      "Integrate payment gateway",
    ],
    github: "https://github.com/AnamMursalin/Hostelhub.git",
  },
];
