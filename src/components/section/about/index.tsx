import WindowCard from "@/components/window-card";
import Skills from "./skills";
export default function About() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-fit w-screen bg-brand-green-light px-10 lg:px-40 xl:px-60 py-10 md:py-20"
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
                    I am a Junior Developer based in Tunisia. I have two years
                    of experience as a freelance web developer. I am also a
                    Software Engineering student at the National Institute of
                    Applied Science and Technology (INSAT) in Tunis. +
                    graduation date
                  </p>
                </div>
                <div className="space-y-5 mt-5">
                  <p className="text-2xl font-bold">What I Do</p>
                  <p className="text-lg leading-8">
                    I write code. A lot… My main focus right now is building web
                    applications with React and Typescript. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <button className="border-brand-blue-dark border-4 text-xl p-2 hover:shadow-brand-sm transition-shadow 0.2s ease-in-out">
                  see projects
                </button>
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
