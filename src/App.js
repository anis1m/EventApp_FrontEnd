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
import FindEvents from "./FindEvents.js/FindEvents";
import FindParticularEvents from "./FindEvents.js/FindParticularEvents";
import ExtraFindEventsPage from "./FindEvents.js/ExtraFindEventsPage";
import ForgotPassword from "./LoginAndSignup/ForgotPassword";
import ResetPassword from "./LoginAndSignup/ResetPassword";
import OrganizerForm from "./CreateEvent/OrganizerForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MoreEvents from "./EventAppLayout/MoreEvents";
import CreateEventForm from "./CreateEvent/CreateEventForm";
import BookEvent from "./BookEvent/BookEvent";
import InsideBookEvent from "./BookEvent/InsideBookEvent";
import BookPayment from "./BookEvent/BookPayment";
import CoHostForm from "./CreateEvent/CoHostForm";
import InsideLogin from "./LoginAndSignup/InsideLogin";
import LikeEvent from "./LikeandShareEvent/LikeEvent";
import DashboardHome from "./EventManagement/DashboardHome";
import HomeDashboard from "./EventManagement/HomeDashboard";
import HelpSection from "./EventManagement/HelpSection";
import EventSection from "./EventManagement/EventSection";
import FindTickets from "./EventManagement/FindTickets";
import InsideSignup from "./LoginAndSignup/InsideSignup";

function App() {
  const [imagedata, setImageData] = useState();
  function setImage(imgdata) {
    setImageData(imgdata);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard imagedata={imagedata} />} />
        <Route path="/signup" element={<SignUp />}>
          <Route path="inside-signup" element={<InsideSignup />} />
          <Route path="otp-verification" element={<SignupMoreDetails />} />
        </Route>
        <Route path="/login" element={<Login />}>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="inside-login" element={<InsideLogin />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>

        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event-register" element={<EventRegisteration />} />
        <Route path="/event-create" element={<CreateEventForm />} />
        <Route path="/preview-event" element={<Step3 />} />
        <Route path="/account-settings" element={<AccountInfo />}>
          <Route path="change-email" element={<ChangeMail />} />
        </Route>
        <Route path="/event-interface/:id" element={<EventInterface />} />
        <Route
          path="/find-particular-events/:location/:keyword"
          element={<FindParticularEvents />}
        />
        <Route path="/find-event-extra" element={<ExtraFindEventsPage />} />
        <Route
          path="/create-event/organizer-form"
          element={<OrganizerForm />}
        />
        <Route
          path="/see-all-events/:keyword/:category"
          element={<MoreEvents />}
        />
        <Route path="/book-event" element={<BookEvent />}>
          <Route path="insideBookEvent" element={<InsideBookEvent />} />
          <Route path="bookPayment" element={<BookPayment />} />
        </Route>
        <Route path="/create-event/co-host-form" element={<CoHostForm />} />
        <Route path="/like-event" element={<LikeEvent />} />
        <Route path="/manage-my-events" element={<DashboardHome />}>
          <Route path="homepage" element={<HomeDashboard />} />

          <Route path="events" element={<EventSection />} />
        </Route>
        <Route path="/manage-my-events/help" element={<HelpSection />} />

        <Route
          path="/manage-my-events/help/find-tickets"
          element={<FindTickets />}
        />
      </Routes>
    </>
  );
}

export default App;
