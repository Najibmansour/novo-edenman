"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "my-10 grid grid-cols-1 py-0  md:grid-cols-2  lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
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
              <div className="mt-2 h-[50%] w-[100%] rounded-2xl bg-gray-400 bg-opacity-30 p-4"></div>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl  border border-transparent bg-gray-300 p-4 group-hover:border-slate-300 dark:border-white/[0.2]",
        className,
      )}
    >
      <div className="relative z-50">
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
    <p
      className={cn(
        "text-md mt-4 leading-relaxed tracking-wide text-zinc-400",
        className,
      )}
    >
      {children}
    </p>
  );
};
