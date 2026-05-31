import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/About.css";
import logo2 from "../assests/logo.png";
import students from "../assests/students.jpg";


const About = () => {
  return (
    <>
      <Container fluid className="about-section" id="about">
        <p className="about-title">
          <Image
            src={logo2}
            roundedCircle
            className="about-logo"
            alt="Logo"
          />
          About Velvet Pointe Academy
        </p>

        <div className="text-center">
          <Image
            src={students}
            rounded
            fluid
            className="students-image"
            alt="Students"
          />
        </div>

        <Row className="mt-5">
          <Col md={6}>
            <h4 className="about-heading">About our mission</h4>

            <p className="about-text">
              At Velvet Pointe Academy, we're not just a ballet school; we're a
              place where dreams take flight, and where every plié and
              pirouette tells a unique story. Our mission is to nurture the love
              of ballet in students of all ages and levels. We believe in the
              transformative power of dance and are dedicated to providing a
              supportive and inspiring environment where every dancer can
              flourish.
            </p>
          </Col>

          <Col md={6}>
            <h4 className="about-heading">About our commitment</h4>

            <p className="about-text">
              Our commitment goes beyond teaching dance steps. It's about
              nurturing confident individuals. We instill discipline,
              determination, and teamwork while fostering creativity, grace, and
              self-expression. Our commitment to each student's journey extends
              beyond the studio, aiming to cultivate well-rounded individuals
              who are equipped to succeed in dance and life.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="join-section">
        <p className="join-text">
          Join us today and embark on a journey of grace and self-discovery
          through the enchanting world of ballet.
        </p>
      </Container>

      <Container fluid className="hero-banner">
        <div className="overlay-box">
          <h1>We will get you on your toes</h1>

          <a href="/classes" className="explore-link">
            Explore Classes &gt;
          </a>
        </div>
      </Container>
    </>
  );
};

export default About;