import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qnas = [
  {
    q: "Why do we wear Edenmen underwear? ",
    a: "We wear Edenmen underwear to counteract bacterial build-up in that region. Bacterial overgrowth not only causes pungent odors, and provide you the all-day comfort and support you need.",
  },

  {
    q: "Can the same Edenmen underwear be wore for all day long?",
    a: "There’s no problem wearing the same Edenmem   Underwear all day long due to the excellent quality of the materials our products are fabricated of.",
  },
  {
    q: "Does the Edenmen underwear take in consideration the health of the skin of whose wearing it ?",
    a: "Yes, Edenmen underwear are very good for skin’s health because they provide a healthy breathing ",
  },
  {
    q: "Is Edenmen underwear good for workout is it opt for moisture wicking breathable fabrics and are they athletic-specific styles designed to keep you comfortable during workout?",
    a: "Edenmen have special underwear designed for sports witch make it easy to be practicing even if you’re wearing them.",
  },
];

const QnA = () => {
  return (
    <section className="flex w-screen flex-col items-center text-primary">
      <h2 className=" mb-5 w-[75%] text-center text-4xl font-bold tracking-wider lg:text-6xl">
        Q&A:
      </h2>
      <Accordion
        type="single"
        collapsible
        className=" w-[80%] space-y-5 lg:w-[75%]"
      >
        {qnas.map(({ q, a }, i) => (
          <AccordionItem
            value={`item-${i}`}
            className=" rounded-3xl bg-gray-50 px-6 py-2 shadow-xl"
            key={i}
          >
            <AccordionTrigger className="text-left font-semibold tracking-wide contrast-[1.1] grayscale-[0.2] lg:text-xl ">
              {q}
            </AccordionTrigger>
            <AccordionContent className="px-2 text-lg italic focus:px-6">
              &quot;{a}&quot;
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default QnA;
