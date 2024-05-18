import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import image from "../../assets/online-education-or-web-course-vector-25055894.jpg";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

const MainContent = () => {
  return (
    <div className="wrapper">
      <section>
        <div className="section-img">
          <div className="text">
            <h1>Unlock Your Potential with Cutting-Edge Courses</h1>
            <p>
              Embrace the future of learning and elevate your skills with our
              innovative courses. Our carefully curated content is designed to
              empower you with the knowledge and expertise needed to thrive in
              today's dynamic world. From advanced coding techniques to
              mastering business strategies, embark on a transformative journey
              with us. Join our community of learners and discover new horizons
              in your professional and personal development.
            </p>
          </div>
          <div className="image">
            <img src={image} alt="Example" />
          </div>
        </div>
      </section>

      <section>
        <div className="section-tres-columnas">
          <div className="card about-us">
            <svg
              className="icon-card"
              viewBox="0 0 352 512"
              width="100"
              title="lightbulb">
              <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
            </svg>
            <div className="title-card">About Us</div>
            <div className="p-card">
              We are dedicated to providing high-quality courses that empower
              individuals to master new skills and thrive in today's
              ever-changing economic landscape.
            </div>
            <button className="btn-card">
              <span>Learn More</span>
            </button>
          </div>

          <div className="card about-us">
            <svg
              className="icon-card"
              viewBox="0 0 576 512"
              width="100"
              title="credit-card">
              <path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z" />
            </svg>
            <div className="title-card">About Us</div>
            <div className="p-card">
              We aim to make learning accessible to everyone, offering
              affordable courses designed to enhance personal and professional
              development.
            </div>
            <button className="btn-card">
              <span>Learn More</span>
            </button>
          </div>

          <div className="card about-us">
            <svg
              className="icon-card"
              viewBox="0 0   640 512"
              width="100"
              title="user-clock">
              <path d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z" />
            </svg>
            <div className="title-card">About Us</div>
            <div className="p-card">
              Our team is passionate about education and committed to providing
              learners with the knowledge and skills they need to succeed in
              today's competitive job market.
            </div>
            <button className="btn-card">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="section-tres-columnas why-choose-us">
          <div className="choose-card">
            <h2>Why Choose Us?</h2>
            <p>
              Our courses are meticulously crafted by industry experts to ensure
              that you receive the most relevant and up-to-date information.
              Whether you're looking to advance your career or pursue a new
              passion, we're here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
