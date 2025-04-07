import React from "react";

type Props = {
  background?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const Section = ({ background, children, className }: Props) => {
  return (
    <section
      className={`${background && "bg-gray-100"} ${className && className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
