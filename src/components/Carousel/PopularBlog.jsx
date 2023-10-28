import { GrNext, GrPrevious } from "react-icons/gr";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Carousel.css";

import CardBlog from "./CardBlog";

export default function PopularBlog() {
  return (
    <div className="pt-6">
      <div className="flex justify-between items-center px-7">
        <p className="font-semibold">Popular Blog</p>
        <p className="text-xs text-gray-400 relative">
          <span>See All</span>
          <span className="blog swiper-button-next shadow-md">
            <GrNext />
          </span>
          <span className="blog swiper-button-prev shadow-md">
            <GrPrevious />
          </span>
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation, FreeMode]}
        freeMode={true}
        slidesPerView={1.15}
        spaceBetween={15}
        navigation={{
          nextEl: ".blog.swiper-button-next",
          prevEl: ".blog.swiper-button-prev",
        }}
        className="p-7"
        breakpoints={{
          340: {
            slidesPerView: 1.25,
          },
          380: {
            slidesPerView: 1.5,
          },
        }}
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index}>
            <CardBlog />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
