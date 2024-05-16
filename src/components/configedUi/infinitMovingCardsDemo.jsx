import { productsImages } from "@/app/products";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function InfiniteMovingCardsDemo() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // const productsImages = getImages(products);
  // console.log(getImages(products).length);

  return (
    <div className="dark:bg-grid-white/[0.05] relative flex h-[30svh] flex-col items-center justify-center overflow-hidden rounded-md antialiased dark:bg-black">
      <div
        id="infinit-cards"
        alt="redirecting-section-to-point-to-stay-centered"
        className="absolute -top-80 z-50 size-24 bg-yellow-300"
      />
      <InfiniteMovingCards
        items={productsImages}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
