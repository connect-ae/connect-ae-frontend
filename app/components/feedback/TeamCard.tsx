import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  role: string;
  image: string;
  className?: string;
};

const TeamCard = ({ name, role, image, className = "" }: Props) => {
  return (
    <div className={`text-center space-y-3 ${className}`}>
      <div className="h-60 overflow-hidden">
        <Image
          layout="fill"
          src={image}
          alt={name}
          className="!relative mx-auto rounded-xl object-cover"
        />
      </div>
      <div>
        <h4 className="text-xl font-bold text-dark">{name}</h4>
        <p className="font-medium text-primary">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
