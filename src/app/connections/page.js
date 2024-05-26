import BlogImage from "@/components/configedUi/blog_image";
import importAll from "@/lib/bulk_import";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = importAll(require.context("../../images/exhibition", true));

const Connections = () => {
  console.log(typeof images["exhibition05.jpeg"][0]);

  return (
    <main className="flex w-full flex-col items-center pb-10 pt-20">
      <section className="grid w-[90vw] grid-cols-6 grid-rows-[16] gap-3 lg:w-[80vw] lg:gap-10">
        <div className="col-span-full row-span-4">
          <BlogImage
            src={images["exhibition07.jpeg"][0]}
            className=""
            alt="test"
          />
        </div>
        <div className="col-span-full row-span-2 flex flex-col items-center justify-center   text-center tracking-wider text-primary">
          <h1 className="font-bold">Explore more about our experiences!</h1>
          <h2 className="text-md lg:text-2xl ">
            To <b>“move in comfort”</b> in our success, we participate in events
            and exhibitions, because we believe that communication and sharing
            ideas is the key professional growth.
          </h2>
        </div>
        <BlogImage
          src={images["exhibition05.jpeg"][0]}
          className="col-span-full row-span-2 lg:col-span-3"
          alt="test"
        />
        <h2 className="text-md col-span-full row-span-2 flex items-center justify-center py-2 tracking-wider text-primary lg:col-span-3 lg:p-10 lg:text-2xl">
          Our participation in &apos;Lebanese Industry Exhibition&apos; at
          “Forum de Beirut” from 9 till 13 May 2024. The exhibition was
          organized by “MediTrade” and “Wedding Mall” in coordination with the
          Lebanese Ministry of Industry and the Association of Lebanese
          Industrialists.
        </h2>
        <BlogImage
          src={images["exhibition01.jpeg"][0]}
          className="col-span-full row-span-3"
          alt="test"
        />{" "}
        <BlogImage
          src={images["exhibition04.jpeg"][0]}
          className="col-span-2 row-span-8 " // TODO: fix row span on this pic to match other images around it
          alt="test"
        />
        <BlogImage
          src={images["exhibition03.jpeg"][0]}
          className="col-span-4 col-start-3 row-span-3 lg:row-start-12"
          alt="test"
        />
        <BlogImage
          src={images["exhibition02.jpeg"][0]}
          className="col-span-2 col-start-3 row-span-1 lg:row-start-[15] "
          alt="test"
        />
        <BlogImage
          src={images["exhibition06.jpeg"][0]}
          className="col-span-2 col-start-5 row-span-1 lg:row-start-[15] "
          alt="test"
        />
      </section>
      <section className="my-3 flex w-full flex-row justify-center gap-2 text-[#17395C]">
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
    </main>
  );
};

export default Connections;
