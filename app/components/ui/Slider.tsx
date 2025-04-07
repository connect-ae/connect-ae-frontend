"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  options: any;
  className?: string;
  slides: React.ReactNode[];
}

const Slider = ({ slides, className, options = {} }: Props) => {
  return (
    <Swiper
      className={`!p-2 ${className && className}`}
      modules={[Navigation]}
      navigation
      {...options}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="!h-[unset] transition" key={index}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
