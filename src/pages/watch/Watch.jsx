import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/watch/Sidebar';
import VideoContainer from '../../components/watch/VideoContainer';
const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  overflow: auto;
`;
const Left = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    flex: 1;
    background-color: white;
    padding: 1rem;
    position: sticky;
    top: 0;
  }
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  overflow: auto;
`;
const Watch = () => {
  return (
    <Container>
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <VideoContainer />
      </Right>
    </Container>
  );
};

export default Watch;
