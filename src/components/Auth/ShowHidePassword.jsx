import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi";
import PropTypes from "prop-types";

const ShowHidePassword = (props) => {
  const { val: showPassword, setVal: setShowPassword } = props;

  return (
    <span
      className="absolute right-5 top-[50%] translate-y-[-50%] hover:cursor-pointer"
      onClick={() => {
        setShowPassword((prev) => !prev);
      }}
    >
      {showPassword ? (
        <PiEyeLight size="1.75em" fill="#A6A6A6" />
      ) : (
        <PiEyeClosedLight size="1.75em" fill="#A6A6A6" />
      )}
    </span>
  );
};

export default ShowHidePassword;

ShowHidePassword.propTypes = {
  val: PropTypes.bool.isRequired,
  setVal: PropTypes.func.isRequired,
};
