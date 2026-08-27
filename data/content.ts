export const profile = {
  name: "Suyash Jain",
  role: "Software Engineer",
  tagline: "Senior Full-Stack Engineer specializing in scalable .NET Core microservices, crafting dynamic React/Angular frontends, and cloud-native solutions across AWS, Azure, and GCP.",
  location: "[City, Country]",
  summary:
    "[Short placeholder summary about you — a couple of sentences go here. Replace with your own introduction.]",
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C#", "Javascript", "Typescript"],
  },
  {
    category: "Frameworks & Libraries",
    items: [".NET Core", "React", "Angular"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "New Relic", "Octopus", "ArgoCD", "Helm", "Terraform", "RabbitMQ", "Teamcity", "Github Actions" ],
  },
  {
    category: "Practices",
    items: ["SOLID Principles", "System Design", "REST APIs", "CI/CD", "Microservices", "Observability", "Scalability" ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  image: string;
};

export const certifications: Certification[] = [
  { name: "Google Cloud Certified: Professional Cloud Architect", issuer: "Google", year: "2025", image: "/images/certifications/google-architect.png" },
  { name: "Google Cloud Certified: Professional Cloud Developer", issuer: "Google", year: "2024", image: "/images/certifications/google-developer.png" },
  { name: "Google Cloud Certified: Cloud Engineer", issuer: "Google", year: "2024", image: "/images/certifications/google-engineer.png" },
  { name: "AWS Certified: Developer - Associate (DVA-C02)", issuer: "AWS", year: "2022", image: "/images/certifications/aws-developer.png" },
  { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft", year: "2022", image: "/images/certifications/azure-developer.png" },
  { name: "New Relic Verified Foundation (NVF)", issuer: "New Relic", year: "2025", image: "/images/certifications/nrf.png" },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  description?: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Ten Lifestyle Group",
    role: "Software Engineer",
    period: "May 2025 — Present",
    description: "Worked on TenMaid, a global concierge platform used by Lifestyle Managers to deliver personalized concierge services to members of leading financial institutions, including HSBC, American Express, Visa, Mastercard, and Bank of America.",
    points: [
      "Designed and implemented a real-time notification service using .NET Channels, gRPC streaming, and Redis backplane, with OpenTelemetry metrics for scalable event delivery, observability, and proactive production monitoring.",
      "Strengthened security and delivery efficiency by implementing Message-Level Encryption (MLE) for VCES to meet Visa requirements, while migrating multiple TeamCity CI/CD pipelines to GitHub Actions to standardize release automation.",
      "Improved email processing resilience using RabbitMQ/MassTransit topic routing, retry policies, and circuit breakers, reducing failure impact and improving reliability of asynchronous workflows.",
      "Prevented duplicate member creation for a major banking client by implementing distributed locking for concurrent requests, ensuring data consistency and reliable member onboarding.",
    ],
  },
  {
    company: "Dunnhumby India",
    role: "Software Engineer",
    period: "Nov 2023 — Apr 2025",
    description: "Worked on the Billing module of dunnhumby Sphere, an omnichannel retail media platform used by leading retailers and CPG brands, including Tesco and Foodstuffs, to manage and optimize retail media operations.",
    points: [
      "Developed reusable, self-contained React components adopted across multiple microfrontends, improving UI consistency and accelerating feature development across the platform.",
      "Contributed to the design and development of a Saga orchestration service in .NET, enabling reliable coordination of distributed transactions across microservices and improving workflow resilience.",
      "Designed and implemented an external API gateway using Istio service mesh for ingress, authentication, authorization, and routing, securely connecting OIC with microservices running on GKE.",
      "Integrated Salesforce CRM via Oracle Integration Cloud (OIC), replacing the legacy Oracle CRM and enabling seamless CRM integration with the Sphere platform."
    ],
  },
  {
    company: "Gateway Group",
    role: "Software Engineer",
    period: "Jan 2021 — Oct 2023",
    description: "Worked on multiple fleet management solutions supporting rental, leasing, and dealership operations, across SOA and microservices architectures, helping streamline fleet operations and customer-facing workflows.",
    points: [
      "Built and enhanced Angular SPAs using AG Grid, RxJS, and NgRx, delivering responsive data-intensive interfaces with reusable components and centralized state management.",
      "Developed scalable .NET RESTful APIs using CQRS, with server-side filtering, sorting, and pagination; integrated Elasticsearch via NEST to deliver fast and efficient search capabilities.",
      "Led the integration of Worldpay payment gateway, enabling secure online payments and seamless transaction processing within the client's platform"
    ],
  },
];

export const contact = {
  email: "suyashsjn@gmail.com",
  phone: "+919575813775",
  location: "Gurgram, Haryana, India",
  links: [
    { label: "GitHub", url: "https://github.com/suyashjn" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/suyashjn" },
  ],
};
