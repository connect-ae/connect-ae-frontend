"use client";
import React from "react";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
import Section from "../layout/Section";

type Props = {
  title: string;
  breadcrumbs: { label: string; href: string; active?: boolean }[];
};

const HeadSection = ({ title, breadcrumbs }: Props) => {
  return (
    <Section>
      <div className="bg-white text-center">
        {/* Heading Section */}
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        {/* Breadcrumb Section */}
        <div className="mt-3">
          <nav className="flex items-center justify-center text-gray-500">
            {breadcrumbs.map((breadcrumb, index) => (
              <span className="flex items-center" key={index}>
                {/* If the breadcrumb is active, don't render it as a link */}
                {breadcrumb.active ? (
                  <span className="text-primary font-medium">
                    {breadcrumb.label?.slice(0, 20)}
                    {breadcrumb.label?.length > 19 ? "..." : ""}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="hover:text-primary text-gray-500"
                  >
                    {breadcrumb.label}
                  </Link>
                )}

                {index < breadcrumbs.length - 1 && !breadcrumb.active && (
                  <span className="mx-2">
                    <CaretRight weight="bold" size={15} />
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </Section>
  );
};

export default HeadSection;
