import Concert from "assets/images/concert.png";

import { ISOToDateString } from "utils/helper";

export default function CardBlog() {
  return (
    <div className="flex flex-col p-4 w-[100%] text-[0.8rem] m-sm:text-[1rem] max-w-[280px] min-h-[300px] rounded-xl bg-white shadow-md border">
      <img className="h-[120px] w-full bg-cover rounded-xl text-base object-fill" src={Concert} />
      <div className="flex flex-col mt-5">
        <span className="text-primary-500 text-xs">
          {ISOToDateString("2023-10-21T10:13:08.115Z")}
        </span>
        <div className="flex flex-col gap-y-1 mt-2">
          <h1 className="font-bold text-lg">Judul Blog</h1>
          <p className="text-sm text-justify line-clamp-3 text-neutral-300">
            Lorem ipsum dolor sit amet consectetur. Porta morbi tincidunt phasellus ornare maecenas
            fringilla arcu non.
          </p>
        </div>
      </div>
    </div>
  );
}
