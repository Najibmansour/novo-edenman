import { productsImages} from "@/app/products";
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
    <div className="dark:bg-grid-white/[0.05] relative flex h-[40svh] flex-col  items-center justify-center overflow-hidden rounded-md antialiased dark:bg-black">
      <InfiniteMovingCards
        items={productsImages}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
