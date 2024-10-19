/* eslint-disable @next/next/no-img-element */
import { Project, Skill, SkillProficiency } from "@/utils/types";
import SKILLS from "./skills";

function getSkillsByIds(ids: string[], create?: boolean): Skill[] {
  if (!create) return SKILLS.filter((skill) => ids.includes(skill.id));
  else {
    return ids.map((id) => {
      const skill = SKILLS.find((skill) => skill.id === id);
      if (!skill) {
        return {
          id,
          title: id,
          proficiency: SkillProficiency.Beginner,
        };
      }
      return skill;
    });
  }
}

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
    liveUrl: "https://www.sanibains.com/",
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
        title: "Client Feedback",
        description: (
          <div>
            <p>
              The client was very satisfied with the final product and the
              quality of the code. They appreciated the attention to detail and
              the effort put into the project. The client even left a positive 5
              star review on Upwork!
            </p>
            <a
              href="https://www.upwork.com/freelancers/~01406a12eb79ae2263"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="hover:shadow-brand-lg transition-all duration-100 my-5 mx-auto w-1/2"
                src="/assets/images/watcherly-feedback.png"
                alt="watcherly"
              />
            </a>
          </div>
        ),
      },
      {
        title: "What I learned",
        description: (
          <p>
            I gained experience in writing GraphQL resolvers with the Prisma
            ORM, converting designs to pixel-perfect components, test-driven
            development, working with a postgresql database, converting
            front-end code to Typescript, and setting up graphql-codegen for
            automatic type generation. These skills improved my understanding of
            scalable and safe coding practices.,
          </p>
        ),
      },
    ],
    liveUrl: "https://watcherly.club",
    desktopImageUrl: "/assets/images/watcherly.desktop.png",
    mobileImageUrl: "/assets/images/watcherly.mobile.png",
  },
  {
    id: "5",
    title: "Kallos",
    date: "2023",
    description:
      "School project for our Web Frameworks class at INSAT. Kallos is An online Greek gifts store made with Angular.js, TypeScript, and Nest.js.",
    skills: getSkillsByIds(
      [
        "angular",
        "typescript",
        "nestjs",
        "typeorm",
        "postgresql",
        "rxjs",
        "tailwindcss",
      ],
      true
    ),
    sections: [
      {
        title: "Presentation Video",
        description: (
          <div className="flex justify-center w-full">
            <iframe
              className="shadow-brand-sm my-5"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/w26ujmQtsP0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ),
      },
      {
        title: "Purpose of this project",
        description:
          "The goal was to demonstrate our understanding and application of web development concepts using Angular, TypeScript, and Nest.js in a team project. We were also required to use a database and a REST API. We chose to use PostgreSQL and TypeORM for the database and Nest.js for the REST API.",
      },
      {
        title: "What I learned",
        description:
          "This was my first complete Angular project, and through it, I learned a lot about Angular, reactive programming with RxJS, and gained practical experience with NestJS in the backend.",
      },
      {
        title: "Team",
        description: (
          <div>
            <p>
              I am especially proud of our team of five people for successfully
              coordinating our efforts and completing the project in just a few
              days. We utilized #github effectively to track progress and merge
              code changes. This allowed us to keep everyone on the same page
              and stay organized throughout the development process.
            </p>
            <p className="mt-5">
              Here are the links to the other team members&apos; GitHub
              profiles:
            </p>
            <ul className="list-disc ml-5 mb-5">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-blue font-bold hover:underline"
                  href="https://github.com/ismailcharfi"
                >
                  Ismail Charfi
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-blue font-bold hover:underline"
                  href="https://github.com/taherjerbi"
                >
                  Taher Jerbi
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-blue font-bold hover:underline"
                  href="https://github.com/nadineboukadida"
                >
                  Nadine Boukadida
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-blue font-bold hover:underline"
                  href="https://github.com/nawresncib12"
                >
                  Nawres Ncib
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-blue font-bold hover:underline"
                  href="https://github.com/salemhamdani"
                >
                  Salem Hamdani
                </a>
              </li>
            </ul>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/nawresncib12/Kallos/contributors"
            >
              <img
                width={310}
                height={60}
                alt="contributors"
                src="https://contrib.rocks/image?repo=nawresncib12/kallos"
              />
            </a>
          </div>
        ),
      },
    ],
    desktopImageUrl: "/assets/images/kallos.desktop.png",
    githubUrl: "https://github.com/nawresncib12/kallos",
  },
];
