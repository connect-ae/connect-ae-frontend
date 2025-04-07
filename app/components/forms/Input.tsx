"use client";
import React, { ReactNode } from "react";

// Input component props with common HTML input attributes
type Props = {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline" | "error";
  icon?: ReactNode;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  autoComplete?: string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  ariaLabel?: string;
};

// Functional Input Component
const Input = ({
  label,
  type = "text",
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
  readOnly = false,
  autoFocus = false,
  required = false,
  minLength,
  maxLength,
  pattern,
  autoComplete,
  min,
  max,
  step,
  ariaLabel,
}: Props) => {
  const baseStyles =
    "w-full rounded border transition focus:outline-none flex items-center gap-2 bg-white";

  const variants = {
    default: "border-gray-300 focus:ring-2 focus:ring-primary",
    outline: "border-2 border-primary focus:ring-2 focus:ring-primary",
    error: "border-red-500 focus:ring-2 focus:ring-red-500",
  };

  const sizes = {
    small: "px-2.5 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label */}
      {label && (
        <label htmlFor={name} className="block mb-1 text-gray-700">
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div
        className={`relative ${baseStyles} ${
          variants[error ? "error" : variant]
        } ${sizes[size]}`}
      >
        {/* Optional Icon */}
        {icon && <span>{icon}</span>}

        {/* Input element with full flexibility */}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          autoComplete={autoComplete}
          min={min}
          max={max}
          step={step}
          aria-label={ariaLabel}
          className="w-full bg-transparent focus:outline-none"
        />
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
