import { Avatar, IconButton, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MoreHoriz } from '@mui/icons-material';
import { format } from 'timeago.js';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const ProfileDecription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Username = styled.h4`
  font-size: 1.1rem;
  color: #000000d0;
  text-transform: capitalize;
  font-weight: 400;
`;
const Time = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
`;
const Caption = styled.p`
  font-family: 'Poppins', sans-serif;
`;
const OnlineToastContainer = styled.div`
  position: relative;
`;
const OnlineToast = styled.div`
  padding: 0.4rem;
  background-color: lime;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;
const PostHeader = ({ caption, username, profile, userID, date }) => {
  const navigate = useNavigate();
  const { onlineUsers, user } = useAppContext();
  const [online, setOnline] = useState(
    onlineUsers?.some(item => item.id === userID)
  );
  useEffect(() => {
    setOnline(onlineUsers?.some(item => item.id === userID));
  }, [onlineUsers]);
  return (
    <Container>
      <HeaderContainer>
        <ProfileContainer>
          <OnlineToastContainer
            onClick={() =>
              navigate(`/profile/${username}`, { state: { userID } })
            }
          >
            {online && userID !== user?._id && <OnlineToast />}
            <Avatar src={profile} />
          </OnlineToastContainer>
          <ProfileDecription>
            <Username> {username} </Username>
            <Time> {format(date)} </Time>
          </ProfileDecription>
        </ProfileContainer>
        <Tooltip
          arrow
          title='Tools'
        >
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Tooltip>
      </HeaderContainer>
      <Caption> {caption} </Caption>
    </Container>
  );
};

export default PostHeader;
