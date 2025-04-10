import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";



export default function ContactList( )  {
    const dispatch = useDispatch();
    const PhoneBook = useSelector((state) => state.contacts.items);
    const inputSearch = useSelector((state) => state.filters.name);

    const handleDeletePhone = (id) => {
        dispatch(deleteContact(id.id));
        };

    let filteredPhoneBook = []
    if (inputSearch.length>0) {
        filteredPhoneBook = PhoneBook.filter((phoneItem) =>
            phoneItem.name.toLowerCase().includes(inputSearch.toLowerCase())  );
        } else { filteredPhoneBook = PhoneBook; }

    return (
        <ul className={css.phoneUl}>
	        {filteredPhoneBook.map((phone,index) => {
                return (
                    <li key={phone.id}>
                        <Contact 
                                id={phone.id}
                                ind={index}
                                name={phone.name}  
                                number={phone.number}
                                handleDeletePhone={handleDeletePhone} />
                    </li>
                    );
            })}
        </ul>       
    );
  };
