"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-full overflow-hidden ",
        className,
      )}
    >
      <div className="pointer-events-none absolute z-40 h-full w-full bg-gradient-to-r from-white from-0% to-transparent to-15% lg:from-10% lg:to-25%" />
      <div className="pointer-events-none absolute z-40 h-full w-full bg-gradient-to-l from-white from-0% to-transparent to-15% lg:from-10% lg:to-25%" />
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative h-36  w-36 max-w-full flex-shrink-0 rounded-3xl border border-b-0 bg-opacity-40 px-8 py-6  transition-transform hover:scale-105  md:h-48 md:w-48"
            style={{
              background:
                "linear-gradient(180deg, var(--gray-500), var(--gray-600)",
            }}
            key={idx}
          >
            <Image
              className="rounded-3xl"
              alt={`product-image-${idx}`}
              src={item}
              sizes="150px"
              fill
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
