import { classList } from "@/utils";
import { SkillProficiency } from "@/utils/types";

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
  size?: 2 | 5 | 8;
  shadow?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={classList(
        "rounded-full flex justify-center items-center transition 0.2s ease-in-out",
        {
          [getProficiencyColor(proficiency)]: true,
          "w-2 h-2": size === 2,
          "shadow-brand-1": !!shadow && size === 2,
          "w-5 h-5": size === 5,
          "shadow-brand-xs": !!shadow && size >= 5,
          "w-8 h-8": size === 8,
        }
      )}
    ></div>
  );
}
