"use client";
import { FaqItem } from "@/app/types";
import { CaretDown } from "@phosphor-icons/react";
import React from "react";

type Props = {
  items: FaqItem[];
};

const Accordion: React.FC<Props> = ({ items }) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      {items.map((item, index) => (
        <details
          key={index}
          className="group rounded shadow-lg shadow-gray-200 overflow-hidden user-select-none bg-white"
        >
          <summary className="flex cursor-pointer items-center justify-between font-semibold md:text-lg text-gray-700 group-open:text-dark py-3 px-4">
            {item.question}
            <CaretDown weight="bold" className="group-open:rotate-180" />
          </summary>
          <div className="text-gray-500 p-4 pt-0">{item.answer}</div>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
