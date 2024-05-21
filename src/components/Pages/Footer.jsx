import React from "react";
import BlobsContainer from "../Blobs/BlobsContainer";
import TextLogo from "../svgs/TextLogo";
import FormMail from "../configedUi/formMail";
import Link from "next/link";

//icons/////////////////
import { Facebook, Instagram } from "lucide-react";

const Footer = (props) => {
  return (
    <footer
      className="flex h-screen w-screen flex-col items-center justify-center "
      {...props}
      id="contact"
    >
      <section className="relative flex items-center justify-center ">
        <TextLogo className="absolute top-8 w-[90%] px-3 lg:left-24 lg:top-14 lg:w-[30vw] lg:p-0" />
        <FormMail />
        <BlobsContainer className="-z-40" />
      </section>
      <section className="my-3 flex w-full flex-row justify-center   gap-2 text-[#17395C]">
        <Link
          target="_blank"
          href="https://www.instagram.com/edenmen.underwear"
        >
          <Instagram
            className="h-8 w-8 opacity-95 lg:h-10 lg:w-10"
            strokeWidth={1.7}
          />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/edenmen.lb">
          <Facebook
            className="h-8 w-8 opacity-95 lg:h-10 lg:w-10"
            strokeWidth={1.7}
          />
        </Link>
      </section>
      <small className="-mb-5 tracking-widest text-[#17395C] ">
        &copy; Copyright 2024, Edenmen
      </small>
    </footer>
  );
};

export default Footer;
