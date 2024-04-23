import React, { useEffect } from 'react';
import Navbar from '../../components/nav/Navbar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';
// import io from ''
import { io } from 'socket.io-client';
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const AppLayout = () => {
  const { setSocket, user, socket, updateOnlineUsers, updateNotifications } =
    useAppContext();
  const sendDetails = () => {
    socket?.emit('ADD_USER', user._id);
  };

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_URL);
    setSocket(socket);
  }, [user]);
  useEffect(() => {
    socket?.on('SEND_DETAILS', sendDetails);
    socket?.on('GET_ONLINE_USERS', onlineUsers => {
      updateOnlineUsers(onlineUsers);
    });
    socket?.on('GET_NOTIFICATIONS', notifications => {
      updateNotifications(notifications);
    });
    return () => {
      socket?.off('SEND_DETAILS', sendDetails);
    };
  }, [socket]);
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default AppLayout;
