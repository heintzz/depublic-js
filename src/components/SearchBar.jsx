import PropTypes from "prop-types";
import { BiSearch } from "react-icons/bi";

export default function SearchBar({ additionalClassname }) {
  return (
    <div
      className={`relative backdrop-blur-xl border-gray-300 border rounded-xl ${additionalClassname}`}
    >
      <input
        type="text"
        placeholder="Search Activities"
        className="w-full focus:outline-none placeholder:text-gray-700 opacity-50 border border-red-50 pl-12 rounded-xl pr-6 py-2 text-sm"
      />
      <div className="absolute left-5 top-[50%] translate-y-[-50%] hover:cursor-pointer">
        <BiSearch size="1.25em" fill="#A6A6A6" />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  additionalClassname: PropTypes.string,
};
