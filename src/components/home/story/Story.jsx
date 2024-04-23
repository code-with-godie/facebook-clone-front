import React from 'react';
import styled from 'styled-components';
import StoryHeading from './StoryHeading';
import StoryListContainer from './StoryListContainer';
const Container = styled.div`
  box-shadow: rgba(170, 174, 178, 0.2) 0px 8px 24px;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  flex-direction: column;
  overflow: auto;
  flex: 0 0 200px;
  @media screen and (min-width: 500px) {
    flex: 0 0 300px;
    max-width: 500px;
  }
`;
const Story = () => {
  return (
    <Container>
      <StoryHeading />
      <StoryListContainer />
    </Container>
  );
};

export default Story;
