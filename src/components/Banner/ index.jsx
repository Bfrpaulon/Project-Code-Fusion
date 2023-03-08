import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BannerWrapper, BannerImage, BannerTitle, BannerSubtitle } from './styles';
import bannerImage from '../../images/banner.jpg';

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerImage src={bannerImage} alt="Banner Code Fusion" />
      <Container>
        <Row>
          <Col>
            <BannerTitle>Seja um programador de sucesso!</BannerTitle>
            <BannerSubtitle>Aprenda as melhores tecnologias com a Code Fusion</BannerSubtitle>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
