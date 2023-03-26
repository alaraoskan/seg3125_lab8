import React, { useState } from "react";
import { Button, Form, Col, Row, Alert } from "react-bootstrap";

const translations = {
  en: {
    title: "Log in to your account",
    email: "Email",
    password: "Password",
    submitBtn: "Log in",
    error: "Invalid email or password.",
  },
  fr: {
    title: "Connectez-vous à votre compte",
    email: "Adresse email",
    password: "Mot de passe",
    submitBtn: "Se connecter",
    error: "Adresse email ou mot de passe invalide.",
  },
};

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("en");

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
        setError(translations[language].error);
      }
    }
  }

  return (
    <div className="login-container">
      <h2 className="text-center mb-4">{translations[language].title}</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="email">
          <Form.Label column sm={3}>
            {translations[language].email}
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={translations[language].email}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="password">
          <Form.Label column sm={3}>
            {translations[language].password}
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={translations[language].password}
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
            {translations[language].submitBtn}
          </Button>
        </div>
      </Form>

      <div className="text-center">
        <Button
          variant="link"
          onClick={() => setLanguage("en")}
          className={`mx-2 ${language === "en" && "active"}`}
        >
          English
        </Button>
        <Button
          variant="link"
          onClick={() => setLanguage("fr")}
          className={`mx-2 ${language === "fr" && "active"}`}
        >
          Français
        </Button>
      </div>
    </div>
  );
}