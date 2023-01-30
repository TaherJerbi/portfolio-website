"use client";

import WindowCard from "@/components/window-card";

import { useState } from "react";
import { MessageCircle } from "react-feather";
import FloatingDragContainer from "@/components/floating-drag-container";
import Button from "../button";
export default function DraggableNav() {
  const [open, setOpen] = useState(true);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="fixed z-50 bottom-0 right-0">
      <FloatingDragContainer
        onClick={onOpen}
        className="z-10 bottom-20 right-5 md:right-20 overflow-hidden border-2 p-2 flex justify-center items-center border-brand-blue-dark rounded-full cursor-pointer bg-brand-red shadow-brand-sm hover:shadow-brand-md transition-shadow duration-300 ease-in-out"
        dragConstraints={{
          left: 0,
          right: 0,
          top: -(window?.visualViewport?.height ?? 0) / 2,
          bottom: 0,
        }}
        open={!open}
        width={"50px"}
        height={"50px"}
      >
        <MessageCircle className="stroke-[2px] w-full h-full fill-brand-beige-light" />
      </FloatingDragContainer>
      <FloatingDragContainer
        initial={{
          width: "0px",
          height: "0px",
          opacity: 0,
        }}
        className="bottom-20 right-10 z-20 p-3 overflow-hidden"
        dragConstraints={{
          left: (-3 * (window?.visualViewport?.width ?? 0)) / 4,
          right: 0,
          top: -(window?.visualViewport?.height ?? 0) / 2,
          bottom: 0,
        }}
        dragTransition={{
          bounceDamping: 30,
          power: 0.1,
          bounceStiffness: 800,
        }}
        open={open}
        width={"300px"}
        height={"350px"}
      >
        <WindowCard drag title="Drag Me!" onClose={onClose} variant="dark">
          <div className="w-full h-[70%] flex-grow flex flex-col justify-start items-stretch text-center font-bold">
            <a
              href="#presentation"
              className=" border-b-2 flex items-center justify-center border-brand-blue-dark h-[25%] hover:bg-brand-green-light transition duration-100 ease-in-out"
            >
              Presentation
            </a>
            <a
              href="#about"
              className=" border-b-2 flex items-center justify-center border-brand-blue-dark h-[25%] hover:bg-brand-green-light transition duration-100 ease-in-out"
            >
              About
            </a>
            <a
              href="#projects"
              className=" border-b-2 flex items-center justify-center border-brand-blue-dark h-[25%] hover:bg-brand-green-light transition duration-100 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="border-b-2 flex items-center justify-center border-brand-blue-dark h-[25%] hover:bg-brand-green-light transition duration-100 ease-in-out"
            >
              Contact
            </a>
          </div>
          <div className="w-full py-3 h-[30%] flex justify-center items-center">
            <Button
              bg="red"
              shadow="xs"
              py="py-2"
              px="px-4"
              flat
              hoverShadow
              fontSize="text-md"
              border
              borderWidth="4"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </WindowCard>
      </FloatingDragContainer>
    </div>
  );
}
