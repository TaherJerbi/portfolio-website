import WindowCard from "@/components/window-card";
import { GitHub, Linkedin, Mail, Phone } from "react-feather";

function Contact() {
  return (
    <div className="min-h-screen px-10 lg:px-40 flex items-stretch py-20 justify-center bg-brand-beige-ecru overflow-hidden flex-wrap xl:flex-nowrap">
      <div className="lg:mr-20 mb-20 xl:mb-0">
        <div>
          <h1 className="text-6xl font-bold">Let&apos;s Talk!</h1>
          <p className="text-2xl">Ask me anything or just say hi...</p>
        </div>
        <div className="mt-20 space-y-10 text-2xl font-bold">
          <a className="flex items-center space-x-5">
            <Mail />
            <p>jerbi.taherr@gmail.com</p>
          </a>
          <a
            href="https://github.com/taherjerbi"
            target={"_blank"}
            rel="noreferrer"
            className="flex items-center space-x-5"
          >
            <GitHub /> <p className="underline">github.com/taherjerbi</p>
          </a>
          <a
            href="https://linkedin.com/in/taherjerbi"
            target={"_blank"}
            rel="noreferrer"
            className="flex items-center space-x-5"
          >
            <Linkedin /> <p className="underline">linkedin.com/in/taherjerbi</p>
          </a>
          <div className="flex items-center space-x-5">
            <Phone /> <p>+216 53 155 029</p>
          </div>
        </div>
      </div>
      {/* contact form */}
      <div id="contact" className="w-full lg:w-auto flex-grow">
        <WindowCard title="SEND EMAIL" variant="dark">
          <div className="py-10 px-5 ">
            <div className="mb-5 w-full border-brand-blue-dark border-4 px-2 py-3 text-lg sm:text-lg md:text-xl lg:text-2xl font-bold">
              To : jerbi.taherr@gmail.com
            </div>
            <div className="focus:border-brand-blue mb-10 w-full border-brand-blue-dark border-4 px-2 py-3 text-lg sm:text-lg md:text-xl lg:text-2xl font-bold">
              <div className="flex flex-wrap">
                <p>From : </p>
                <input
                  placeholder="Email or Phone"
                  className="ml-1 focus:outline-none text-brand-blue-dark w-full lg:w-auto lg:flex-grow"
                />
              </div>
            </div>
            <div className="w-full border-brand-blue-dark border-4 p-4 text-xl sm:text-lg md:text-xl lg:text-2xl font-bold">
              <div className="flex flex-wrap">
                <p>Hello, my name is :</p>
                <input
                  placeholder="_________________"
                  className="ml-1 focus:outline-none text-brand-blue-dark w-full lg:flex-grow lg:w-auto"
                />
              </div>
              <div className="flex flex-wrap items-center mt-5">
                <p>I would like to</p>
                <select
                  defaultValue={"client"}
                  className="ml-1 border-brand-blue-dark border-4 px-2 py-1 lg:w-fit w-full text-sm sm:text-lg md:text-xl lg:text-2xl"
                >
                  <option value={"other"} className={"text-xl"}>
                    solicit your services
                  </option>
                  <option value={"chat"} className={"text-xl"}>
                    talk about tech
                  </option>
                  <option value={"meet"} className={"text-xl"}>
                    schedule a meeting
                  </option>
                  <option value={"other"} className={"text-xl"}>
                    tell you something
                  </option>
                </select>
              </div>
              <textarea
                className="mt-5 h-[150px] w-full focus:outline-none text-brand-blue-dark leading-relaxed"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center mt-5 text-xl font-bold">
              <button className="px-8 py-4 text-brand-beige-light bg-brand-blue-dark hover:shadow-brand-sm transition-shadow duration-200 ease-in-out">
                Send
              </button>
            </div>
          </div>
        </WindowCard>
      </div>
    </div>
  );
}

export default Contact;
