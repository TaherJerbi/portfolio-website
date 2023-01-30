import ProjectsSection from "@/components/section/projects";
import Link from "next/link";

function ProjectsPage() {
  return (
    <div className="bg-brand-beige-light">
      <div className="pt-10 px:10 lg:px-40">
        <Link href={`/`}>
          <p className="text-xl py-5 font-bold hover:underline">{"< Home"}</p>
        </Link>
      </div>
      <ProjectsSection variant="summary" />;
    </div>
  );
}

export default ProjectsPage;
