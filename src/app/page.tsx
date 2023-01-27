import ClientOnly from "@/components/client-only";
import DragWindow from "@/components/drag-window";
import About from "@/components/hero/about";
import Presentation from "@/components/hero/presentation";
import TriangeDown from "@/components/icons/triange-down";
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
        <a
          href="#about"
          className="absolute bottom-5 left-0 w-full flex justify-center cursor-pointer hover:underline"
        >
          <div className="flex items-center space-x-2 py-2">
            <TriangeDown className="animate-bounce drop-shadow-brand-xs hover:drop-shadow-brand-sm transition 0.2s ease-in-out" />
            <p className="text-lg text-brand-blue pb-2 font-bold">Explore</p>
          </div>
        </a>
      </div>
      <About />
    </div>
  );
}
