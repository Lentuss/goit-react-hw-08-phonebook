import React from 'react';

import Form from 'components/Form';
import ContactsList from 'components/ContactsList';

import { Container, BookContainer } from './Contacts.styled';

const Contacts = () => {
  return (
    <Container>
      <BookContainer>
        <Form />
        <ContactsList title={'Contacts'} />
      </BookContainer>
    </Container>
  );
};

export default Contacts;
