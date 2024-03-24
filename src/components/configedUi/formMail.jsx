"use client";
import { cn } from "@/lib/utils";
import { React, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const FormMail = () => {
  const text =
    "py-2 px-3 lg:text-xl text-md text-gray-200 placeholder:text-gray-200 placeholder:text-opecity-90  lg:py-3 lg:px-6 w-full rounded-lg bg-opacity-20 border-white border-[1px] border-opacity-30 bg-white";

  const form = useRef();

  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [desc, setDesc] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="absolute bottom-0 z-50 flex flex-col p-5 lg:w-[85%] lg:h-[75%] h-min"
    >
      <div className="lg:flex-row h-min flex-col gap-2 lg:gap-7 flex">
      <div className="flex w-full flex-wrap items-start h-min gap-2 lg:gap-7 ">
        <div className="min-w-full relative h-24 lg:h-28">
          
          <label className=" text-md text-white lg:text-xl tracking-wide">
            NAME:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className="min-w-full relative h-24 lg:h-28">
          
          <label className=" text-md text-white lg:text-xl tracking-wide">
            EMAIL:
          </label>
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            id="mail"
            className={cn(text, "")}
            placeholder="johndoe@email.com"
            {...register("from_email", {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Not a valid email",
              },
              required: "Email is required",
            })}
          />
          {errors.from_email?.message && (
            <span className=" bottom-0 -mt-6 ml-1 text-sm text-red-500 contrast-150 lg:ml-5">
              {errors.from_email?.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col relative ">
        <div>
          <label className=" text-md text-white lg:text-xl tracking-wide">
            MESSAGE:
          </label>
          <div>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="comment"
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
              <span className=" -bottom-4 left-0 -mt-6 ml-1 text-sm text-red-500 contrast-150 lg:ml-5">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>

        
      </div>
      </div>
      <div className="mt-6 flex flex-row items-center justify-center lg:mr-10 lg:justify-end">
          <button className="bg-primary-700 rounded-full bg-white px-6 py-3 tracking-wider text-center text-sm font-semibold sm:w-fit lg:text-lg ">
            Submit
          </button>
        </div>
    </form>
  );
};

export default FormMail;
