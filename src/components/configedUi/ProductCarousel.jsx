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

const boxerProducts = [
  {
    title: "Soft Hand Cotton Briefs",
    description:
      "Your elegant high-end Brief made of the softest natural Cotton with built-in recovery for fully comfort and 24/7 wear with a comfy elastic waistband, 2-ply pouch and clean seam lines for an ideal fit.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [],
    type: "primary",
  },
  {
    title: "Cottony Men Relax Boxer Briefs",
    description:
      "Your daily essentiels Boxer Brief with the smooth elastic waistband, made with our undeniably soft and lightweight cotton that gives you a body-hugging fit that allows you to breathe. Detailed with a 2-ply pouch for the support you crave and seam details for a superb fit.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: ["High Waist", "Low Waist"],
    type: "secondary",
  },
  {
    title: "Smooth Cotton Trunk",
    description:
      "Your everyday day favorite Trunk, made from super soft natural cotton fabric, with clean seam lines, that provide you with much elasticity, natural feelings and kind to your skin with the smooth elastic waistband.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: ["High Waist", "Low Waist"],
    type: "primary",
  },
  {
    title: "Super Soft Boxers",
    description:
      "Your exceptionally super soft Boxer crafted in stretch cotton that keep you comfortable and refreshed all day with the comfy elastic waistband and clean seam lines.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [],
    type: "secondary",
  },
  {
    title: "Ultra Stretch Undershirt V neck",
    description:
      "Your basic top quality half sleeve undershirt V neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [],
    type: "primary",
  },
  {
    title: "Ultra Stretch Undershirt O neck",
    description:
      "Your basic top quality sleeveless undershirt O neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [],
    type: "secondary",
  },
  {
    title: "Classic Fresh Tank",
    description:
      "Your elegant high-end Tank is made with our breathable high-stretch cotton rib fabric and designed for any and everyday to provide utmost flexibilty and comfort.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [],
    type: "primary",
  },
];

export default function ProductCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[90%] lg:h-[85svh] "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {boxerProducts.map(
          ({ title, description, fabric, wash, variants, type }, index) => (
            <CarouselItem key={index} className="w-[100%]">
              <ProductBox
                type={type}
                title={title}
                description={description}
                fabric={fabric}
                wash={wash}
                variants={variants}
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
