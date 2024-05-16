import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Cart from "./pages/Cart/Cart";
import Explore from "./pages/Explore"
import Course from "./pages/Course"
import Layout from "./pages/layout/Layout"
import NoPage from "./pages/noPage/noPage"
import ContactPage from "./pages/ContactUs/contactUs";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      
        
        <Route path="Explore" element={<Explore />} />
        <Route path="Course" element={<Course />} />
        <Route path="contactus" element={<ContactPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      <Route path="Cart" element={<Cart />} />
      <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
