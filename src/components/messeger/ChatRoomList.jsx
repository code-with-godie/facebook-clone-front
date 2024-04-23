import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Room from './Room';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
import { useFetch } from '../../api/useFetch';
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const ChatRoomList = ({ setConversation, setOpenConversation }) => {
  const [rooms, setRooms] = useState([]);
  const { loading, data, error } = useFetch('/rooms');
  useEffect(() => {
    data && setRooms(data?.rooms);
  }, [data]);

  if (loading) return <LoadingAnimation />;
  if (error) return <h1>could not fetch rooms</h1>;
  if (rooms.length === 0) return <h1>no rooms yet</h1>;
  return (
    <Container>
      {rooms?.map(room => (
        <Room
          setOpenConversation={setOpenConversation}
          setConversation={setConversation}
          key={room?._id}
          {...room}
        />
      ))}
    </Container>
  );
};

export default ChatRoomList;
