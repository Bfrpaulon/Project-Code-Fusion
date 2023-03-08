import styled from "styled-components";

export const StyledSignupForm = styled.div`
  margin: 50px 0;
  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;
    color: #555;
  }

  form {
    max-width: 500px;
    margin: auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);

    label {
      font-weight: bold;
    }

    input {
      margin-bottom: 15px;
    }
  }

  a {
    color: #555;
    font-weight: bold;
  }
`;
