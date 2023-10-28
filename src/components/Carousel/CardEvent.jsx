import Maher from "assets/images/maher-zain.png";
import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";

import { ISOToDateString, NumberToCurrencyFormat } from "utils/helper";

export default function CardEvent({ screenSize = "medium", data }) {
  if (screenSize === "medium")
    return (
      <div className="flex flex-col text-[0.8rem] m-sm:text-[1rem] p-4 w-[100%] max-w-[320px] min-h-[300px] rounded-xl bg-white shadow-md border">
        <img className="h-[150px] w-full bg-cover rounded-xl object-fill text-base" src={Maher} />
        <div className="flex flex-col mt-5">
          <div className="flex gap-x-2 text-xs">
            <div className="flex gap-x-1 items-center">
              <SlLocationPin size="1.25em" /> BANDUNG
            </div>
            |{" "}
            <span className="text-primary-500">{ISOToDateString("2023-10-21T10:13:08.115Z")}</span>
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
    );

  return (
    <div className="flex flex-col col-span-1 p-2 shadow-sm max-h-[330px] rounded-xl bg-white">
      <img
        className="h-[150px] m-sm:h-[100px] m-md:h-[120px] w-full bg-cover rounded-xl object-fill"
        src={data?.image || Maher}
      />
      <div className="flex flex-col mt-3">
        <div className="text-xs flex items-center gap-x-2">
          <div className="flex gap-x-1 items-center">
            <SlLocationPin size="1.25em" /> {data?.location || "BANDUNG"}
          </div>
          |{" "}
          <span className="text-primary-500">
            {ISOToDateString(data?.event_date || "2023-10-21T10:13:08.115Z")}
          </span>
        </div>
        <div className="flex flex-col gap-y-1 mt-2">
          <h1 className="font-bold text-base line-clamp-1">{data?.title || "Judul Event"}</h1>
          <p className="text-xs line-clamp-1">
            {data?.description || "Lorem ipsum dolor sit amet consectet"}
          </p>
        </div>
        <div className="flex flex-wrap items-end my-4">
          <span className="font-bold text-primary-500 text-base">
            {NumberToCurrencyFormat(data?.price || 150000)}
          </span>
          <span>/ 1 Person</span>
        </div>
        <span className="p-[6px] text-success-900 bg-success-50 rounded-xl text-center font-semibold">
          Tersedia
        </span>
      </div>
    </div>
  );
}

CardEvent.propTypes = {
  screenSize: PropTypes.string,
  data: PropTypes.object,
};
