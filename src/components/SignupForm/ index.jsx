import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { StyledSignupForm } from "./styles";

const SignupForm = () => {
  return (
    <StyledSignupForm>
      <Container>
        <h2>Crie sua conta</h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite novamente sua senha"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Criar conta
          </Button>
        </Form>

        <div className="mt-4">
          Já possui uma conta? <Link to="/login">Faça login aqui</Link>
        </div>
      </Container>
    </StyledSignupForm>
  );
};

export default SignupForm;
