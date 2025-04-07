"use client";
import React from "react";
import Section from "../../layout/Section";
import Heading from "../../ui/Heading";
import { TESTIMONIALS_DATA } from "@/app/config/constant";
import TestimonialCard from "../../feedback/TestimonialCard";
import { Testimonial } from "@/app/types";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <Section>
      <Heading
        text={`What our clients say`}
        description={`We value feedback and strive for excellence in every project. Our commitment to quality ensures exceptional results.`}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS_DATA?.map((testimonial: Testimonial, index: number) => (
          <TestimonialCard testimonial={testimonial} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
