import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../../components/formInput/FormInput';
import { registerInputs } from './inputs';
import { Link, useNavigate } from 'react-router-dom';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
import { postData } from '../../api/apiCalls';
const Container = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;
const FormContainer = styled.form`
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-height: 50%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 500px;
`;
const RegisterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
const Header = styled.h1`
  color: #3252f5;
  font-family: 'Poppins,sans-serif';
  font-weight: 900;
  font-size: 5rem;
`;
const Description = styled.p`
  color: #000000af;
  font-size: 1.3rem;
  width: 70%;
`;
const Submit = styled.button`
  padding: 1rem;
  color: white;
  border: none;
  font-family: 'Poppins,sans-serif';
  text-transform: capitalize;
  background: #1a6ed8;
  border-radius: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: #808080ad;
    color: #00000069;
  }
`;
const LoginLink = styled.h3`
  text-align: right;
  color: #1a6ed8;
  font-weight: 400;
  /* font-style: oblique; */
  text-decoration: underline;
`;
const Register = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const disabled = user.password.length < 8 || user.email === '';
  const navigate = useNavigate();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(user);
      const res = await postData('/users/register', user);
      if (res) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <RegisterHeader>
        <Header>Facebook</Header>
        <Description>
          Connect with friends and the world around you on facebook
        </Description>
      </RegisterHeader>
      <FormContainer onSubmit={e => handleSubmit(e)}>
        {registerInputs.map(item => (
          <FormInput
            handleChange={handleChange}
            value={user[item.name]}
            key={item.id}
            {...item}
          />
        ))}
        <Submit disabled={disabled}>
          {loading ? <LoadingAnimation /> : 'sign in'}
        </Submit>
        <Link
          to='/login'
          className='link'
        >
          <LoginLink> sign in here?</LoginLink>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Register;
