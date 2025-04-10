import { useDispatch, useSelector } from 'react-redux';
import { changeFilters } from '../../redux/store';
// import Balance from './Balance';
// import LangSwitcher from './LangSwitcher';
import { useState, useId } from 'react'

import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'



export default function App() {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    // const dispatch = useDispatch();
    dispatch(changeFilters( event.target.value));
  }
  const PhoneBook = useSelector((state) => state.contacts.items);
  const inputSearch = useSelector((state) => state.filters.name);
  console.log("1/PhoneBook-", PhoneBook);
 
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox handleSearch={handleSearch} />
        <ContactList   />
      </div>

          
      
    </>
  )
}




