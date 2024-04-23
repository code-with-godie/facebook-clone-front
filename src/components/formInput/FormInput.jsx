import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #00000040;
  color: black;
  border-radius: 0.5rem;
  outline: none;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: #000000b9;
  ::placeholder {
    color: #0000004b;
  }
  flex: 1;
`;
const FormInput = ({ handleChange, ...formProps }) => {
  return (
    <Container>
      <Input
        {...formProps}
        onChange={e => handleChange(e)}
      />
    </Container>
  );
};

export default FormInput;
