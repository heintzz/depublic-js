import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./Carousel.css";

import TicketIcon from "assets/images/ticket.png";
import RegistrationIcon from "assets/images/registration.png";
import BookingIcon from "assets/images/booking.png";
import StoreIcon from "assets/images/store.png";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const menu = [
  {
    name: "Ticket",
    image: TicketIcon,
    path: "/ticket",
  },
  {
    name: "Registration",
    image: RegistrationIcon,
    path: "/registration",
  },
  {
    name: "Booking",
    image: BookingIcon,
    path: "/booking",
  },
  {
    name: "Store",
    image: StoreIcon,
    path: "/store",
  },
  {
    name: "Ticket",
    image: TicketIcon,
    path: "/ticket",
  },
  {
    name: "Registration",
    image: RegistrationIcon,
    path: "/registration",
  },
  {
    name: "Booking",
    image: BookingIcon,
    path: "/booking",
  },
  {
    name: "Store",
    image: StoreIcon,
    path: "/store",
  },
];

export default function Menu() {
  return (
    <div className="absolute z-[2] bottom-0 right-[50%] translate-x-[50%] translate-y-[50%] w-full px-7 h-24">
      <span className="home swiper-button-next shadow-md">
        <GrNext />
      </span>
      <span className="home swiper-button-prev shadow-md">
        <GrPrevious />
      </span>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".home.swiper-button-next",
          prevEl: ".home.swiper-button-prev",
        }}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          390: {
            slidesPerView: 4,
          },
        }}
        allowSlidePrev={false}
        onSlideChange={(swiper) => {
          swiper.allowSlidePrev = swiper.activeIndex !== 0;
          swiper.allowSlideNext =
            swiper.activeIndex !== swiper.slides.length - swiper.slidesPerViewDynamic();
        }}
        className="h-full w-full rounded-2xl shadow-xl bg-white"
      >
        {menu.map((item, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col gap-y-2 justify-center items-center first:rounded-l-xl last:rounded-r-xl"
          >
            <Link to={item?.path}>
              <img src={item?.image} alt={item?.name + "Icon"} className="w-12 h-12" />
            </Link>
            <p className="text-sm font-semibold">{item?.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
