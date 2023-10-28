import Breadcrumbs from "components/Breadcrumbs";
import MainLayout from "components/MainLayout";
import SearchBar from "components/SearchBar";
import { useEffect, useMemo, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import { PiTag } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

import CardEvent from "components/Carousel/CardEvent";
import Footer from "components/Footer";
import { eventServices } from "services/event.services";

import usePaths from "../../hooks/usePaths";

const dummyEvents = [
  {
    id: 0,
    title: "facilis nemo fuga",
    location: "Surakarta",
    description:
      "Debitis ipsa in labore laborum animi possimus. Corporis modi rem culpa error perspiciatis. Nemo ea officia quasi rerum nesciunt minus architecto. Expedita iure quidem vero debitis fuga facilis.",
    image: "https://loremflickr.com/640/480/cats",
    price: 1242817,
    is_available: true,
    event_date: "Tue Dec 05 2023 15:56:58 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 1,
    title: "rerum architecto veniam",
    location: "Surakarta",
    description:
      "At repudiandae ipsa. Cumque at aliquid facere praesentium impedit omnis harum. Inventore assumenda velit ipsam reprehenderit aperiam.",
    image: "https://loremflickr.com/640/480/cats",
    price: 826233,
    is_available: false,
    event_date: "Mon Apr 08 2024 05:58:12 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 2,
    title: "exercitationem dolore doloribus",
    location: "Surakarta",
    description:
      "Molestias voluptatibus porro. Architecto tempore est incidunt sequi. Laborum possimus magnam. Quaerat quas animi qui.",
    image: "https://loremflickr.com/640/480/cats",
    price: 657482,
    is_available: true,
    event_date: "Thu Mar 14 2024 17:01:38 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 3,
    title: "repellendus suscipit ad",
    location: "Surakarta",
    description:
      "Aliquid veniam ad. Mollitia quibusdam reprehenderit quis tempora blanditiis nesciunt. Quis non libero consequuntur eos veniam ab ex. Quisquam ea ex hic laudantium quasi quam ipsam nesciunt nemo.",
    image: "https://loremflickr.com/640/480/cats",
    price: 100551,
    is_available: false,
    event_date: "Mon Jun 03 2024 09:18:02 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 4,
    title: "vero aliquam aperiam",
    location: "Surakarta",
    description:
      "Debitis eveniet qui. Quos libero impedit esse beatae unde non error. Distinctio facere numquam nesciunt. Esse nam eum laudantium eligendi similique unde dicta atque repellendus. Dicta sapiente eum rerum laboriosam. Impedit dolor fuga laboriosam deserunt vero molestias est deserunt nemo.",
    image: "https://loremflickr.com/640/480/cats",
    price: 601034,
    is_available: false,
    event_date: "Thu Dec 14 2023 07:07:27 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 5,
    title: "ut est at",
    location: "Surakarta",
    description:
      "Dicta provident rerum quae repellendus nobis beatae fugit debitis. Nostrum voluptas doloremque necessitatibus adipisci adipisci perferendis voluptatibus provident. Perferendis repellendus consequatur minus id eveniet aspernatur veritatis quod beatae.",
    image: "https://loremflickr.com/640/480/cats",
    price: 701473,
    is_available: true,
    event_date: "Fri Jul 05 2024 21:09:35 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 6,
    title: "veritatis ipsum consectetur",
    location: "Surakarta",
    description:
      "Tenetur repellat dolorem iste ducimus fugit magnam temporibus non nesciunt. Nemo ducimus atque ipsa placeat. Architecto quaerat quis.",
    image: "https://loremflickr.com/640/480/cats",
    price: 290257,
    is_available: true,
    event_date: "Tue Aug 13 2024 11:09:20 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 7,
    title: "saepe asperiores maiores",
    location: "Surakarta",
    description:
      "Illum praesentium atque esse sed dolores optio. Nobis dolores veniam sequi consectetur excepturi excepturi aut earum.",
    image: "https://loremflickr.com/640/480/cats",
    price: 146772,
    is_available: false,
    event_date: "Sun May 12 2024 07:02:39 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 8,
    title: "fuga culpa atque",
    location: "Surakarta",
    description:
      "Delectus laborum ea culpa blanditiis nam eveniet deserunt. Sint sed perspiciatis incidunt consectetur sint itaque.",
    image: "https://loremflickr.com/640/480/cats",
    price: 433681,
    is_available: true,
    event_date: "Mon Apr 01 2024 16:08:44 GMT+0700 (Western Indonesia Time)",
  },
  {
    id: 9,
    title: "error voluptate tempora",
    location: "Surakarta",
    description:
      "Labore illum excepturi optio. Consequuntur error aliquid atque. Quos occaecati eius molestias. Voluptatum perspiciatis dicta provident excepturi eaque. Sit corporis asperiores architecto quos tenetur incidunt a veniam suscipit.",
    image: "https://loremflickr.com/640/480/cats",
    price: 788426,
    is_available: true,
    event_date: "Sun Jan 14 2024 08:05:48 GMT+0700 (Western Indonesia Time)",
  },
];

export default function EventPage() {
  const paths = usePaths();
  const [events, setEvents] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);

  const queryOptions = useMemo(() => {
    // NOTE: queryOptions is an object that will be passed to the API, still static
    return {
      page: 1,
      limit: 10,
    };
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await eventServices.getEvents({
          queryOptions,
        });
        const total = await eventServices.getEvents({
          queryOptions: "",
        });
        setTotalItems(total.data.length);
        setEvents(res.data);
      } catch (error) {
        console.error(error);
        setEvents(dummyEvents);
        setTotalItems(dummyEvents.length);
      } finally {
        setLoading(false);
      }
    })();
  }, [queryOptions]);

  return (
    <MainLayout>
      <div className="pt-8 px-7 mb-10">
        <Breadcrumbs elements={paths} type="event" />
        <div className="flex flex-col m-sm:flex-row gap-y-2 items-center gap-x-2 my-8">
          <SearchBar additionalClassname="w-full" />
          <div className="w-full m-sm:w-fit flex justify-center gap-x-2 items-center min-h-[40px] bg-[#FFF0CC] p-2 rounded-xl">
            <SlLocationPin color="text-secondary-700" strokeWidth="1.5" />
            <span className="font-medium text-sm">Location</span>
            <BsChevronDown color="text-secondary-700" strokeWidth="0.5" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 m-sm:flex-row m-sm:items-center m-sm:justify-between">
          <h2 className="font-bold text-md">All Event</h2>
          <div className="flex gap-x-2">
            <div className="flex items-center justify-center gap-x-[6px] p-2 border-2 border-[#EEEEEE] rounded-[40px] min-w-[80px]">
              <FiSliders color="text-primary-700" />
              <span className="font-semibold text-sm">Filter</span>
            </div>
            <div className="flex items-center justify-center gap-x-[6px] p-2 border-2 border-[#EEEEEE] rounded-[40px] min-w-[80px]">
              <AiOutlineCalendar color="text-primary-700" />
              <span className="font-semibold text-sm">Date</span>
            </div>
            <div className="flex items-center justify-center gap-x-[6px] p-2 border-2 border-[#EEEEEE] rounded-[40px] min-w-[80px]">
              <PiTag color="text-primary-700" />
              <span className="font-semibold text-sm">Price</span>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        {loading ? (
          <p className="mt-5">loading...</p>
        ) : (
          <>
            {/* <p className="text-xs my-6 text-neutral-500">{totalItems} events on result</p>
            <div className="grid gap-x-2 gap-y-6 grid-cols-1 m-sm:grid-cols-2">
              {events.map((data, index) => {
                return (
                  <Link key={index} to={`/ticket/${data.id}`}>
                    <CardEvent screenSize="small" data={data} />
                  </Link>
                );
              })}
            </div> */}
          </>
        )}
      </div>
      <Footer />
    </MainLayout>
  );
}
