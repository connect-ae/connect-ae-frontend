import React from "react";

type Props = {
  items: any[];
  listItem?: (_item: any, index: number) => React.ReactNode;
  className?: string;
};

const List = ({ items, listItem, className }: Props) => {
  return (
    <ul className={className && className}>
      {items?.length > 0 &&
        items.map((item, index) =>
          listItem ? listItem(item, index) : <li key={index}>{item}</li>
        )}
    </ul>
  );
};

export default List;
