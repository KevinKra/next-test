import CartModal from "../components/_molecules/CartModal/CartModal";
import NavBar from "../components/_molecules/NavBar/NavBar";
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
  // console.log("products::", product, products);
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <CartModal />
      <main className="mx-auto mt-4 flex max-w-7xl grow flex-col gap-y-24 px-4 sm:mt-10">
        <ProductHero
          product={{
            ...product,
            images: product.images.edges,
            price: product.priceRange.minVariantPrice.amount,
          }}
        />
        <ProductRow products={products} />
      </main>
      <footer className="mt-8 grid h-24 place-items-center border-t bg-black">
        <p className="p-4 text-sm font-light text-white sm:p-2">
          shop your favorite brands at convert_threads
        </p>
      </footer>
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
