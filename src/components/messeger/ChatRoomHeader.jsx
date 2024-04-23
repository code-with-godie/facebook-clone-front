import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Edit, MoreHoriz } from '@mui/icons-material';
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  flex: 1;
  font-size: 1.5rem;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .btn {
    background-color: #e4e6eb;
    :hover {
      background-color: #e4e6ebd8;
    }
    .icon {
      color: black;
      font-size: 1.5rem;
    }
  }
`;
const ChatRoomHeader = () => {
  return (
    <Container>
      <Title>Chat</Title>
      <IconContainer>
        <IconButton className='btn'>
          <MoreHoriz className='icon' />
        </IconButton>
        <IconButton className='btn'>
          <Edit className='icon' />
        </IconButton>
      </IconContainer>
    </Container>
  );
};

export default ChatRoomHeader;
