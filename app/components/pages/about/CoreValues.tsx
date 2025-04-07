import React from "react";
import Heading from "../../ui/Heading";
import Section from "../../layout/Section";
import CoreValueCard from "../../feedback/CoreValueCard";
import { CORE_VALUES_DATA } from "@/app/config/constant";

const CoreValues = () => {
  return (
    <Section background>
      <Heading
        text="Our core values"
        description="Placerat nunc amet sapien neque, purus cras. Elementum viverra egestas fames ornare sed arcu. Consectetur cras vitae orci."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CORE_VALUES_DATA.map((value, index) => (
          <CoreValueCard
            key={index}
            count={value.count}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default CoreValues;
