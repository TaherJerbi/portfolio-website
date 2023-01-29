"use client";

import WindowCard from "@/components/window-card";
import { useDragControls, motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "react-feather";
import Button from "../button";
export default function DragWindow() {
  const controls = useDragControls();
  const iconControls = useDragControls();
  const [open, setOpen] = useState(true);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="fixed z-50 bottom-0 right-0">
      <motion.div
        onClick={onOpen}
        className="absolute z-10 bottom-20 right-5 md:right-20 overflow-hidden border-2 p-2 flex justify-center items-center border-brand-blue-dark rounded-full cursor-pointer bg-brand-red shadow-brand-sm hover:shadow-brand-md transition-shadow duration-300 ease-in-out"
        initial={{
          width: "0",
          height: "0",
          opacity: 0,
        }}
        animate={{
          width: open ? "0px" : "50px",
          height: open ? "0px" : "50px",
          opacity: open ? 0 : 1,
          x: open ? 100 : undefined,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        dragControls={iconControls}
        onPointerDown={(e) => {
          iconControls.start(e);
        }}
        drag
        dragConstraints={{
          left: 0,
          right: 0,
          top: -(window?.visualViewport?.height ?? 0) / 2,
          bottom: 0,
        }}
      >
        <MessageCircle className="stroke-[2px] w-full h-full fill-brand-beige-light" />
      </motion.div>
      <motion.div
        initial={{
          width: "0px",
          height: "0px",
          opacity: 0,
          x: 100,
          y: 100,
        }}
        animate={{
          width: open ? "300px" : "0px",
          height: open ? "350px" : "0px",
          opacity: open ? 1 : 0,
          x: open ? 0 : 100,
          y: open ? 0 : 100,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 z-20 p-3 overflow-hidden"
        dragControls={controls}
        onPointerDown={(e) => {
          controls.start(e);
        }}
        drag
        dragConstraints={{
          left: open ? (-3 * (window?.visualViewport?.width ?? 0)) / 4 : 0,
          right: 0,
          top: open ? -(window?.visualViewport?.height ?? 0) / 2 : 0,
          bottom: 0,
        }}
        dragTransition={{
          bounceDamping: 30,
          power: 0.1,
          bounceStiffness: 800,
        }}
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
            <button
              className="text-sm font-bold text-brand-beige-light bg-brand-red border-brand-blue-dark border-4 px-4 py-2 hover:shadow-brand-sm transition-shadow duration-300 ease-in-out"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </WindowCard>
      </motion.div>
    </div>
  );
}
