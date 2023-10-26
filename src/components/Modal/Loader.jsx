import { Player } from "@lottiefiles/react-lottie-player";

export default function Loader() {
  return (
    <>
      <Player
        autoplay
        loop
        src="https://lottie.host/e2d476b5-f5af-4c83-bd96-45fd69a0cffd/s2KiGcK87D.json"
        style={{ height: "100px", width: "250px" }}
      />
      <p className="font-bold">Being Processed</p>
      <p className="text-xs">Wait a moment...</p>
    </>
  );
}
