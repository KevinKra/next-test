import Head from "next/head";
import { storeFront } from "../utils";

export default function Home({ products }) {
  console.log("products::", products);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Shopping App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.edges.map(({ node }) => (
        <p key={node.id}>{node.title}</p>
      ))}

      <main className="flex text-red-400 flex-col items-center justify-center w-full flex-1 px-20 text-center">
        render a product here.
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
    products(first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const { data } = await storeFront(PRODUCTS_QUERY);
  return { props: { products: data.products } };
}
