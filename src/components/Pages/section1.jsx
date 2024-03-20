import React from "react";
import Hero from "../configedUi/Hero";
const Section1 = (props) => {
  return (
    <section
      className="flex h-[90svh] items-start justify-center lg:h-[87svh] lg:items-center "
      {...props}
    >
      <Hero />
    </section>
  );
};

export default Section1;
