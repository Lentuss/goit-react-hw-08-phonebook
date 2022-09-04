import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Video } from './LoginPage.styled';
import { logIn } from 'redux/auth/authOperations';
import AuthForm from 'components/AuthForm';
import video from '../../assets/video/video.mp4';

const LoginPage = () => {
  const page = useLocation().pathname;
  const dispatch = useDispatch();

  const getData = (name, email, password) => {
    dispatch(logIn({ email, password }));
  };

  return (
    <Container>
      <Video src={video} autoPlay muted loop></Video>
      <AuthForm
        text={'Please Log In to continue'}
        page={page}
        onSubmit={getData}
      />
    </Container>
  );
};

export default LoginPage;
