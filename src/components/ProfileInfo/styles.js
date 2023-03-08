import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 10px;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
