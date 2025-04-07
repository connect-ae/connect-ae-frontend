import React from "react";

type Props = {
  isLoading: boolean;
};

const PageLoading = ({ isLoading }: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return null;
};

export default PageLoading;
