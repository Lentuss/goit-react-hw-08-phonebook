import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from 'components/Header';
import { LayoutContainer, Container } from './Layout.styled';

const Layout = () => {
  const location = useLocation().pathname;
  return (
    <LayoutContainer location={location}>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </LayoutContainer>
  );
};

export default Layout;
