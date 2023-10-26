import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";

import Btob from "assets/images/btob.png";
import Maher from "assets/images/maher-zain.png";
import { Link } from "react-router-dom";

const highlight = [
  {
    name: "BTOB",
    image: Btob,
  },
  {
    name: "Maher Zain",
    image: Maher,
  },
  {
    name: "BTOB",
    image: Btob,
  },
  {
    name: "Maher Zain",
    image: Maher,
  },
];

export default function Highlight() {
  return (
    <div className="py-9">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
        }}
        className="rounded-2xl"
      >
        {highlight.map((item, index) => (
          <SwiperSlide key={index} className="h-[200px] max-w-[calc(100%-54px)] mb-12">
            {({ isActive }) => (
              <Link to={`/ticket/${index}`}>
                <div
                  className={` ${
                    isActive ? "h-[200px]" : "h-[180px] mt-[10px]"
                  } rounded-2xl bg-cover`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
