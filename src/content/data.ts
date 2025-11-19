interface HeroData {
  typewriterWords: string[];
  subtitle: string;
}

export const heroData: HeroData = {
  typewriterWords: [
    "Insightful Software Engineer",
    "Full-Stack Developer",
    "Building the Future",
  ],
  subtitle:
    "I love building modern, scalable, and user-focused applications. This portfolio showcases my journey projects, and experiences as a developer.",
};

interface ExperienceEntry {
  id: string;
  descriptions: string[];
  responsibilities: string[];
  technologies: string[];
}

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  entries: ExperienceEntry[];
  type: "full-time" | "part-time" | "freelance" | "internship";
}

export const experienceData: ExperienceItem[] = [
  {
    id: "4",
    title: "Backend / DevOps Engineer",
    company: "Apptimia",
    period: "JUL 2025 - PRESENT",
    entries: [
      {
        id: "4-1",
        descriptions: [
          `Geospatial asset management platform designed to help organizations track and visualize assets on interactive maps, enabling smarter and location-aware decision making.`,
        ],
        responsibilities: [
          `Designed and implemented a robust Django REST Framework API with a clean architecture in mind.`,
          `Integrated PostGIS for spatial data storage and retrieval.`,
          `Implemented a scalable tagging system for asset management.`,
          `Integrated Google Maps API and MapLibre to provide accurate geocoding and interactive map visualization.`,
          `Utilized polymorphic relationships to support different asset types.`,
          `Developed a comprehensive testing suite with factories for services and views to ensure the reliability and quality of the codebase (>98% coverage).`,
          `Prepared Docker-first, production-ready development workflow for seamless deployment to AWS services.`,
          `Managed infrastructure configuration using Terraform modules and multiple environments (testing, staging, production).`,
          `Automated CI/CD pipelines with GitHub Actions for automated testing and deployment.`,
          `Collaborated on frontend development, integrating new features with backend APIs while ensuring code quality and performance, including making architectural decisions.`,
        ],
        technologies: [
          "Python",
          "UV",
          "Django",
          "Django REST Framework",
          "PostGIS",
          "pytest",
          "factory_boy",
          "Docker",
          "Caddy",
          "Terraform",
          "AWS",
          "GitHub Actions",
          "TypeScript",
          "React",
          "CSS Modules",
          "Mantine",
          "TanStack Query",
          "MapLibre",
          "Playwright",
        ],
      },
    ],
    type: "full-time",
  },
  {
    id: "3",
    title: "Full-Stack / Python Developer",
    company: "Apptimia",
    period: "NOV 2024 - JUN 2025",
    entries: [
      {
        id: "3-2",
        descriptions: [`Quadruped Robot Dog`],
        responsibilities: [
          `Worked on the development of a threat detection system for a quadruped robot dog.`,
          `Implemented 3D room mapping with point cloud processing and depth cameras.`,
          `Developed a multi-threaded architecture for efficient data processing and real-time updates.`,
          `Integrated AI models for object detection and tracking, enabling the robot to recognize and respond to threats in its environment.`,
          `Established development workflow and networking infrastructure on Raspberry Pi for seamless deployment and maintenance.`,
        ],
        technologies: [
          "Python",
          "UV",
          "FastAPI",
          "WebRTC",
          "Linux",
          "Raspberry Pi",
          "AI",
          "YOLO",
          "OpenAI",
          "ultralytics",
          "DepthAI",
          "Go2 Unitree",
        ],
      },
      {
        id: "3-1",
        descriptions: [
          `AI-Powered Collaborative Memo Editor for Financial Analysts.`,
        ],
        responsibilities: [
          `Designed and implemented a modular, section-based rich text editor using React and Tiptap with support for AI-assisted editing.`,
          `Developed custom Tiptap extensions and NodeViews to enable collapsible sections, inline comments, suggestions and dynamic role-based interactions.`,
          `Integrated real-time collaboration via Hocuspocus server, Yjs, Socket.IO and WebSocket protocol to support multi-user editing and awareness features.`,
          `Engineered a flexible architecture that supports embedding the editor as a reusable and pluggable component across multiple projects.`,
          `Implemented end-to-end testing scenarios using Playwright to verify editor behavior, formatting tools, and cross-browser compatibility.`,
          `Designed a data contract between Backend APIs and the editor component that was receiving callbacks.`,
          `Worked closely with designers and product owners to deliver an accessible and intuitive user experience for both technical and non-technical users.`,
        ],
        technologies: [
          "JavaScript",
          "React",
          "Tiptap",
          "Hocuspocus",
          "Yjs",
          "SCSS",
          "Playwright",
          "Node.js",
          "Express",
          "Socket.IO",
          "Vite",
          "Git",
          "GitLab",
        ],
      },
    ],
    type: "full-time",
  },
  {
    id: "2",
    title: "React Developer",
    company: "Apptimia",
    period: "JAN 2023 - OCT 2024",
    entries: [
      {
        id: "2-1",
        descriptions: [
          `Decarbonization-driven and innovative web application that empowers customers to create personalized and sustainable roadmap for a greener future.`,
        ],
        responsibilities: [
          `Set up and optimized Nx monorepo architecture, establishing clear module boundaries to enhance scalability, maintainability, and separation of concerns.`,
          `Contributed to the development of software from the ground up, participating in the entire lifecycle from initial concept to final implementation, ensuring the solution was both innovative and sustainable`,
          `Translated Figma wireframes into responsive, pixel-perfect user interfaces, ensuring a seamless user experience across multiple devices.`,
          `Collaborated closely with the backend team to integrate GraphQL APIs, focusing on efficient data fetching and state management`,
          `Actively monitored backend development to identify potential issues early, ensuring a smoother integration process once the UI components were developed and ready.`,
          `Orchestrated application-wide state, ensuring consistent server data synchronization and efficient data flow across application.`,
          `Implemented intricate form validations, ensuring robust data input and user-friendly interactions.`,
          `Led and executed code migrations and updates to ensure the project maintained modern standards and leveraged the latest technology advancements.`,
          `Created and documented reusable UI components within the monorepo, streamlining development across multiple applications by extracting shared business logic into separate packages.`,
          `Wrote comprehensive tests to ensure the reliability and quality of the codebase and conducted code reviews.`,
        ],
        technologies: [
          "TypeScript",
          "React",
          "TanStack Query",
          "React Hook Form + Yup",
          "Redux Toolkit",
          "GraphQL",
          "TailwindCSS",
          "Jest",
          "RTL",
          "Cypress",
          "Storybook",
          "Git",
          "Nx",
          "Azure DevOps",
        ],
      },
    ],
    type: "full-time",
  },
  {
    id: "1",
    title: "Junior Frontend Developer",
    company: "Apptimia",
    period: "JUL 2022 - DEC 2022",
    entries: [
      {
        id: "1-1",
        descriptions: [
          `Contributed to a Next.js project that allows selling fresh food anywhere you wish via kiosk.`,
          `Developed a no-code Bubble application aimed at assisting homeowners in planning and managing home renovation projects efficiently.`,
        ],
        responsibilities: [
          `Assisted senior colleagues in the development of a Next.js project, including implementing front-end features and resolving issues.`,
          `Architected a no-code Bubble application.`,
          `Integrated various plugins and third-party services to enhance the functionality and user experience of the Bubble application for homeowners.`,
        ],
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Bubble.io",
          "No-Code platforms",
        ],
      },
    ],
    type: "full-time",
  },
];
