import React, { ReactNode } from "react";
import Link from "next/link"; // Assuming you are using Next.js

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline"; // Added outline variant
  className?: string;
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  link?: string; // New link prop
  type?: "button" | "submit" | "reset"; // Added type prop for <button>
};

const Button = ({
  label,
  onClick,
  variant = "primary",
  className,
  size = "medium",
  icon,
  link,
  type = "button", // Default type is "button"
}: ButtonProps) => {
  const baseStyles =
    "rounded-full text-center justify-center transition cursor-pointer flex items-center gap-1.5 capitalize";

  const variants = {
    primary:
      "bg-gradient-to-bl from-primary to-primary-focus text-white hover:bg-primary-hover",
    secondary:
      "bg-gradient-to-bl from-secondary to-secondary-focus text-white hover:bg-secondary-hover",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium ", // Added outline styles
  };

  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-base",
    large: "px-7 py-3 text-lg",
  };

  if (link) {
    return (
      <Link
        href={link}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
          className && className
        }`}
      >
        {label}
        {icon && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type} // Pass the type for the button here
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        className && className
      }`}
      onClick={onClick}
    >
      {label}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
