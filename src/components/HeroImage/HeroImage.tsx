import Image from "next/image";

interface IHeroImage {
  /**
   * title provides failover incase image has null or empty altText property
   */
  title: string;
  image: { node: { id: string; altText?: string; originalSrc: string } };
}

const HeroImage = ({ title, image }: IHeroImage) => {
  return (
    <div>
      <Image
        className="border border-slate-100 shadow-md"
        src={image.node.originalSrc}
        height={650}
        width={350}
        alt={`${image.node.altText || title}`}
      />
    </div>
  );
};

export default HeroImage;
