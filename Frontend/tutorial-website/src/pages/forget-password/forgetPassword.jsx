import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forgetPassword.css"; // Style file for forgot password page

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to reset password");
      }

      navigate("/login"); // Navigate back to login page after password reset
    } catch (err) {
      setError(err.message || "An error occurred during password reset.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="app">
      <div className="upper-left-circle"></div>
      <div className="forgot-password-container">
        <div className="forgot-password-form">
          <h1>Forgot Password</h1>
          <form onSubmit={handleResetPassword}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="email@coursehub.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="button-group">
              <button className="btn-reset" type="submit">
                Reset Password
              </button>
              <div className="or-text">or</div>
              <button
                className="btn-back"
                type="button"
                onClick={handleLoginRedirect}>
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
