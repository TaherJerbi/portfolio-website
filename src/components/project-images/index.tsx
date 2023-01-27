"use client";

import { classList } from "@/utils";
import { Project } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="flex flex-col justify-between h-full">
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
          >
            <Image
              className="rounded-2xl shadow-brand-lg border-brand-blue-dark border-4 mb-5"
              src={project.mobileImageUrl}
              width={180}
              height={390}
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
            className="mb-5"
          >
            <Image
              className=" rounded-3xl shadow-brand-lg border-brand-blue-dark border-4"
              src={project.desktopImageUrl}
              width={500}
              height={320}
              alt={project.title + " desktop image"}
            />
          </motion.div>
        )}
      </div>
      {project.desktopImageUrl && project.mobileImageUrl && (
        <div className="flex justify-center items-stretch mt-10">
          <button
            onClick={() => {
              setActiveImage(ActiveImage.MOBILE);
            }}
            className={classList(
              "text-sm font-bold py-4 px-4 h-fit border-brand-blue-dark border-2 transition duration-500 ease-in-out",
              {
                "bg-brand-blue-dark text-white":
                  activeImage === ActiveImage.MOBILE,
              }
            )}
          >
            Mobile
          </button>
          <button
            onClick={() => {
              setActiveImage(ActiveImage.DESKTOP);
            }}
            className={classList(
              "text-sm font-bold py-4 px-4 h-fit border-brand-blue-dark border-2 transition duration-500 ease-in-out",
              {
                "bg-brand-blue-dark text-white":
                  activeImage === ActiveImage.DESKTOP,
              }
            )}
          >
            Desktop
          </button>
        </div>
      )}
    </div>
  );
}
