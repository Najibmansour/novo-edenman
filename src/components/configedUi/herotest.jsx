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
        <div className="  grid grid-cols-1 grid-rows-1 lg:ml-[7%] lg:w-[90%] lg:grid-cols-2 lg:grid-rows-1  ">
          <div className=" row-span-2  flex items-center justify-center  lg:row-span-3 ">
            <div className="w-[85%] py-4 text-white lg:w-full ">
              <div>
                <div className="flex flex-col ">
                  <h2 className=" text-center text-3xl lg:text-left lg:text-7xl">
                    <TextLogo className="lg:w-[100%] " />
                  </h2>
                  <h4 className="text-sm font-bold  lg:text-xl ">
                    Move in Comfort
                  </h4>
                </div>
                <div>
                  <Logo
                    className="w-[90%] scale-[70%] text-white lg:hidden"
                    color="#f5f5f588"
                  />
                </div>
                <p className="text-md my-2 text-center  text-gray-100 lg:mt-5 lg:text-left lg:text-lg">
                  Elevate your experience with{" "}
                  <b className="text-gray-50">luxury</b> and{" "}
                  <b className="text-gray-50">comfort</b> by trying{" "}
                  <b className="text-gray-50"> Edenmen</b> sports underwear.
                  Meticulously crafted in{" "}
                  <b className="text-gray-50">Lebanon</b> from pure cotton, to
                  make you <b className="text-gray-50">“Move in comfort”</b>.
                  what are you waiting for?{" "}
                  <Link href="/#contact" className="underline">
                    Contact us now!
                  </Link>
                </p>
                <div className="flex justify-center lg:justify-start lg:pl-5 ">
                  <Link
                    href="https://novo-concepts.com/"
                    className="custom-button-anim rounded-full bg-white px-10 py-3 text-sm font-extrabold text-amber-900  lg:mt-5 lg:px-10 lg:py-3 lg:text-lg lg:text-blue-950 "
                  >
                    SPLASH
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Logo className="w-full scale-[65%]" color="#F5F5F5cd"></Logo>
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
