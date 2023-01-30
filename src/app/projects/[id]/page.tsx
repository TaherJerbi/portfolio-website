import Button from "@/components/button";
import { ProjectSection } from "@/components/section/projects";
import { PROJECTS } from "@/data";
import Link from "next/link";

function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((project) => project.id === params.id);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div>
      <div className="my-10 text-brand-blue">
        <Link href={`/`}>
          <p className="text-xl py-5 font-bold hover:underline">{"Home"}</p>
        </Link>
        <Link href={`/projects`}>
          <p className="text-xl py-5 font-bold hover:underline">
            {"Explore Other Projects"}
          </p>
        </Link>
      </div>
      <ProjectSection variant="full" project={project} />;
    </div>
  );
}

export default ProjectPage;
