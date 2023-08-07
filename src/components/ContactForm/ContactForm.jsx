
import PropTypes from 'prop-types';

import { ContainerForm, ContactLabel, ContactInputForm, Button } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { addContactsSlice } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export default function ContactForm() {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const { contacts } = useSelector(getContacts);
  
  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const addContact = data => {
    const firstContact = {...data, id: nanoid(), };

    contacts.some(({name}) => name === data.name)
    ? toast.warning(<span>We have already such `${data.name}`</span>, {
      position: toast.POSITION.TOP_LEFT,
      theme: "colored",
    }) 
    : dispatch(addContactsSlice(firstContact))
  }

  const handleSubmit = event => {
    event.preventDefault();
    addContact({name, number});
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
      <ContainerForm onSubmit={handleSubmit}>
        <ContactLabel>
          <ContactInputForm
            onChange={handleChangeName}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />Name
        </ContactLabel>
        <ContactLabel>
          <ContactInputForm
            onChange={handleChangeNumber}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />Number
        </ContactLabel>
        <Button type="submit">Add contact</Button>
        <ToastContainer/>
      </ContainerForm>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
}
