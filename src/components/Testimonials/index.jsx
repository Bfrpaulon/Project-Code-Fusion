import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TestimonialsContainer, TestimonialCard } from './styles';

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Container>
        <Row>
          <Col md={12} lg={{ span: 8, offset: 2 }}>
            <h2>Depoimentos</h2>
            <TestimonialCard>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
              </p>
              <p>
                <strong>João Silva</strong>
              </p>
            </TestimonialCard>
            <TestimonialCard>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
              </p>
              <p>
                <strong>Maria Souza</strong>
              </p>
            </TestimonialCard>
          </Col>
        </Row>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;
