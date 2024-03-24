import React from "react";
import Hero from "../configedUi/Hero";
import BlobsContainer from "../Blobs/BlobsContainer";
import TextLogo from "../svgs/TextLogo";
import FormMail from "../configedUi/formMail";

const Footer = (props) => {
  return (
    <section
      className="flex h-screen w-screen items-center justify-center "
      {...props}
    >
      <div className="relative flex items-center justify-center ">
        <TextLogo className="w-[90%] px-3 lg:w-[30vw] lg:p-0 absolute lg:top-14 top-8 lg:left-24" /> 
        <FormMail />
        <BlobsContainer className="-z-50"></BlobsContainer>
      </div>
    </section>
  );
};

export default Footer;
