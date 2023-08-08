import Head from "next/head";
import Image from "next/image";
import { storeFront } from "../utils";

export default function Home({ products }) {
  console.log("products::", products);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Shopping App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section className="flex flex-col gap-y-4 rounded-sm">
          {products.edges.map(({ node }) => (
            <div
              key={node.id}
              className="flex shadow-sm p-4 w-[15rem] gap-y-4 flex-col border items-center"
            >
              <Image
                width={"250"}
                height={"250"}
                alt={node.altText}
                src={node.featuredImage.src}
              />
              <h2 className="font-medium">{node.title}</h2>
              <p className="text-sm line-clamp-4">{node.description}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        footer
      </footer>
    </div>
  );
}

const gql = String.raw;

const PRODUCTS_QUERY = gql`
  query products {
    products(first: 5) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            src
            id
            altText
          }
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const { data } = await storeFront(PRODUCTS_QUERY);
  return { props: { products: data.products } };
}
