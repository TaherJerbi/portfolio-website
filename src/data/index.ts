import { Project, Skill, SkillProficiency } from "@/utils/types";

function getSkillsByIds(ids: string[]) {
  return SKILLS.filter((skill) => ids.includes(skill.id));
}
export const SKILLS: Skill[] = [
  {
    title: "React",
    proficiency: SkillProficiency.Advanced,
    id: "react",
  },
  {
    title: "Typescript",
    proficiency: SkillProficiency.Advanced,
    id: "typescript",
  },
  {
    title: "Javascript",
    proficiency: SkillProficiency.Expert,
    id: "javascript",
  },
  {
    title: "Next.js",
    proficiency: SkillProficiency.Advanced,
    id: "nextjs",
  },
  {
    title: "Node.js",
    proficiency: SkillProficiency.Advanced,
    id: "nodejs",
  },
  {
    title: "Express.js",
    proficiency: SkillProficiency.Intermediate,
    id: "expressjs",
  },
  {
    title: "PostgreSQL",
    proficiency: SkillProficiency.Intermediate,
    id: "postgresql",
  },
  {
    title: "GraphQL",
    proficiency: SkillProficiency.Advanced,
    id: "graphql",
  },
  {
    title: "Rust",
    proficiency: SkillProficiency.Beginner,
    id: "rust",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Portfolio",
    description: "This portfolio website",
    skills: getSkillsByIds(["react", "typescript", "nextjs", "framer-motion"]),
    sections: [
      {
        title: "Purpose of this project",
        description: "To showcase my skills and projects",
      },
      {
        title: "What I learned",
        description:
          "I learned Framer Motion and tried Next.js 13 and the experiemental appDir for the first time",
      },
    ],
    githubUrl: "https://github.com/TaherJerbi/portfolio-website",
  },
  {
    id: "2",
    title: "Design Curated",
    description:
      "Next.js app with a GraphQL backend that allows you to search images from the Unsplash API.",
    skills: getSkillsByIds([
      "react",
      "typescript",
      "nextjs",
      "graphql",
      "nodejs",
      "expressjs",
      "apollo",
    ]),
    sections: [
      {
        title: "Purpose of this project",
        description:
          "This was an initial trial for an Upwork client that allowed me to demonstrate my skills as a React and Node.js developer. It also allowed me to get familiar with the tech stack the client needed.",
      },
    ],
    liveUrl: "https://designcurated-frontend.vercel.app/",
    githubUrl: "https://github.com/TaherJerbi/designcurated-frontend",
    desktopImageUrl: "/assets/images/designcurated.desktop.png",
    mobileImageUrl: "/assets/images/designcurated.mobile.png",
  },
];
