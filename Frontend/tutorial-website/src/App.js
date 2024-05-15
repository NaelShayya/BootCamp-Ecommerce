import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Cart from "./pages/Cart";
import Explore from "./pages/Explore";
import Course from "./pages/Course";
import Layout from "./pages/layout/Layout";
import NoPage from "./pages/noPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="explore" element={<Explore />} />
          <Route path="course" element={<Course />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
