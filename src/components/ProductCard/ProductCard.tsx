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
        border 
        border-b-rose-400 
        border-r-rose-400 
        shadow-md 
        grid 
        grid-cols-2 
        p-2 
        gap-4 
        shadow-md 
        overflow-hidden
      `}
    >
      <div className="h-full border border-rose-400 border-2">
        <ProductImage noShadow width={500} title={title} image={image[0]} />
      </div>
      <div className="bg-rose-400 h-full absolute -left-6 w-[8rem] z-[-1] skew-x-6" />
      <div className="flex flex-col gap-y-4">
        <h4 className="w-1/5 text-xl font-bold">{title}</h4>
        <p className="sm:hidden font-light w-4/5 line-clamp-3">{description}</p>
        <div className="lowercase font-light">
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
