import Button from "@/components/button";
import ProjectImages from "@/components/project-images";
import SkillCard from "@/components/skill-card";
import { PROJECTS } from "@/data";
import { Project } from "@/utils/types";
import Image from "next/image";

function ProjectSection({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-4 gap-10 mb-20 md:mb-40">
      <div className="md:col-span-2 col-span-3">
        <div className="flex justify-between items-center mb-8 flex-wrap space-y-2">
          <h1 className="text-2xl font-bold ">{project.title}</h1>
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
        <p className="text-xl">{project.description}</p>
        {project.sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold">- {section.title}</h2>
            <p className="text-xl">{section.description}</p>
          </div>
        ))}
        <div className="flex mt-2 -ml-3 space-x-3 flex-wrap">
          {project.skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
      {(project.desktopImageUrl || project.mobileImageUrl) && (
        <div className="md:col-span-2 col-span-3">
          <ProjectImages project={project} />
        </div>
      )}
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="min-h-screen w-full bg-brand-beige-light px-10 lg:px-40 py-10 md:py-20">
      <h1 className="text-4xl font-bold mb-20">Projects</h1>
      {PROJECTS.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsSection;