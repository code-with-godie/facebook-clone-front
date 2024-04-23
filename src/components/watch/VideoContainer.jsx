import React, { useEffect, useState } from 'react';
// import { getData } from '../../routes/routes';
import { useAppContext } from '../../context/AppContext';
import styled from 'styled-components';
import PostsList from '../home/post/PostsList';
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../loading/LoadingAnimation';
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  overflow: auto;
`;
const VideoContainer = () => {
  const [posts, setPosts] = useState([]);
  const { loading, data, error } = useFetch('/posts/watch/never');

  useEffect(() => {
    data && setPosts(data.posts);
  }, [data]);

  if (loading) {
    return <LoadingAnimation />;
  }
  if (error) {
    return <h1>something went wrong...</h1>;
  }
  return (
    <Container>
      <PostsList
        posts={posts}
        mH='90%'
      />
    </Container>
  );
};

export default VideoContainer;
