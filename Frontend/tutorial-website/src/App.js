import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Cart from "./pages/Cart/Cart";
import Explore from "./pages/Explore";
import Course from "./pages/Course";
import Layout from "./pages/Layout";
import NoPage from "./pages/noPage/noPage";
import ContactPage from "./pages/ContactUs/contactUs";
import ForgotPassword from "./pages/forget-password/forgetPassword";

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
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
