import clsx from "clsx";
import Image from "next/image";
import React from "react";

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
    titleColor = "text-4xl font-semibold text-primary lg:text-7xl";
    buttonColor =
      "mt-4 rounded-full bg-primary px-6 py-3 font-bold tracking-widest text-gray-100";
    badgeColor = "bg-primary";
  } else {
    titleColor = "text-4xl font-semibold text-secondary lg:text-7xl";
    buttonColor =
      "mt-4 rounded-full bg-secondary px-6 py-3 font-bold tracking-widest text-gray-100";
    badgeColor = "bg-secondary";
  }

  console.log(images);

  return (
    <section className="flex w-[100%] items-center justify-center lg:h-[100svh]">
      <div className="flex w-[90%] flex-col items-center gap-3 lg:w-[70%] lg:flex-row lg:items-start">
        <div className="w-[85%] ">
          <div className={titleColor}>{title}</div>
          <div className="mt-4 text-sm lg:text-lg">{description}</div>
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
            <Image
              className=" h-[80vw] w-[80vw] rounded-3xl bg-gray-500 bg-opacity-30 lg:h-[28vw] lg:w-[50vw]"
              width={500}
              height={500}
              src={images[0]}
              alt="test"
            />
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
