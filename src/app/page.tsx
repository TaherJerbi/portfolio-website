import ClientOnly from "@/components/client-only";
import DragWindow from "@/components/drag-window";
import About from "@/components/hero/about";
import Presentation from "@/components/hero/presentation";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div>
      <div className="relative flex flex-col min-h-screen w-screen bg-brand-beige-light overflow-hidden">
        <ClientOnly>
          <DragWindow />
        </ClientOnly>
        <div className="relative h-full w-full">
          <Nav />
          <Presentation />
        </div>
      </div>
      <About />
    </div>
  );
}
