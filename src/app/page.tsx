import About from "@/components/section/about";
import PresentationSection from "@/components/section/presentation";
import ProjectsSection from "@/components/section/projects";

export default function Home() {
  return (
    <div>
      <PresentationSection />
      <About />
      <ProjectsSection />
    </div>
  );
}
