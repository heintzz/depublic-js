import PropTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Response(props) {
  const { show, message, instruction } = props;
  const handleClick = () => {
    show(false);
  };

  return (
    <>
      <AiFillCloseCircle
        size="2em"
        onClick={handleClick}
        className="absolute top-3 right-3 cursor-pointer"
      />
      <p className="font-semibold">{message}</p>
      <p>{instruction}</p>
    </>
  );
}

Response.propTypes = {
  show: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
};
