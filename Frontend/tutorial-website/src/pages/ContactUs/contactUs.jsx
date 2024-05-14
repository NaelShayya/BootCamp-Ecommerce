import React, { useState } from "react";
import image from "../../assets/contact.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import "./contactUs.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/contact/submitContact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const validateFormData = (data) => {
    const errors = {};

    // Validate name
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    // Validate telephone
    if (!data.telephone.trim()) {
      errors.telephone = "Telephone is required";
    }

    // Validate email
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }

    // Validate message
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Very basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Header />
      <ContactUs
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
};

const ContactUs = ({ formData, errors, handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <div className="contactus_Container">
        <div className="contact">
          <div className="contactImage">
            <img src={image} alt="" className="image" />
          </div>

          <div>
            <h2>
              <b>We are happy to hear from you! </b>
            </h2>
          </div>
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <ul>
                  <li>
                    <label htmlFor="name">
                      <b>Name</b>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Please enter your name"
                      />
                      {errors.name && <p className="error">{errors.name}</p>}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="tel">
                      <b>Telephone</b>
                      <input
                        type="text"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="Please enter your phone number"
                      />
                      {errors.telephone && (
                        <p className="error">{errors.telephone}</p>
                      )}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="email">
                      <b>Email</b>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Please enter your email address"
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </label>
                  </li>
                  <li>
                    <label htmlFor="message">
                      <b>Message</b>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message..."></textarea>
                      {errors.message && (
                        <p className="error">{errors.message}</p>
                      )}
                    </label>
                  </li>
                </ul>
                <div className="buttonContainer">
                  <button type="submit">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
