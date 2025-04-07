import { PricingPlan } from "../types";

const manipulatePricingData = (
  pricingItems: any[],
  isFilter: boolean = false
): PricingPlan[] => {
  if (!pricingItems || pricingItems.length === 0) {
    return [];
  }

  const filtered = isFilter
    ? pricingItems.filter((item) => item.on_homepage)
    : pricingItems;

  return filtered.map((item) => ({
    id: item.id,
    tier: item.tier,
    title: item.title,
    price: item.price,
    features:
      item.features
        ?.filter((feature: any) => feature.available)
        .map((feature: any) => feature.text) || [],
  }));
};

export default manipulatePricingData;
