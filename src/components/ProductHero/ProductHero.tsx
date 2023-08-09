import { useEffect, useState } from "react";
import { ItemImage } from "../../types";
import ProductImage from "../ProductImage/ProductImage";
import Button from "../_atoms/Button/Button";

interface IProductHero {
  id: string;
  title: string;
  description: string;
  images: ItemImage[];
  price: string;
  available: boolean;
}

const HeroProduct = ({
  id,
  title,
  description,
  images,
  price,
}: IProductHero) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [pauseCycle, setPauseCycle] = useState(false);

  useEffect(() => {
    // useEffect handles the cycling of images
    const imagesCycler = setInterval(() => {
      if (pauseCycle) return;

      currentImageIdx < images.length - 1
        ? setCurrentImageIdx((i) => i + 1)
        : setCurrentImageIdx(0);
    }, 2500);
    // useEffect interval cleanup
    return () => clearInterval(imagesCycler);
  }, [currentImageIdx, pauseCycle, images.length]);

  const handleImageSelect = (index: number) => {
    setPauseCycle(true);
    setCurrentImageIdx(index);
  };

  return (
    <section
      key={id}
      className="grid grid-cols-1 gap-6 border-red-400 md:grid-cols-2 md:gap-12"
    >
      {/* product images section */}
      <div className="flex gap-x-2">
        <ProductImage
          hero
          // defaultBorder
          title={title}
          image={images[currentImageIdx]}
        />
        <div className="flex flex-col gap-1">
          {images.map((image, i) => (
            <ProductImage
              key={image.node.id}
              title={title}
              image={image}
              active={i === currentImageIdx}
              action={() => handleImageSelect(i)}
              defaultBorder
            />
          ))}
        </div>
      </div>
      {/* product information section */}
      <aside>
        <div className="flex flex-col gap-y-6">
          <h2 className="underline-offset-3 text-3xl font-bold underline decoration-rose-400 md:text-4xl">
            {title}
          </h2>
          <p className="line-clamp-4 w-full text-sm md:line-clamp-5 md:w-4/5 md:text-base md:font-light">
            {description}
          </p>
          <div className="font-light lowercase">
            <p>
              starting at at <span className="font-bold">${price}</span>
            </p>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col gap-6 md:mt-10 md:flex-row lg:w-4/5">
          <Button
            outlined
            showButtonMirror
            text={`only $${price}`}
            action={() => {}}
            fullWidth
          />
          <Button
            showButtonMirror
            text={`add to cart`}
            action={() => {}}
            fullWidth
          />
          {/* discovery revealed items from api are not available, otherwise see below ... */}
          {/* <Button
            outlined
            showButtonMirror
            text={available ? `only $${price}` : "sold out"}
            action={() => {}}
            fullWidth
            disabled={!available}
          />
          {available && (
            <Button
              showButtonMirror
              text={`add to cart`}
              action={() => {}}
              fullWidth
              disabled={!available}
            />
          )} */}
        </div>
      </aside>
    </section>
  );
};

export default HeroProduct;
