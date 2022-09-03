import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AuthForm from 'components/AuthForm';
import { register } from 'redux/auth/authOperations';
import { Container, Video } from 'pages/Home/Home.styled';
import videoLayout from '../../assets/video/videoLayout.mp4';

const Register = () => {
  const dispatch = useDispatch();
  const page = useLocation().pathname;

  const getData = (name, email, password) => {
    dispatch(register({ name, email, password }));
    console.log('name ', name, 'email ', email, 'password', password);
  };

  return (
    <Container>
      <Video src={videoLayout} autoPlay muted loop></Video>;
      <AuthForm page={page} text={'Create a new account'} onSubmit={getData} />
    </Container>
  );
};

export default Register;
