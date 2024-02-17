import clsx from "clsx";
import React from "react";

const ProductBox = ({ type, title, description }) => {
  let titleColor = "";
  let buttonColor = "";

  if (type === "primary") {
    titleColor = "text-4xl font-semibold text-primary lg:text-7xl";
    buttonColor =
      "mt-4 rounded-full bg-primary px-6 py-3 font-bold tracking-widest text-white";
  } else {
    titleColor = "text-4xl font-semibold text-secondary lg:text-7xl";
    buttonColor =
      "mt-4 rounded-full bg-secondary px-6 py-3 font-bold tracking-widest text-white";
  }

  return (
    <section className="flex w-[100%] items-center justify-center lg:h-[100svh]">
      <div className="flex w-[80%] flex-col items-center gap-3 lg:w-[70%] lg:flex-row">
        <div className="w-[85%] ">
          <div className={titleColor}>Under O & V Triple Circle</div>
          <div className="mt-4 text-sm lg:text-lg">
            Your basic top quality sleeveless undershirt O neck, this
            breathable, is made of 4-way ultra-stretch natural cotton to provide
            utmost flexibilty and comfort, with moisture-wicking properties,
            perfect for all day and every day wear.
          </div>
          <button className={clsx(`hidden lg:block`, buttonColor)}>
            DIVE MORE & SHOP
          </button>
        </div>
        <div className="">
          <div className=" h-[80vw] w-[80vw] rounded-3xl bg-gray-500 bg-opacity-30 lg:h-[30vw] lg:w-[30vw]"></div>
        </div>
        <button className={clsx(`lg:hidden`, buttonColor)}>
          DIVE MORE & SHOP
        </button>
      </div>
    </section>
  );
};

export default ProductBox;
