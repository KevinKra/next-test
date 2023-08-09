import Head from "next/head";
import HeroProduct from "../components/HeroProduct/HeroProduct";
import ProductRow from "../components/ProductRow/ProductRow";
import { storeFront } from "../utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ product, products }: any) {
  console.log("products::", product, products);
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Convert_Threads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="grid h-12 w-full place-items-center border-b bg-black px-4 text-center sm:h-16 sm:bg-white sm:px-2">
        <h1 className="cursor-pointer text-lg font-bold text-white sm:text-2xl sm:text-black">
          Convert_Threads
        </h1>
      </nav>
      <main className="mx-auto mt-4 flex max-w-7xl grow flex-col gap-y-24 px-4 sm:mt-10 sm:px-2">
        <HeroProduct
          id={product.id}
          title={product.title}
          description={product.description}
          images={product.images.edges}
          price={product.priceRange.minVariantPrice.amount}
          available={product.availableForSale}
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

// todo - give me a home
const gql = String.raw;

const PAGE_QUERY = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      availableForSale
      handle
      tags
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 4) {
        edges {
          node {
            id
            altText
            originalSrc
          }
        }
      }
    }
    products(first: 3) {
      edges {
        node {
          id
          availableForSale
          title
          description
          vendor
          productType
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                id
                altText
                originalSrc
              }
            }
          }
        }
      }
    }
  }
`;

// prep-halterneck-top-blue
// callie-halterneck-top-blue
// mandala-halterneck-top-blue
// bounds-short-blue-206

export async function getStaticProps() {
  // const { data } = await storeFront(PRODUCTS_QUERY);
  // return { props: { products: data.products } };
  const { data } = await storeFront(PAGE_QUERY, {
    handle: "mandala-halterneck-top-blue",
  });
  return {
    props: { product: data.productByHandle, products: data.products.edges },
  };
}
