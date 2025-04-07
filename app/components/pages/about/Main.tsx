import React from "react";
import Section from "../../layout/Section";
import Image from "next/image";

const Main = () => {
  return (
    <Section background>
      <div className="md:flex md:items-start gap-6 mb-8 space-y-3 md:*:flex-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Innovation drives our every endeavor.
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          autem reiciendis nobis odio sequi cum non facilis sed obcaecati.
          Magnam cumque repudiandae quibusdam dolorem nesciunt.
          <br />
          Quasi possimus alias fuga, pariatur beatae non? Perspiciatis quam nam
          voluptas, qui nemo molestiae et ipsum ducimus aspernatur!
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
