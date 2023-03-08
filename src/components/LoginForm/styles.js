import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled(Form)`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 30px;
  width: 400px;

  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

export const FormInput = styled(Form.Group)`
  margin-bottom: 20px;
`;

export const FormLabel = styled(Form.Label)`
  font-weight: bold;
`;

export const FormInputField = styled(Form.Control)`
  border-radius: 5px;
  border: none;
  box-shadow: none;
  height: 40px;
`;

export const FormButton = styled.button`
  background-color: #256ce1;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;

  &:hover {
    background-color: #1e4ab4;
    cursor: pointer;
  }
`;
