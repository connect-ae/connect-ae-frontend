import React from "react";

interface Props {
  isLoading: boolean;
}

const Loader = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="loader fixed top-0 left-0 h-screen w-screen bg-white flex items-center justify-center z-50">
      <div className="flex items-center justify-center">
        <span className="border-4 border-primary border-t-0 border-l-0 border-solid rounded-full animate-spin h-16 w-16 border-t-transparent"></span>
      </div>
    </div>
  );
};

export default Loader;
