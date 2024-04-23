import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/nav/Navbar';
import Leftbar from '../../components/home/leftbar/Leftbar';
import Feeds from '../../components/home/Feeds';
import Rightbar from '../../components/rightbar/Rightbar';

const Wrapper = styled.main`
  background: #f0f2f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Container = styled.section`
  flex: 1;
  display: flex;
  overflow: auto;
  .feeds {
    flex: 3;
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Leftbar large />
        <Feeds />
        <Rightbar />
      </Container>
    </Wrapper>
  );
};

export default Home;
