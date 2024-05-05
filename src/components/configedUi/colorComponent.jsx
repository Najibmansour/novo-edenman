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
    <div className="flex justify-center md:block">
      <Image
        className=" aspect-square rounded-2xl bg-gray-500 bg-opacity-30 shadow-xl"
        fill
        sizes="500px"
        // objectFit="contain"
        src={images[0]}
        alt="test"
      />
      <TooltipProvider delayDuration={0}>
        <div className="absolute bottom-0  z-50 flex translate-y-[50%] flex-row space-x-1.5 md:right-5">
          {variants.map(({ color, title }, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Image
                  className="h-[32px] w-[32px] rounded-full border-4 border-neutral-100 lg:h-[56px] lg:w-[56px]"
                  src={color}
                  alt={`color-${index}`}
                ></Image>
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default ProductColorComponent;
