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

export type Project = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  sections: {
    title: string;
    description: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  desktopImageUrl?: string;
  mobileImageUrl?: string;
};
