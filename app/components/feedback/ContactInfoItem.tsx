import React from "react";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: { name: string; value: string }[];
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-center space-y-3 text-center">
      <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-r from-primary to-primary-focus text-white rounded-xl text-2xl mb-2">
        {icon}
      </div>
      <h5 className="text-xl font-bold uppercase pb-2 border-b border-gray-300">
        {title}
      </h5>
      {content.map((item, index) => (
        <div key={index} className="flex flex-col space-y-2 mb-3">
          <h5 className="text-lg font-semibold text-black">{item.name}</h5>
          <p className="text-base text-gray-600">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfoItem;
