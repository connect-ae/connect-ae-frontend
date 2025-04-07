"use client";
import { findServiceById } from "@/app/api/api";
import { SERVICES_ENDPOINT } from "@/app/api/endpoints";
import HeadSection from "@/app/components/feedback/HeadSection";
import Section from "@/app/components/layout/Section";
import Portfolio from "@/app/components/pages/home/Portfolio";
import Pricing from "@/app/components/pages/home/Pricing";
import Heading from "@/app/components/ui/Heading";
import Loader from "@/app/components/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

const ServiceDetail = ({}: Props) => {
  const params = useParams();
  const { id } = params;
  // Fetch the service details based on the 'id' from the URL
  const { data: serviceRes, isLoading } = useQuery({
    queryKey: [SERVICES_ENDPOINT, id],
    queryFn: () => findServiceById(id),
    enabled: !!id, // Ensure the query runs only if 'id' is available
  });
  const service = serviceRes?.data;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service?.title, href: `/services/${id}`, active: true }, // Link to the specific service
  ];

  return (
    <>
      <Loader isLoading={isLoading} />
      <HeadSection title={service?.title} breadcrumbs={breadcrumbs} />
      <Section background>
        <div className="md:flex items-start justify-between md:*:flex-1 gap-8 mb-8 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl max-w-xl font-bold text-black mx-0 text-left">
            {service?.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-0 text-left">
            {service?.description}
          </p>
        </div>

        <div className="h-96 rounded-sm overflow-hidden">
          <Image
            layout="fill"
            className="!relative"
            src={service?.image || "/images/fallback.png"}
            alt={service?.title || ""}
            objectFit="cover"
          />
        </div>
      </Section>

      {service?.sections?.length > 0 &&
        service.sections.map((section: any, index: any) => (
          <Section background={index % 2 !== 0} key={index}>
            <div
              className={`flex flex-col-reverse md:flex ${
                index % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-between gap-12 lg:*:flex-1`}
            >
              <Heading
                align="left"
                text={section?.title}
                description={section?.description}
              />
              <div className="h-64 sm:h-80 md:h-96 w-full border border-gray-300 bg-white rounded-2xl overflow-hidden relative">
                <Image
                  fill
                  className="object-cover"
                  src={section?.image || "/images/fallback.png"}
                  alt={section?.title || "Service Section Image"}
                />
              </div>
            </div>
          </Section>
        ))}
      <Portfolio />

      <Pricing />
    </>
  );
};

export default ServiceDetail;
