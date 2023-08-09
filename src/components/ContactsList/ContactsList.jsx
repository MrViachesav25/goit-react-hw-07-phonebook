import PropTypes from 'prop-types';

import { List } from './ContactsList.styled';
import ContactsItem from 'components/Contacts';
import { useSelector } from 'react-redux';
import { selectItems, selectFilter } from 'redux/selectors';


const ContactsList = () => {

  const contacts  = useSelector(selectItems);
  const filter  = useSelector(selectFilter);

  const getFilterContacts = () => {
    return contacts.filter(({name}) => name.toLowerCase().includes(filter));
  };
  return (
    <List>
      {getFilterContacts().map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactsList;