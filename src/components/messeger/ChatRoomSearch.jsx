import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  /* padding: 0.5rem; */
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
  font-weight: 200;
`;
const ChatRoomSearch = () => {
  return (
    <Container>
      <IconButton>
        <Search />
      </IconButton>
      <Input placeholder='Search Messeger...' />
    </Container>
  );
};

export default ChatRoomSearch;
