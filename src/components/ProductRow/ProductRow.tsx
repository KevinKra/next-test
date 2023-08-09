import { ItemImage, Product } from "../../types";
import ProductCard from "../ProductCard/ProductCard";

interface ProductType extends Omit<Product, "images"> {
  /**
   * override Product image property to match api response
   */
  images: { edges: ItemImage[] };
}

interface IProductRow {
  products: { node: ProductType }[];
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
            price: product.price,
          }}
        />
      ))}
    </section>
  );
};

export default ProductRow;
