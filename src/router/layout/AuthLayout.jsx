import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  height: 100vh;
  overflow: auto;
  background-color: #f0f2f5;
`;
const AuthLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
