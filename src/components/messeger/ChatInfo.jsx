import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import noAvatar from '../../assets/no-profile.jpg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 0.5rem;
  padding: 0.5rem;
  flex: 1;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  padding: 1rem;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
  background-color: white;
`;
const UserName = styled.h3`
  font-weight: 300;
  color: #000000e6;
  text-align: center;
  font-size: 1.1rem;
  text-transform: capitalize;
`;
const OnlineStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const OnlineDescription = styled.p`
  font-weight: 100;
  text-align: center;
  color: #9c9b9b;
  white-space: nowrap;
  font-size: 0.9rem;
`;
const ChatInfo = ({ photo }) => {
  return (
    <Container>
      <Top>
        <IconButton className='btn'>
          <Avatar
            src={photo || noAvatar}
            className='profile'
          />
        </IconButton>
        <Description>
          <UserName>username</UserName>
          <OnlineStatusWrapper>
            <OnlineDescription>active 3hr ago</OnlineDescription>
          </OnlineStatusWrapper>
        </Description>
      </Top>
    </Container>
  );
};

export default ChatInfo;
