import { Testimonial } from "@/app/types";
import * as Icon from "@phosphor-icons/react";
import React from "react";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="p-[1px] rounded-2xl bg-gradient-to-tl from-gray-200 to-gray-200 via-transparent">
      <div className="bg-linear-to-tl from-white to-gray-50 rounded-2xl p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-4">
            <img
              src={testimonial.avatar}
              alt={`${testimonial.name} Avatar`}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold  leading-tight">{testimonial.name}</h3>
              <p className="text-sm text-primary font-medium leading-tight">
                {testimonial.username}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Icon.Star weight="fill" className="text-yellow-500" />
            <span className="text-xs leading-0 font-semibold ">
              {testimonial.rating}
            </span>
          </div>
        </div>

        <p className="mt-2 text-gray-500 line-clamp-5">{testimonial.comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
