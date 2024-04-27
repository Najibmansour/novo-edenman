"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductBox from "../Pages/ProductBox";
import { products } from "@/app/products";

export default function ProductCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="h-full w-[90%] bg-green-300 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {products.map(
          (
            { title, description, fabric, wash, variants, type, images },
            index,
          ) => (
            <CarouselItem key={index} className="flex h-min w-[100%]">
              <ProductBox
                type={type}
                title={title}
                description={description}
                fabric={fabric}
                wash={wash}
                variants={variants}
                images={images}
              />
            </CarouselItem>
          ),
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
