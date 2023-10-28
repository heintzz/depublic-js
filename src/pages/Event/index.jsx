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

import dummyEvents from "assets/dummy/events.json";
import usePaths from "../../hooks/usePaths";

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
                    <CardEvent screenSize="small" data={data} />
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
