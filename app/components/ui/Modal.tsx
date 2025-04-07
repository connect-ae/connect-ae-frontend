"use client";

import { X } from "@phosphor-icons/react";
import React, { ReactNode, useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  scroll?: boolean;
  children: ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "default" | "danger";
  showCloseButton?: boolean;
  footer?: React.ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  scroll = true,
  footer,
  size = "medium",
  variant = "default",
  showCloseButton = true,
}: Props) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const sizes = {
    small: "max-w-[400px]",
    medium: "max-w-[600px]",
    large: "max-w-[800px]",
  };

  const variants = {
    default: "bg-white",
    danger: "bg-red-100 border border-red-500",
  };

  return (
    <div
      className={`${
        isOpen
          ? "modal-open pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } fixed transition top-0 left-0 bg-black/60 z-50 h-screen w-screen flex items-start p-5 justify-center ${
        scroll ? "overflow-auto" : ""
      }`}
    >
      {/* Click outside to close modal */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal container */}
      <div
        className={`relative flex flex-col w-full p-6 rounded-2xl shadow-lg ${sizes[size]} ${variants[variant]}`}
      >
        {/* Close button (X icon) */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <X weight="bold" />
          </button>
        )}

        {/* Title */}
        {title && <h2 className="text-xl  font-bold mb-4">{title}</h2>}

        {/* Body */}
        <div className={`flex-1 `}>{children}</div>

        {/* Footer */}
        {footer && <div className="flex justify-end mt-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
