import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import bannerImage from "../assests/better.png";
import heroImage from "../assests/download (14).jpg";
import { useState } from "react";
import "../styles/Home.css";


const Home = () => {
    const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  message: "",
});

const handleContactChange = (e) => {
  setContactForm({
    ...contactForm,
    [e.target.name]: e.target.value,
  });
};

const handleContactSubmit = (e) => {
  e.preventDefault();

  alert("Message sent successfully!");

  console.log(contactForm);

  setContactForm({
    name: "",
    email: "",
    message: "",
  });
};

  return (
    <>
      <Container fluid className="pt-5">
        <Row>
          <Col className="pt-5">
            <h2 className="welcome-title ml-1">Welcome</h2>
            <h3 className="welcome-subtitle"> to Velvet Pointe Academy</h3>

            <div className="center-container">
              <a href="/About">
                <Button className="oval-btn" to="/About">
                  About
                </Button>
              </a>
            </div>
          </Col>

          <Col>
            <Image
              src={heroImage}
              rounded
              className="mx-auto d-block"
              width={500}
              height={550}
              alt="Ballet dancer"
            />
          </Col>

          <Col>
            <p className="introduction mt-5">
              Classical ballet school based in Beirut
            </p>

            <p className="info">
              Uncover the magic of ballet with Velvet Pointe Academy, where our
              dance classes are infused with grace and passion.
            </p>
          </Col>
        </Row>
      </Container>

      <br />

      <Row>
        <Col>
          <Image
            src={bannerImage}
            fluid
            className="w-100"
            alt="Ballet banner"
          />
        </Col>
      </Row>

      <Container fluid className="pt-4" id="in">
        <h1 className="text-center">
          Why should you learn to dance ballet?
        </h1>

        <Row className="pt-4">
          <Col md={6}>
            <h4>A graceful journey</h4>
            <p className="why">
              Ballet transforms movement into artistry, teaching grace, poise,
              and an enchanting form of self-expression.
            </p>
          </Col>

          <Col md={6}>
            <h4>Beauty and strength</h4>
            <p className="why">
              Discover ballet's elegance and build a strong foundation of core
              strength, flexibility, and balance for lifelong well-being.
            </p>
          </Col>

          <Col md={6}>
            <h4>Discipline and focus</h4>
            <p className="why">
              Ballet cultivates discipline, patience, and mental clarity—a
              valuable life skill for success in any endeavor.
            </p>
          </Col>

          <Col md={6}>
            <h4>A lifelong passion</h4>
            <p className="why">
              Embrace ballet as more than a dance; it's a lifelong passion,
              igniting self-expression and a deep love for the art.
            </p>
          </Col>
        </Row>

        <br />
      </Container>

      <Container className="contact-section">
  <h1>In case of questions</h1>

  <p className="contact-description">
    We're always here to help you pirouette through your inquiries and
    plié into the answers you seek.
  </p>

  <div className="contact-info">
    <span>
      📧{" "}
      <a href="mailto:contact@bwa.com">
        contact@bwa.com
      </a>
    </span>

    <span>
      📞{" "}
      <a href="tel:11-111-111">
        11-111-111
      </a>
    </span>
  </div>

  <Form onSubmit={handleContactSubmit}>
    <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>

      <Form.Control
        type="text"
        name="name"
        placeholder="Your name here"
        value={contactForm.name}
        onChange={handleContactChange}
        required
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>

      <Form.Control
        type="email"
        name="email"
        placeholder="Your email here"
        value={contactForm.email}
        onChange={handleContactChange}
        required
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Label>Message</Form.Label>

      <Form.Control
        as="textarea"
        rows={5}
        name="message"
        placeholder="Your message here"
        value={contactForm.message}
        onChange={handleContactChange}
      />
    </Form.Group>

    <Button type="submit" className="oval-btn">
      Send
    </Button>
  </Form>
</Container>
    </>
  );
};

export default Home;