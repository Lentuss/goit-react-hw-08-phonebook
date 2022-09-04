import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      Page not found. <br /> Return to <Link to="/">home page</Link>
    </Container>
  );
};

export default NotFound;
