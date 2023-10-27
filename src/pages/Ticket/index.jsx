import Breadcrumbs from "components/Breadcrumbs";
import MainLayout from "components/MainLayout";
import SearchBar from "components/SearchBar";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import { PiTag } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

import Footer from "components/Footer";
import { useEffect, useMemo, useState } from "react";
import { ISOToDateString } from "utils/helper";
import { eventServices } from "services/event.services";
import { NumberToCurrencyFormat } from "utils/helper";

export default function TicketPage() {
  const path = useLocation();
  const paths = path.pathname.split("/");
  paths.splice(0, 1);

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
      } finally {
        setLoading(false);
      }
    })();
  }, [queryOptions]);

  return (
    <MainLayout>
      <div className="pt-8 px-7">
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
          <p>Loading...</p>
        ) : (
          <>
            <p className="text-xs my-6 text-neutral-500">{totalItems} events on result</p>
            <div className="grid gap-x-2 gap-y-6 grid-cols-1 m-sm:grid-cols-2 mb-20">
              {events.map((data, index) => {
                return (
                  <Link key={index} to={`/ticket/${data.id}`}>
                    <div className="text-xs col-span-1 flex flex-col p-2 shadow-sm max-h-[330px] rounded-xl bg-white">
                      <img
                        className="h-[150px] m-sm:h-[100px] m-md:h-[120px] w-full bg-cover rounded-xl object-fill"
                        src={data.image}
                      />
                      <div className="flex flex-col mt-3">
                        <div className="text-xs flex items-center gap-x-2">
                          <div className="flex gap-x-1 items-center">
                            <SlLocationPin size="1.25em" /> {data.location}
                          </div>
                          |{" "}
                          <span className="text-primary-500">
                            {ISOToDateString(data.event_date)}
                          </span>
                        </div>
                        <div className="flex flex-col gap-y-1 mt-2">
                          <h1 className="font-bold text-base line-clamp-1">{data.title}</h1>
                          <p className="text-xs line-clamp-1">{data.description}</p>
                        </div>
                        <div className="flex flex-wrap items-end my-4">
                          <span className="font-bold text-primary-500 text-base">
                            {NumberToCurrencyFormat(data.price)}
                          </span>
                          <span>/ 1 Person</span>
                        </div>
                        <span className="p-[6px] text-success-900 bg-success-50 rounded-xl text-center font-semibold">
                          Tersedia
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </MainLayout>
  );
}
