import Breadcrumbs from "components/Breadcrumbs";
import MainLayout from "components/MainLayout";
import { useLocation } from "react-router-dom";

import Footer from "components/Footer";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { ISOToDateString } from "utils/helper";

import Search from "assets/icons/search.svg";
import Maher from "assets/images/maher-zain.png";
import NavigateButton from "components/NavigateButton";
import { tokenServices } from "services/token.services";

export default function DetailEventPage() {
  const isLogin = tokenServices.getAccessToken();
  const [activeTab, setActiveTab] = useState("Summary");
  const path = useLocation();
  const paths = path.pathname.split("/");
  paths.splice(0, 1);

  return (
    <MainLayout>
      <div className="px-7 pt-8">
        <div className="mb-10">
          <Breadcrumbs elements={paths} type="event" />
          <img src={Maher} alt="maher cover" className="mt-7" />
        </div>
        <div className="flex gap-x-2 justify-between text-xs overflow-x-auto">
          {["Summary", "Highlighted", "Package", "Location", "Order"].map((item, index) => {
            return (
              <p
                key={index}
                className={`${
                  activeTab === item
                    ? "border-b-primary-700 text-primary-700 font-bold"
                    : "border-b-transparent text-neutral-500"
                } border-b-2 pb-3 cursor-pointer transition-all duration-200 ease-in`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="px-7 text-xs">
        <div className="flex items-center gap-x-2 mt-4 mb-3">
          <div className="flex gap-x-1 items-center">
            <SlLocationPin /> BANDUNG
          </div>
          <span>| </span>
          <span className="text-primary-500">{ISOToDateString("2023-10-21T10:13:08.115Z")}</span>
        </div>
        <h2 className="text-xl font-bold">Konser Silaturahmi Maher Zain</h2>
        <div className="relative mt-2">
          {isLogin ? null : (
            <div className="absolute h-full w-[110%] translate-x-[50%] bg-transparent top-0 right-[50%] backdrop-blur-[4px] grid place-content-center">
              <div className="flex flex-col items-center gap-y-4 bg-white w-full px-10 py-6 rounded-xl">
                <div className="flex items-center gap-x-2">
                  <img src={Search} alt="search icon" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">Want to see more details?</span>
                    <span>Login first to enter this page</span>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <NavigateButton mode="btn-md-outline" path="/login">
                    Sign In
                  </NavigateButton>
                  <NavigateButton mode="btn-md-full" path="/signup">
                    Sign Up
                  </NavigateButton>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col-reverse gap-y-3 m-sm:flex-row m-sm:gap-x-5 items-start text-neutral-500">
            <div className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, repudiandae! Quam,
              dolorem mollitia, quae illo dolores porro quasi doloremque quibusdam vero cupiditate
              voluptatibus sint facilis corporis modi aliquid laudantium fuga.
            </div>
            <div className="flex flex-col justify-end gap-y-1 m-sm:min-w-[140px]">
              <span>Starting From</span>
              <span className="text-primary-500 font-bold text-lg">IDR 1.999.000</span>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-8 mb-4">Highlight</h3>
          <ul className="list-disc pl-4">
            <li>
              Saksikan langsung penampilan memukau dari Maher Zain lewat tur perdana mereka, “2023
              LE SSERAFIM TOUR &aposFLAME RISES&apos IN JAKARTA”
            </li>
            <li>Konser akan berlangsung pada tanggal 3 Oktober 2023 di JIEXPO Hall B3, Jakarta</li>
            <li>
              Untuk cara penggunaan membership code saat periode presale, harap kunjungi laman ini
            </li>
          </ul>
        </div>
      </div>
      {isLogin && <Footer />}
    </MainLayout>
  );
}
