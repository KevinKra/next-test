import ProductImage, { ItemImage } from "../ProductImage/ProductImage";
import Button from "../_atoms/Button/Button";

interface IProductCard {
  id: string;
  title: string;
  description: string;
  handle: string;
  image: ItemImage[];
  price: string;
}

const ProductCard = ({ title, description, image, price }: IProductCard) => {
  console.log("image", image);

  return (
    <div
      className={`
        relative
        flex
        flex-col 
        gap-4 
        overflow-hidden 
        border 
        border-b-rose-500 
        border-r-rose-500 
        p-2 
        shadow-md 
        lg:grid 
        lg:grid-cols-2
      `}
    >
      <div className="h-full border border-2 border-rose-500">
        <ProductImage noShadow width={500} title={title} image={image[0]} />
      </div>
      <div
        className="
        absolute 
        top-0 
        z-[-1] 
        w-[20rem]
        rotate-90 
        skew-x-6 
        bg-rose-500 
        lg:-left-6 
        lg:h-[25rem] 
        lg:w-[8rem] 
        lg:rotate-0"
      />
      <div className="flex flex-col gap-y-4">
        <h4 className="w-1/5 text-xl font-bold">{title}</h4>
        <p className="line-clamp-3 w-4/5 font-light lg:hidden">{description}</p>
        <div className="font-light lowercase">
          <p>
            <span className="font-medium">${price}</span>
          </p>
        </div>
        <div className="mt-auto w-fit">
          <Button text="add to cart" action={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
