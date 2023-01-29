"use client";

import WindowCard from "@/components/window-card";
import { classList } from "@/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { ToastContainer, toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SendButton({
  disabled,
  onClick,
}: {
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className="px-8 py-4 text-brand-beige-light bg-brand-blue-dark hover:shadow-brand-sm transition-shadow duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Send
    </button>
  );
}

const validationSchema = yup.object().shape({
  from: yup.string().required(),
  name: yup.string().required(),
  message: yup.string().required(),
  purpose: yup.string().required(),
});

type FormData = {
  from: string;
  name: string;
  message: string;
  purpose: string;
};

export function successToast({
  position,
  message,
}: {
  position: ToastPosition;
  message: string;
}) {
  return toast.success(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className:
      "bg-brand-beige-light font-bold text-xl shadow-brand-md text-brand-marron-dark",
    progressClassName: "bg-green-300",
    icon: "👍",
  });
}

export function errorToast({
  position,
  message,
}: {
  position: ToastPosition;
  message: string;
}) {
  return toast.error(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className:
      "font-bold text-xl text-brand-beige-light shadow-brand-md bg-brand-red",
    progressClassName: "bg-red-100",
    icon: "😭",
  });
}

function ContactForm() {
  const { register, formState, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/contact", data);
      reset();
      successToast({
        position: "top-right",
        message: "Message sent!",
      });
    } catch (e) {
      errorToast({
        position: "top-right",
        message: "Something went wrong",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="contact" className="w-full lg:w-auto flex-grow">
        <ToastContainer />
        <WindowCard title="SEND EMAIL" variant="dark">
          <div className="py-10 px-5 ">
            <div className="mb-5 w-full border-brand-blue-dark border-4 px-2 py-3 text-lg sm:text-lg md:text-xl lg:text-2xl font-bold">
              To : jerbi.taherr@gmail.com
            </div>
            <div className="focus:border-brand-blue mb-10 w-full border-brand-blue-dark border-4 px-2 py-3 text-lg sm:text-lg md:text-xl lg:text-2xl font-bold">
              <div className="flex flex-wrap">
                <p>From : </p>
                <input
                  {...register("from")}
                  placeholder="Email or Phone"
                  className="bg-transparent ml-1 focus:outline-none text-brand-blue-dark w-full lg:w-auto lg:flex-grow"
                />
              </div>
            </div>
            <div className="w-full border-brand-blue-dark border-4 p-4 text-xl sm:text-lg md:text-xl lg:text-2xl font-bold">
              <div className="flex flex-wrap">
                <p>Hello, my name is :</p>
                <input
                  {...register("name")}
                  placeholder="_________________________"
                  className="bg-transparent ml-1 focus:outline-none text-brand-blue-dark w-full lg:w-auto lg:flex-grow"
                />
              </div>
              <div className="flex flex-wrap items-center mt-5">
                <p>I would like to</p>
                <select
                  {...register("purpose")}
                  defaultValue={"client"}
                  className="bg-transparent ml-1 border-brand-blue-dark border-4 px-2 py-1 lg:w-fit w-full text-sm sm:text-lg md:text-xl lg:text-2xl"
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
                {...register("message")}
                className="bg-transparent mt-5 h-[150px] w-full focus:outline-none text-brand-blue-dark leading-relaxed"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center mt-5 text-xl font-bold">
              <SendButton disabled={!formState.isValid} />
            </div>
          </div>
        </WindowCard>
      </div>
    </form>
  );
}

export default ContactForm;
