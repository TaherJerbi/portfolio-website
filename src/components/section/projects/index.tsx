import Button from "@/components/button";
import ProjectImages from "@/components/project-images";
import SkillGrid from "@/components/skill-grid";
import { PROJECTS } from "@/data";
import { Project } from "@/utils/types";

function ProjectSection({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-4 gap-10 place-items-stretch mb-20 md:mb-40 ">
      <div className="md:col-span-2 col-span-4">
        <div className="flex space-x-5 items-center mb-8 flex-wrap space-y-2">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <div className="flex space-x-5">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button
                  variant={"beige"}
                  className="text-sm font-bold py-4 px-4 h-fit"
                >
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button
                  variant={"blue"}
                  className="text-sm font-bold py-4 px-4 h-fit"
                >
                  Github
                </Button>
              </a>
            )}
          </div>
        </div>
        <p className="text-xl mb-2 leading-relaxed">{project.description}</p>
        {project.sections.map((section) => (
          <div key={section.title} className={"text-xl leading-relaxed"}>
            <h2 className="text-xl font-bold">- {section.title}</h2>
            {typeof section.description === "string" ? (
              <p className="text-xl leading-relaxed">{section.description}</p>
            ) : (
              section.description
            )}
          </div>
        ))}
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

function ProjectsSection() {
  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-brand-beige-light px-10 lg:px-40 py-10 md:py-20"
    >
      <h1 className="text-4xl font-bold mb-20">Projects</h1>
      {PROJECTS.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsSection;
