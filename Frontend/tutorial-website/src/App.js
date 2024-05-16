import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Cart from "./pages/Cart/Cart";
import Explore from "./pages/Explore";
import Course from "./pages/courses/Course";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import Layout from "./pages/layout/Layout";
import NoPage from "./pages/noPage/noPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contactUs" element={<ContactPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="course" element={<Course />} />
          <Route path="course/:slug" element={<CourseDetails />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
