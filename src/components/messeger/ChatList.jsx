import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Messege from './Messege';
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../loading/LoadingAnimation';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  padding: 0.5rem;
  overflow: auto;
  background-color: white;
`;
const ChatList = ({ chats }) => {
  if (chats?.length === 0)
    return (
      <Container>
        <p>no chats</p>{' '}
      </Container>
    );
  return (
    <Container>
      {chats.map(item => (
        <Messege
          key={item._id}
          {...item}
        />
      ))}
    </Container>
  );
};

export default ChatList;
