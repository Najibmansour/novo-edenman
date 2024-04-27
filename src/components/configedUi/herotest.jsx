import React from "react";
import Flanel from "../svgs/flanel";
import Boxer from "../svgs/boxer";
import BlobsContainer from "../Blobs/BlobsContainer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TextLogo from "../svgs/TextLogo";
import Logo from "../svgs/Logo";

const HeroTest = (props) => {
  return (
    <div className={cn("relative flex  items-center justify-center ", props)}>
      <div className="absolute z-20 flex justify-center ">
        <div className="grid grid-cols-1 grid-rows-1 lg:ml-[7%] lg:w-[90%] lg:grid-cols-2 lg:grid-rows-1  ">
          <div className=" row-span-2  flex items-center justify-center  lg:row-span-3 ">
            <div className="w-[85%] text-white lg:w-full ">
              <div>
                <div className="flex flex-col ">
                  <h2 className=" text-center text-3xl lg:text-left lg:text-7xl">
                    <TextLogo className=" lg:w-[100%]" />
                  </h2>
                </div>
                <div>
                  <Logo
                    className="scale-[75%] text-white lg:hidden"
                    color="#f5f5f555"
                  />
                </div>
                <p className="text-md my-2 text-center tracking-wide lg:mt-5 lg:text-left lg:text-lg">
                  Elevate your experience with luxury and comfort by trying
                  “Edenmen” sports underwear. meticulously crafted in Lebanon
                  from pure cotton, to make you “Move in comfort”. what are you
                  waiting for? Contact us now!
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
          <div className="hidden lg:block">
            <Logo className="w-full scale-[65%]" color="#F5F5F566"></Logo>
          </div>
        </div>
      </div>
      <BlobsContainer className="z-0"></BlobsContainer>
    </div>
  );
};

export default HeroTest;

{
  /* <div className="order-1 row-span-2 hidden  items-end justify-center pb-5 lg:order-2 lg:row-span-2 lg:flex lg:justify-end">
<Flanel className="w-[75%] lg:w-[45%]" />
</div>
<div className="order-3 row-span-1 hidden  items-start justify-center pt-5 lg:order-3 lg:row-span-1 lg:flex lg:items-start lg:justify-end">
<Boxer className=" w-[75%] lg:w-[45%]" />
</div> */
}
