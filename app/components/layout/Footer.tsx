"use client";
import Image from "next/image";
import Section from "./Section";
import React from "react";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import manipulateServicesData from "@/app/manipulators/servicesManipulator";
import { SERVICES_ENDPOINT } from "@/app/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "@/app/api/api";
import { NAVIGATION_LINKS } from "@/app/config/routes";
import { ADDRESS, EMAIL, LOCATION } from "@/app/config/constant";

// Reusable Link type
type Link = {
  label: string;
  href: string;
};

// Logo and Title Section
const FooterLogo: React.FC = () => (
  <Link
    href={NAVIGATION_LINKS?.home}
    className="relative w-36 md:w-52 h-12 self-stretch"
  >
    <Image
      src="/images/logo-dark.svg"
      alt="Logo"
      fill
      style={{ objectFit: "contain" }}
    />
  </Link>
);

// Reusable Footer Column Component
interface FooterColumnProps {
  title: string;
  links: Link[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-base md:text-lg font-bold text-white uppercase">
      {title}
    </h2>
    <ul className="text-gray-400">
      {links.map((link, index) => (
        <li className="mb-4" key={index}>
          <Link href={link.href} className="hover:underline">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Bottom Bar
const FooterBottom = ({ text }: { text: string }) => (
  <div className="sm:flex sm:items-center sm:justify-between">
    <span className="text-gray-400 sm:text-center">{text}</span>
  </div>
);

// Footer Social icons
const FooterSocialIcons: React.FC = () => (
  <div className="flex items-center md:justify-end justify-center space-x-4">
    <Link href="#" className="text-gray-400 hover:text-white">
      <FacebookLogo size={22} />
    </Link>
    <Link href="#" className="text-gray-400 hover:text-white">
      <XLogo size={22} />
    </Link>
    <Link href="#" className="text-gray-400 hover:text-white">
      <InstagramLogo size={22} />
    </Link>
  </div>
);

// Main Footer Component
const Footer: React.FC = () => {
  const { data } = useQuery({
    queryKey: [SERVICES_ENDPOINT],
    queryFn: fetchServices,
  });

  const servicesData = manipulateServicesData(data?.data, false);

  return (
    <Section className="bg-dark !pb-6 md:!pb-8">
      <div className="lg:flex lg:justify-between lg:items-start">
        <FooterLogo />
        <div className="grid xs:grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
          <FooterColumn
            title="About Us"
            links={[
              { label: "About us", href: "/about" },
              { label: "Our Mission", href: "/about" },
              { label: "Our core values", href: "/about" },
              // { label: "Our Team", href: "/about" },
            ]}
          />
          <FooterColumn
            title="Services"
            links={servicesData
              ?.map((service) => ({
                label: service?.title,
                href: NAVIGATION_LINKS?.servicesDetail?.replace(
                  ":id",
                  String(service?.id)
                ),
              }))
              .slice(0, 4)}
          />
          <FooterColumn
            title="Collaborate With Us"
            links={[
              {
                label: `Email: ${EMAIL}`,
                href: "mailto:contact@company.com",
              },
              // { label: "Phone: +1-800-123-4567", href: "tel:+18001234567" },
              {
                label: `Location: ${LOCATION}`,
                href: ADDRESS,
              },
            ]}
          />
        </div>
      </div>
      <hr className="my-6 border-white/20 sm:mx-auto lg:my-8" />
      <div className="md:flex md:justify-between md:space-y-0 space-y-3 items-center gap-3 text-center md:text-left">
        <FooterBottom text="© 2025 Connect AE. All Rights Reserved." />
        <FooterSocialIcons />
      </div>
    </Section>
  );
};

export default Footer;
