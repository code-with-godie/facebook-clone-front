import React from 'react';
import styled from 'styled-components';
const Container = styled.p`
  background-color: ${props => (props.mine ? '#1A74E4' : ' #f1f2f6')};
  color: ${props => (props.mine ? ' white' : ' #000000e8')};
  padding: 0.5rem;
  border-radius: 1rem;
`;
const TextMessege = ({ mine, title }) => {
  return <Container mine={mine}> {title} </Container>;
};

export default TextMessege;
