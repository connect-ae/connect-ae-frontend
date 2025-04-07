import React, { useState } from "react";
import Button from "./Button";

// Define types for the items prop and the structure of each tab item
interface TabItem {
  key: number;
  label: string;
  content: string | React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<number>(items[0]?.key);

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        {items.map((item) => (
          <Button
            variant={activeTab === item.key ? "primary" : "outline"}
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            label={item.label}
          />
        ))}
      </div>
      <div className="tab-content">
        {items
          .filter((item) => item.key === activeTab)
          .map((item) => (
            <div key={item.key}>{item.content}</div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
