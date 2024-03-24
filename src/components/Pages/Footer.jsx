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
      <section className="flex flex-row w-full justify-center my-3   gap-4 text-[#17395C]">
      <Link target="_blank" href="https://www.instagram.com/edenmen.underwear">
        <Instagram className="lg:w-14 lg:h-14 w-8 h-8 opacity-95" strokeWidth={1.7} />
      </Link>
      <Link target="_blank" href="https://www.facebook.com/edenmen.lb">
        <Facebook className="lg:w-14 lg:h-14 w-8 h-8 opacity-95" strokeWidth={1.7} />
      </Link>
      </section>
      <small className="-mb-5 text-[#17395C] tracking-widest ">&copy; Copyright 2024, Edenmen</small>
    </footer>
  );
};

export default Footer;
