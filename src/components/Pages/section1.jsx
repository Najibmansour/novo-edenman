import React from "react";
import Hero from "../configedUi/Hero";
import HeroTest from "../configedUi/herotest";
const Section1 = (props) => {
  return (
    <section
      className="flex h-screen items-center justify-center  lg:h-screen lg:items-center "
      {...props}
    >
      <div className="">
        {/* <Hero className="" /> */}
        <HeroTest></HeroTest>
      </div>
    </section>
  );
};

export default Section1;
