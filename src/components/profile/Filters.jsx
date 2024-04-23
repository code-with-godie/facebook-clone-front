import { MoreHoriz } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  flex: 1;
  display: flex;
`;
const MoreContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  align-items: flex-end;
`;
const Filter = styled.p`
  text-transform: capitalize;
  color: #000000c9;
  cursor: pointer;
  padding: 0.5rem;
  &.active {
    border-bottom: 3px solid #2a54ae;
    color: #2a54ae;
    font-size: 1.1rem;
  }
`;
const Filters = ({ setSlug }) => {
  const filters = {
    0: null,
    1: null,
    2: null,
    3: 'image',
    4: 'video',
    5: null,
  };
  const [currentIndex, setIndex] = useState(0);
  useEffect(() => {
    const links = document.querySelectorAll('.filter');
    links.forEach((link, index) => {
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      }
      link.addEventListener('click', e => {
        setIndex(index);
        if (index === 3 || index === 4) setSlug(filters[index]);
      });
      if (currentIndex === index) {
        link.classList.add('active');
      }
      // if (index < 2) {
      //   console.log('changing slug');
      //   setSlug(index === 3 ? 'image' : index === 4 && 'video');
      // }
    });
  }, [currentIndex]);
  return (
    <Container>
      <FiltersContainer>
        <Tooltip title='posts'>
          <Filter className='filter'>posts</Filter>
        </Tooltip>
        <Tooltip title='about'>
          <Filter className='filter'>about</Filter>
        </Tooltip>
        <Tooltip title='friends'>
          <Filter className='filter'>friends</Filter>
        </Tooltip>
        <Tooltip title='photos'>
          <Filter className='filter'>photos</Filter>
        </Tooltip>
        <Tooltip title='videos'>
          <Filter className='filter'>videos</Filter>
        </Tooltip>
        <Tooltip title='check-ins'>
          <Filter className='filter'>check-ins</Filter>
        </Tooltip>
      </FiltersContainer>
      <MoreContainer>
        <Tooltip title='more'>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Tooltip>
      </MoreContainer>
    </Container>
  );
};

export default Filters;
