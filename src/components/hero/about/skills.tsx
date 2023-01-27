"use client";
import {
  Skill,
  SkillProficiency,
  SkillProficiencyCircle,
} from "@/components/skill-card";
import SkillGrid from "@/components/skill-grid";
import { Tooltip } from "@/components/tooltip";
import { useState } from "react";
import { BarChart } from "react-feather";

const SKILLS: Skill[] = [
  {
    title: "React",
    proficiency: SkillProficiency.Advanced,
    id: "react",
  },
  {
    title: "Typescript",
    proficiency: SkillProficiency.Advanced,
    id: "typescript",
  },
  {
    title: "Javascript",
    proficiency: SkillProficiency.Expert,
    id: "javascript",
  },
  {
    title: "Next.js",
    proficiency: SkillProficiency.Advanced,
    id: "nextjs",
  },
  {
    title: "Node.js",
    proficiency: SkillProficiency.Advanced,
    id: "nodejs",
  },
  {
    title: "Express.js",
    proficiency: SkillProficiency.Intermediate,
    id: "expressjs",
  },
  {
    title: "PostgreSQL",
    proficiency: SkillProficiency.Intermediate,
    id: "postgresql",
  },
  {
    title: "GraphQL",
    proficiency: SkillProficiency.Advanced,
    id: "graphql",
  },
  {
    title: "Rust",
    proficiency: SkillProficiency.Beginner,
    id: "rust",
  },
];
export default function Skills() {
  const [skills, setSkills] = useState(SKILLS);
  const [highlightedProficiency, setHighlightedProficiency] = useState<
    SkillProficiency | undefined
  >(undefined);

  const sortByProficiency = () => {
    const newSkills = [...skills].sort((a, b) =>
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
    );
    setSkills(newSkills);
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
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-2 pr-4 items-center">
          <p className="text-3xl font-bold text-brand-blue">Skills</p>
          <Tooltip
            text="Sort"
            className="bg-brand-blue text-brand-beige-light font-bold"
          >
            <BarChart
              onClick={sortByProficiency}
              className="text-brand-blue stroke-[3px] cursor-pointer"
            />
          </Tooltip>
        </div>
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

      <div className="flex flex-wrap">
        <SkillGrid
          highlightedProficiency={highlightedProficiency}
          skills={skills}
          setSkills={setSkills}
        />
      </div>
    </>
  );
}
