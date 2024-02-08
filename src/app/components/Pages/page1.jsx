import React from "react";
import BlobsContainer from "../Blobs/BlobsContainer";
import Blob from "../Blobs/Blob";
import Flanel from "../svgs/flanel";
import Boxer from "../svgs/boxer";
const Page1 = (props) => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center ">
        <div className="absolute z-10 flex justify-center">
          <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-2 lg:grid-rows-2 w-[90%]">
            <div className="text-white mt-3 flex items-center px-8 row-span-2 lg:row-span-2 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl">
                  <span className="block leading-7 ">Dive into</span>
                  <span className="block leading-7 font-extrabold ">
                    Aqua Chic
                  </span>
                </h2>
                <p className="text-xs lg:my-10 my-2 ">
                  It’s 2024 Spring & Summer collection, available now! include
                  comfort, design,...
                </p>
                <div className="flex justify-center my-2">
                  <button className="rounded-full py-2 px-6 bg-white text-gray-600 text-xs font-extrabold text-opacity-65 mt-2">
                    SPLASH
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:row-span-1 row-span-2  flex justify-center h-full order-1 lg:order-2">
              <Flanel className="lg:w-48 w-28 " />
            </div>
            <div className="lg:row-span-1 row-span-1 mt-5 flex justify-center items-start lg:pt-10 order-3 lg:order-3">
              <Boxer className=" lg:w-48 w-28 " />
            </div>
          </div>
        </div>
        <BlobsContainer className="z-0"></BlobsContainer>
      </div>
    </div>
  );
};

export default Page1;
