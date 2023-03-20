import React, { useState } from "react";
import { Button, Form, Col, Row, Alert } from "react-bootstrap";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      // TODO: perform login request
      if (email === "example@mail.com" && password === "password123") {
        // Login successful
        setError(null);
        alert("Login successful!");
      } else {
        // Login failed
        setError("Invalid email or password.");
      }
    }
  }

  return (
    <div className="login-container">
      <h2 className="text-center mb-4">Log in to your account</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="email">
          <Form.Label column sm={3}>
            Email
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="password">
          <Form.Label column sm={3}>
            Password
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Col>
        </Form.Group>

        {error && (
          <Alert variant="danger" className="mt-4">
            {error}
          </Alert>
        )}

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="my-4"
            style={{ backgroundColor: "#009688", borderColor: "#009688" }}
          >
            Log in
          </Button>
        </div>
      </Form>
    </div>
  );
}
