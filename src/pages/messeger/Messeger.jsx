import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatRooms from '../../components/messeger/ChatRooms';
import Convesation from '../../components/messeger/Convesation';
import { useLocation } from 'react-router-dom';
const Container = styled.section`
  display: flex;
  height: 90vh;
  overflow: auto;
  background-color: #f0f2f5;
`;
const Messeger = () => {
  const location = useLocation();
  const [conversation, setConversation] = useState(null);
  const [openConversation, setOpenConversation] = useState(false);

  useEffect(() => {
    // console.log(location);
  }, [location]);
  return (
    <Container>
      <ChatRooms
        setOpenConversation={setOpenConversation}
        setConversation={setConversation}
        hide={openConversation}
      />
      <Convesation
        conversation={conversation}
        setOpenConversation={setOpenConversation}
        setConversation={setConversation}
        show={openConversation}
      />
    </Container>
  );
};

export default Messeger;
