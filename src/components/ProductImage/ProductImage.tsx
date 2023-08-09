import Image from "next/image";
import { ItemImage } from "../../types";

interface IProductImage {
  /**
   * title provides failover incase image has null or empty altText property.
   */
  title: string;
  image: ItemImage;
  /**
   * set true if hero, otherwise use default `height` / `width` or provided prop values.
   */
  hero?: boolean;
  height?: number;
  width?: number;
  /**
   * when active, a low opacity screen fades in.
   */
  active?: boolean;
  defaultBorder?: boolean;
  noShadow?: boolean;
  action?: () => void;
}

const ProductImage = ({
  title,
  image,
  height = 100,
  width = 100,
  hero,
  active,
  defaultBorder,
  noShadow,
  action,
}: IProductImage) => {
  return (
    <div
      className={`
        relative
        h-fit
        transition
        duration-200
        ${defaultBorder && "border"}
        ${
          hero
            ? "cursor-default border border-rose-400 shadow-lg"
            : "cursor-pointer border shadow-md"
        }
        ${noShadow && "shadow-none"}
      `}
      onClick={action}
    >
      {/* screen */}
      <div
        className={`
          absolute 
          h-full 
          w-full 
          transition
          duration-200
          ${active ? "bg-black/30" : "bg-black/0"}
        `}
      />
      {/* image */}
      <Image
        src={image.node.originalSrc}
        height={hero ? 1000 : height}
        width={hero ? 500 : width}
        priority={hero}
        alt={`${image.node.altText || title}`}
        style={{ width: "auto", height: "100%" }}
      />
    </div>
  );
};

export default ProductImage;
