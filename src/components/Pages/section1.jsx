import React from "react";
import Hero from "../configedUi/Hero";
const Section1 = (props) => {
  return (
    <section
      className="flex h-screen items-center justify-center  lg:h-screen lg:items-center "
      {...props}
    >
      <div className="mt-12">
        <Hero className="" />
      </div>
    </section>
  );
};

export default Section1;
