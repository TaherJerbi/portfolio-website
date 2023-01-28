import Upwork from "@/components/icons/upwork";
import WindowCard from "@/components/window-card";
import { GitHub, Linkedin, Mail, Phone } from "react-feather";
import ContactForm from "./form";

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
            <Mail className="w-7 h-7" />
            <p>jerbi.taherr@gmail.com</p>
          </a>
          <a
            href="https://github.com/taherjerbi"
            target={"_blank"}
            rel="noreferrer"
            className="flex items-center space-x-5"
          >
            <GitHub className="w-7 h-7" />{" "}
            <p className="underline">github.com/taherjerbi</p>
          </a>
          <a
            href="https://linkedin.com/in/taherjerbi"
            target={"_blank"}
            rel="noreferrer"
            className="flex items-center space-x-5"
          >
            <Linkedin className="w-7 h-7" />{" "}
            <p className="underline">linkedin.com/in/taherjerbi</p>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01406a12eb79ae2263"
            target={"_blank"}
            rel="noreferrer"
            className="flex items-center space-x-5"
          >
            <Upwork className="w-7 h-7" />
            <p className="underline">Upwork Profile</p>
          </a>
          <div className="flex items-center space-x-5">
            <Phone className="w-7 h-7" /> <p>+216 53 155 029</p>
          </div>
        </div>
      </div>
      {/* contact form */}
      <ContactForm />
    </div>
  );
}

export default Contact;
