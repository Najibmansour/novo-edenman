import React from "react";
import Hero from "../Hero";
const Page1 = (props) => {
  return (
    <section
      className=" w-[100svw] lg:h-[70svh] h-[85svh] flex justify-center items-center "
      {...props}
    >
      <Hero />
    </section>
  );
};

export default Page1;
