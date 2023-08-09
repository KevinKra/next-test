import ProductHero from "../components/_molecules/ProductHero/ProductHero";
import ProductRow from "../components/_molecules/ProductRow/ProductRow";
import { PAGE_QUERY } from "../gql/queries/productsPage";
import { ProductApiResponse } from "../types";
import { storeFront } from "../utils";

interface PageData {
  product: ProductApiResponse;
  products: {
    node: ProductApiResponse;
  }[];
}

export default function Home({ product, products }: PageData) {
  console.log("products::", product, products);
  return (
    <div className="mx-auto mt-4 flex max-w-7xl grow flex-col gap-y-24 px-4 sm:mt-10">
      <ProductHero
        product={{
          ...product,
          images: product.images.edges,
          price: product.priceRange.minVariantPrice.amount,
        }}
      />
      <ProductRow products={products} />
    </div>
  );
}

// prep-halterneck-top-blue
// callie-halterneck-top-blue
// mandala-halterneck-top-blue
// bounds-short-blue-206

export async function getStaticProps() {
  const { data } = await storeFront(PAGE_QUERY, {
    handle: "mandala-halterneck-top-blue",
  });
  return {
    props: { product: data.productByHandle, products: data.products.edges },
  };
}
