import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import icons from '../../assets/inputIcons.png';
import { IoIosAddCircle, IoMdCamera, IoMdMicrophone } from 'react-icons/io';
import { IconButton } from '@mui/material';
import { AiFillLike } from 'react-icons/ai';
import { postData } from '../../api/apiCalls';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
  padding: 0.5rem;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .btn {
    padding: 0;
  }
  .icon {
    color: #1a74e4;
    font-size: 1.7rem;
  }
  .desktop {
    display: none;
  }
  .mobile.hide {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .desktop {
      display: inline;
    }
    .mobile {
      display: none;
    }
  }
`;

const Image = styled.img`
  cursor: pointer;
  display: none;
  @media screen and (min-width: 500px) {
    display: inline-block;
  }
`;
const InputContainer = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem;
  background-color: #f0f2f5;
  border-radius: 1rem;
`;
const Input = styled.input`
  flex: 1;

  min-width: 10px !important;
  font-weight: 200;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.1rem;
`;
const ChatInput = ({ roomID, receiver, setChats }) => {
  const [messege, setMessege] = useState('');
  // const [IncommingMessege, setIncomingMessege] = useState('');
  const [minimize, setMinimize] = useState(false);
  const [type, setType] = useState('text');
  const { token, openToast, socket } = useAppContext();
  const sendMesege = async e => {
    e.preventDefault();
    if (messege.length === 0) return;
    try {
      const res = await postData(
        `/messeges/${receiver}`,
        {
          title: messege,
          roomID,
          type,
        },
        token
      );
      if (res) {
        setChats(prev => [...prev, res.messege]);
        socket.emit('SEND_MESSEGE', res?.messege, receiver);
        setMessege('');
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || 'Something went wrong!!!';
      console.log(error);
      openToast(message);
    }
  };
  useEffect(() => {
    socket?.on('RECEIVE_MESSEGE', message => {
      console.log(messege);
      message?.roomID === roomID && setChats(prev => [...prev, message]);
    });
    return () => socket?.disconnect();
  }, [socket, roomID]);
  return (
    <Container>
      <IconButton className='btn mobile'>
        <AiFillLike className='icon' />
      </IconButton>
      <IconButton className='btn desktop'>
        <IoIosAddCircle className='icon' />
      </IconButton>
      <Image src={icons} />
      <InputContainer onSubmit={sendMesege}>
        {/* <IconButton className='btn mobile'>
          <AiFillSmile />
        </IconButton> */}
        <Input
          onFocus={() => {
            setMinimize(true);
          }}
          value={messege}
          onChange={e => setMessege(e.target.value)}
          onBlur={() => setMinimize(messege ? true : false)}
          placeholder='Aa'
        />
      </InputContainer>
      <IconButton className='btn desktop'>
        <AiFillLike className='icon' />
      </IconButton>
      <IconButton className={`btn mobile ${minimize && 'hide'} `}>
        <IoMdMicrophone className='icon' />
      </IconButton>
      <IconButton className={`btn mobile ${minimize && 'hide'} `}>
        <IoMdCamera className='icon' />
      </IconButton>
    </Container>
  );
};

export default ChatInput;
