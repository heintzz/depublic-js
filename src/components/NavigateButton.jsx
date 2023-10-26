import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavigateButton(props) {
  const { path, mode, children } = props;
  const color = props?.color || "primary-500";

  switch (mode) {
    case "btn-md-full":
      return (
        <Link
          to={path}
          className={`px-7 py-[10px] rounded-xl text-white bg-${color} font-semibold`}
        >
          {children}
        </Link>
      );
    case "btn-md-outline":
      return (
        <Link
          to={path}
          className={`px-7 py-[10px] rounded-xl text-${color} bg-white border-${color} border-2 font-semibold`}
        >
          {children}
        </Link>
      );
    case "btn-sm-full":
      return (
        <Link to={path} className={`px-4 py-[7px] rounded-xl text-white bg-${color} font-semibold`}>
          {children}
        </Link>
      );
    case "btn-sm-outline":
      return (
        <Link
          to={path}
          className={`px-4 py-[7px] rounded-xl text-${color} bg-white border-${color} border-2 font-semibold`}
        >
          {children}
        </Link>
      );
    default:
      return null;
  }
}

NavigateButton.propTypes = {
  mode: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};
