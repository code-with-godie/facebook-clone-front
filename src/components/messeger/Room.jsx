import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import noAvatar from '../../assets/no-profile.jpg';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .btn {
    position: relative;
  }
  .profile {
    width: 50px;
    height: 50px;
  }
  :hover {
    background-color: #f0f2f5bd;
  }
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
const LastMessegeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const LastMessege = styled.p`
  font-weight: 100;
  color: #9c9b9b;
  font-size: 0.9rem;
`;
const Time = styled.p`
  font-weight: 100;
  color: #9c9b9b;
  font-size: 0.9rem;
`;

const Dot = styled.div`
  padding: 0.05rem;
  background-color: gray;
  border-radius: 50%;
`;
const OnlineToast = styled.div`
  padding: 0.4rem;
  background-color: lime;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
`;
const Room = ({
  members,
  setConversation,
  setOpenConversation,
  _id: roomID,
}) => {
  const { user, onlineUsers } = useAppContext();
  const [receiver, setReceiver] = useState(null);
  const [online, setOnline] = useState(
    onlineUsers?.some(item => item.id === receiver?._id)
  );
  const handleClick = () => {
    setConversation({ receiver, sender: user?._id, roomID, online });
    setOpenConversation(true);
  };
  useEffect(() => {
    setReceiver(members?.find(item => item._id !== user?._id));
  }, [members, user]);
  useEffect(() => {
    receiver && setOnline(onlineUsers?.some(item => item.id === receiver?._id));
  }, [receiver, onlineUsers]);
  return (
    <Container onClick={handleClick}>
      <IconButton className='btn'>
        <Avatar
          src={receiver?.profilePic?.photo}
          className='profile'
        />
        {online && <OnlineToast />}
      </IconButton>
      <Description>
        <UserName> {receiver?.username} </UserName>
        <LastMessegeWrapper>
          <LastMessege>last messege</LastMessege>
          <Dot />
          <Time>1yr</Time>
        </LastMessegeWrapper>
      </Description>
    </Container>
  );
};

export default Room;
