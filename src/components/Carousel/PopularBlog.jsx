import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ISOToDateString } from "utils/helper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Carousel.css";

import Concert from "assets/images/concert.png";

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
            <div className="flex flex-col p-4 w-[100%] max-w-[280px] min-h-[300px] rounded-xl bg-white shadow-md border">
              <img className="h-[120px] w-full bg-cover rounded-xl object-fill" src={Concert} />
              <div className="flex flex-col mt-5">
                <span className="text-primary-500 text-xs">
                  {ISOToDateString("2023-10-21T10:13:08.115Z")}
                </span>
                <div className="flex flex-col gap-y-1 mt-2">
                  <h1 className="font-bold text-lg">Judul Blog</h1>
                  <p className="text-sm text-justify line-clamp-3 text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur. Porta morbi tincidunt phasellus ornare
                    maecenas fringilla arcu non.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
