import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Enroll.css";

const Apply = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
    background: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Application Submitted:", formData);

    alert("Application submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      className: "",
      background: "",
    });
  };

  return (
      <div className="enroll-page"> 
     <p className="classes-heading">Start your ballet journey today</p>
    <Container id="enroll" className="apply-container">
    
      <div className="form-box">
        <h2 className="apply-title">Apply for Ballet Classes</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="What's your phone number?"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Class</Form.Label>
            <Form.Control
              type="text"
              name="className"
              placeholder="Which class are you applying for?"
              value={formData.className}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Background</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="background"
              placeholder="Please briefly describe any previous dance experience."
              value={formData.background}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" className="apply-btn" >
            Apply
          </Button>
        </Form>
      </div>
    </Container>
    </div>
  );
};

export default Apply;
