import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlLocationPin } from "react-icons/sl";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ISOToDateString } from "utils/helper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Carousel.css";

import Maher from "assets/images/maher-zain.png";
import { Link } from "react-router-dom";

export default function UpcomingEvent() {
  return (
    <div className="pb-6">
      <div className="flex justify-between items-center px-7 ">
        <p className="font-semibold">Upcoming Event</p>
        <p className="text-xs text-gray-400 relative">
          <span>See All</span>
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
          "390": {
            slidesPerView: 1.25,
          },
          "450": {
            slidesPerView: 1.4,
          },
        }}
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index}>
            <Link to={`/ticket/${index}`}>
              <div className="flex flex-col text-xs p-4 w-[100%] max-w-[320px] min-h-[300px] rounded-xl bg-white shadow-md border">
                <img className="h-[150px] w-full bg-cover rounded-xl object-fill" src={Maher} />
                <div className="flex flex-col mt-5">
                  <div className="flex gap-x-2">
                    <div className="flex gap-x-1 items-center">
                      <SlLocationPin size="1.25em" /> BANDUNG
                    </div>
                    |{" "}
                    <span className="text-primary-500">
                      {ISOToDateString("2023-10-21T10:13:08.115Z")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1 mt-2">
                    <h1 className="font-bold text-lg">Judul Event</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectet</p>
                  </div>
                  <div className="flex flex-wrap items-end my-4 text-lg">
                    <span className="font-bold text-primary-500">IDR 1.999.000</span>
                    <span>/ 1 Person</span>
                  </div>
                  <span className="p-[6px] text-success-900 bg-success-50 rounded-xl text-center font-semibold">
                    Tersedia
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
