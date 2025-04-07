import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  title: string;
  image: string;
  description: string;
};

const ServiceCard = ({ title, description, image, link }: Props) => {
  return (
    <Link
      href={link}
      className="bg-gradient-to-br from-[#1c1c1c] from-40% to-70% to-[#0e0d0d] p-8 rounded-xl border border-white/15"
    >
      <div className="w-16 h-16 rounded-full bg-primary mb-4 p-4 flex">
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="h-full w-full !relative"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-lg text-gray-400 line-clamp-3">{description}</p>
    </Link>
  );
};

export default ServiceCard;
