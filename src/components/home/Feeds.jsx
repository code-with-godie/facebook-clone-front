import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Story from './story/Story';
import Share from './share/Share';
import PostsList from './post/PostsList';
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../loading/LoadingAnimation';
import MobileShare from './share/MobileShare';
const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: center;
  /* padding: 0.3rem; */
  overflow: auto;
  @media screen and (min-width: 768px) {
    gap: 0.5rem;
  }
`;
const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const { loading, error, data } = useFetch('/posts');

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
    console.log(data);
  }, [data]);

  if (loading) {
    return <LoadingAnimation />;
  }
  if (error) {
    console.log(error);
    return <h1>something went wrong!!!</h1>;
  }
  return (
    <Container>
      <MobileShare />
      <Story />
      <Share setPosts={setPosts} />
      <PostsList posts={posts} />
    </Container>
  );
};

export default Feeds;
