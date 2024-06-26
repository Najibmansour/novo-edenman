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
  const plugin = useRef(Autoplay({ delay: 200000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="h-full w-[90%]  lg:h-min "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {products.map(
          (
            { title, description, fabric, wash, variants, types, images },
            index,
          ) => (
            <CarouselItem key={index} className="flex h-min w-[100%]">
              <ProductBox
                types={types}
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
