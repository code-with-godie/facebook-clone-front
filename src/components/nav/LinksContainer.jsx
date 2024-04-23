import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import styled from 'styled-components';
import { IconButton, Tooltip } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
const Container = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  .navigate {
    display: flex;
  }
`;
const LinkItem = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  &.active {
    border-bottom: 3px solid var(--clr-blue-primary-1);
    .icon {
      color: var(--clr-blue-primary-1);
      font-size: 2.5rem;
    }
  }
  .icon {
    font-size: 2rem;
    transition: color 500ms;
  }
`;
const LinksContainer = () => {
  const [currentIndex, setIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const path = location?.pathname;
    switch (path) {
      case '/':
        setIndex(0);
        break;
      case '/friends':
        setIndex(1);
        break;
      case '/watch':
        setIndex(2);
        break;
      case '/market-place':
        setIndex(3);
        break;
      default:
        setIndex(100);
    }
  }, [location]);
  useEffect(() => {
    const links = document.querySelectorAll('.link');
    links.forEach((link, index) => {
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      }
      //   link.addEventListener('click', e => {
      //     setIndex(index);
      //   });
      if (currentIndex === index) {
        link.classList.add('active');
      }
    });
  }, [currentIndex]);
  return (
    <Container className='link-container'>
      <Tooltip
        arrow
        title='Home'
      >
        <Link
          to='/'
          className='navigate'
        >
          <LinkItem className='link'>
            <IconButton>
              {' '}
              <HomeIcon className='icon' />
            </IconButton>
          </LinkItem>
        </Link>
      </Tooltip>
      <Tooltip
        arrow
        title='Friends'
      >
        <Link
          to='/friends'
          className='navigate'
        >
          <LinkItem className='link'>
            <IconButton>
              {' '}
              <PeopleAltOutlinedIcon className='icon' />
            </IconButton>
          </LinkItem>
        </Link>
      </Tooltip>
      <Tooltip
        arrow
        title='videos'
      >
        <Link
          to='/watch'
          className='navigate'
        >
          <LinkItem className='link'>
            <IconButton>
              <OndemandVideoIcon className='icon' />
            </IconButton>
          </LinkItem>
        </Link>
      </Tooltip>
      <Tooltip
        arrow
        title='market place'
      >
        <Link
          to='/market-place'
          className='navigate'
        >
          <LinkItem className='link'>
            <IconButton>
              <StorefrontIcon className='icon' />
            </IconButton>
          </LinkItem>
        </Link>
      </Tooltip>
      <Tooltip
        arrow
        title='Games'
      >
        <Link
          to='/'
          className='navigate'
        >
          <LinkItem className='link'>
            <IconButton>
              <VideogameAssetIcon className='icon' />
            </IconButton>
          </LinkItem>
        </Link>
      </Tooltip>
    </Container>
  );
};

export default LinksContainer;
