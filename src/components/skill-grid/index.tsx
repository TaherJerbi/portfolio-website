"use client";

import { classList } from "@/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SkillCard, { Skill, SkillProficiency } from "../skill-card";

function SkillGrid({
  skills,
  setSkills,
  highlightedProficiency,
}: {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
  highlightedProficiency?: SkillProficiency;
}) {
  const setCurrentTop = (id: string) => {
    const newSkillState = [...skills].sort((a, b) =>
      a.id === id ? -1 : b.id === id ? 1 : 0
    );
    setSkills(newSkillState);
  };
  return (
    <div className="flex flex-wrap mt-12">
      {skills.map((skill) => {
        return (
          <motion.div
            layout
            key={skill.id}
            className={classList({
              "opacity-50":
                !!highlightedProficiency &&
                skill.proficiency !== highlightedProficiency,
              "opacity-100":
                !highlightedProficiency ||
                skill.proficiency === highlightedProficiency,
              "transition-opacity duration-500 ease-in-out": true,
            })}
          >
            <SkillCard onClick={() => setCurrentTop(skill.id)} skill={skill} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default SkillGrid;
