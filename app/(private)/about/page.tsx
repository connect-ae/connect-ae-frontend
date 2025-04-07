"use client";
import HeadSection from "@/app/components/feedback/HeadSection";
import CoreValues from "@/app/components/pages/about/CoreValues";
import Main from "@/app/components/pages/about/Main";
import OurMissions from "@/app/components/pages/about/OurMissions";
import Team from "@/app/components/pages/about/Team";
import React from "react";

const About = () => {
  return (
    <>
      <HeadSection
        title="About Us"
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "About us",
            href: "/about",
            active: true,
          },
        ]}
      />

      <Main />
      <OurMissions />
      <CoreValues />
      <Team />
    </>
  );
};

export default About;
