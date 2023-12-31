import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart/useCart";
import { Product } from "../../../types";
import ProductImage from "../ProductImage/ProductImage";
import Button from "../../_atoms/Button/Button";

interface IProductHero {
  product: Product;
}

const ProductHero = ({ product }: IProductHero) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [pauseCycle, setPauseCycle] = useState(false);
  const addCartItem = useCart((state) => state.addCartItem);

  useEffect(() => {
    // useEffect handles the cycling of images
    const imagesCycler = setInterval(() => {
      if (pauseCycle) return;

      currentImageIdx < product.images.length - 1
        ? setCurrentImageIdx((i) => i + 1)
        : setCurrentImageIdx(0);
    }, 2500);
    // useEffect interval cleanup
    return () => clearInterval(imagesCycler);
  }, [currentImageIdx, pauseCycle, product.images.length]);

  const handleImageSelect = (index: number) => {
    setPauseCycle(true);
    setCurrentImageIdx(index);
  };

  return (
    <section
      key={product.id}
      className="grid grid-cols-1 gap-6 border-red-400 md:grid-cols-2 md:gap-12"
    >
      {/* product images section */}
      <div className="flex gap-x-2">
        <ProductImage
          hero
          title={product.title}
          image={product.images[currentImageIdx]}
        />
        <div className="flex flex-col gap-1">
          {product.images.map((image, i) => (
            <ProductImage
              key={image.node.id}
              title={product.title}
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
            {product.title}
          </h2>
          <p className="line-clamp-4 w-full text-sm md:line-clamp-5 md:w-4/5 md:text-base md:font-light">
            {product.description}
          </p>
          <div className="font-light lowercase">
            <p>
              starting at at <span className="font-bold">${product.price}</span>
            </p>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col gap-6 md:mt-10 md:flex-row lg:w-4/5">
          <Button
            outlined
            showDecoration
            disabled
            text={`only $${product.price}`}
            // toastMessage={`item added to cart`}
            action={() => {}}
            fullWidth
          />
          <Button
            showDecoration
            toastMessage={`item added to cart`}
            text={`add to cart`}
            fullWidth
            action={() => addCartItem(product)}
          />
        </div>
      </aside>
    </section>
  );
};

export default ProductHero;
