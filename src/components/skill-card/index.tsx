import { Skill } from "@/utils/types";
import { SkillProficiencyCircle } from "./skill-proficiency-circle";

type SkillCardProps = {
  skill: Skill;
  onClick?: () => void;
};

export default function SkillCard({ skill, onClick }: SkillCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative w-fit mx-3 my-2 cursor-pointer border-brand-blue-dark border-4 shadow-brand-sm rounded-xl bg-brand-beige-light hover:shadow-brand-md transition-shadow 0.2s ease-in-out active:shadow-brand-sm"
    >
      <div className="absolute right-2 top-2">
        <SkillProficiencyCircle proficiency={skill.proficiency} />
      </div>
      <p className="text-sm font-bold text-brand-blue px-5 py-2 transition 0.5s ease-in-out">
        {skill.title}
      </p>
    </div>
  );
}
