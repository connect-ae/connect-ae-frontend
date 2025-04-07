import Image from "next/image";
import React from "react";
import Button from "../../ui/Button";
import Section from "../../layout/Section";
import { NAVIGATION_LINKS } from "@/app/config/routes";

const Hero = () => {
  return (
    <Section className="h-[400px] md:h-[600px] flex items-center">
      <div className="flex items-center gap-20 justify-between">
        <div className="flex flex-col items-center lg:items-start flex-1 mx-auto lg:mx-0 max-w-[600px] text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2">
            Growing your <span className="text-primary">Business </span>
            with confidence
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            Bonsai is the only tool you need to run your business. Manage your
            clients. deliver great work. get paid, and track your finances.
          </p>
          <Button
            link={NAVIGATION_LINKS?.contact}
            label="Get Started"
            size="large"
          />
        </div>
        <div className="self-stretch hidden lg:block">
          <div className="relative max-w-[400px] h-[500px]">
            <div className="absolute flex items-center justify-center bg-[radial-gradient(circle,_#f93c28_2px,_transparent_2px)] bg-[size:10px_10px] h-20 w-14 z-10 -left-6 bottom-6"></div>
            <div className="absolute flex items-center justify-center bg-[radial-gradient(circle,_#f93c28_2px,_transparent_2px)] bg-[size:10px_10px] h-28 w-20 z-10 -right-10 top-6"></div>
            <div className="absolute -left-8 top-16 w-64 h-52 rounded-xl border-6 border-primary flex items-center justify-center"></div>

            <Image
              fill
              alt="hero Image"
              className="!relative rounded-sm rounded-br-[100px] rounded-tl-[100px] overflow-hidden"
              src="/images/hero.jpg"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
