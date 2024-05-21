import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const BlogImage = ({ src, width, height, className }) => {
  console.log(src);
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={cn("rounded-[2.5rem]", className)}
      alt="blog_image"
    />
  );
};

export default BlogImage;
