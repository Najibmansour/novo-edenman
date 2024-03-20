import React from "react";
import Hero from "../configedUi/Hero";
import BlobsContainer from "../Blobs/BlobsContainer";
import TextLogo from "../svgs/TextLogo";

const Footer = (props) => {
  return (
    <section
      className="flex h-screen w-screen items-center justify-center "
      {...props}
    >
      <div className="relative flex items-center justify-center ">
        <div className="absolute z-10 flex justify-center p-3 lg:p-0">
          <div className="flex h-full flex-col gap-4 lg:w-[90%] lg:flex-row">
            <div className="flex flex-col items-center justify-start gap-4 lg:w-[80%] lg:items-start lg:gap-7 ">
              <TextLogo className="w-full px-3 lg:w-[23vw] lg:p-0" />
              <p className="w-[85%] text-sm leading-4 tracking-wide text-gray-200 lg:w-[65%] lg:text-lg lg:leading-6">
                <span className="font-bold">About Us:</span> Edenmen is a
                Lebanese brand specializing in men’s underwear, designed to
                fulfill diverse needs with a variety of preferences in terms of
                styles, features, and materials, all under a commitment to
                maintaining high quality. Our product diversity covers briefs,
                boxers, trunks, bovver briefs, pouches and undershirts; Our
                categories cater to various aspects of men’s interests, offering
                special underwear for everyday wear, sports activities or
                hobbies. The selection varies based on the specific activity
                ranging from swimming to cold-weather hunting.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  tracking-wide lg:w-[20%]">
              <div className="text-md flex text-gray-100 lg:flex-col lg:gap-5 lg:text-xl">
                <div>
                  <h4 className="font-bold tracking-wide">BRAND</h4>
                  <p className="hover-underline-animation">Who Are We?</p>
                  <p className="hover-underline-animation">Our Mission</p>
                </div>
                <h4 className="font-bold tracking-wide">GO TO NOVO</h4>
              </div>
            </div>
          </div>
        </div>
        <BlobsContainer className="z-0"></BlobsContainer>
      </div>
    </section>
  );
};

export default Footer;
