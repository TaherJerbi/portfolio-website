import Button from "@/components/button";
import WindowCard from "@/components/window-card";
import Skills from "./skills";
export default function About() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-fit w-screen bg-brand-green-light px-10 lg:px-40 2xl:px-60 py-10 md:py-20"
      id="about"
    >
      <div className="w-full h-full col-start-1">
        <WindowCard title="About">
          <div className="px-10 py-10 h-full">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="space-y-5">
                  <p className="text-2xl font-bold">Who I Am</p>
                  <p className="text-lg leading-8">
                    I am a Software Engineering graduate from{" "}
                    <span className="text-red-600 font-bold">Tunisia 🇹🇳</span>{" "}
                    with 3 years of full-stack development experience. I am
                    skilled in designing, building, and deploying web
                    applications and am eager to make an impact while continuing
                    to grow as an engineer.
                  </p>
                </div>
                <div className="space-y-5 mt-5">
                  <p className="text-2xl font-bold">What I Do</p>
                  <p className="text-lg leading-8">
                    I solve problems for a living. I enjoy exploring various
                    areas of technology, including creative coding, AI, and
                    cybersecurity. I'm always excited to learn and apply new
                    skills to tackle challenges.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#projects"
                  // className="border-brand-blue-dark border-4 text-xl p-2 hover:shadow-brand-sm transition-shadow 0.2s ease-in-out font-bold"
                >
                  <Button
                    bg="beige"
                    border
                    flat
                    hoverShadow
                    shadow="xs"
                    borderWidth="4"
                    fontSize="text-xl"
                  >
                    see projects
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </WindowCard>
      </div>

      <div className="col-start-1 lg:col-start-2 row-start-1">
        <Skills />
      </div>
    </div>
  );
}
