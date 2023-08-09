import ProductCard from "../ProductCard/ProductCard";
import { ProductApiResponse } from "../../../types";

interface IProductRow {
  products: { node: ProductApiResponse }[];
}

const ProductRow = ({ products }: IProductRow) => {
  return (
    <section className="flex flex-col gap-4 md:grid md:grid-flow-col">
      {products.map(({ node: product }) => (
        <ProductCard
          key={product.id}
          product={{
            ...product,
            images: product.images.edges,
            price: product.priceRange.minVariantPrice.amount,
          }}
        />
      ))}
    </section>
  );
};

export default ProductRow;
