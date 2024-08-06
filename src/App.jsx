import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'; // Importing the nanoid library for generating unique IDs
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

// Default contact list
const CONTACT_LIST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
//

function App() {
  // State for the contact list, initialized from localStorage or CONTACT_LIST
  const [profiles, setProfiles] = useState(() => {
    const getProfileLS = window.localStorage.getItem('contact');
    return getProfileLS ? JSON.parse(getProfileLS) : CONTACT_LIST;
  });
  //

  // Saving the contact list to localStorage on every update
  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(profiles));
  }, [profiles]);
  //

  // Function to add a new contact
  const onAddProfile = profile => {
    const finalProfile = {
      id: nanoid(), // Generating a unique ID for the new contact
      ...profile,
    };

    setProfiles([finalProfile, ...profiles]);
  };
  //

  // Function to delete a contact by its ID
  const onDeleteProfile = contactId => {
    setProfiles(profiles.filter(profile => profile.id !== contactId));
  };
  //

  // State for filtering the contact list by name
  const [filterProfile, setFilterProfile] = useState('');
  //

  // Function to update the filter state when typing in the search field
  const filterProfileList = evt => {
    const profile = evt.target.value;
    setFilterProfile(profile);
  };
  //

  // Filtering the contact list by the entered value
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLocaleLowerCase().includes(filterProfile.toLocaleLowerCase())
  );
  //

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm onAddProfile={onAddProfile} />
      <SearchBox
        filterProfile={filterProfile}
        filterProfileList={filterProfileList}
      />
      <ContactList
        contacts={filteredProfiles}
        onDeleteProfile={onDeleteProfile}
      />
    </>
  );
}

export default App;
