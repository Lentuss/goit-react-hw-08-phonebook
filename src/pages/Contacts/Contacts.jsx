import React from 'react';
// import PropTypes from 'prop-types';

import Form from 'components/Form';
import ContactsList from 'components/ContactsList';

import { Container, BookContainer } from './Contacts.styled';

const Contacts = props => {
  return (
    <Container>
      {/* <Title>Phonebook</Title> */}
      <BookContainer>
        <Form />
        <ContactsList title={'Contacts'} />
      </BookContainer>
    </Container>
  );
};

Contacts.propTypes = {};

export default Contacts;
