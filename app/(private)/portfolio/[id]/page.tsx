"use client";
import { findPortfolioById } from "@/app/api/api";
import { PORTFOLIO_ENDPOINT } from "@/app/api/endpoints";
import HeadSection from "@/app/components/feedback/HeadSection";
import Section from "@/app/components/layout/Section";
import Gallery from "@/app/components/ui/Gallery";
import Loader from "@/app/components/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

const PortfolioDetail = (props: Props) => {
  const params = useParams();
  const { id } = params;

  // Fetch the service details based on the 'id' from the URL
  const { data: portfolioRes, isLoading } = useQuery({
    queryKey: [PORTFOLIO_ENDPOINT, id],
    queryFn: () => findPortfolioById(id),
    enabled: !!id,
  });
  const portfolio = portfolioRes?.data;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: portfolio?.title, href: "/services/web-dev", active: true },
  ];

  return (
    <>
      <Loader isLoading={isLoading} />
      <HeadSection title={portfolio?.title} breadcrumbs={breadcrumbs} />

      <Section className="bg-dark">
        <Gallery images={portfolio?.images} />
      </Section>
    </>
  );
};

export default PortfolioDetail;
