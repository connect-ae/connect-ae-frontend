"use client";
import React from "react";
import ServiceCard from "../../feedback/ServiceCard";
import { NAVIGATION_LINKS } from "@/app/config/routes";
import Section from "../../layout/Section";
import { fetchServices } from "@/app/api/api";
import { SERVICES_ENDPOINT } from "@/app/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import manipulateServicesData from "@/app/manipulators/servicesManipulator";
import Loader from "../../ui/Loader";

const Services = () => {
  const { data, isLoading } = useQuery({
    queryKey: [SERVICES_ENDPOINT],
    queryFn: fetchServices,
  });

  const servicesData = manipulateServicesData(data?.data, true);

  if (!servicesData || servicesData.length === 0) {
    return null;
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Section className="bg-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col justify-center">
            <h3 className="text-primary text-base md:text-lg">
              Why Choose Our Services
            </h3>
            <h4 className="text-white text-3xl md:text-4xl font-bold">
              Reasons to Choose Our Services
            </h4>
            <p className="text-gray-400 mt-3">
              We offer efficient and tailored services that bring exceptional
              results, helping you achieve your goals with ease.
            </p>
          </div>
          {servicesData.map((service, index) => (
            <ServiceCard
              link={NAVIGATION_LINKS?.servicesDetail?.replace(
                ":id",
                service.id
              )}
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;
