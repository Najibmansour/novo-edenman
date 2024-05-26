import React from "react";

import { products } from "@/app/products";
import ProductCard from "@/components/configedUi/product_card";

const Products = () => {
  return (
    <main className="flex flex-col items-center space-y-3 pt-20">
      <h1 className="text-center font-bold uppercase tracking-widest ">
        Products
      </h1>
      <section className="grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-8  ">
        {products.map(
          (
            { title, description, fabric, wash, variants, types, images },
            index,
          ) => (
            <ProductCard
              key={index}
              types={types}
              title={title}
              description={description}
              fabric={fabric}
              wash={wash}
              variants={variants}
              images={images}
            ></ProductCard>
          ),
        )}
      </section>
    </main>
  );
};

export default Products;
