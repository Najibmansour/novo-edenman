import React from "react";
import BlobsContainer from "../pages components/BlobsContainer";
import Blob from "../pages components/Blob";
const Page1 = (props) => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <BlobsContainer />
      {/* <Blob variant={4} color="#A97C50" className="w-96 bg-blue-800" /> */}
    </div>
  );
};

export default Page1;
