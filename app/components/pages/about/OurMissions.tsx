import React from "react";
import Section from "../../layout/Section";
import Heading from "../../ui/Heading";
import MissionCard from "../../feedback/MissionCard";

type Props = {};

const OurMissions = (props: Props) => {
  return (
    <Section>
      <Heading
        text="We are here for a mission"
        description="Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing vitae, aliquet lorem. Praesent nulla consequat mauris, tristique elementum,."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Wide Card */}
        <div className="sm:col-span-2">
          <MissionCard
            label="Optimizing Marketing Processes"
            heading="We boast a unique, close-knit team with experts in all facets of web marketing: strategic, creative and technical."
            description="Urna consectetur justo morbi parturient. Sodales massa pulvinar mattis eros nam sed congue. Enim cras nibh aliquam pretium, tellus hendrerit enim ut bibendum. Mattis vitae, amet posuere quam ut ullamcorper. Non porttitor risus morbi facilisi vel magna amet sed bibendum. Aliquet bibendum viverra et vestibulum, est viverra pulvinar nulla lobortis."
          />
        </div>

        {/* Two Equal Cards */}
        <MissionCard
          label="Optimizing Marketing Processes"
          heading="Our digital marketing team goes beyond results"
          description="Massa mauris velit, sodales mi vulputate amet. Accumsan eu donec etiam consequat. Amet ultrices mi malesuada lobortis id elementum ultrices nunc."
        />
        <MissionCard
          label="Growing Online Businesses"
          heading="Helping businesses improve their marketing efforts and gain a competitive edge."
          description="Et mauris malesuada tempus nulla tempus libero.  Dignissim sapien praesent nunc aliquam amet facilisi. Ut proin ultrices."
        />

        {/* Bottom Wide Card */}
        <div className="sm:col-span-2">
          <MissionCard
            label="Optimizing Marketing Processes"
            heading="Our passion fuels our pride on staying up to date with all the latest developments."
            description="Consequat amet montes, sagittis, sem. Etiam ipsum laoreet velit in nisl diam vel aliquam praesent. Dictumst porta elit mauris tellus ac. Sed tempor in eleifend varius fermentum amet ipsum vel condimentum. Tortor eu iaculis diam, quis viverra. Quisque volutpat orci posuere ultrices a mauris est, eget. Lectus suscipit integer."
          />
        </div>
      </div>
    </Section>
  );
};

export default OurMissions;
