import Image from "next/image";

interface IProductImage {
  /**
   * title provides failover incase image has null or empty altText property.
   */
  title: string;
  image: { node: { id: string; altText?: string; originalSrc: string } };
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
  action?: () => void;
}

const ProductImage = ({
  title,
  image,
  height = 100,
  width = 100,
  hero,
  active,
  action,
}: IProductImage) => {
  return (
    <div
      className={`
        relative
        border
        cursor-pointer
        shadow-md
        h-fit
        transition
        duration-200
        ${active ? "border-black/30" : "border-slate-100"}
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
        alt={`${image.node.altText || title}`}
      />
    </div>
  );
};

export default ProductImage;