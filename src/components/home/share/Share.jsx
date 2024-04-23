import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ShareIconItem from './ShareIconItem';
import { useAppContext } from '../../../context/AppContext';
import { Link } from 'react-router-dom';
import NewPost from '../../new/NewPost';
const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    box-shadow: rgba(170, 174, 178, 0.2) 0px 8px 24px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
    background-color: white;
    border-radius: 0.5rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  background: var(--clr-primary-1);
  padding: 0.5rem;
  flex: 1;
  border-radius: 1rem;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 0.8rem;
  outline: none;
  font-weight: 200;
  color: black;
  font-size: 1.3rem;
`;
const ProfleContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Horizontal = styled.hr`
  background-color: red;
`;
const IconContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Share = ({ setPosts }) => {
  const {
    user: {
      profilePic: { photo },
      username,
    },
  } = useAppContext();
  const [showModel, setShowModel] = useState(false);
  return (
    <Container>
      <ProfleContainer>
        <Avatar src={photo} />
        <InputContainer>
          <Link></Link>
          <Input placeholder={`What is on your mind ${username || ''} ?`} />
        </InputContainer>
      </ProfleContainer>
      <Horizontal />
      <IconContainer>
        <ShareIconItem
          Icon={VideoCameraBackIcon}
          label='live video'
          className='icon one '
        />
        <ShareIconItem
          onclickHandler={e => setShowModel(true)}
          Icon={PermMediaIcon}
          label='photo or video'
          className='icon two '
        />
        <ShareIconItem
          Icon={EmojiEmotionsIcon}
          label='feelings/activity'
          className='icon three'
        />
      </IconContainer>
      {showModel && (
        <NewPost
          title='post'
          setPosts={setPosts}
          showModel={setShowModel}
        />
      )}
    </Container>
  );
};

export default Share;
