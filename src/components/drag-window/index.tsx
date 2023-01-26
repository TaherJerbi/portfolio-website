"use client";

import WindowCard from "@/components/window-card";
import { useDragControls, motion } from "framer-motion";
import { useState } from "react";
import { GitHub, Linkedin, Mail, MessageCircle } from "react-feather";
import ClientOnly from "../client-only";
export default function DragWindow() {
  const controls = useDragControls();
  const iconControls = useDragControls();
  const [open, setOpen] = useState(true);

  return (
    <ClientOnly>
      <motion.div
        onClick={() => setOpen(true)}
        className="absolute z-10 bottom-20 right-5 overflow-hidden border-2 p-2 flex justify-center items-center border-brand-blue-dark rounded-full cursor-pointer bg-brand-red"
        initial={{
          width: "0px",
          height: "0px",
          opacity: 0,
          x: 10,
          y: 10,
        }}
        animate={{
          width: open ? "0px" : "40px",
          height: open ? "0px" : "40px",
          opacity: open ? 0 : 1,
          x: open ? 10 : undefined,
          y: open ? 10 : undefined,
        }}
        transition={{
          duration: 0.5,
        }}
        exit={{
          width: "0px",
          height: "0px",
          opacity: 0,
          x: 10,
          y: 10,
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
        animate={{
          width: open ? "fit-content" : "0%",
          height: open ? "fit-content" : "0%",
          opacity: open ? 1 : 0,
          x: open ? undefined : 10,
          y: open ? undefined : 10,
        }}
        className="absolute bottom-20 right-10 z-10 overflow-hidden"
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
          bounceStiffness: 800,
        }}
      >
        <WindowCard title="Drag Me!" onClose={() => setOpen(false)}>
          <div className="px-10 py-10">
            <p className="text-xl font-bold leading-8 whitespace-nowrap">
              Let`s connect!
            </p>
            <div className="flex justify-between mt-4">
              <Mail className="stroke-[2px] w-8 h-8" />
              <GitHub className="stroke-[2px] w-8 h-8" />
              <Linkedin className="stroke-[2px] w-8 h-8" />
            </div>
          </div>
        </WindowCard>
      </motion.div>
    </ClientOnly>
  );
}
