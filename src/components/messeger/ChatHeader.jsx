import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoInformationCircle } from 'react-icons/io5';
import { FaPhoneAlt, FaVideo } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 0.3rem;
  align-items: center;
  .profile {
    width: 50px;
    height: 50px;
  }
  .icon {
    color: #0084ff;
  }
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.19);
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const UserName = styled.h3`
  font-weight: 300;
  color: #000000e6;
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
  color: #9c9b9b;
  white-space: nowrap;
  font-size: 0.9rem;
  &.online {
    color: #00f900;
  }
`;
const ChatHeader = ({ photo, setOpenConversation, username, receiver }) => {
  const { onlineUsers } = useAppContext();
  const [online, setOnline] = useState(
    onlineUsers?.some(item => item.id === receiver)
  );
  useEffect(() => {
    receiver && setOnline(onlineUsers?.some(item => item.id === receiver));
  }, [receiver, onlineUsers]);
  return (
    <Container>
      <Left>
        <IconButton
          className='btn'
          onClick={() => setOpenConversation(false)}
        >
          <Avatar
            src={photo}
            className='profile'
          />
        </IconButton>
        <Description>
          <UserName> {username} </UserName>
          <OnlineStatusWrapper>
            <OnlineDescription className={`${online && 'online'}`}>
              {' '}
              {online ? 'online' : 'active 3hr ago'}{' '}
            </OnlineDescription>
          </OnlineStatusWrapper>
        </Description>
      </Left>
      <Right>
        <IconButton>
          <FaPhoneAlt className='icon' />
        </IconButton>
        <IconButton>
          <FaVideo className='icon' />
        </IconButton>
        <IconButton>
          <IoInformationCircle className='icon' />
        </IconButton>
      </Right>
    </Container>
  );
};

export default ChatHeader;
