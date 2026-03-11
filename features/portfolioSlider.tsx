"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { slides } from "@/lib/portfolio";
import Image from "next/image";

function PortfolioSlider() {
  return (
    <div className="relative">
      <Swiper
        className="h-72 w-full sm:h-96 md:h-125"
        spaceBetween={0}
        slidesPerView={"auto"}
        loop={true}
        speed={6000}
        freeMode={true}
        autoplay={{
          delay: 0,
        }}
        modules={[Autoplay, FreeMode]}
      >
        {slides.map((items, index) => (
          <SwiperSlide key={items.id} className="w-auto! p-2 md:p-3">
            <Image
              className="block h-full w-auto max-w-none object-cover hover:scale-105 overflow-visible transition-all"
              height={400}
              width={200}
              unoptimized
              src={items.imageUrl}
              alt={`image${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PortfolioSlider;
