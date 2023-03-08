import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import { CourseHistoryContainer, CourseCard, CourseInfo, CourseStatus } from './styles';

const CourseHistory = () => {
  const history = useHistory();

  const handleContinueCourse = () => {
    history.push('/course');
  };

  return (
    <CourseHistoryContainer>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="mb-4">Meus Cursos</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <CourseCard>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <img
                      src="/images/html-css.png"
                      alt="HTML e CSS"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6}>
                    <CourseInfo>
                      <h3>Curso de HTML e CSS</h3>
                      <p>Aprendendo a criar sites com HTML e CSS</p>
                      <Button variant="primary" onClick={handleContinueCourse}>
                        Continuar Curso
                      </Button>
                    </CourseInfo>
                  </Col>
                  <Col md={3}>
                    <CourseStatus>
                      <FiCheckCircle size={24} color="#1B5E20" />
                      <p>Completo</p>
                    </CourseStatus>
                  </Col>
                </Row>
              </Card.Body>
            </CourseCard>
          </Col>
        </Row>
      </Container>
    </CourseHistoryContainer>
  );
};

export default CourseHistory;
