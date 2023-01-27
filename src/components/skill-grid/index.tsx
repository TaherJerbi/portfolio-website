"use client";

import { classList } from "@/utils";
import { Skill, SkillProficiency } from "@/utils/types";
import { motion } from "framer-motion";
import SkillCard from "@/components/skill-card";
import { useEffect, useState } from "react";

function SkillGrid({
  skills,
  highlightedProficiency,
}: {
  skills: Skill[];
  highlightedProficiency?: SkillProficiency;
}) {
  const [internalSkills, setSkills] = useState(skills);
  const setCurrentTop = (id: string) => {
    const newSkillState = [...skills].sort((a, b) =>
      a.id === id ? -1 : b.id === id ? 1 : 0
    );
    setSkills(newSkillState);
  };

  useEffect(() => {
    setSkills(skills);
  }, [skills]);

  return (
    <div className="flex flex-wrap">
      {internalSkills.map((skill) => {
        return (
          <motion.div
            layout
            key={skill.id}
            className={classList(
              "transition-opacity duration-500 ease-in-out",
              {
                "opacity-50":
                  !!highlightedProficiency &&
                  skill.proficiency !== highlightedProficiency,
                "opacity-100":
                  !highlightedProficiency ||
                  skill.proficiency === highlightedProficiency,
              }
            )}
          >
            <SkillCard onClick={() => setCurrentTop(skill.id)} skill={skill} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default SkillGrid;
