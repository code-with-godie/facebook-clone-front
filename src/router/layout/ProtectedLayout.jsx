import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';
const Container = styled.main`
  height: 100vh;
  overflow: auto;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const ProtectedLayout = () => {
  const { user } = useAppContext();
  return <Container>{user ? <Outlet /> : <Navigate to='/login' />}</Container>;
};

export default ProtectedLayout;
