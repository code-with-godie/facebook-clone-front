import React from 'react';
import styled from 'styled-components';
import TextMessege from './TextMessege';
import { Avatar } from '@mui/material';
import { useAppContext } from '../../context/AppContext';

const Container = styled.div`
  font-size: 1;
  max-width: 50%;
  align-self: ${props => (props.mine ? 'flex-end' : 'flex-start')};
  display: flex;
  gap: 0.3rem;
  align-items: flex-end;
  .hide {
    display: none;
  }
  .profile {
    width: 20px;
    height: 20px;
  }
`;
const Messege = ({ sender, title, receiver }) => {
  const { user } = useAppContext();
  const mine = sender === user?._id;
  return (
    <Container mine={mine}>
      <Avatar
        src={receiver?.profilePic?.photo}
        className={mine ? 'hide' : 'profile'}
      />
      <TextMessege
        title={title}
        mine={mine}
      />
    </Container>
  );
};

export default Messege;
