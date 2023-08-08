import Image from "next/image";

interface IProductImage {
  /**
   * title provides failover incase image has null or empty altText property
   */
  title: string;
  image: { node: { id: string; altText?: string; originalSrc: string } };
  /**
   * set true if hero, otherwise use default `height` / `width` or provided prop values.
   */
  hero?: boolean;
  height?: number;
  width?: number;
}

const ProductImage = ({
  title,
  image,
  height = 100,
  width = 100,
  hero,
}: IProductImage) => {
  return (
    <div>
      <Image
        className="border border-slate-100 shadow-md"
        src={image.node.originalSrc}
        height={hero ? 650 : height}
        width={hero ? 350 : width}
        alt={`${image.node.altText || title}`}
      />
    </div>
  );
};

export default ProductImage;
