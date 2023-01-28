"use client";

import Button from "@/components/button";
import { SkillProficiencyCircle } from "@/components/skill-card/skill-proficiency-circle";
import SkillGrid from "@/components/skill-grid";
import { Tooltip } from "@/components/tooltip";
import { SKILLS } from "@/data";
import { SkillProficiency } from "@/utils/types";
import { useMemo, useState } from "react";
import { BarChart } from "react-feather";

export default function Skills() {
  const [skills, setSkills] = useState(SKILLS);
  const [highlightedProficiency, setHighlightedProficiency] = useState<
    SkillProficiency | undefined
  >(undefined);

  const sortedSkills = useMemo(
    () =>
      [...SKILLS].sort((a, b) =>
        a.proficiency === undefined || b.proficiency === undefined
          ? 0
          : a.proficiency > b.proficiency
          ? -1
          : a.proficiency &&
            b.proficiency &&
            a.proficiency === b.proficiency &&
            a.title > b.title
          ? -1
          : 1
      ),
    []
  );

  const sortByProficiency = () => {
    setSkills([...sortedSkills]);
  };

  const toggleProficiency = (proficiency: SkillProficiency) => {
    if (highlightedProficiency === proficiency) {
      setHighlightedProficiency(undefined);
    } else {
      setHighlightedProficiency(proficiency);
    }
  };

  return (
    <>
      <div className="flex space-x-2 items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-brand-blue">Skills</p>
          <p className="text-xs">try clicking on skills and circles</p>
        </div>
        <div className="flex space-x-2 pr-4 items-center">
          <Tooltip
            text={"Expert"}
            className={"bg-brand-red font-bold text-brand-beige-light "}
          >
            <SkillProficiencyCircle
              onClick={() => toggleProficiency(SkillProficiency.Expert)}
              shadow={highlightedProficiency === SkillProficiency.Expert}
              size={5}
              proficiency={SkillProficiency.Expert}
            />
          </Tooltip>
          <Tooltip
            text={"Advanced"}
            className={"bg-brand-beige-ecru font-bold text-brand-beige-light "}
          >
            <SkillProficiencyCircle
              onClick={() => toggleProficiency(SkillProficiency.Advanced)}
              shadow={highlightedProficiency === SkillProficiency.Advanced}
              size={5}
              proficiency={SkillProficiency.Advanced}
            />
          </Tooltip>
          <Tooltip
            text={"Intermediate"}
            className={"bg-green-300 font-bold text-brand-beige-light "}
          >
            <SkillProficiencyCircle
              onClick={() => toggleProficiency(SkillProficiency.Intermediate)}
              shadow={highlightedProficiency === SkillProficiency.Intermediate}
              size={5}
              proficiency={SkillProficiency.Intermediate}
            />
          </Tooltip>
          <Tooltip
            text={"Beginner"}
            className={"bg-brand-blue font-bold text-brand-beige-light "}
          >
            <SkillProficiencyCircle
              onClick={() => toggleProficiency(SkillProficiency.Beginner)}
              shadow={highlightedProficiency === SkillProficiency.Beginner}
              size={5}
              proficiency={SkillProficiency.Beginner}
            />
          </Tooltip>
        </div>
        <button
          onClick={sortByProficiency}
          className={"text-sm pt-2 underline text-brand-blue font-bold"}
        >
          sort by proficiency
        </button>
      </div>

      <div className="mt-12">
        <SkillGrid
          highlightedProficiency={highlightedProficiency}
          skills={skills}
        />
      </div>
    </>
  );
}
