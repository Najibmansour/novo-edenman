import React from "react";
import Hero from "../Hero";
const Section1 = (props) => {
  return (
    <section
      className="flex h-[85svh] w-[100svw] items-center justify-center lg:h-[70svh] "
      {...props}
    >
      <Hero />
    </section>
  );
};

export default Section1;
