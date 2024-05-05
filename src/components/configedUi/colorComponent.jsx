import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProductColorComponent = ({ variants, images }) => {
  return (
    <>
      <Image
        className=" aspect-square rounded-2xl bg-gray-500 bg-opacity-30 shadow-xl"
        fill
        sizes="500px"
        // objectFit="contain"
        src={images[0]}
        alt="test"
      />
      <TooltipProvider delayDuration={0}>
        <div className="absolute bottom-0 right-5 z-50 flex translate-y-[50%] flex-row space-x-1.5">
          {variants.map(({ color, title }, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Image
                  className="rounded-full border-4 border-white"
                  width={56}
                  height={56}
                  src={color}
                  alt={`color-${index}`}
                ></Image>
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </>
  );
};

export default ProductColorComponent;
