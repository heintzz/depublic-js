import { NumberToCurrencyFormat } from "utils/helper";
import PropTypes from "prop-types";

export default function Summary({ event }) {
  return (
    <div className="flex flex-col-reverse gap-y-3 m-sm:flex-row m-sm:gap-x-5 items-start text-neutral-500">
      <div className="text-justify">{event?.description}</div>
      <div className="flex flex-col justify-end gap-y-1 m-sm:min-w-[140px]">
        <span>Starting From</span>
        <span className="text-primary-500 font-bold text-lg">
          {NumberToCurrencyFormat(event?.price || 0)}
        </span>
      </div>
    </div>
  );
}

Summary.propTypes = {
  event: PropTypes.shape({
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};
