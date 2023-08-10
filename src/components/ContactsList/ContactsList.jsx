import { List } from './ContactsList.styled';
import ContactsItem from 'components/Contacts';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';


const ContactsList = () => {

  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ name, phone, id }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          phone={phone}
        />
      ))}
    </List>
  );
};


export default ContactsList;