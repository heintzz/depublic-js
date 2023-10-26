import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";
import ShowHidePassword from "components/Auth/ShowHidePassword";
import Loader from "components/Modal/Loader";
import SectionSeparator from "components/SectionSeparator";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authServices } from "services/auth.services";
import { tokenServices } from "services/token.services";
import OAuthButton from "./OAuthButton";

import Modal from "components/Modal/ModalBox";
import Response from "components/Modal/Response";
import "./Auth.css";

const defaultLoginForm = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(defaultLoginForm);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showModalFailed, setShowModalFailed] = useState(false);
  const [errorMessages, setErrorMessages] = useState();

  const handleInputChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) return;

    (async () => {
      setLoading(true);
      try {
        const res = await authServices.handleUserLogin(input.email, input.password);
        const accessToken = await res.getIdToken();
        tokenServices.setAccessToken(accessToken);
        setLoading(false);
        navigate("/");
      } catch (error) {
        setLoading(false);
        setShowModalFailed(true);

        setErrorMessages(error.message);
      }
    })();
  };

  return (
    <div className="pb-10">
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {showModalFailed && (
        <Modal>
          <Response
            show={setShowModalFailed}
            message="Login failed"
            instruction={errorMessages || "please try again later 🙏"}
          />
        </Modal>
      )}
      <div className="w-full bg-[#FEF6E5] px-7 py-5 font-bold relative z-[1]">Sign In</div>
      <div className="px-7 pt-7 relative">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-3 right-0 w-24 z-0"
        />
        <p className="font-semibold relative z-[1]">Welcome back!</p>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col relative z-[1] gap-y-4 my-5 last:gap-y-0"
        >
          <input
            name="email"
            type="email"
            value={input.email}
            autoComplete="email"
            placeholder="Email"
            className="input-field"
            onChange={handleInputChange}
          />
          <div className="relative">
            <input
              name="password"
              value={input.password}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Password"
              className="input-field"
              onChange={handleInputChange}
            />
            <ShowHidePassword val={showPassword} setVal={setShowPassword} />
          </div>
          <button
            type="submit"
            className="w-full p-4 my-10 rounded-xl bg-primary-500 text-white font-semibold"
          >
            Sign In
          </button>
          <p className="text-center text-sm text-gray-400">
            Don&apost have an Account?{" "}
            <Link to="/signup" className="text-primary-500 font-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
      <SectionSeparator additionalClassname="mt-6 mb-10" />
      <div className="flex flex-col items-center">
        <p className="mb-8">atau login dengan</p>
        <div className="grid grid-cols-3 gap-x-5">
          <OAuthButton type="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
