import React from 'react';
import styled from 'styled-components';
import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomSearch from './ChatRoomSearch';
import ChatRoomList from './ChatRoomList';
const Container = styled.article`
  flex: 1;
  min-width: 250px;
  border-right: 1px solid #e5e5e5;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  transition: 150ms ease-in-out;
  background-color: white;
  gap: 0.5rem;
  &.hide {
    display: none;
  }
  @media screen and (min-width: 768px) {
    &.hide {
      display: flex;
    }
  }
`;
const ChatRooms = ({ hide, setConversation, setOpenConversation }) => {
  return (
    <Container className={hide && 'hide'}>
      <ChatRoomHeader />
      <ChatRoomSearch />
      <ChatRoomList
        setOpenConversation={setOpenConversation}
        setConversation={setConversation}
      />
    </Container>
  );
};

export default ChatRooms;
