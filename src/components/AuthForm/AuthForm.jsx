import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Title,
  FormLabel,
  LabelTitle,
  FormInput,
  Button,
} from './AuthForm.styled';

const AuthForm = ({ text, page, onSubmit }) => {
  //   let inputName;
  //   let inputEmail;
  //   let inputPassword;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        console.log(value);
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        console.log(value);

        return setPassword(value);
      default:
        return;
    }
  };

  //   const handleInput = e => {
  //     const { name, value } = e.currentTarget;
  //     switch (name) {
  //       case 'name':
  //         inputName = value;
  //         break;
  //       case 'email':
  //         inputEmail = value;
  //         break;
  //       case 'password':
  //         inputPassword = value;
  //         break;

  //       default:
  //         break;
  //     }
  //   };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, email, password);
    // setName('');
    // setEmail('');
    // setPassword('');
  };
  return (
    <Form
      name="logInForm"
      autocomplete="off"
      page={page}
      onSubmit={handleSubmit}
    >
      <Title>{text}</Title>
      {page === '/register' && (
        <FormLabel>
          <LabelTitle>Name</LabelTitle>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я ]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            onChange={handleInput}
            value={name}
            minlength="2"
            required
          />
        </FormLabel>
      )}
      <FormLabel>
        <LabelTitle>E-mail</LabelTitle>
        <FormInput
          type="text"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          minlength="3"
          title="Email may contain numbers, letters. For example Adrian81@mail.com"
          onChange={handleInput}
          value={email}
          required
        />
      </FormLabel>

      <FormLabel>
        <LabelTitle>Password</LabelTitle>
        <FormInput
          type="password"
          name="password"
          //   pattern="[a-z]{1,15}"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
          title="Password must contain at least one lowercase letter, at least one uppercase letter, at least one numeric value and at least one special symbol"
          onChange={handleInput}
          value={password}
          minlength={8}
          maxLength={10}
          required
        />
      </FormLabel>

      <Button type="submit">
        {page === '/register' ? 'Create account' : 'Log In'}
      </Button>
    </Form>
  );
};

AuthForm.propTypes = {
  text: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default AuthForm;
