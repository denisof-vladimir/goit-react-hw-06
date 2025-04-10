import { useDispatch, useSelector } from 'react-redux';
import { changeFilters } from '../../redux/filtersSlice';
import { useState, useId } from 'react'

import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'



export default function App() {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(changeFilters( event.target.value));
  }
  const PhoneBook = useSelector((state) => state.contacts.items);
  const inputSearch = useSelector((state) => state.filters.name);
   
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




