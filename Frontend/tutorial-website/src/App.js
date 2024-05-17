import React from "react";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import LandingPage from "./pages/landing-page/landingPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forget-password/forgetPassword";
import Cart from "./pages/Cart/Cart";
import Explore from "./pages/Explore/Explore";
import CourseList from "./pages/courses/Course";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import ContactPage from "./pages/ContactUs/contactUs";
import NoPage from "./pages/noPage/noPage";

function App() {
  // Check if the user is authenticated based on sessionStorage
  const isAuthenticated = sessionStorage.getItem("token") !== null;

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forget-password" element={<ForgotPassword />} />
            <Route path="*" element={<NoPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="explore" element={<Explore />} />
              <Route path="course" element={<CourseList />} />
              <Route path="course/:slug" element={<CourseDetails />} />
              <Route path="contactUs" element={<ContactPage />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
