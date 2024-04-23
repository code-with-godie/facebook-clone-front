import React from 'react'
import styled from 'styled-components'
import CreatStory from './CreatStory'
import StoryItem from './StoryItem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import person1 from '../../../assets/person/1.jpeg';
import person2 from '../../../assets/person/2.jpeg';
import person3 from '../../../assets/person/3.jpeg';
import person4 from '../../../assets/person/4.jpeg';
import person5 from '../../../assets/person/5.jpeg';
import person6 from '../../../assets/person/6.jpeg';
import person7 from '../../../assets/person/7.jpeg';
import person8 from '../../../assets/person/8.jpeg';
import person9 from '../../../assets/person/9.jpeg';
import person10 from '../../../assets/person/10.jpeg';
import me from '../../../assets/person/me.jpg';
const Container = styled.div`
flex: 1;
display: flex;
gap:.5rem;
overflow: auto;
position: relative;
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
 }
`
const Arrow = styled.span`
padding:.5rem;
border-radius: 50%;
background-color: #ffffff7a;
position: absolute;
top: 50%;
right:5px;
z-index: 10;
cursor: pointer;
.icon{
    color: #00000082;
}
`
const StoryListContainer = () => {
  return (
    <Container>
        <CreatStory/>
        <StoryItem profile={me} />
        <StoryItem profile={person1} />
        <StoryItem profile={person2} />
        <StoryItem profile={person3} />
        <StoryItem profile={person4} />
        <StoryItem profile={person5} />
        <StoryItem profile={person6} />
        <StoryItem profile={person7} />
        <StoryItem profile={person8} />
        <StoryItem profile={person9} />
        <StoryItem profile={person10} />
        <Arrow><ArrowForwardIosIcon className='icon' /></Arrow>
    </Container>
  )
}

export default StoryListContainer
