import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CardEvent from "./CardEvent";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Carousel.css";

export default function UpcomingEvent() {
  return (
    <div className="pb-6">
      <div className="flex justify-between items-center px-7 ">
        <p className="font-semibold">Upcoming Event</p>
        <p className="text-xs text-gray-400 relative">
          <Link to="/ticket">See All</Link>
          <span className="event swiper-button-next shadow-md">
            <GrNext />
          </span>
          <span className="event swiper-button-prev shadow-md">
            <GrPrevious />
          </span>
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation, FreeMode]}
        freeMode={true}
        slidesPerView={1.075}
        spaceBetween={15}
        navigation={{
          nextEl: ".event.swiper-button-next",
          prevEl: ".event.swiper-button-prev",
        }}
        className="p-7"
        breakpoints={{
          390: {
            slidesPerView: 1.25,
          },
          450: {
            slidesPerView: 1.4,
          },
        }}
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index}>
            <Link to={`/ticket/${index}`}>
              <CardEvent />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
