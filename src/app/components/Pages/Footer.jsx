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
        <div className="absolute z-10 flex justify-center">
          <div className="grid h-[60vh] w-[60vw] grid-cols-4">
            <div className="col-span-3 flex flex-col items-start justify-start gap-7 ">
              <TextLogo className="w-[23vw]" />
              <p className="w-[65%] text-lg tracking-wide text-gray-200">
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
            <div className="flex flex-col items-end justify-center  tracking-wide">
              <div className="flex flex-col gap-3 text-xl text-gray-100">
                <p className="font-bold">Go to Novo</p>
                <div>
                  <p className="font-bold">BRAND</p>
                  <p>Who We Are?</p>
                  <p>Our Mission</p>
                </div>
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
