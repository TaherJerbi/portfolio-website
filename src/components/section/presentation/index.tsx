import Button from "@/components/button";
import ClientOnly from "@/components/client-only";
import DragWindow from "@/components/draggable-nav";
import TriangeDown from "@/components/icons/triange-down";
import Nav from "@/components/nav";
import Image from "next/image";
import Presentation from "./presentation";

export default function PresentationSection() {
  return (
    <div
      id="presentation"
      className="relative flex flex-col min-h-screen w-screen bg-brand-beige-light overflow-hidden"
    >
      <div className="relative flex flex-col flex-grow w-full">
        <Nav />
        <div className="px-10 flex-grow flex justify-center items-center">
          <div className="mb-40 md:mb:20">
            <Presentation />
          </div>
        </div>
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
  );
}
