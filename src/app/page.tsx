import DragWindow from "@/components/drag-window";
import About from "@/components/hero/about";
import Presentation from "@/components/hero/presentation";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div>
      <div className="relative flex flex-col h-screen w-screen bg-brand-beige-light">
        <DragWindow />
        <Nav />
        <Presentation />
      </div>
      <About />
    </div>
  );
}
