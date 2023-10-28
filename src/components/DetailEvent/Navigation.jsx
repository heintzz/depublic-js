import PropTypes from "prop-types";

export default function Navigation({ active, setActive }) {
  return (
    <div className="flex gap-x-2 justify-between text-xs overflow-x-auto">
      {["Summary", "Highlighted", "Package", "Location", "Order"].map((item, index) => {
        return (
          <p
            key={index}
            className={`${
              active === item
                ? "border-b-primary-700 text-primary-700 font-bold"
                : "border-b-transparent text-neutral-500"
            } border-b-2 pb-3 cursor-pointer transition-all duration-200 ease-in`}
            onClick={() => setActive(item)}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}

Navigation.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func,
};
