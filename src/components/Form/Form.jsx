import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { addData } from '../../redux/phonebook/phonebookOperations';
import {
  ContactForm,
  Title,
  FormLabel,
  LabelTitle,
  FormInput,
  AddButton,
} from './Form.styled';

const Form = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  let inputNumber;
  let inputName;

  const handleInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        inputName = value;
        break;
      case 'number':
        inputNumber = value;
        break;
      default:
        break;
    }
  };

  const checkExistData = () => {
    const names = contacts.map(contact => {
      if (contact.name) {
        return contact.name.toLowerCase();
      } else return contact;
    });

    const numbers = contacts.map(contact => {
      if (contact.number) {
        return contact.number;
      } else return contact;
    });

    if (inputName) {
      if (names.includes(inputName.toLowerCase())) {
        Notify.info(`Please, enter unique name. ${inputName} is already exist`);
        return;
      } else if (numbers.includes(inputNumber)) {
        Notify.info(
          `Please, enter unique number. ${inputNumber} is already exist`
        );
        return;
      } else {
        return { name: inputName, number: inputNumber };
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = checkExistData();
    if (contact) {
      dispatch(addData(contact));
      // e.currentTarget.reset();
    } else {
      Notify.failure('Contact not added. Please, try again ))');
    }
  };

  return (
    <ContactForm
      name="addContactForm"
      autocomplete="off"
      onSubmit={handleSubmit}
    >
      <Title>Add new contact</Title>
      <FormLabel>
        <LabelTitle>Name</LabelTitle>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInput}
          value={inputName}
          required
        />
      </FormLabel>

      <FormLabel>
        <LabelTitle>Number</LabelTitle>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInput}
          value={inputNumber}
          minlength="7"
          required
        />
      </FormLabel>

      <AddButton type="submit">+ Add</AddButton>
    </ContactForm>
  );
};

export default Form;
