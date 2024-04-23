import React from 'react';
import styled from 'styled-components';
import Leftbar from '../home/leftbar/Leftbar';
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10000;
  overflow: hidden;
  display: none;
  &.show {
    display: flex;
    justify-content: flex-end;
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  max-width: 220px;
  background-color: white;
  transition: 300ms ease-in-out;
  transform: translateX(100%);
  &.show {
    transform: translateX(0);
  }
`;
const Drawer = ({ show, setOpenDrawer }) => {
  console.log('show', show);
  return (
    <Wrapper
      className={show && 'show'}
      onClick={() => setOpenDrawer(false)}
    >
      <Container className={show && 'show'}>
        <Leftbar />
      </Container>
    </Wrapper>
  );
};

export default Drawer;
