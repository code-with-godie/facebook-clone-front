import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Avatar, Tooltip } from '@mui/material';
import { MdOutlinePersonAdd } from 'react-icons/md';
import { AiFillLike } from 'react-icons/ai';
import { Add, CameraAlt, Edit } from '@mui/icons-material';
import Filters from '../../components/profile/Filters';
import Content from '../../components/profile/Content';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';
import Model from '../../components/models/Model';
import ConfirmModel from '../../components/models/ConfirmModel';
import { useFetch } from '../../api/useFetch';
import noAvator from '../../assets/no-avator.jpg';
import noProfile from '../../assets/no-profile.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import NewPost from '../../components/new/NewPost';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
import { postData, updateData } from '../../api/apiCalls';

const Container = styled.section`
  background-color: rgba(203, 200, 200, 0.374);
`;
const ProfileContainer = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(126, 126, 126, 0.4),
    rgba(200, 200, 200, 0.746),
    rgba(214, 214, 214, 0.819),
    rgba(255, 255, 255, 0.837),
    rgb(255, 255, 255)
  );
  border-bottom: 1px solid rgba(126, 126, 126, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  .like {
    font-size: 1.5rem;
  }
  .like.liked {
    color: #294d9a;
  }
  .add {
    font-size: 1rem;
  }
`;
const CoverPictureContainer = styled.div`
  height: 350px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  position: relative;
`;
const CoverPicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
  object-fit: cover;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.19);
`;
const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  border-bottom: 1px solid rgba(126, 126, 126, 0.4);
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const EditButton = styled.label`
  position: absolute;
  z-index: 10000;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000000bb;
`;
const ProfilePicPicker = styled(EditButton)`
  top: 100px;
  right: 45px;
  background-color: #aaa7a7b3;
  border-radius: 50%;
`;
const CoverPicPicker = styled(EditButton)`
  bottom: 10px;
  right: 10px;
  background-color: white;
  text-transform: capitalize;
  border-radius: 0.5rem;

  .icon {
    color: #000000bb;
  }
`;
const UserDescription = styled.div`
  display: flex;
  /* @media screen and (max-width:900px) {
        flex-direction: column;
    } */
`;
const ProfilePictureContainer = styled.form`
  padding: 1rem;
  position: relative;
  .profile {
    width: 200px;
    height: 200px;
    border: 3px solid white;
    margin-top: -70px;
    z-index: 10;
    background-color: white;
  }
  .camera {
    position: absolute;
    right: 45px;
    z-index: 30;
    top: 100px;
    background-color: #aaa7a7b3;
    border-radius: 50%;
  }
`;
const ProfileDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ProfileControls = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
const UserName = styled.h4`
  font-size: 2rem;
  color: #000000da;
  text-transform: capitalize;
`;
const FollowersCounter = styled.span`
  color: #00000099;
`;
const FriendsContainer = styled.h4`
  flex: 1;
  display: flex;
  align-items: center;
  .avatar {
    width: 35px;
    height: 35px;
    margin-left: -0.5rem;
  }
`;
const Button = styled.button`
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: #2a54ae;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  text-transform: capitalize;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #294d9a;
  }
`;
const ChangeButton = styled(Button)`
  background-color: #d8dadf;
  color: #000000be;
  &:hover {
    background-color: #8f8e8ec0;
  }
`;
const Profile = () => {
  //state definations
  const {
    token,
    user: loggedInUser,
    openToast,
    setUser: setLoggedInUser,
  } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const userID = location.state?.userID;
  const owner = loggedInUser._id === userID;
  const [user, setUser] = useState({});
  const [coverPic, setCoverPic] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [showConfirmModel, setShowConfirmModel] = useState(false);
  const [slug, setSlug] = useState(null);
  const [pictureType, setPictureType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(
    loggedInUser?.likes?.some(item => item === userID)
  );
  const [following, setFollowing] = useState(
    loggedInUser?.followings?.some(item => item === userID)
  );
  const { loading: initialLoading, error, data } = useFetch(`/users/${userID}`);

  //component contollers
  const handleFile = (e, type) => {
    setPictureType(type);
    const file = e.target.files[0];
    if (file.type.split('/')[0] !== 'image') {
      console.log('not allowed');
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (type === 'coverPic') {
        openToast('only images are allowed');
        setCoverPic(fileReader.result);
      } else {
        setProfilePicture(fileReader.result);
      }
      setShowConfirmModel(true);
    };
  };
  const cancelPicture = () => {
    pictureType === 'coverPic' ? setCoverPic(null) : setProfilePicture(null);
    setShowConfirmModel(false);
    setPictureType(null);
    setLoading(false);
  };
  const toggleFollow = async () => {
    try {
      const res = await updateData(`/users/follow/${user?._id}`, {}, token);
      if (res) {
        setLoggedInUser({ user: res.user, token });
      }
    } catch (error) {
      const messege = error.response?.data?.message || 'Something went wrong';
      openToast(messege);
    }
  };
  const toggleLike = async () => {
    try {
      const res = await updateData(`/users/like/${user?._id}`, {}, token);
      if (res) {
        console.log(res);
        setLoggedInUser({ user: res.user, token });
      }
    } catch (error) {
      const messege = error.response?.data?.message || 'Something went wrong';
      openToast(messege);
    }
  };
  const messege = async () => {
    try {
      const res = await postData(`/rooms`, { userID }, token);
      if (res) {
        navigate('/messeger', { state: { room: res.room } });
      }
    } catch (error) {
      const messege = error.response?.data?.message || 'Something went wrong';
      openToast(messege);
    }
  };
  const savePicture = async () => {
    try {
      setLoading(true);
      const name = pictureType === 'coverPic' ? 'coverPic' : 'profilePic';
      const value = pictureType === 'coverPic' ? coverPic : profilePicture;
      const res = await updateData(
        `/users/${userID}`,
        { [name]: value },
        token
      );
      if (res) {
        setLoggedInUser({ user: res.user, token });
        setUser(res.user);
        pictureType === 'coverPic'
          ? setCoverPic(null)
          : setProfilePicture(null);
        setPictureType(null);
        setShowConfirmModel(false);
        console.log(res);
      }
    } catch (error) {
      const messege = error.response?.data?.message || 'Something went wrong';
      openToast(messege);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    data && setUser(data.user);
  }, [data]);
  //update state when the user changes
  useEffect(() => {
    setFollowing(loggedInUser?.followings?.some(item => item === userID));
    setLiked(loggedInUser?.likes?.some(item => item === userID));
  }, [loggedInUser, userID]);

  if (initialLoading) return <LoadingAnimation />;
  if (error) return <h1>something went wrong</h1>;
  return (
    <Container>
      <ProfileContainer>
        <CoverPictureContainer>
          <CoverPicture src={coverPic || user?.coverPic?.photo || noAvator} />
          {owner && (
            <CoverPicPicker htmlFor='coverPic'>
              <CameraAlt />
              edit cover photo
            </CoverPicPicker>
          )}
          <input
            type='file'
            hidden
            id='coverPic'
            onChange={e => handleFile(e, 'coverPic')}
          />
        </CoverPictureContainer>
        <DescriptionContainer>
          <UserDescription>
            <ProfilePictureContainer>
              <Avatar
                src={profilePicture || user?.profilePic?.photo || noProfile}
                className='profile'
              />
              {owner && (
                <ProfilePicPicker htmlFor='profilePic'>
                  <CameraAlt />
                </ProfilePicPicker>
              )}
              <input
                type='file'
                hidden
                id='profilePic'
                onChange={e => handleFile(e, 'profilePic')}
              />
            </ProfilePictureContainer>
            <ProfileDescription>
              <UserName> {user?.username} </UserName>
              <FollowersCounter>10K followers</FollowersCounter>
              <FriendsContainer>
                <Avatar
                  className='avatar'
                  src='http:localhost:3000/assets/person/1.jpeg'
                />
                <Avatar
                  className='avatar'
                  src='http:localhost:3000/assets/person/2.jpeg'
                />
                <Avatar
                  className='avatar'
                  src='http:localhost:3000/assets/person/3.jpeg'
                />
                <Avatar
                  className='avatar'
                  src='http:localhost:3000/assets/person/4.jpeg'
                />
                <Avatar
                  className='avatar'
                  src='http:localhost:3000/assets/person/5.jpeg'
                />
                <Avatar
                  className='avatar'
                  src='http:localhost:3000/assets/person/3.jpeg'
                />
                <Avatar
                  className='avatar'
                  src='http:localhost:3000/assets/person/4.jpeg'
                />
                <Avatar
                  className='avatar'
                  src='http:localhost:3000/assets/person/5.jpeg'
                />
              </FriendsContainer>
            </ProfileDescription>
            {owner ? (
              <ProfileControls>
                <Button>
                  <Add />
                  add a story
                </Button>
                <Tooltip title='change'>
                  <ChangeButton>
                    <Edit />
                    edit profile
                  </ChangeButton>
                </Tooltip>
              </ProfileControls>
            ) : (
              <ProfileControls>
                <Tooltip title='messege'>
                  <Button onClick={messege}>
                    <FaFacebookMessenger />
                    messege
                  </Button>
                </Tooltip>
                <Tooltip title='add friend'>
                  <Button>
                    {' '}
                    <MdOutlinePersonAdd className='add' /> add friend
                  </Button>
                </Tooltip>
                {following ? (
                  <Tooltip title='folow this account'>
                    <ChangeButton onClick={toggleFollow}>
                      {' '}
                      following
                    </ChangeButton>
                  </Tooltip>
                ) : (
                  <Tooltip title='folow this account'>
                    <Button onClick={toggleFollow}> follow</Button>
                  </Tooltip>
                )}
                <Tooltip title='like this page'>
                  <ChangeButton>
                    <AiFillLike
                      onClick={toggleLike}
                      className={`like ${liked && 'liked'} `}
                    />

                    {liked ? 'liked' : 'like'}
                  </ChangeButton>
                </Tooltip>
              </ProfileControls>
            )}
          </UserDescription>
          <Filters setSlug={setSlug} />
        </DescriptionContainer>
      </ProfileContainer>
      <Content
        slug={slug}
        userID={userID}
      />
      {showModel && (
        <Model>
          <NewPost
            title='update user'
            showModel={showModel}
            userUpdate
          />
        </Model>
      )}
      {showConfirmModel && (
        <ConfirmModel
          save={savePicture}
          loading={loading}
          closeModel={cancelPicture}
        />
      )}
    </Container>
  );
};

export default Profile;
