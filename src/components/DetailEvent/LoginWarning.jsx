import Search from "assets/icons/search.svg";
import NavigateButton from "components/NavigateButton";

export default function LoginWarning() {
  return (
    <div className="absolute h-full w-[110%] translate-x-[50%] bg-transparent top-0 right-[50%] backdrop-blur-[4px] grid place-content-center">
      <div className="flex flex-col items-center gap-y-4 bg-white w-full px-10 py-6 rounded-xl">
        <div className="flex items-center gap-x-2">
          <img src={Search} alt="search icon" />
          <div className="flex flex-col">
            <span className="text-lg font-bold">Want to see more details?</span>
            <span>Login first to enter this page</span>
          </div>
        </div>
        <div className="flex gap-x-3">
          <NavigateButton mode="btn-md-outline" path="/login">
            Sign In
          </NavigateButton>
          <NavigateButton mode="btn-md-full" path="/signup">
            Sign Up
          </NavigateButton>
        </div>
      </div>
    </div>
  );
}
