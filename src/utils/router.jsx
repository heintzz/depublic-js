import DetailEventPage from "pages/DetailEvent";
import EventPage from "pages/Event";
import HomePage from "pages/Home";
import { LoginPage } from "pages/Login";
import { RegistrationPage } from "pages/Registration";
import { RegistrationFormPage } from "pages/RegistrationForm";
import { SignupPage } from "pages/Signup";
import { Route, Routes } from "react-router-dom";
import { tokenServices } from "services/token.services";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/signup"
        element={<SignupPage />}
        loader={() => tokenServices.redirectToHome()}
      />
      <Route path="/login" element={<LoginPage />} loader={() => tokenServices.redirectToHome()} />
      <Route path="/ticket" element={<EventPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/ticket/:id" element={<DetailEventPage />} />
      <Route path="/registration/:id" element={<RegistrationFormPage />} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
}
