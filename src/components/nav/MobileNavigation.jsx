import { Search } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import Drawer from './Drawer';
import { useLocation, useNavigate } from 'react-router-dom';
const Container = styled.nav`
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.19);
  background-color: var(--clr-white-primary);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  gap: 0.2rem;
  border-bottom: 1px solid #e4e6eb;
`;
const Bottom = styled.div`
  display: flex;
  padding: 0.8rem 0.5rem;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  .icon {
    color: #6c6c6e;
    font-size: 1.8rem;
    @media screen and (min-width: 500px) {
      font-size: 2rem;
      .icon.active {
        font-size: 2.3rem;
        color: #5c9aff;
      }
    }
  }
  .active {
    font-size: 2rem;
    color: #5c9aff;
  }
`;
const TopLeft = styled.div`
  flex: 1;
`;
const TopRight = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  .btn {
    background-color: #e4e6eb;
    :hover {
      background-color: #e4e6ebbf;
      background-color: red;
    }
    .icon {
      font-size: 1.5rem;
    }
  }
`;
const Title = styled.h2`
  color: #5c9aff;
  font-size: 2rem;
`;
const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location?.pathname;
    switch (path) {
      case '/':
        setIndex(0);
        break;
      case '/friends':
        setIndex(1);
        break;
      case '/messeger':
        setIndex(2);
        break;
      case '/watch':
        setIndex(3);
        break;
      case '/notifications':
        setIndex(4);
        break;
      case '/market-place':
        setIndex(5);
        break;
      default:
        break;
    }
  }, [location]);
  useEffect(() => {
    const links = document.querySelectorAll('.icon');
    links.forEach((link, index) => {
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      }
      // link.addEventListener('click', e => {
      //   setIndex(index);
      // });
      if (currentIndex === index) {
        link.classList.add('active');
      }
    });
  }, [currentIndex]);
  return (
    <Container>
      <Top>
        <TopLeft>
          <Title>facebook</Title>
        </TopLeft>
        <TopRight>
          <IconButton className='btn'>
            <Search className='icon' />
          </IconButton>
          <IconButton
            className=''
            onClick={() => setOpenDrawer(true)}
          >
            <FaBars className='icon' />
          </IconButton>
        </TopRight>
      </Top>
      <Bottom>
        <IconButton onClick={() => navigate('/')}>
          <HomeIcon className='icon' />
        </IconButton>
        <IconButton onClick={() => navigate('/friends')}>
          <PeopleIcon className='icon' />
        </IconButton>
        <Badge
          color='error'
          badgeContent={'0'}
          onClick={() => navigate('/messeger')}
        >
          <FaFacebookMessenger className='icon' />
        </Badge>
        <IconButton onClick={() => navigate('/watch')}>
          <OndemandVideoIcon className='icon' />
        </IconButton>
        <Badge
          color='error'
          badgeContent={'0'}
          onClick={() => navigate('/notifications')}
        >
          <IoMdNotifications className='icon' />
        </Badge>
        <IconButton onClick={() => navigate('/market-place')}>
          <StorefrontIcon className='icon' />
        </IconButton>
      </Bottom>
      <Drawer
        setOpenDrawer={setOpenDrawer}
        show={openDrawer}
      />
    </Container>
  );
};

export default MobileNavigation;
