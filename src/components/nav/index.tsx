import { GitHub } from "react-feather";
import Button from "../button";

export default function Nav() {
  return (
    <nav className="hidden md:flex justify-between md:w-3/4 md:mx-auto  pt-12 text-2xl text-brand-blue ">
      <div className="flex space-x-12">
        <a className="hover:underline font-semibold" href={"#about"}>
          about
        </a>
        <a className="hover:underline font-semibold" href={"#projects"}>
          projects
        </a>
        <a className="hover:underline font-semibold" href={"#contact"}>
          contact
        </a>
      </div>
      <div className="flex space-x-5 items-center">
        <a
          className="hover:underline font-semibold"
          href={"/assets/pdf/resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>
        <a
          href="https://github.com/taherjerbi/portfolio-website"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            fontSize="text-sm"
            className="rounded-full !text-brand-blue"
            bg="beige"
            px="px-3"
            py="py-3"
            flat
            hoverShadow
            shadow="1"
          >
            <GitHub className="w-6 h-6 stroke-2" />
          </Button>
        </a>
      </div>
    </nav>
  );
}
