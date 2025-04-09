import React from "react";
import Section from "../../layout/Section";
import Heading from "../../ui/Heading";
import MissionCard from "../../feedback/MissionCard";

type Props = {};

const OurMissions = (props: Props) => {
  return (
    <Section>
      <Heading text="Our Mission" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Wide Card */}
        <div className="sm:col-span-2">
          <MissionCard
            heading="Our mission is simple"
            description="to connect businesses with the people who matter most — their customers. Through targeted SEO, paid media, social marketing, and custom digital solutions, we turn online presence into measurable growth."
          />
        </div>

        {/* Two Equal Cards */}
        <MissionCard
          heading="With a focus on transparency"
          description="creativity, and results, we work as an extension of your team — aligning your goals with strategies that actually move the needle."
        />
        <MissionCard
          heading="We blend strategy with creativity"
          description="data with intuition, and big ideas with even bigger execution. Think of us as the team that plugs you into the right audience, at the right time, in the right way."
        />

        {/* Bottom Wide Card */}
        <div className="sm:col-span-2">
          <MissionCard
            heading="We started Connect AE"
            description="because we saw too many brands getting lost in the noise. Our mission? Help you rise above it. Whether it’s crafting scroll-stopping content, building ad campaigns that actually convert, or making sure Google knows you exist (and loves you), we’re here to make it happen."
          />
        </div>
      </div>
    </Section>
  );
};

export default OurMissions;
