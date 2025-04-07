import React from "react";
import Section from "../../layout/Section";
import Heading from "../../ui/Heading";
import FAQ from "../../feedback/FAQ";
import { FAQ_DATA } from "@/app/config/constant";

const Faq = () => {
  return (
    <Section background>
      <Heading
        text="Frequently Asked Questions"
        description="Find answers to the most common questions about our services and policies."
      />
      <FAQ items={FAQ_DATA} />
    </Section>
  );
};

export default Faq;
