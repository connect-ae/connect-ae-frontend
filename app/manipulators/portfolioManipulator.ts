import { Portfolio } from "../types";

const manipulatePortfolioData = (portfolioItems: any[]): Portfolio[] => {
  if (!portfolioItems || portfolioItems.length === 0) {
    return [];
  }

  const filtered = portfolioItems.filter((item) => item.on_homepage);

  return filtered?.map((item) => ({
    id: item?.id,
    image: item?.images,
    description: item?.description,
    title: item?.title,
    category: item?.service.title,
  }));
};

export default manipulatePortfolioData;
