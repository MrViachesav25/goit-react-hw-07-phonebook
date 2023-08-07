import ContactForm from './ContactForm';
import Section from './Section';
import FilterInput from './FilterInput/FilterInput';
import ContactsList from './ContactsList/ContactsList';

export default function App() {

  return (
      <>
        <Section title="Phonebook">
          <ContactForm/>
        </Section>
        <Section title="Contacts">
          <FilterInput />
          <ContactsList/>
        </Section>
      </>)
};