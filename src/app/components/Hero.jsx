import React from "react";
import Flanel from "./svgs/flanel";
import Boxer from "./svgs/boxer";
import BlobsContainer from "./Blobs/BlobsContainer";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center ">
      <div className="absolute z-10 flex justify-center">
        <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 w-[70%] h-min ">
          <div className="flex items-center  justify-center row-span-2 lg:row-span-3 order-2 lg:order-1 ">
            <div className="text-white w-[85%] lg:w-[100%] ">
              <div>
                <div className="flex flex-col ">
                  <h2 className="text-3xl lg:text-6xl">
                    <span className="block ">Dive into</span>
                    <span className="block  font-extrabold ">Aqua Chic</span>
                  </h2>
                </div>

                <p className="text-xs lg:text-lg lg:mt-5 my-2 ">
                  It’s 2024 Spring & Summer collection, available now! include
                  comfort, design,...
                </p>
                <div className="flex justify-center lg:justify-start lg:pl-5">
                  <button className="rounded-full py-2 px-6 lg:py-3 lg:mt-5 lg:px-10 bg-white text-gray-600 text-xs lg:text-lg font-extrabold text-opacity-65 ">
                    SPLASH
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:row-span-2 row-span-2 flex justify-center lg:justify-end items-end pb-5 order-1 lg:order-2">
            <Flanel className="w-[70%] lg:w-[50%]" />
          </div>
          <div className="lg:row-span-1 row-span-1 flex justify-center lg:justify-end lg:items-start items-start pt-5 order-3 lg:order-3">
            <Boxer className=" w-[70%] lg:w-[50%]" />
          </div>
        </div>
      </div>
      <BlobsContainer className="z-0"></BlobsContainer>
    </div>
  );
};

export default Hero;
