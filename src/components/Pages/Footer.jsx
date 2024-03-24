import React from "react";
import BlobsContainer from "../Blobs/BlobsContainer";
import TextLogo from "../svgs/TextLogo";
import FormMail from "../configedUi/formMail";
import Link from "next/link";

//icons/////////////////
import { Facebook, FacebookIcon, Instagram } from 'lucide-react';

////////////////////

const Footer = (props) => {
  return (
    <footer
      className="flex h-screen w-screen items-center flex-col justify-center "
      {...props}
    >
      <section className="relative flex items-center justify-center ">
        <TextLogo className="w-[90%] px-3 lg:w-[30vw] lg:p-0 absolute lg:top-14 top-8 lg:left-24" /> 
        <FormMail />
        <BlobsContainer className="-z-50"></BlobsContainer>
      </section>
      <section className="flex flex-row w-full justify-center my-5 -mb-5 lg:gap-7 gap-4">
      <Link href="/">
        <Instagram className="lg:w-16 lg:h-16 w-8 h-8" color="#17395C"/>
        </Link>
        <Link href="/">
        <Facebook className="lg:w-16 lg:h-16 w-8 h-8" color="#17395C"/>
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
