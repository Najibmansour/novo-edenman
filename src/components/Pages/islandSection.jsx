import { HoverEffect } from "@/components/ui/card-hover-effect";

import  fact  from "@/images/Island/fact.jpg";
import  history  from "@/images/Island/history.jpg";
import  style  from "@/images/Island/style.jpg";

export function IslandSection() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image: fact,
    title: "Facts",
    desc: (
      <p>
        <span className="font-semibold">Very comfortable</span>,
        functional,durable and plus size underwear.
      </p>
    ),
  },
  {
    image: history,
    title: "History",
    desc: (
      <p>
        <span className="font-semibold">Everyday use</span>, friendly to your
        skin and an incredibly{" "}
        <span className="font-semibold">soft natural</span> cotton fabric.
      </p>
    ),
  },
  {
    image: style,
    title: "Styles",
    desc: (
      <p>
        Edenmen is a men&apos;s underwear brand based in{" "}
        <span className="font-semibold">Lebanon</span> that offers to a{" "}
        <span className="font-semibold">variety</span>.
      </p>
    ),
  },
];
