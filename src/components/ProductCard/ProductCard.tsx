import ProductImage from "../ProductImage/ProductImage";
import Button from "../_atoms/Button/Button";
import { ItemImage } from "../../types";

interface IProductCard {
  id: string;
  title: string;
  description: string;
  handle: string;
  image: ItemImage[];
  price: string;
}

const ProductCard = ({ title, description, image, price }: IProductCard) => {
  return (
    <div
      className="
        relative
        grid 
        grid-cols-2
        gap-4
        overflow-hidden
        border 
        border-b-rose-500 
        border-r-rose-500 
        p-2 
        shadow-md 
        md:flex 
        md:flex-col 
        lg:grid 
        lg:grid-cols-2
      "
    >
      {/* card image */}
      <div className="h-fit border-2 border-rose-500">
        <ProductImage noShadow width={500} title={title} image={image[0]} />
      </div>
      {/* card body */}
      <div className="flex h-full flex-col gap-y-2 lg:gap-y-4">
        <h4 className="w-1/5 text-xl font-bold md:w-full lg:w-1/5">{title}</h4>
        <p className="line-clamp-3 w-4/5 font-light md:hidden">{description}</p>
        <div className="mb-4 font-light lowercase">
          <p>
            <span className="font-medium">${price}</span>
          </p>
        </div>
        <div className="mt-auto w-full">
          <Button fullWidth text="add to cart" action={() => {}} />
        </div>
      </div>
      {/* absolute styled design element */}
      <div
        className="
          absolute 
          -left-6
          top-0
          z-[-1] 
          h-[25rem] 
          w-[8rem] 
          rotate-0 
          skew-x-6
          bg-rose-500
          md:left-0
          md:h-[15rem]
          md:w-[50rem] 
          md:skew-x-0
          lg:-left-6 
          lg:h-[25rem] 
          lg:w-[8rem] 
          lg:rotate-0 
          lg:skew-x-6
        "
      />
    </div>
  );
};

export default ProductCard;
