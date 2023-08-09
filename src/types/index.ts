/**
 * convention used for typing images from shopify
 */
export type ItemImage = {
  node: { id: string; altText?: string; originalSrc: string };
};

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
