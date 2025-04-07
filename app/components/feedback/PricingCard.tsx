"use client";
import { PricingPlan } from "@/app/types";
import React from "react";
import Button from "../ui/Button";
import List from "../ui/List";
import * as Icon from "@phosphor-icons/react";

type Props = {
  slide: PricingPlan;
  handleOrderClick: () => void;
};

const PricingCard = ({ slide, handleOrderClick }: Props) => {
  return (
    <>
      <div className="flex flex-col w-full transition h-full bg-white rounded-xl shadow-lg shadow-gray-200">
        {/* Tag (Optional) */}
        <div className="p-0.5">
          <div
            className={`uppercase font-jakarta rounded-t-lg rounded-b-xs px-4 py-2 text-center text-sm font-bold ${
              slide?.tier === "pro"
                ? "text-gray-200 bg-dark shadow-lg shadow-gray-300"
                : slide?.tier === "enterprise"
                ? "text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-200"
                : "text-gray-800 bg-gray-200/75 shadow-lg shadow-gray-100"
            }`}
          >
            {slide?.tier === "pro"
              ? "Recommended"
              : slide?.tier === "enterprise"
              ? "Most Popular"
              : "FOR BEGINNERS"}
          </div>
        </div>
        <div className="p-6 flex flex-col gap-1">
          {/* Title */}
          <h2
            className={`text-base md:text-lg uppercase font-bold text-gray-900`}
          >
            {slide?.tier}
          </h2>
          {/* Description */}
          <p className="text-gray-600 leading-tight text-sm md:text-base">
            {slide?.title}
          </p>
          {/* price */}
          <p className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-2 ">
            ${slide?.price}
          </p>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-4 text-left px-6 py-6 flex-1 border-t border-gray-200">
          <List
            className="space-y-3"
            items={slide?.features}
            listItem={(item, index) => (
              <li key={index} className="text-gray-700 flex items-center gap-1">
                <Icon.CheckCircle size={20} className="text-gray-800" />
                <span className="text-gray-500">{item}</span>
              </li>
            )}
          />

          {/* Button */}
          <Button
            variant={slide.tier === "enterprise" ? "primary" : "outline"}
            className="w-full mt-auto rounded-lg py-2 pt-2."
            label="Order Now"
            onClick={handleOrderClick}
          />
        </div>
      </div>
    </>
  );
};

export default PricingCard;
