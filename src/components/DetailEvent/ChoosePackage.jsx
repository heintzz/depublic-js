export default function ChoosePackage() {
  return (
    <div className="flex flex-col px-7">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">Choose Package</h2>
        <p className="font-semibold text-xs text-primary-500">View Calendar</p>
      </div>
      <div className="flex flex-wrap mt-6 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Tru", "Fri", "Sat"].map((item, index) => {
          const isActive = index === 0;
          return (
            <div
              key={index}
              className={`flex flex-col text-xs rounded-md justify-center ${
                isActive
                  ? " text-secondary-700 border-secondary-700"
                  : "text-neutral-300 border-neutral-300"
              } items-center px-2 py-5 bg-white border `}
            >
              <span>{item}</span>
              <span>30 Aug</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
