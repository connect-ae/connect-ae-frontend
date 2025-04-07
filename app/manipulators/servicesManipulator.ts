import { Service } from "../types";

const manipulateServicesData = (
  services: any[],
  isFilter: boolean = false
): Service[] => {
  if (!services || services.length === 0) {
    return [];
  }

  const filtered = isFilter
    ? services.filter((service) => service.on_homepage)
    : services;

  return filtered?.map((service) => ({
    id: service.id,
    image: service?.icon_image,
    description: service?.description,
    title: service?.title,
  }));
};

export default manipulateServicesData;
