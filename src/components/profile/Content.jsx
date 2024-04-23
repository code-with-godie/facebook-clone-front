import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Share from '../home/share/Share';
import PostsList from '../home/post/PostsList';
import Introduction from './Introduction';
import Friends from './Friends';
import { useAppContext } from '../../context/AppContext';
import LoadingAnimation from '../loading/LoadingAnimation';
import { useFetch } from '../../api/useFetch';
const Container = styled.div`
  flex: 1;
  display: flex;
  max-width: 1000px;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  min-height: 300px;
  gap: 0.5rem;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-self: flex-start;
`;
const Content = ({ slug }) => {
  const [posts, setPosts] = useState([]);
  const {
    user: { _id: userID },
  } = useAppContext();
  const { loading, error, data } = useFetch(`/posts/single/${slug}/${userID}`);

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
  }, [data]);

  // if (error) {
  //   console.log(error);
  //   return <h1>something went wrong!!!</h1>;
  // }

  return (
    <Container>
      <Left>
        <Introduction />
        <Friends />
      </Left>
      <Right>
        <Share setPosts={setPosts} />
        {loading ? (
          <LoadingAnimation />
        ) : error ? (
          <h1>Something went wronng</h1>
        ) : (
          <PostsList posts={posts} />
        )}
      </Right>
    </Container>
  );
};

export default Content;
