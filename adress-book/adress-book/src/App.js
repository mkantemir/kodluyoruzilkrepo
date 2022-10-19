
import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Form from './components/Form';

function App() {

  const [contacts, setContacts] = useState([])
  const [serachValue , setSearchValue] = useState("")
  
  
  return (
    <div className="App">
      <ContactList contacts={contacts} setSearchValue={setSearchValue} serachValue={serachValue}/>
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default App;
