import Button from "@/components/button";
import ProjectImages from "@/components/project-images";
import SkillGrid from "@/components/skill-grid";
import { PROJECTS } from "@/data";
import { Project } from "@/utils/types";
import Link from "next/link";

export function ProjectSection({
  project,
  variant,
}: {
  project: Project;
  variant: "full" | "summary";
}) {
  return (
    <div
      id={`project${project.id}`}
      className={"grid grid-cols-4 gap-10 mb-20 md:mb-40 place-items-stretch"}
    >
      <div className="md:col-span-2 col-span-4">
        <div className="flex space-x-5 items-center mb-8 flex-wrap space-y-2">
          <div>
            <Link href={`/projects/${project.id}`}>
              <h1 className="text-2xl font-bold hover:underline">
                {project.title}
              </h1>
            </Link>
            <p>{project.date}</p>
          </div>
          <div className="flex space-x-5">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button
                  bg={"beige-ecru"}
                  fontSize={"text-sm"}
                  shadow="md"
                  hoverShadow
                >
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button
                  bg={"blue"}
                  fontSize={"text-sm"}
                  shadow="md"
                  hoverShadow
                >
                  Github
                </Button>
              </a>
            )}
          </div>
        </div>
        <p className="text-xl mb-2 leading-relaxed">{project.description}</p>
        {variant === "full" &&
          project.sections.map((section) => (
            <div key={section.title} className={"text-xl leading-relaxed"}>
              <h2 className="text-xl font-bold">- {section.title}</h2>
              {typeof section.description === "string" ? (
                <p className="text-xl leading-relaxed">{section.description}</p>
              ) : (
                section.description
              )}
            </div>
          ))}
        {variant === "summary" && (
          <Link href={`/projects/${project.id}`}>
            <p className="text-xl font-bold hover:underline opacity-75">
              Read More...
            </p>
          </Link>
        )}
        <div className="flex mt-5 -ml-3 space-x-3 flex-wrap">
          <SkillGrid skills={project.skills} />
        </div>
      </div>
      {(project.desktopImageUrl || project.mobileImageUrl) && (
        <div className="md:col-span-2 col-span-4">
          <ProjectImages project={project} />
        </div>
      )}
    </div>
  );
}

function ProjectsSection({
  variant = "summary",
}: {
  variant?: "summary" | "full";
}) {
  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-brand-beige-light px-10 lg:px-40 py-10 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-20">Projects</h1>
      {PROJECTS.map((project) => (
        <ProjectSection variant={variant} key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsSection;
