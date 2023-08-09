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
  handle: string;
  images: ItemImage[];
  price: string;
};
