import React from "react";
import ProductCard from "../ProductCard/ProductCard";

interface IProductRow {
  products: unknown[];
}

const ProductRow = ({ products }: IProductRow) => {
  return (
    <section className="flex flex-col gap-4 md:grid md:grid-flow-col">
      {products.map(({ node: product }) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          handle={product.handle}
          image={product.images.edges}
          price={product.priceRange.minVariantPrice.amount}
        />
      ))}
    </section>
  );
};

export default ProductRow;
