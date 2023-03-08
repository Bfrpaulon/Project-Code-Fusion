import React from 'react';
import { Wrapper, Avatar, UserName, LogoutButton } from './styles';

const ProfileInfo = ({ user, onLogout }) => {
  return (
    <Wrapper>
      <Avatar src={user.avatar} alt="Avatar" />
      <UserName>{user.name}</UserName>
      <LogoutButton onClick={onLogout}>Sair</LogoutButton>
    </Wrapper>
  );
};

export default ProfileInfo;
