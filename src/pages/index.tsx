/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import HeroProduct from "../components/HeroProduct/HeroProduct";
import { storeFront } from "../utils";

// temp
// type HomeProps = {
//   products: {
//     edges: {
//       node: {
//         id: string;
//         title: string;
//         handle: string;
//         description: string;
//         featuredImage: {
//           id: string;
//           src: string;
//           altText: string | null;
//         };
//       };
//     }[];
//   };
// };

// eslint-disable-next-line react/prop-types
export default function Home({ products }: any) {
  console.log("products::", products);
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Convert_Threads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-black sm:bg-white grid place-items-center px-4 sm:px-2 border-b text-center h-12 sm:h-16 w-full">
        <h1 className="text-lg text-white sm:text-black sm:text-2xl font-bold cursor-pointer">
          Convert_Threads
        </h1>
      </nav>
      <main className="grow flex flex-col gap-y-24 px-4 sm:px-2 mt-4 sm:mt-10 max-w-7xl mx-auto">
        <HeroProduct
          id={products.id}
          title={products.title}
          description={products.description}
          images={products.images.edges}
          price={products.priceRange.minVariantPrice.amount}
          available={products.availableForSale}
        />
      </main>

      {/* <main className="">
        <section className="flex flex-col gap-y-4 rounded-sm">
          {products.edges.map(({ node: product }) => (
            <div
              key={product.id}
              className="flex shadow-sm p-4 w-[15rem] gap-y-4 flex-col border items-center"
            >
              <Image
                width={"250"}
                height={"250"}
                alt={
                  product.featuredImage.altText ||
                  `model wearing ${product.title}`
                }
                src={product.featuredImage.src}
              />
              <h2 className="font-medium">{product.title}</h2>
              <p className="text-sm line-clamp-4">{product.description}</p>
            </div>
          ))}
        </section>
      </main> */}

      <footer className="grid place-items-center h-24 mt-8 bg-black border-t">
        <p className="text-white font-light text-sm p-4 sm:p-2">
          shop your favorite brands at convert_threads
        </p>
      </footer>
    </div>
  );
}

// todo - give me a home
const gql = String.raw;
// const PRODUCTS_QUERY = gql`
//   query products {
//     products(first: 5) {
//       edges {
//         node {
//           id
//           handle
//           title
//           description
//           featuredImage {
//             src
//             id
//             altText
//           }
//         }
//       }
//     }
//   }
// `;

const SINGLE_PAGE_QUERY = gql`
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
  }
`;

// prep-halterneck-top-blue
// callie-halterneck-top-blue
// mandala-halterneck-top-blue
// bounds-short-blue-206

export async function getStaticProps() {
  // const { data } = await storeFront(PRODUCTS_QUERY);
  // return { props: { products: data.products } };
  const { data } = await storeFront(SINGLE_PAGE_QUERY, {
    handle: "mandala-halterneck-top-blue",
  });
  return { props: { products: data.productByHandle } };
}
