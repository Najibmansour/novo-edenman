import React from "react";
import Flanel from "../svgs/flanel";
import Boxer from "../svgs/boxer";
import BlobsContainer from "../Blobs/BlobsContainer";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = (props) => {
  return (
    <div className={cn("relative flex  items-center justify-center ", props)}>
      <div className="absolute z-20 flex justify-center ">
        <div className="grid  w-[70%] grid-cols-1 grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 ">
          <div className="order-2 row-span-2  flex items-center justify-center lg:order-1 lg:row-span-3 ">
            <div className="w-[85%] text-white lg:w-[100%] ">
              <div>
                <div className="flex flex-col ">
                  <h2 className=" text-center text-3xl lg:text-left lg:text-7xl">
                    <span className="block ">Dive into</span>
                    <span className="block  font-extrabold ">Aqua Chic</span>
                  </h2>
                </div>

                <p className="my-2 text-center text-xs lg:mt-5 lg:text-left lg:text-lg">
                  It’s 2024 Spring & Summer collection, available now! include
                  comfort, design,...
                </p>
                <div className="flex justify-center lg:justify-start lg:pl-5 ">
                  <Link
                    href="https://novo-concepts.com/"
                    className="custom-button-anim rounded-full bg-white px-10 py-3 text-sm font-extrabold text-gray-600 text-opacity-65  lg:mt-5 lg:px-10 lg:py-3 lg:text-lg "
                  >
                    SPLASH
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 row-span-2 flex items-end justify-center pb-5 lg:order-2 lg:row-span-2 lg:justify-end">
            <Flanel className="w-[75%] lg:w-[50%]" />
          </div>
          <div className="order-3 row-span-1 flex items-start justify-center pt-5 lg:order-3 lg:row-span-1 lg:items-start lg:justify-end">
            <Boxer className=" w-[75%] lg:w-[50%]" />
          </div>
        </div>
      </div>
      <BlobsContainer className="z-0"></BlobsContainer>
    </div>
  );
};

export default Hero;
