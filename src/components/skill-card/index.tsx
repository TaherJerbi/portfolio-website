import { classList } from "@/utils";

export enum SkillProficiency {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
  Expert = 4,
}
export type Skill = {
  title: string;
  proficiency?: SkillProficiency;
  id: string;
};
type SkillCardProps = {
  skill: Skill;
  onClick?: () => void;
};

export function getProficiencyColor(proficiency?: SkillProficiency) {
  switch (proficiency) {
    case SkillProficiency.Beginner:
      return "bg-brand-blue";
    case SkillProficiency.Intermediate:
      return "bg-green-200";
    case SkillProficiency.Advanced:
      return "bg-brand-beige-ecru";
    case SkillProficiency.Expert:
      return "bg-brand-red";
    default:
      return "";
  }
}

export function SkillProficiencyCircle({
  proficiency,
  size = 2,
  shadow,
  onClick,
}: {
  proficiency?: SkillProficiency;
  size?: 2 | 5;
  shadow?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={classList({
        "rounded-full flex justify-center items-center transition-shadow 0.2s ease-in-out":
          true,
        [getProficiencyColor(proficiency)]: true,
        "w-2 h-2": size === 2,
        "shadow-brand-1": !!shadow && size === 2,
        "w-5 h-5": size === 5,
        "shadow-brand-xs": !!shadow && size === 5,
      })}
    ></div>
  );
}

export default function SkillCard({ skill, onClick }: SkillCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative w-fit mx-3 my-3 cursor-pointer border-brand-blue-dark border-4 shadow-brand-sm rounded-xl bg-brand-beige-light hover:shadow-brand-md transition-shadow 0.2s ease-in-out active:shadow-brand-sm"
    >
      <div className="absolute right-2 top-2">
        <SkillProficiencyCircle proficiency={skill.proficiency} />
      </div>
      <p className="text-xl font-bold text-brand-blue px-5 py-2 transition 0.5s ease-in-out">
        {skill.title}
      </p>
    </div>
  );
}
