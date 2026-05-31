import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../assests/image 1.jpg";
import image2 from "../assests/image 2.jpg";
import image3 from "../assests/image 3.jpg";
import React from 'react';

import "../styles/Classes.css";

const Classes = () => {
  return (
    <>
      <h2 className="classes-heading">Where Grace Finds Its Pointe</h2>

      <p className="classes-subtitle">
        Discover our classes
      </p>

      <div className="row">
        <div className="col center">
          <div className="card class-card">
            <img
              className="card-img-top"
              src={image1}
              alt="Adult Ballet Class"
            />

            <div className="card-body">
              <p className="card-title title">
                Adult Ballet Class
              </p>

              <p className="card-text text">
                Discover the joy of dance with our Adult Ballet Class, suitable for participants of all levels and backgrounds. Whether you're a complete beginner or returning to ballet after a break, our classes are designed to nurture your passion for dance. Our experienced instructors refine posture, enhance flexibility, and teach graceful movements that embody ballet. Join our welcoming community for self-expression and well-being with flexible schedules to fit your life.
              </p>

              <a href="/Enroll">
                <button className="oval-btn" to="/Enroll">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col center">
          <div className="card class-card">
            <img
              className="card-img-top"
              src={image2}
              alt="Child Ballet Class"
            />

            <div className="card-body">
              <p className="card-title title">
                Child Ballet Class
              </p>

              <p className="card-text text">
                Welcome to our Kids' Ballet Class, tailored for young dancers aged 3-9. Our experienced instructors bring the magic of ballet to life, engaging young minds with creative movement and age-appropriate exercises. As they explore the fundamental elements of ballet, children not only develop coordination, balance, and confidence but also cultivate a deep love for the art of dance. In our classes, laughter and discovery inspire young dancers to embrace self-expression, discipline, and a lifelong love for ballet.
              </p>

              <a href="/Enroll">
                <button className="oval-btn" to="/Enroll">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col center">
          <div className="card class-card">
            <img
              className="card-img-top"
              src={image3}
              alt="Private Ballet Class"
            />

            <div className="card-body">
              <p className="card-title title">
                Private Ballet Class
              </p>

              <p className="card-text text">
                Elevate your ballet skills with Private Ballet Lessons. Tailored to you, these one-on-one sessions provide personalized learning. Our expert instructor assesses your skills, identifies areas for improvement, and creates a customized plan. Whether you're a beginner, intermediate, or advanced dancer, our lessons accelerate progress. Receive focused attention, immediate feedback, and precise corrections while delving into ballet artistry. Start your journey with Private Ballet Lessons.
              </p>
              <a href="/Enroll">
                <button className="oval-btn" to="/Enroll">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;