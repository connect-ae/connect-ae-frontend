import React from "react";
import Section from "../../layout/Section";
import Image from "next/image";

const Main = () => {
  return (
    <Section background>
      <div className="md:flex md:items-start gap-6 mb-8 space-y-3 md:*:flex-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          At Connect AE, we don’t just market. We connect, engage, and grow.
        </h2>
        <p className="text-gray-500">
          Connect AE is a digital marketing agency built on insight, innovation,
          and impact. We help brands navigate the ever-changing digital
          landscape with smart strategies, compelling content, and
          performance-driven campaigns.
        </p>
      </div>

      <Image
        src="/images/about.jpg"
        alt={"Aout image"}
        layout="fill"
        objectFit="cover"
        className="!relative !h-100 rounded-sm"
      />
    </Section>
  );
};

export default Main;
