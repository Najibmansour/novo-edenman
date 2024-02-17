import { HoverEffect } from "@/components/ui/card-hover-effect";


export function IslandSection() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Facts",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/",
  },
  {
    title: "History",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/",
  },
  {
    title: "Styles",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/",
  },
  
];
