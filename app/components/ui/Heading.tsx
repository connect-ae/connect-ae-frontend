import React from "react";

type Props = {
  text: string;
  description?: string | React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: string;
  align?: "left" | "center" | "right";
  className?: string;
  darkMode?: boolean;
};

const Heading = ({
  text,
  description,
  size = "md",
  color = "text-black",
  align = "center",
  className = "",
  darkMode = false,
}: Props) => {
  const sizeClasses = {
    sm: "text-xl sm:text-2xl md:text-3xl",
    md: "text-2xl sm:text-3xl md:text-4xl",
    lg: "text-3xl sm:text-4xl md:text-5xl",
  };

  const textColorClass = darkMode ? `${color} dark:text-white` : `${color}`;

  const descColorClass = darkMode
    ? "text-gray-500 dark:text-gray-400"
    : "text-gray-500";

  return (
    <div className="mb-8 space-y-3">
      <h2
        className={`${sizeClasses[size]} max-w-xl font-bold ${textColorClass} ${
          align === "center" ? "mx-auto" : "mx-0"
        } text-${align} ${className}`}
      >
        {text}
      </h2>
      {description && (
        <p
          className={`${descColorClass} max-w-2xl ${
            align === "center" ? "mx-auto" : "mx-0"
          } text-${align}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
