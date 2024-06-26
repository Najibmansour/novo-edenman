import QnA from "@/components/configedUi/QnA";
import Footer from "../components/Pages/Footer";
import { IslandSection } from "../components/Pages/islandSection";
import Section1 from "../components/Pages/section1";
import ProductCarousel from "../components/configedUi/ProductCarousel";
import { InfiniteMovingCardsDemo } from "../components/configedUi/infinitMovingCardsDemo";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Section1 />
      <div
        className="mt-20 flex items-end justify-center lg:mt-0"
        id="products"
      >
        <ProductCarousel />
      </div>
      <InfiniteMovingCardsDemo />
      <IslandSection />
      <QnA />
      <Footer />
      {/* <CarouselCustom /> */}
    </main>
  );
}
