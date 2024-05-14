import React, { useState } from "react";
import "./login.css";
import illustration from "../../assets/Signup.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const responseData = await response.json();
      console.log("Response Data:", responseData);

      // Access token from the nested user object
      const token = responseData.user.token;

      sessionStorage.setItem("token", token);
      navigate("/home");
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgotPassword");
  };

  return (
    <div className="app">
      <div className="upper-left-circle"></div>
      <div className="login-container">
        <div className="login-form">
          <h1>CourseHub</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="email@coursehub.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small
                className="forgot-password-link"
                onClick={handleForgotPassword}>
                Forgot Password?
              </small>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="button-group">
              <button className="btn-signup" type="submit">
                Login
              </button>
              <div className="or-text">or</div>
              <button className="btn-join" type="button">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-right-illustration">
        <img src={illustration} alt="Bottom Right Illustration" />
      </div>
    </div>
  );
}

export default Login;
