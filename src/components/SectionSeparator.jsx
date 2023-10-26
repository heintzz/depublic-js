import PropTypes from "prop-types";

export default function SectionSeparator({ additionalClassname }) {
  return <div className={`h-3 bg-gray-100 ${additionalClassname || ""}`}></div>;
}

SectionSeparator.propTypes = {
  additionalClassname: PropTypes.string,
};
