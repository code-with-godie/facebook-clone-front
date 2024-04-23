import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import ChatInfo from './ChatInfo';
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../loading/LoadingAnimation';
const Container = styled.article`
  display: none;
  transition: 150ms ease-in-out;
  &.show {
    flex: 3;
    display: flex;
  }
  @media screen and (min-width: 768px) {
    flex: 3;
    display: flex;
  }
`;
const Left = styled.div`
  flex: 2;
  border-right: 1px solid #e5e5e5;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 1;
  display: none;
  @media screen and (min-width: 768px) {
    &.show {
      display: flex;
    }
  }
`;
const Convesation = ({ show, setOpenConversation, conversation }) => {
  const [chats, setChats] = useState([]);
  const { loading, data, error } = useFetch(
    `/messeges/${conversation?.roomID}`
  );
  useEffect(() => {
    data && setChats(data.messeges);
  }, [data]);
  if (error) {
    // console.log('some error occured', error);
  }
  return (
    <Container className={show && 'show'}>
      <Left>
        <ChatHeader
          receiver={conversation?.receiver?._id}
          photo={conversation?.receiver?.profilePic?.photo}
          username={conversation?.receiver?.username}
          setOpenConversation={setOpenConversation}
        />
        {loading ? (
          <LoadingAnimation />
        ) : (
          <ChatList
            chats={chats}
            roomID={conversation?.roomID}
          />
        )}
        <ChatInput
          setChats={setChats}
          receiver={conversation?.receiver?._id}
          roomID={conversation?.roomID}
        />
      </Left>
      <Right className='show'>
        <ChatInfo />
      </Right>
    </Container>
  );
};

export default Convesation;
