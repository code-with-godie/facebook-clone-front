import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import { IconButton } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import loadingAnimation from '../../assets/loading.gif';
const Wrapper = styled.section`
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  z-index: 666;
  padding-top: 0.5rem;
  /* padding: 3.5rem 0 0 0; */
`;
const Container = styled.div`
  flex: 1;
  background-color: #00000058;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
`;
const Button = styled.button`
  padding: 0.5rem;
  outline: none;
  border: none;
  background: none;
  background: ${props => props.bg};
  color: white;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  min-width: 150px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Status = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .icon {
    color: white;
  }
`;
const LoadingAnimation = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
const Model = ({ closeModel, loading, save }) => {
  console.log(loading);
  return ReactDom.createPortal(
    <Wrapper>
      <Container>
        <Status>
          <IconButton>
            {' '}
            <PublicIcon className='icon' />{' '}
          </IconButton>
          <Button>Your profile is public</Button>
        </Status>
        <Button
          bg='#ffffff2b'
          onClick={closeModel}
        >
          cancel
        </Button>
        <Button
          bg='#2a54ae'
          onClick={save}
        >
          {' '}
          {loading ? (
            <LoadingAnimation src={loadingAnimation} />
          ) : (
            'save changes'
          )}
        </Button>
      </Container>
    </Wrapper>,
    document.getElementById('model')
  );
};

export default Model;
