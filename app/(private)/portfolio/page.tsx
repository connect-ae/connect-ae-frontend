"use client";
import { fetchPortfolio } from "@/app/api/api";
import { PORTFOLIO_ENDPOINT } from "@/app/api/endpoints";
import HeadSection from "@/app/components/feedback/HeadSection";
import PortfolioCard from "@/app/components/feedback/PortfolioCard";
import Section from "@/app/components/layout/Section";
import Heading from "@/app/components/ui/Heading";
import Loader from "@/app/components/ui/Loader";
import { NAVIGATION_LINKS } from "@/app/config/routes";
import manipulatePortfolioData from "@/app/manipulators/portfolioManipulator";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: [PORTFOLIO_ENDPOINT],
    queryFn: fetchPortfolio,
  });

  const portfolioData = manipulatePortfolioData(data?.data);

  if (!portfolioData || portfolioData.length === 0) {
    return null;
  }
  return (
    <>
      <Loader isLoading={isLoading} />
      <HeadSection
        title="Portfolio"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Portfolio",
            href: "/portfolio",
            active: true,
          },
        ]}
      />
      <Section background>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              image={item.image[0]}
              category={item.category}
              link={NAVIGATION_LINKS.portfolioDetail.replace(":id", item.id)}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Portfolio;
