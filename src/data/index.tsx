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
  {
    title: "Apollo GraphQL",
    proficiency: SkillProficiency.Advanced,
    id: "apollo",
  },
  {
    title: "Framer Motion",
    proficiency: SkillProficiency.Intermediate,
    id: "framer-motion",
  },
  {
    title: "Tailwind CSS",
    proficiency: SkillProficiency.Intermediate,
    id: "tailwindcss",
  },
  {
    title: "CSS",
    proficiency: SkillProficiency.Advanced,
    id: "css",
  },
  {
    title: "HTML",
    proficiency: SkillProficiency.Expert,
    id: "html",
  },
  {
    title: "🧪 Cypress",
    proficiency: SkillProficiency.Intermediate,
    id: "cypress",
  },
  {
    title: "🧪 Jest",
    proficiency: SkillProficiency.Intermediate,
    id: "jest",
  },
  {
    title: "Git",
    proficiency: SkillProficiency.Expert,
    id: "git",
  },
  {
    title: "🧪 Storybook",
    proficiency: SkillProficiency.Advanced,
    id: "storybook",
  },
  {
    title: "Charka UI",
    proficiency: SkillProficiency.Advanced,
    id: "chakra",
  },
  {
    title: "Strapi",
    proficiency: SkillProficiency.Advanced,
    id: "strapi",
  },
  {
    title: "GraphQL Codegen",
    proficiency: SkillProficiency.Intermediate,
    id: "graphql-codegen",
  },
  {
    title: "Angular",
    proficiency: SkillProficiency.Beginner,
    id: "angular",
  },
  {
    title: "Java",
    proficiency: SkillProficiency.Intermediate,
    id: "java",
  },
  {
    title: "C / C++",
    proficiency: SkillProficiency.Intermediate,
    id: "c",
  },
  {
    title: "Python",
    proficiency: SkillProficiency.Intermediate,
    id: "python",
  },
  {
    title: "Gatsby",
    proficiency: SkillProficiency.Advanced,
    id: "gatsby",
  },
  {
    title: "RxJS",
    proficiency: SkillProficiency.Beginner,
    id: "rxjs",
  },
  {
    title: "Prisma",
    proficiency: SkillProficiency.Intermediate,
    id: "prisma",
  },
];

export const PROJECTS: Project[] = [
  // {
  //   id: "1",
  //   title: "Portfolio",
  //   description: "This portfolio website",
  //   skills: getSkillsByIds(["react", "typescript", "nextjs", "framer-motion"]),
  //   sections: [
  //     {
  //       title: "Purpose of this project",
  //       description: "To showcase my skills and projects",
  //     },
  //     {
  //       title: "What I learned",
  //       description:
  //         "I learned Framer Motion and tried Next.js 13 and the experiemental appDir for the first time",
  //     },
  //   ],
  //   githubUrl: "https://github.com/TaherJerbi/portfolio-website",
  // },
  {
    id: "2",
    title: "Design Curated",
    date: "2022",
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
      {
        title: "What I learned",
        description: (
          <ul>
            <li>
              - I learned how to use{" "}
              <span className="font-bold">Chakra UI</span>
            </li>
            <li>
              - This was my first <span className="font-bold">GraphQL</span>{" "}
              project, I learned:
              <ul className="ml-10 list-disc">
                <li>
                  Create a graphql server from scratch using express and Apollo
                  Server.
                </li>
                <li>
                  Connect to a graphql server from the client using Apollo
                  Client.
                </li>
              </ul>
            </li>
          </ul>
        ),
      },
    ],
    liveUrl: "https://designcurated-frontend.vercel.app/",
    githubUrl: "https://github.com/TaherJerbi/designcurated-frontend",
    desktopImageUrl: "/assets/images/designcurated.desktop.png",
    mobileImageUrl: "/assets/images/designcurated.mobile.png",
  },
  {
    id: "3",
    title: "Sanibains",
    date: "2023",
    description:
      "A website for sanibains, a distribution company of sanitary products, Ceramics, Faucets, Kitchens, Bathroom Furniture, Appliances and bathroom accessories.",
    skills: getSkillsByIds([
      "react",
      "typescript",
      "nextjs",
      "chakra",
      "graphql",
      "apollo",
      "strapi",
      "graphql-codegen",
    ]),
    sections: [
      {
        title: "Purpose of this project",
        description:
          "The company needed to showcase the company's products and services. It also needed to be able to manage the content of the website through a CMS. I used Strapi as a CMS and Next.js as a frontend framework.",
      },
      {
        title: "What I learned",
        description: (
          <p>
            I learned how to expose a GraphQL API with Strapi and use{" "}
            <span className="font-bold">GraphQL Codegen </span>
            to share types for queries, mutations and fragments. This allowed me
            to use the generated types in the frontend to make sure that the
            queries are correct and that the data is correctly typed.
          </p>
        ),
      },
    ],
    liveUrl: "https://sanibains-next.vercel.app/",
    desktopImageUrl: "/assets/images/sanibains.desktop.png",
    mobileImageUrl: "/assets/images/sanibains.mobile.png",
  },
  {
    id: "4",
    title: "Watcherly",
    date: "2022",
    description:
      "A social media app built with Gatsby and Node.js GraphQL server for an Upwork client.",
    skills: getSkillsByIds([
      "react",
      "typescript",
      "gatsby",
      "graphql",
      "nodejs",
      "apollo",
      "jest",
      "chakra",
      "cypress",
      "storybook",
      "graphql-codegen",
      "postgresql",
      "prisma",
    ]),
    sections: [
      {
        title: "Purpose of this project",
        description:
          "The client needed a platform to provide an engaging and interactive experience for users. The goal was to create a reliable and functional app with performance optimization, mobile-responsiveness and visually appealing designs.",
      },
      {
        title: "What I learned",
        description:
          "I gained experience in writing GraphQL resolvers with the Prisma ORM, converting designs to pixel-perfect components, test-driven development, working with a postgresql database, converting front-end code to Typescript, and setting up graphql-codegen for automatic type generation. These skills improved my understanding of scalable and safe coding practices.",
      },
    ],
    liveUrl: "https://watcherly.club",
  },
];
