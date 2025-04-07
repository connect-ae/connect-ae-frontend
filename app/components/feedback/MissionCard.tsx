import React from "react";

type Props = {
  label: string;
  heading: string;
  className?: string;
  description: string;
};

const MissionCard = ({ label, className, heading, description }: Props) => {
  return (
    <>
      <div
        className={`${
          className && className
        } p-[1px] rounded-2xl bg-gradient-to-tl from-gray-200 to-gray-200 via-transparent h-full`}
      >
        <div className="bg-linear-to-tl from-white to-gray-50 rounded-2xl p-6 h-full">
          <p className="text-primary font-semibold mb-3">{label}</p>
          <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
            {heading}
          </h3>
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </>
  );
};

export default MissionCard;
