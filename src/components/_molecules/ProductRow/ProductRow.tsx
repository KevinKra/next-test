import ProductCard from "../ProductCard/ProductCard";
import { ProductApiResponse } from "../../../types";

interface IProductRow {
  title: string;
  products: { node: ProductApiResponse }[];
}

const ProductRow = ({ title, products }: IProductRow) => {
  return (
    <div>
      <h3 className="mb-2 text-xl font-semibold capitalize">{title}</h3>
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
    </div>
  );
};

export default ProductRow;
