import Button from "@/components/button";
import Image from "next/image";
export default function Presentation() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center">
      <div>
        <Image
          className="shadow-brand-md border-brand-blue-dark border-4 rounded-xl my-10 md:mr-10 md:my-0"
          src={"/assets/images/me.jpeg"}
          width={300}
          height={300}
          alt={""}
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="pb-5 font-bold text-5xl">Taher J.</p>
        <p className="text-xl leading-10">
          My name is Taher Jerbi. <br />I am a passionate web developer <br />
          from Tunis, Tunisia 🇹🇳.
        </p>
        <div className="flex justify-center md:justify-start pt-10">
          <a href="#projects">
            <Button bg="blue" shadow="md" hoverShadow>
              see my work
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
