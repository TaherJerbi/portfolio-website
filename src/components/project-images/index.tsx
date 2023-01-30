"use client";

import { classList } from "@/utils";
import { Project } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../button";

enum ActiveImage {
  MOBILE = "mobile",
  DESKTOP = "desktop",
  BOTH = "both",
}

export default function ProjectImages({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(
    project.desktopImageUrl ? ActiveImage.DESKTOP : ActiveImage.MOBILE
  );
  return (
    <div className="flex flex-col justify-start h-full">
      <div className="flex justify-center items-center h-[400px]">
        {project.mobileImageUrl && (
          <motion.div
            animate={{
              height: activeImage === ActiveImage.MOBILE ? 390 : 0,
              width: activeImage === ActiveImage.MOBILE ? 180 : 0,
              opacity: activeImage === ActiveImage.MOBILE ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 30,
            }}
            className="mb-5 relative"
          >
            <Image
              className="rounded-2xl shadow-brand-lg border-brand-blue-dark border-4"
              fill
              src={project.mobileImageUrl}
              alt={project.title + " desktop image"}
            />
          </motion.div>
        )}
        {project.desktopImageUrl && (
          <motion.div
            animate={{
              height: activeImage === ActiveImage.DESKTOP ? 320 : 0,
              width: activeImage === ActiveImage.DESKTOP ? 500 : 0,
              opacity: activeImage === ActiveImage.DESKTOP ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 30,
            }}
            className="mb-5 relative"
          >
            <Image
              className="rounded-2xl shadow-brand-lg border-brand-blue-dark border-4 object-top !h-fit"
              src={project.desktopImageUrl}
              fill
              alt={project.title + " desktop image"}
            />
          </motion.div>
        )}
      </div>
      {project.desktopImageUrl && project.mobileImageUrl && (
        <div className="flex justify-center items-stretch mt-10">
          <ChooseImageButton
            onClick={() => setActiveImage(ActiveImage.MOBILE)}
            active={activeImage === ActiveImage.MOBILE}
            text="Mobile"
          />
          <ChooseImageButton
            onClick={() => setActiveImage(ActiveImage.DESKTOP)}
            active={activeImage === ActiveImage.DESKTOP}
            text="Desktop"
          />
        </div>
      )}
    </div>
  );
}
function ChooseImageButton({
  onClick,
  active,
  text,
}: {
  onClick: () => void;
  active: boolean;
  text: string;
}) {
  return (
    <Button
      onClick={onClick}
      bg="beige"
      border
      fontSize="text-sm"
      flat
      className={classList({
        "!bg-brand-blue-dark !text-white": active,
      })}
    >
      {text}
    </Button>
  );
}
