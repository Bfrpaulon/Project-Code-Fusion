import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsClock, BsFillPeopleFill } from 'react-icons/bs';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { CourseInfoWrapper, CourseTitle, CourseSubtitle, CourseDescription, CourseDetails, CourseDetailItem, CourseDetailIcon, CourseDetailText, CourseRating, CoursePrice, CourseButton } from './styles';

const CourseInfo = () => {
  return (
    <CourseInfoWrapper>
      <Container>
        <Row>
          <Col lg={8}>
            <CourseTitle>Desenvolvimento Front-end</CourseTitle>
            <CourseSubtitle>Comunidade de Programadores - Code Fusion</CourseSubtitle>
            <CourseDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna vitae neque tempor varius.</CourseDescription>
            <CourseDetails>
              <CourseDetailItem>
                <CourseDetailIcon><FaChalkboardTeacher /></CourseDetailIcon>
                <CourseDetailText>2 Instrutores</CourseDetailText>
              </CourseDetailItem>
              <CourseDetailItem>
                <CourseDetailIcon><BsClock /></CourseDetailIcon>
                <CourseDetailText>3 Meses</CourseDetailText>
              </CourseDetailItem>
              <CourseDetailItem>
                <CourseDetailIcon><BsFillPeopleFill /></CourseDetailIcon>
                <CourseDetailText>50 Alunos</CourseDetailText>
              </CourseDetailItem>
              <CourseDetailItem>
                <CourseDetailIcon><RiMoneyDollarBoxFill /></CourseDetailIcon>
                <CourseDetailText>Grátis</CourseDetailText>
              </CourseDetailItem>
            </CourseDetails>
          </Col>
          <Col lg={4}>
            <CourseRating>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <span>4.0 (245)</span>
            </CourseRating>
            <CoursePrice>Grátis</CoursePrice>
            <CourseButton><Button variant="primary" size="lg" block>Matricule-se Agora!</Button></CourseButton>
          </Col>
        </Row>
      </Container>
    </CourseInfoWrapper>
  );
}

export default CourseInfo;
