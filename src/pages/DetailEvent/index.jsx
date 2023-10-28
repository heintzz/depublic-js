import React, { useEffect, useState } from "react";
import { SlLocationPin } from "react-icons/sl";

import Breadcrumbs from "components/Breadcrumbs";
import ChoosePackage from "components/DetailEvent/ChoosePackage";
import Highlight from "components/DetailEvent/Highlight";
import LoginWarning from "components/DetailEvent/LoginWarning";
import Navigation from "components/DetailEvent/Navigation";
import Summary from "components/DetailEvent/Summary";
import Footer from "components/Footer";
import MainLayout from "components/MainLayout";
import SectionSeparator from "components/SectionSeparator";
import { eventServices } from "services/event.services";
import { tokenServices } from "services/token.services";
import { ISOToDateString } from "utils/helper";
import usePaths from "../../hooks/usePaths";

import dummyEvents from "assets/dummy/events.json";

export default function DetailEventPage() {
  const paths = usePaths();
  const isLogin = tokenServices.getAccessToken();
  const [activeTab, setActiveTab] = useState("Summary");
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);

  const id = paths[paths.length - 1];

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await eventServices.getEventDetail(id);
        setEvent(res.data);
      } catch (error) {
        console.error(error);
        setEvent(dummyEvents[id]);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <MainLayout>
      <div className="mb-10">
        {loading ? (
          <div className="px-7 pt-8">loading...</div>
        ) : (
          <React.Fragment>
            <div className="px-7 pt-8">
              <div className="mb-10">
                <Breadcrumbs elements={paths} type="event" />
                <div
                  style={{ backgroundImage: `url(${event?.image})` }}
                  className="mt-7 rounded-lg bg-cover bg-red-200 h-[250px]"
                ></div>
              </div>
              <Navigation active={activeTab} setActive={setActiveTab} />
            </div>
            <hr />
            <div className="px-7 text-xs">
              <div className="flex items-center gap-x-2 mt-4 mb-3">
                <div className="flex gap-x-1 items-center">
                  <SlLocationPin /> {event?.location}
                </div>
                <span>| </span>
                <span className="text-primary-500">{ISOToDateString(event?.event_date)}</span>
              </div>
              <h2 className="text-xl font-bold">{event?.title}</h2>
              <div className="relative mt-2">
                {!isLogin && <LoginWarning />}
                <Summary event={event} />
                <Highlight event={event} />
              </div>
            </div>
            {isLogin && <DetailContent />}
          </React.Fragment>
        )}
      </div>
      <Footer />
    </MainLayout>
  );
}

const DetailContent = () => {
  return (
    <>
      <SectionSeparator additionalClassname="my-10" />
      <ChoosePackage />
    </>
  );
};
