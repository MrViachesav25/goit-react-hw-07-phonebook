import { ContainerForm, ContactLabel, ContactInputForm, Button } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { addContactThunk } from 'redux/thunk';
import { selectItems } from 'redux/selectors';

export default function ContactForm() {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectItems);
  
  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = event => {
    setPhone(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    contacts.some(contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim() 
    || contact.phone.toLowerCase().trim() === phone.toLowerCase().trim())
    ? toast.warning(`${name} is already in contacts`, {
      position: toast.POSITION.TOP_LEFT,
      theme: "colored",
    }) 
    : dispatch(addContactThunk({name, phone}));
    formReset();
  };

  const formReset = () => {
    setName('');
    setPhone('');
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
            value={phone}
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
