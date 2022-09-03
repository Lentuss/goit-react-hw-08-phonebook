import React from 'react';

import { Container, Video, Message } from './Home.styled';
import videoLayout from '../../assets/video/videoLayout.mp4';

const Home = props => {
  return (
    <Container>
      <Video src={videoLayout} autoPlay muted loop></Video>;
      <Message>
        Welcome to Phonebook App. <br /> To start using, log in or register
      </Message>
    </Container>
  );
};

export default Home;
