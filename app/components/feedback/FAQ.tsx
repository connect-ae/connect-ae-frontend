import React from "react";
import Accordion from "../ui/Accordion";
import { FaqItem } from "@/app/types";

type Props = {
  items: FaqItem[];
};

const FAQ = ({ items }: Props) => {
  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
      <Accordion items={firstHalf} />
      <Accordion items={secondHalf} />
    </div>
  );
};

export default FAQ;
