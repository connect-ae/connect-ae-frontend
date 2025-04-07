import React from "react";

type Props = {
  count: string;
  title: string;
  description: string;
  className?: string;
};

const CoreValueCard = ({
  count,
  title,
  description,
  className = "",
}: Props) => {
  return (
    <div
      className={`p-5 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200 text-center space-y-2 ${className}`}
    >
      <span className="block mb-2 bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-2xl font-extrabold text-transparent">
        {count}
      </span>

      <h4 className="text-xl font-bold text-gray-900">{title}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default CoreValueCard;
