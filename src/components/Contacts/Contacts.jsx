import PropTypes from 'prop-types';

import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunk';

const Contacts = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const deleteContact = userId => {
    dispatch(deleteContactThunk(userId))
  }
  return (
    <ContactItem key={id}>
      <ContactName>
        {name}:<ContactNumber>{phone}</ContactNumber>
      </ContactName>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </ContactItem>
  );
};

Contacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contacts;