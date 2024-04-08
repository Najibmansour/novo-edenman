"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  // console.log(items[0]);
  return (
    <div
      className={cn(
        "my-10 grid grid-cols-1 py-0  md:grid-cols-2  lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative  block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-[#15375A]  dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  color: "#A97C50",
                  opacity: 0.6,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex h-[60vh] flex-col">
              <CardTitle>{item.title}</CardTitle>
              <div className="relative mt-2 h-[50%] w-[100%] rounded-2xl bg-gray-400 bg-opacity-30">
                <Image
                  className="rounded-2xl"
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="200px"
                ></Image>
              </div>
              <CardDescription>{item.desc}</CardDescription>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border  border-transparent bg-gray-200 p-4 shadow-lg group-hover:border-slate-300 dark:border-white/[0.2]",
        className,
      )}
    >
      <div className="relative z-40">
        <div className="p-0">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "mt-2 text-center text-3xl font-bold tracking-wide text-zinc-700",
        className,
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <div
      className={cn(
        "text-md mt-4 leading-relaxed tracking-wide text-zinc-500",
        className,
      )}
    >
      {children}
    </div>
  );
};
