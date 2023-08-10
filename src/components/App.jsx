import ContactForm from './ContactForm';
import Section from './Section';
import FilterInput from './FilterInput/FilterInput';
import ContactsList from './ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { fetchContactThunk } from 'redux/thunk';

export default function App() {
  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();

  const [titleContacts, setTitleContacts] = useState('');

  useEffect(() => {
    dispatch(fetchContactThunk())
  }, [dispatch]);

  useEffect(() => {
    let name = contacts?.length > 0 ? 'Contacts' : 'No contacts';
    setTitleContacts(name);
  }, [contacts]);

  return (
      <>
        <Section title="Phonebook">
          <ContactForm/>
        </Section>
        <Section title={titleContacts}>
          <FilterInput />
          <ContactsList/>
        </Section>
      </>)
};