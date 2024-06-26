import { Share, ThumbUp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BiMessage } from 'react-icons/bi';
import { IoIosShareAlt } from 'react-icons/io';
import { useAppContext } from '../../../context/AppContext';
import { updateData } from '../../../api/apiCalls';
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.276);
`;
const ControlItem = styled.div`
  .liked {
    color: #0c3691;
  }
`;
const ControlItemLabel = styled.span`
  color: #00000098;
`;
const PostUserControls = ({ likes, setPostLikes, postID }) => {
  const {
    user: { _id: userID },
    token,
  } = useAppContext();
  const [liked, setLiked] = useState(likes.includes(userID));
  const handleLike = async () => {
    try {
      setPostLikes(prev => (liked ? prev-- : prev++));
      setLiked(prev => !prev);
      await updateData(`posts/like/${postID}`, {}, token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <ControlItem>
        <IconButton onClick={handleLike}>
          <ThumbUp className={liked ? 'liked' : ''} />
        </IconButton>
        <ControlItemLabel> {liked ? 'unlike' : 'like'} </ControlItemLabel>
      </ControlItem>
      <ControlItem>
        <IconButton>
          <BiMessage />
        </IconButton>
        <ControlItemLabel>comment</ControlItemLabel>
      </ControlItem>
      <ControlItem>
        <IconButton>
          <IoIosShareAlt />
        </IconButton>
        <ControlItemLabel>share</ControlItemLabel>
      </ControlItem>
    </Container>
  );
};

export default PostUserControls;
