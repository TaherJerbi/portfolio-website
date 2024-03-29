"use client";

import { classList } from "@/utils";
import { Skill, SkillProficiency } from "@/utils/types";
import { motion } from "framer-motion";
import SkillCard from "@/components/skill-card";
import { useEffect, useState } from "react";

type SkillGridProps = {
	skills: Skill[];
	highlightedProficiency?: SkillProficiency;
};
function SkillGrid({
  skills,
  highlightedProficiency,
}: SkillGridProps) {
  const [internalSkills, setSkills] = useState(skills);
  const setCurrentTop = (id: string) => {
    const skill = internalSkills.findIndex((skill) => skill.id === id);
    if (skill !== -1) {
      const newSkillState = [...internalSkills];

      newSkillState[0] = internalSkills[skill];
      newSkillState[skill] = internalSkills[0];

      setSkills(newSkillState);
    }
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
