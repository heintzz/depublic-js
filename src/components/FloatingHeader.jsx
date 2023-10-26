import DepublicIcon from "assets/icons/depublic.svg";
import NavigateButton from "./NavigateButton";
import { Link, useLocation } from "react-router-dom";
import { tokenServices } from "services/token.services";

export default function FloatingHeader() {
  const url = useLocation();
  const pathname = url.pathname;

  const isLogin = tokenServices.getAccessToken();
  const isAuthPage = ["/login", "/signup"].includes(pathname);

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white z-[3] flex justify-center shadow-sm">
      <div className="flex justify-between  items-center w-full max-w-[485px] px-7">
        <Link to="/">
          <img src={DepublicIcon} alt="depublic icon" className="w-12" />
        </Link>
        {isAuthPage ? null : isLogin ? (
          <div className="flex items-center gap-x-3">
            <div className="grid place-items-center w-10 h-10 bg-primary-700 rounded-full"></div>
            <div className="grid place-items-center w-10 h-10 bg-primary-700 rounded-full"></div>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <NavigateButton path="/login" mode="btn-sm-outline">
              Sign In
            </NavigateButton>
            <NavigateButton path="/signup" mode="btn-sm-full">
              Sign Up
            </NavigateButton>
          </div>
        )}
      </div>
    </div>
  );
}
