import PropTypes from 'prop-types';

import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContactsSlice } from 'redux/contactsSlice';

const Contacts = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = userId => {
    dispatch(deleteContactsSlice(userId))
  }
  return (
    <ContactItem key={id}>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </ContactItem>
  );
};

Contacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contacts;