"use client";
import { sendForm } from "@/lib/api/sendform";
import { cn } from "@/lib/utils";
import { React, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const FormMail = () => {
  const text =
    "py-2 px-3 lg:text-xl text-md text-gray-200 placeholder:text-gray-200 placeholder:text-opecity-90  lg:py-3 lg:px-6 w-full rounded-lg bg-opacity-20 border-white border-[1px] border-opacity-30 bg-white";

  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (e["bot_fiedld"] == "") {
      sendForm(e)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          toast.success("Message sent successfully");
        })
        .catch(() => {
          toast.error("Message was not sent");
        });
    }
    //resets the form
    reset();
    //
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="absolute bottom-0 z-40 flex h-min flex-col p-5 lg:h-[75%] lg:w-[85%]"
    >
      <div className="flex h-min flex-col gap-5 lg:flex-row lg:gap-7">
        <div className="flex h-min w-full flex-wrap items-start gap-5 lg:gap-7 ">
          <div className="relative h-min min-w-full lg:h-28">
            <label className=" text-md tracking-wide text-white lg:text-xl">
              NAME:
            </label>
            <input
              type="text"
              id="name"
              className={cn(text, "")}
              placeholder="John Doe"
              {...register("from_name", {
                maxLength: {
                  value: 30,
                  message: "Must have at max 30 characters",
                },
                pattern: { value: /^[^\d]+$/, message: "Not a valid name" },
                required: "Name is required",
              })}
            />
            {errors.from_name?.message && (
              <span className=" bottom-0 -mt-6 ml-1 text-sm text-red-500 contrast-150 lg:ml-3">
                {errors.from_name.message}
              </span>
            )}
          </div>
          <div className="relative h-min min-w-full lg:h-28">
            <label className=" text-md tracking-wide text-white lg:text-xl">
              PHONE:
            </label>
            <input
              id="mail"
              className={cn(text, "")}
              placeholder="+961 99 999 999"
              {...register("from_phone", {
                pattern: {
                  value: /[0-9]/,
                  message: "Not a valid phone number",
                },
                required: "phone number is required",
              })}
            />
            {errors.from_phone?.message && (
              <span className=" bottom-0 -mt-6 ml-1 text-sm text-red-500 contrast-150 lg:ml-5">
                {errors.from_phone?.message}
              </span>
            )}
          </div>
        </div>

        <div className="relative flex w-full flex-col ">
          <div>
            <label className=" text-md pl-1 tracking-wide text-white lg:text-xl">
              GIVE US YOUR FEEDBACK:
            </label>
            <div>
              <textarea
                id="message"
                rows="6"
                className={cn(text, "")}
                placeholder="Message ..."
                {...register("message", {
                  required: "Please enter your Message",
                  maxLength: {
                    value: 400,
                    message: "Cant be more than 400 characters long",
                  },
                })}
              />
              {errors.message?.message && (
                <span className=" -bottom-4 left-0 -mt-6 ml-1 text-xs text-red-500 contrast-150 lg:ml-5">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>
          <input
            name="bot-field"
            placeholder="do not fill this"
            type="hidden"
            {...register("bot_fiedld")}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-row items-center justify-center lg:mr-10 lg:justify-end">
        <button className="bg-primary-700 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold tracking-wider sm:w-fit lg:text-lg ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormMail;
