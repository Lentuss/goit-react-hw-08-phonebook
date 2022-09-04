import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperations';
import { Container, Video } from './LogIn.styled';
import video from '../../assets/video/video.mp4';
import AuthForm from 'components/AuthForm';

const LogIn = () => {
  const page = useLocation().pathname;
  const dispatch = useDispatch();

  const getData = (email, password) => {
    dispatch(logIn({ email, password }));
    console.log('email ', email, 'password', password);
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

export default LogIn;
