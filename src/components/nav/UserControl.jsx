import React from 'react';
import styled from 'styled-components';
import AppsIcon from '@mui/icons-material/Apps';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { Avatar, Badge, IconButton, Tooltip } from '@mui/material';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const IconContainer = styled.span`
  .btn {
    color: black;
  }
`;
const UserControl = () => {
  const navigate = useNavigate();
  const {
    logout,
    user: {
      profilePic: { photo },
    },
  } = useAppContext();
  return (
    <Container className='user-controls'>
      <Tooltip
        title='menu'
        arrow
      >
        <IconContainer>
          <IconButton className='btn'>
            <AppsIcon className='icon' />{' '}
          </IconButton>
        </IconContainer>
      </Tooltip>
      <Tooltip
        title='messenger'
        arrow
      >
        <IconContainer>
          <IconButton className='btn'>
            <Badge
              badgeContent='0'
              color='error'
              onClick={() => navigate('/messeger')}
            >
              <FaFacebookMessenger className='icon' />{' '}
            </Badge>
          </IconButton>
        </IconContainer>
      </Tooltip>
      <Tooltip
        title='notifications'
        arrow
      >
        <IconContainer>
          <IconButton className='btn'>
            <Badge
              badgeContent='0'
              color='error'
            >
              <IoMdNotifications className='icon' />{' '}
            </Badge>
          </IconButton>
        </IconContainer>
      </Tooltip>
      <Tooltip
        title='profile'
        arrow
      >
        <IconButton onClick={logout}>
          <Avatar
            src={photo}
            className='profile'
          />
        </IconButton>
      </Tooltip>
    </Container>
  );
};

export default UserControl;
