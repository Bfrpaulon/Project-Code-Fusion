import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CourseHistoryContainer = styled.div`
  margin-top: 60px;
`;

export const CourseCard = styled(Card)`
  border: none;
  margin-top: 20px;
`;

export const CourseInfo = styled.div`
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const CourseStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  color: #1B5E20;

  p {
    margin-top: 5px;
    font-weight: bold;
  }
`;
