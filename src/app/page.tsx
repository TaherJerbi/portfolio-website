import ClientOnly from "@/components/client-only";
import DragWindow from "@/components/drag-window";
import About from "@/components/section/about";
import PresentationSection from "@/components/section/presentation";
import ProjectsSection from "@/components/section/projects";

export default function Home() {
  return (
    <div>
      <ClientOnly>
        <DragWindow />
      </ClientOnly>
      <PresentationSection />
      <About />
      <ProjectsSection />
    </div>
  );
}
