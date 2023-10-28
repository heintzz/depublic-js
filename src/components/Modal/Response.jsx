import PropTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Response(props) {
  const { show, message, instruction } = props;
  const handleClick = () => {
    show(false);
  };

  return (
    <div className="flex flex-col items-center">
      <AiFillCloseCircle
        size="2em"
        onClick={handleClick}
        className="absolute top-3 right-3 cursor-pointer"
      />
      <p className="font-semibold">{message}</p>
      <p className="text-sm mt-5">{instruction}</p>
    </div>
  );
}

Response.propTypes = {
  show: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
};
