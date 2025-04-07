import Image from "next/image";

interface Props {
  images: string[];
}

const Gallery: React.FC<Props> = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3">
      {images?.map((image, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden mb-3 border border-gray-900"
        >
          <Image
            src={image || "/images/fallback.png"}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="contain"
            className="rounded-lg !relative"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
