import Image from "next/image";

const ProductCard = ({
  id,
  name,
  image,
  small,
}: {
  id?: number;
  name?: string;
  image?: string | null;
  description?: string;
  price?: number;
  small?: boolean;
}) => {
  return (
    <div className="p-2 flex flex-col">
      <Image
        className={`aspect-[2/2] rounded-md object-cover hue-rotate-${90}`}
        src={image ?? ""}
        alt={`${name} image`}
        width={1024}
        height={1024}
      />
      <div>
        {name && (
          <h3 className={`mt-2 font-bold leading-10 ${small ? "" : "text-xl"}`}>
            {name}
          </h3>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
