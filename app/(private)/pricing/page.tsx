"use client";
import { fetchPackages } from "@/app/api/api";
import { PACKAGES_ENDPOINT } from "@/app/api/endpoints";
import HeadSection from "@/app/components/feedback/HeadSection";
import OrderForm from "@/app/components/feedback/OrderForm";
import PricingCard from "@/app/components/feedback/PricingCard";
import Section from "@/app/components/layout/Section";
import Loader from "@/app/components/ui/Loader";
import Modal from "@/app/components/ui/Modal";
import manipulatePricingData from "@/app/manipulators/pricingManipulator";
import { PricingPlan } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

type Props = {};

const Pricing = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<PricingPlan | null>(
    null
  );
  const { data, isLoading } = useQuery({
    queryKey: [PACKAGES_ENDPOINT],
    queryFn: fetchPackages,
  });

  const packagesData = manipulatePricingData(data?.data, false);

  const handleOrderDetail = (data: PricingPlan) => {
    setSelectedPackage(data);
    setIsOpen(true);
  };
  return (
    <>
      <Loader isLoading={isLoading} />
      <HeadSection
        title="Pricing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services", active: true },
        ]}
      />
      <Section background>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {packagesData.map((item: PricingPlan, index: number) => (
            <PricingCard
              slide={item}
              key={index}
              handleOrderClick={() => handleOrderDetail(item)}
            />
          ))}
        </div>
      </Section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Order Now">
        <OrderForm setIsOpen={setIsOpen} selectedPackage={selectedPackage} />
      </Modal>
    </>
  );
};

export default Pricing;
