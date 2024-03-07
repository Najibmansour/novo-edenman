import React from "react";
import Hero from "../configedUi/Hero";
const Section1 = (props) => {
  return (
    <section
      className="mt-10 flex h-[85svh] w-[100svw] items-center justify-center lg:h-[70svh] "
      {...props}
    >
      <Hero />
    </section>
  );
};

export default Section1;
