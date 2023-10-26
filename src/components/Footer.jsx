import DepublicBrand from "assets/icons/depublic-brand.svg";

export default function Footer() {
  return (
    <div className="px-7 py-12 text-white bg-primary-900 text-xs mt-10">
      <div className="flex justify-between gap-x-5">
        <div className="flex flex-col w-[50%]">
          <img src={DepublicBrand} width={160} />
          <span className="mt-6 mb-9">Tagline company</span>
          <div className="flex gap-x-2">
            <div className="grid place-items-center w-10 h-10 bg-primary-700 rounded-full"></div>
            <div className="grid place-items-center w-10 h-10 bg-primary-700 rounded-full"></div>
            <div className="grid place-items-center w-10 h-10 bg-primary-700 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between w-[50%]">
          {[1, 2].map((i) => {
            return (
              <div key={i} className="flex flex-col gap-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <p className="first:font-semibold first:mb-4 text-[11px]" key={i}>
                    Lorem ipsum
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <hr className="mt-10 mb-6 border-primary-700" />
      <p className="text-center text-[11px]">copyright 2023 Depublic. All Rights Reserved</p>
    </div>
  );
}
