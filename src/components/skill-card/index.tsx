type SkillCardProps = {
  title: string;
};

export default function SkillCard({ title }: SkillCardProps) {
  return (
    <div className="w-fit  mx-3 my-3 cursor-pointer border-brand-blue-dark border-4 shadow-brand-sm rounded-xl bg-brand-beige-light hover:shadow-brand-md transition-shadow 0.2s ease-in-out">
      <p className="text-xl font-bold text-brand-blue px-5 py-2 transition 0.5s ease-in-out">
        {title}
      </p>
    </div>
  );
}
