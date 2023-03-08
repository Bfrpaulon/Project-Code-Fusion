import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FormWrapper, Title } from "./styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <FormWrapper>
            <Title>Entrar</Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Entrar
              </Button>
            </Form>
          </FormWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
