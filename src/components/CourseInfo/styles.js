import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const CourseInfoContainer = styled(Container)`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const CourseInfoTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

export const CourseInfoSubTitle = styled.h4`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const CourseInfoDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 2rem;
`;

export const CourseInfoRow = styled(Row)`
  margin-bottom: 3rem;
`;

export const CourseInfoCol = styled(Col)`
  text-align: center;
`;

export const CourseInfoLabel = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CourseInfoValue = styled.p`
  font-size: 1.2rem;
`;
