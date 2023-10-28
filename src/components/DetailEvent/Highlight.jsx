import PropTypes, { arrayOf } from "prop-types";

export default function Highlight({ event }) {
  return (
    <>
      <h3 className="text-lg font-bold mt-8 mb-4">Highlight</h3>
      <ul className="list-disc pl-4">
        {event.highlights?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        <li>
          Saksikan langsung penampilan memukau dari Maher Zain lewat tur perdana mereka, “2023 LE
          SSERAFIM TOUR &aposFLAME RISES&apos IN JAKARTA”
        </li>
        <li>Konser akan berlangsung pada tanggal 3 Oktober 2023 di JIEXPO Hall B3, Jakarta</li>
        <li>
          Untuk cara penggunaan membership code saat periode presale, harap kunjungi laman ini
        </li>
      </ul>
    </>
  );
}

Highlight.propTypes = {
  event: PropTypes.shape({
    highlights: arrayOf(PropTypes.string),
  }),
};
