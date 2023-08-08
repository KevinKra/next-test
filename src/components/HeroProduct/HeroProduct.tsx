import { useEffect, useState } from "react";
import ProductImage from "../ProductImage/ProductImage";
import Button from "../_atoms/Button/Button";

interface IHeroProduct {
  id: string;
  title: string;
  description: string;
  images: { node: { id: string; altText?: string; originalSrc: string } }[];
  price: string;
}

const HeroProduct = ({
  id,
  title,
  description,
  images,
  price,
}: IHeroProduct) => {
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
      className="grid grid-cols-1 gap-6 sm:gap-12 sm:grid-cols-2 border-red-400"
    >
      {/* product images section */}
      <div className="flex gap-x-2">
        <ProductImage hero title={title} image={images[currentImageIdx]} />
        <div className="flex flex-col gap-1">
          {images.map((image, i) => (
            <ProductImage
              key={image.node.id}
              title={title}
              image={image}
              active={i === currentImageIdx}
              action={() => handleImageSelect(i)}
            />
          ))}
        </div>
      </div>
      {/* product information section */}
      <aside className={`flex flex-col gap-y-4`}>
        <h2 className="text-3xl sm:text-4xl font-bold underline decoration-rose-400 underline-offset-3">
          {title}
        </h2>
        <p className="w-full line-clamp-4 sm:line-clamp-5 sm:w-4/5 text-sm sm:text-base sm:font-light">
          {description}
        </p>
        <div className="flex gap-6 flex-col sm:flex-row mt-4 sm:mt-8 w-full md:w-3/5">
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
        </div>
      </aside>
    </section>
  );
};

export default HeroProduct;
