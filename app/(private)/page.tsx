import React from "react";
import Hero from "../components/pages/home/Hero";
import Services from "../components/pages/home/Services";
import Pricing from "../components/pages/home/Pricing";
import Portfolio from "../components/pages/home/Portfolio";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
    </>
  );
};

export default Home;
