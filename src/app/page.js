import Section1 from "./components/Pages/section1";
import ProductBox from "./components/Pages/section2";
import ProductCarousel from "./components/ProductCarousel";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <Section1 />
      <div className="flex h-screen items-center justify-center ">
        <ProductCarousel />
      </div>
    </main>
  );
}
