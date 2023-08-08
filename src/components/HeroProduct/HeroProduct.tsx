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
  return (
    <section key={id} className="border border-red-400 p-2">
      <ProductImage hero title={title} image={images[0]} />
      <div className="flex gap-x-2">
        <ProductImage title={title} image={images[1]} />
        <ProductImage title={title} image={images[2]} />
        <ProductImage title={title} image={images[3]} />
        <ProductImage title={title} image={images[4]} />
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
