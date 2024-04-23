import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  flex: 1 0 100px;
  background-color: white;
  box-shadow: rgba(143, 144, 145, 0.2) 0px 8px 24px;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  .profile {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
    border: 3px solid skyblue;
  }
  @media screen and (min-width: 500px) {
    flex: 1 0 150px;
  }
`;
const Profile = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  border: 1px solid #f0f2f5;
  height: 100%;
  object-fit: cover;
  transition: all 500ms;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    border: none;
  }
`;
const StoryItem = ({ profile }) => {
  return (
    <Container>
      <Profile src={profile} />
      <Avatar className='profile' />
    </Container>
  );
};

export default StoryItem;
