/**
 * convention used for typing images from shopify
 */
export type ItemImage = {
  node: { id: string; altText?: string; originalSrc: string };
};

/**
 * consumable Product type used across components
 */
export type Product = {
  id: string;
  title: string;
  description: string;
  availableForSale: boolean;
  handle: string;
  vendor: string;
  productType: string;
  images: ItemImage[];
  price: string;
};

/**
 * typed response from graphql api call
 *
 * **note:** changes to gql api query response must also be updated here
 */
export type ProductApiResponse = {
  id: string;
  title: string;
  description: string;
  availableForSale: boolean;
  handle: string;
  vendor: string;
  productType: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  images: {
    edges: ItemImage[];
  };
};
