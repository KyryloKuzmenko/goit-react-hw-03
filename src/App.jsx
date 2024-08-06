import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const CONTACT_LIST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [profiles, setProfiles] = useState(() => {
    const getProfileLS = window.localStorage.getItem('contact');
    return getProfileLS ? JSON.parse(getProfileLS) : CONTACT_LIST;
  });

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(profiles));
  }, [profiles]);

  const onAddProfile = profile => {
    const finalProfile = {
      id: nanoid(),
      ...profile,
    };

    setProfiles([finalProfile, ...profiles]);
  };

  const onDeleteProfile = contactId => {
    setProfiles(profiles.filter(profile => profile.id !== contactId));
  };

  const [filterProfile, setFilterProfile] = useState('');

  const filterProfileList = (evt) => {
    const profile = evt.target.value;
    setFilterProfile(profile);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLocaleLowerCase().includes(filterProfile.toLocaleLowerCase())
  );

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm onAddProfile={onAddProfile} />
      <SearchBox filterProfile={filterProfile} filterProfileList={filterProfileList} />
      <ContactList contacts={filteredProfiles} onDeleteProfile={onDeleteProfile} />
    </>
  );
}

export default App;
