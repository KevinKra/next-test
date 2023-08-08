import { useEffect, useState } from "react";
import ProductImage from "../ProductImage/ProductImage";

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
    const imagesCycler = setInterval(() => {
      if (pauseCycle) return;

      currentImageIdx < images.length - 1
        ? setCurrentImageIdx((p) => p + 1)
        : setCurrentImageIdx(0);
    }, 2500);

    // clean up interval
    return () => clearInterval(imagesCycler);
  }, [currentImageIdx, pauseCycle, images.length]);

  const handleImageSelect = (index: number) => {
    setPauseCycle(true);
    setCurrentImageIdx(index);
  };

  return (
    <section key={id} className="border border-red-400 p-2">
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
      <aside>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>pay {price}</button>
      </aside>
    </section>
  );
};

export default HeroProduct;
