import React from 'react';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import styled from 'styled-components';
// import Comments from '../comment/Comments';
import PostContent from './PostContent';
import { useAppContext } from '../../../context/AppContext';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.19);
  background-color: white;
`;
const Post = ({
  caption,
  _id: postID,
  url: { postUrl: url },
  postType,
  createdAt: date,
  likes,
  user: {
    profilePic: { photo: profile },
    username,
    _id: userID,
  },
}) => {
  const { user } = useAppContext();
  // const user = users.find(item => item._id === userID);
  // const {

  // } = user;
  return (
    <Container>
      <PostHeader
        username={username}
        caption={caption}
        profile={profile}
        userID={userID}
        date={date}
      />
      <PostContent
        url={url}
        type={postType}
      />
      <PostFooter
        postID={postID}
        likes={likes}
      />
      {/* <Comments /> */}
    </Container>
  );
};

export default Post;
