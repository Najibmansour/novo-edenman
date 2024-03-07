import { HoverEffect } from "@/components/ui/card-hover-effect";

export function IslandSection() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Facts",
    description: "Very comfortable functional and durable underwear",
    link: "/",
  },
  {
    title: "History",
    description:
      "Edenman is a mens underwear brand based in Lebanon that offers to a variety",
    link: "/",
  },
  {
    title: "Styles",
    description:
      "Your Underwear for evryday use, with a smooth elastic wastband that is friendly to your skin and an incredibly soft natural cotton fabric with neat seam lines that give you a lot of elasticity and a natural feeling ",
    link: "/",
  },
];
