import { useState } from "react";
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
              action={() => setCurrentImageIdx(i)}
              active={i === currentImageIdx}
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
