import clsx from "clsx";
import Image from "next/image";
import React from "react";
import ProductColorComponent from "../configedUi/colorComponent";

const ProductBox = ({
  type,
  title,
  description,
  fabric,
  wash,
  variants,
  images,
}) => {
  let titleColor = "";
  let buttonColor = "";
  let badgeColor = "";

  if (type === "primary") {
    titleColor = "text-4xl font-semibold text-primary lg:text-5xl";
    buttonColor =
      "mt-4 rounded-full bg-primary px-6 py-3 font-bold tracking-widest text-gray-100";
    badgeColor = "bg-primary";
  } else {
    titleColor = "text-4xl font-semibold text-secondary lg:text-5xl";
    buttonColor =
      "mt-4 rounded-full bg-secondary px-6 py-3 font-bold tracking-widest text-gray-100";
    badgeColor = "bg-secondary";
  }

  // console.log(images);

  return (
    <section className="flex w-[100%] items-center justify-center  lg:items-start lg:py-20 ">
      <div className="flex w-[90%] flex-col items-start  gap-3 lg:w-[70%] lg:flex-row lg:items-start ">
        <div className="w-[85%] ">
          <div className={titleColor}>{title}</div>
          <div className="mt-4 text-sm lg:text-lg">{description}</div>
          {/* <div className="flex flex-row-reverse justify-end gap-2 lg:my-2">
            {images?.map((img, index) => (
              <Image
                key={index}
                className="aspect-square h-16 w-16 rounded-2xl bg-gray-500 bg-opacity-30 shadow-xl lg:h-24 lg:w-24"
                // objectFit="contain"
                src={img}
                alt={`img-${index}`}
              />
            ))}
          </div> */}
          <button
            className={clsx(
              `hover hidden text-lg antialiased lg:block`,
              buttonColor,
            )}
          >
            DIVE MORE & SHOP
          </button>
        </div>
        <div className="">
          {images ? (
            <div className="relative  h-[80vw]  w-[80vw] lg:h-[30vw] lg:w-[30vw]">
              <ProductColorComponent images={images} variants={variants} />
            </div>
          ) : (
            <div className=" h-[80vw] w-[80vw] rounded-3xl bg-gray-500 bg-opacity-30 lg:h-[30vw] lg:w-[30vw]" />
          )}
        </div>
        <button className={clsx(`text-sm antialiased lg:hidden`, buttonColor)}>
          DIVE MORE & SHOP
        </button>
      </div>
    </section>
  );
};

export default ProductBox;
