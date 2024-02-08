import React from "react";
import BlobsContainer from "../Blobs/BlobsContainer";
import Blob from "../Blobs/Blob";
import Flanel from "../svgs/flanel";
import Boxer from "../svgs/boxer";
const Page1 = (props) => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center ">
        <div className="absolute z-10">
          <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-5 ">
            <div className="text-white px-10 row-span-1 lg:row-span-2 order-2 lg:order-1  bg-red-200 ">
              <h2 className="text-3xl ">
                <span className="block leading-7 ">Dive into</span>
                <span className="block leading-7 font-extrabold ">
                  {" "}
                  Aqua Chic
                </span>
              </h2>
              <p className="text-xs my-3 bg-yellow-300">
                It’s 2024 Spring & Summer collection, available now! include
                comfort, design,...
              </p>
              <div className="flex justify-center">
                <button className="btn rounded-full w-[55%]"> SPLASH</button>
              </div>
            </div>
            <div className="row-span-1 flex justify-center h-min order-1 lg:order-2">
              <Flanel className=" lg:w-56 w-28 bg-blue-600" />
            </div>
            <div className="row-span-1 flex justify-center h-min order-3 lg:order-3">
              <Boxer className=" lg:w-56 w-28 bg-green-600 " />
            </div>
          </div>
        </div>
        <BlobsContainer className="z-0"></BlobsContainer>
      </div>
    </div>
  );
};

export default Page1;
