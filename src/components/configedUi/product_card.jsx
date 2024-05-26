import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ProductCard = ({
  title,
  description,
  fabric,
  wash,
  variants,
  types,
  images,
}) => {
  return (
    <div className="w-[45vw]  rounded-lg bg-white shadow-lg lg:w-[300px]">
      <div className="relative">
        <Image
          alt="Product Image"
          className="aspect-square rounded-t-lg object-cover"
          height={300}
          src={images[0]}
          width={300}
        />
        {/* <div className="absolute right-4 top-4 flex gap-2">
          <div className="rounded-full bg-gray-900 px-2 py-1 text-xs font-medium text-white">
            New
          </div>
          <div className="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
            Sale
          </div>
        </div> */}
      </div>
      <div className="p-3">
        <h3 className="mb-2 font-bold lg:text-lg">{title}</h3>
        <p className="mb-4 text-xs  leading-4 text-gray-500 lg:text-sm">
          {description}
        </p>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-bold lg:text-2xl">$49.99</span>
          <Button size="sm " className="px-2 py-1 text-xs">
            Buy
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[#000000]" />
          <div className="h-6 w-6 rounded-full bg-[#ffffff]" />
          <div className="h-6 w-6 rounded-full bg-[#0000ff]" />
          <div className="h-6 w-6 rounded-full bg-[#ff00ff]" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
