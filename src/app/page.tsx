import ClientOnly from "@/components/client-only";
import DraggableNav from "@/components/draggable-nav";
import About from "@/components/section/about";
import Contact from "@/components/section/contact";
import PresentationSection from "@/components/section/presentation";
import ProjectsSection from "@/components/section/projects";
import { ScrollIntoViewClientComponent } from "@/hooks/scroll-into-view";

export default function Home() {
  return (
    <div>
      <ClientOnly>
        <DraggableNav />
      </ClientOnly>
      <PresentationSection />
      <About />
      <ProjectsSection />
      <Contact />
    </div>
  );
}
