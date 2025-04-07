"use client";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react";
import Link from "next/link";

type Props = {
  className?: string;
  title: string;
  link: string;
  category: string;
  image: string;
};

const PortfolioCard = ({ className, title, category, image, link }: Props) => {
  return (
    <Link href={link} className={`${className} h-full`}>
      <div className="relative h-64">
        {image && (
          <Image
            src={image}
            alt="Portfolio image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-lg"
          />
        )}
      </div>

      <div className="px-2 pt-4 flex items-center gap-4 justify-between">
        <div>
          <p className="text-primary font-medium line-clamp-2">{category}</p>
          <h2 className="text-2xl font-bold line-clamp-2">{title}</h2>
        </div>
        <Button
          className="!p-0 h-10 flex-[0_0_40px]"
          icon={<Icon.ArrowUpRight weight="bold" size={18} />}
        />
      </div>
    </Link>
  );
};

export default PortfolioCard;
