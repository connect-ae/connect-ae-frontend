import React from "react";

type Props = {
  heading: string;
  className?: string;
  description: string;
};

const MissionCard = ({ className, heading, description }: Props) => {
  return (
    <>
      <div
        className={`${
          className && className
        } p-[1px] rounded-2xl bg-gradient-to-tl from-gray-200 to-gray-200 via-transparent h-full`}
      >
        <div className="bg-linear-to-tl from-white to-gray-50 rounded-2xl p-6 h-full">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
            {heading}
          </h3>
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </>
  );
};

export default MissionCard;
