"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import {
//   DotButton,
//   PrevButton,
//   NextButton,
// } from "./EmblaCarouselArrowsDotsButtons";
import imageByIndex from "./imageByIndex";

const CarouselCustom = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="flex gap-10">
      <div className="grid grid-cols-6 grid-rows-1 ">
        <div className="col-span-3 overflow-x-hidden bg-green-900">
          <div className="" ref={emblaRef}>
            <div className="flex flex-row gap-10">
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="w-[100vw]" key={index}>
                  <div className="h-[40vh]  w-[80vw] rounded-2xl border-4 border-primary bg-red-500">
                    <span>{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center justify-center">
            <div onClick={() => scrollTo(1)} className="h-10 w-20 bg-blue-500">
              Test 1
            </div>
            <div onClick={() => scrollTo(2)} className="h-10 w-20 bg-blue-500">
              Test 2
            </div>
            <div onClick={() => scrollTo(3)} className="h-10 w-20 bg-blue-500">
              Test 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCustom;
