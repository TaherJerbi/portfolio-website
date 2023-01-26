import Button from "@/components/button";
import Image from "next/image";

export default function Presentation() {
  return (
    <div className="relative flex md:mt-40 mt-12 justify-center px-10">
      <div className="grid grid-cols-12 gap-4 md:gap-16 w-full md:w-3/4">
        <div className="md:col-span-4 col-span-12 w-40 md:w-fit">
          <Image
            className="shadow-brand-md border-brand-blue-dark border-4 rounded-xl"
            src={"/assets/images/me.jpeg"}
            width={300}
            height={300}
            alt={""}
          />
        </div>
        <div className="md:col-span-6 col-span-12 max-w-md space-y-6 flex flex-col justify-between">
          <div>
            <p className="pb-5 font-bold text-3xl">Taher J.</p>
            <p className="text-xl leading-10">
              My name is Taher Jerbi. <br />I am a passionate web developer{" "}
              <br />
              from Tunis, Tunisia 🇹🇳.
            </p>
          </div>
          <div>
            <Button variant="blue" fontSize="text-2xl">
              see my work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
