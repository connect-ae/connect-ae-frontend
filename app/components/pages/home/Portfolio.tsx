"use client";
import React from "react";
import PortfolioCard from "../../feedback/PortfolioCard";
import Heading from "../../ui/Heading";
import { NAVIGATION_LINKS } from "@/app/config/routes";
import Section from "../../layout/Section";
import { useQuery } from "@tanstack/react-query";
import { PORTFOLIO_ENDPOINT } from "@/app/api/endpoints";
import { fetchPortfolio } from "@/app/api/api";
import manipulatePortfolioData from "@/app/manipulators/portfolioManipulator";
import Loader from "../../ui/Loader";

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
      <Section>
        <Heading
          text="Our Portfolio"
          description="Explore our diverse range of projects, from creative designs to cutting-edge development solutions. We specialize in delivering digital experiences that inspire and drive business growth."
        />

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
