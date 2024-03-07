import React from "react";
import Blob from "./Blob";

const BlobsContainer = (props) => {
  return (
    <div {...props}>
      <div className="absolute ">
        <div className="absolute flex ">{props.children}</div>
      </div>
      <div className="relative h-[calc(100vh*0.8)] w-[calc(100vw*0.8)] overflow-hidden  rounded-[2.5rem] lg:h-[calc(100vh*0.8)]  lg:w-[calc(100vw*0.8)] lg:rounded-[5rem]">
        <div className="blur-[200px] grayscale-[0.4] filter">
          <Blob
            variant={3}
            color="#A97C50"
            className="shape1 absolute -left-[calc(100vh-(40rem/2))] top-[calc(100vh-(80rem/2))]  w-[80rem] "
          />
          <Blob
            variant={4}
            color="#15375A"
            className="shape2 absolute -right-[calc(40rem/2)] top-[calc(100vh-(80rem/2))] w-[70rem] "
          />
          <Blob
            variant={2}
            color="#A97C50"
            className="shape3 absolute -right-[calc(40rem/2)] top-[calc(0vh-80rem/2)] w-[80rem]"
          />

          <Blob
            variant={3}
            color="#15375A"
            className="shape4 absolute -left-[calc(40rem/2)] top-[calc(0vh-80rem/2)] w-[70rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlobsContainer;
