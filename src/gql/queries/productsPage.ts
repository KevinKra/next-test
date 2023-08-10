const gql = String.raw;

export const PAGE_QUERY = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      availableForSale
      handle
      vendor
      productType
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
    products(first: 5) {
      edges {
        node {
          id
          title
          description
          availableForSale
          handle
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
