import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./EventAppLayout/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./LoginAndSignup/SignUp";
import Login from "./LoginAndSignup/Login";
import CreateEvent from "./CreateEvent/CreateEvent";
import EventRegisteration from "./CreateEvent/EventRegisteration";
import Step2 from "./CreateEvent/Step2";
import Step3 from "./CreateEvent/Step3";
import SignupMoreDetails from "./LoginAndSignup/SignupMoreDetails";
import AccountInfo from "./ProfileSection/AccountInfo";
import ChangeMail from "./ProfileSection/ChangeMail";
import EventInterface from "./EventInterface/EventInterface";
import { useState } from "react";
import FindEvents from "./FindEvents.js/FindEvents";
import FindParticularEvents from "./FindEvents.js/FindParticularEvents";
import ExtraFindEventsPage from "./FindEvents.js/ExtraFindEventsPage";
import ForgotPassword from "./LoginAndSignup/ForgotPassword";
import ResetPassword from "./LoginAndSignup/ResetPassword";
import OrganizerForm from "./CreateEvent/OrganizerForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />}>
          <Route path="otp-verification" element={<SignupMoreDetails />} />
        </Route>
        <Route path="/login" element={<Login />}>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event-register" element={<EventRegisteration />} />
        <Route path="/event-create" element={<Step2 />} />
        <Route path="/preview-event" element={<Step3 />} />
        <Route path="/account-settings" element={<AccountInfo />}>
          <Route path="change-email" element={<ChangeMail />} />
        </Route>
        <Route path="/event-interface/:id" element={<EventInterface />} />
        <Route path="/find-events" element={<FindEvents />} />
        <Route
          path="/find-particular-events/:location/:keyword"
          element={<FindParticularEvents />}
        />
        <Route path="/find-event-extra" element={<ExtraFindEventsPage />} />
        <Route
          path="/create-event/organizer-form"
          element={<OrganizerForm />}
        />
      </Routes>
    </>
  );
}

export default App;
