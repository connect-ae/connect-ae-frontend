"use client";
import React, { ReactNode } from "react";

type Props = {
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline" | "error";
  icon?: ReactNode;
  error?: string;
  disabled?: boolean;
  rows?: number;
  cols?: number;
};

const Textarea = ({
  label,
  placeholder = "",
  name,
  value,
  onChange,
  className = "",
  size = "medium",
  variant = "default",
  icon,
  error,
  disabled = false,
  rows = 5,
  cols = 30,
}: Props) => {
  const baseStyles =
    "w-full rounded-sm border transition focus:outline-none flex items-center gap-2 bg-white";

  const variants = {
    default: "border-gray-300 focus:ring-2 focus:ring-primary",
    outline: "border-2 border-primary focus:ring-2 focus:ring-primary",
    error: "border-red-500 focus:ring-2 focus:ring-red-500",
  };

  const sizes = {
    small: "px-2 py-0.5 text-sm",
    medium: "px-3 py-1 text-base",
    large: "px-4 py-2 text-lg",
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-1 text-gray-700">
          {label}
        </label>
      )}
      <div
        className={`relative ${baseStyles} ${
          variants[error ? "error" : variant]
        } ${sizes[size]}`}
      >
        {icon && <span>{icon}</span>}
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          cols={cols}
          className="w-full bg-transparent focus:outline-none resize-none"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
