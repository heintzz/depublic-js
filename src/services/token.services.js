import Cookie from "js-cookie";
import { redirect } from "react-router-dom";

const setAccessToken = (token) => {
  Cookie.set("accessToken", token, { expires: 1 });
};

const getAccessToken = () => {
  return Cookie.get("accessToken") || null;
};

const redirectToHome = () => {
  const isLogin = getAccessToken();
  if (isLogin) {
    return redirect("/");
  }
  return null;
};

export const tokenServices = { setAccessToken, getAccessToken, redirectToHome };
