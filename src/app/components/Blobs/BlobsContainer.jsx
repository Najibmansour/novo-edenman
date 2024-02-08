import React from "react";
import Blob from "./Blob";

const BlobsContainer = (props) => {
  return (
    <div {...props}>
      <div className="absolute ">
        <div className="flex absolute ">{props.children}</div>
      </div>
      <div className="w-[calc(100vw*0.8)] lg:w-[calc(100vw*0.7)] h-[calc(100vh*0.75)] lg:h-[calc(100vh*0.7)]  lg:rounded-[5rem] rounded-[2.5rem]  overflow-hidden relative">
        <div className="filter blur-[200px] grayscale-[0.4]">
          <Blob
            variant={3}
            color="#A97C50"
            className="w-[80rem] shape1 absolute -left-[calc(100vh-(40rem/2))]  top-[calc(100vh-(80rem/2))] "
          />
          <Blob
            variant={4}
            color="#15375A"
            className="w-[70rem] shape2 absolute -right-[calc(40rem/2)] top-[calc(100vh-(80rem/2))] "
          />
          <Blob
            variant={2}
            color="#A97C50"
            className="w-[80rem] shape3 absolute -right-[calc(40rem/2)] top-[calc(0vh-80rem/2)]"
          />

          <Blob
            variant={3}
            color="#15375A"
            className="w-[70rem] shape4 absolute -left-[calc(40rem/2)] top-[calc(0vh-80rem/2)]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlobsContainer;
