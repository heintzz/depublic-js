import { useState } from "react";
import { Link } from "react-router-dom";

import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";
import ShowHidePassword from "components/Auth/ShowHidePassword";
import SectionSeparator from "components/SectionSeparator";
import OAuthButton from "./OAuthButton";

import Loader from "components/Modal/Loader";
import ModalBox from "components/Modal/ModalBox";
import Response from "components/Modal/Response";
import { authServices } from "services/auth.services";
import "./Auth.css";

const defaultSignupForm = {
  username: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalFailed, setShowModalFailed] = useState(false);
  const [input, setInput] = useState(defaultSignupForm);
  const [showPassword, setShowPassword] = useState(false);

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
        await authServices.handleUserSignup(input.email, input.password);
        setLoading(false);
        setShowModalSuccess(true);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setShowModalFailed(true);
      }
    })();
  };

  return (
    <div className="pb-10">
      {loading && (
        <ModalBox>
          <Loader />
        </ModalBox>
      )}
      {showModalSuccess && (
        <ModalBox>
          <Response
            show={setShowModalSuccess}
            message="Registration succeed"
            instruction="please login 🚀"
          />
        </ModalBox>
      )}
      {showModalFailed && (
        <ModalBox>
          <Response
            show={setShowModalFailed}
            message="Registration failed"
            instruction="please try again later 🙏"
          />
        </ModalBox>
      )}
      <div className="w-full bg-[#FEF6E5] px-7 py-5 font-bold relative z-[1]">Sign Up</div>
      <div className="px-7 pt-7 relative">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-3 right-0 w-24 z-0"
        />
        <p className="font-semibold relative z-[1]">Register for the better experience</p>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-y-4 my-5 last:gap-y-0 relative z-[1]"
        >
          <input
            name="username"
            type="text"
            value={input.username}
            autoComplete="username"
            placeholder="Username"
            className="input-field"
            onChange={handleInputChange}
          />
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
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
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
            Create Account
          </button>
          <p className="text-center text-sm text-gray-400">
            Have an Account?{" "}
            <Link to="/login" className="text-primary-500 font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
      <SectionSeparator additionalClassname="mt-6 mb-10" />
      <div className="flex flex-col items-center">
        <p className="mb-8">atau daftar dengan</p>
        <div className="grid grid-cols-3 gap-x-5">
          <OAuthButton type="signup" />
        </div>
      </div>
    </div>
  );
}
