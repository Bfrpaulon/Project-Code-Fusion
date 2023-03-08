import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CourseContentWrapper, CourseTitle } from './styles';

const CourseContent = () => {
  return (
    <CourseContentWrapper>
      <Container>
        <CourseTitle>Desenvolvimento Front-end</CourseTitle>
        <Row>
          <Col md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src="/images/html-css.jpg" />
              <Card.Body>
                <Card.Title>HTML e CSS</Card.Title>
                <Card.Text>
                  Aprenda a criar páginas web com HTML e estilizá-las com CSS.
                </Card.Text>
                <Button variant="primary">Começar curso</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src="/images/javascript.jpg" />
              <Card.Body>
                <Card.Title>Javascript</Card.Title>
                <Card.Text>
                  Aprenda a programar em Javascript e adicione interatividade às suas páginas.
                </Card.Text>
                <Button variant="primary">Começar curso</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src="/images/react.jpg" />
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                  Aprenda a desenvolver aplicações web com React, uma das bibliotecas mais populares do mercado.
                </Card.Text>
                <Button variant="primary">Começar curso</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </CourseContentWrapper>
  );
};

export default CourseContent;
