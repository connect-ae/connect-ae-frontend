"use client";
import { fetchServices } from "@/app/api/api";
import { SERVICES_ENDPOINT } from "@/app/api/endpoints";
import HeadSection from "@/app/components/feedback/HeadSection";
import ServiceCard from "@/app/components/feedback/ServiceCard";
import Section from "@/app/components/layout/Section";
import Heading from "@/app/components/ui/Heading";
import Loader from "@/app/components/ui/Loader";
import { NAVIGATION_LINKS } from "@/app/config/routes";
import manipulateServicesData from "@/app/manipulators/servicesManipulator";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: [SERVICES_ENDPOINT],
    queryFn: fetchServices,
  });

  const servicesData = manipulateServicesData(data?.data);

  if (!servicesData || servicesData.length === 0) {
    return null;
  }
  return (
    <>
      <Loader isLoading={isLoading} />
      <HeadSection
        title="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services", active: true },
        ]}
      />
      <Section className="bg-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
