"use client";
import React, { useState } from "react";
import Slider from "../../ui/Slider";
import { PricingPlan } from "@/app/types";
import PricingCard from "../../feedback/PricingCard";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import OrderForm from "../../feedback/OrderForm";
import Section from "../../layout/Section";
import { PACKAGES_ENDPOINT } from "@/app/api/endpoints";
import { fetchPackages } from "@/app/api/api";
import manipulatePricingData from "@/app/manipulators/pricingManipulator";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../ui/Loader";

const Pricing = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<PricingPlan | null>(
    null
  );
  const { data, isLoading } = useQuery({
    queryKey: [PACKAGES_ENDPOINT],
    queryFn: fetchPackages,
  });

  const packagesData = manipulatePricingData(data?.data);

  const handleOrderDetail = (data: PricingPlan) => {
    setSelectedPackage(data);
    setIsOpen(true);
  };

  const slides = packagesData.map((item: PricingPlan, index: number) => (
    <PricingCard
      slide={item}
      key={index}
      handleOrderClick={() => handleOrderDetail(item)}
    />
  ));

  const options = {
    autoplay: { delay: 2000 },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  };

  if (!packagesData || packagesData.length === 0) {
    return null;
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Section background>
        <Heading
          text="Our Pricing Plans"
          description="With our simple plans, supercharge your content writing to helps your business. Let’s make great content together."
        />
        <Slider
          slides={slides}
          options={options}
          className="pricing_slider !pt-4"
        />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Order Now"
        >
          <OrderForm setIsOpen={setIsOpen} selectedPackage={selectedPackage} />
        </Modal>
      </Section>
    </>
  );
};

export default Pricing;
