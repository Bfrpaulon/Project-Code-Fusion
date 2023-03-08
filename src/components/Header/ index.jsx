import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../../images';
import { HeaderWrapper, LogoWrapper, ButtonWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Navbar expand="lg">
          <LogoWrapper>
            <Navbar.Brand as={Link} to="/">
              <img src={Logo} alt="Code Fusion" />
            </Navbar.Brand>
          </LogoWrapper>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/cursos">Cursos</Nav.Link>
              <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
              <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
            </Nav>
            <ButtonWrapper>
              <Button as={Link} to="/login" variant="primary">Entrar</Button>
            </ButtonWrapper>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
