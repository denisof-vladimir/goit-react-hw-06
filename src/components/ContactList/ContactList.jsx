import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/store';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";


export default function ContactList( )  {
    const dispatch = useDispatch();
    const PhoneBook = useSelector((state) => state.contacts.items);
    const inputSearch = useSelector((state) => state.filters.name);

    const handleDeletePhone = (id) => {
        console.log("handleDeletePhon id-", id );
    
        // const PhoneBook = useSelector((state) => state.contacts.items);
        // console.log("2.handleDeletePhone\PhoneBook-",PhoneBook );
        // const phoneAfterDel = PhoneBook;
        //  const del =phoneAfterDel.splice(index.index, 1);
        //  console.log("3.handleDeletePhone\PhoneBook-",PhoneBook );
          
        // console.log("3.phoneAfterDel-",phoneAfterDel );
        dispatch(deleteContact(id));
        };

    let filteredPhoneBook = []
    console.log("ContactList/Ph;oneBook-", PhoneBook);
    if (inputSearch.length>0) {
        filteredPhoneBook = PhoneBook.filter((phoneItem) =>
            phoneItem.name.toLowerCase().includes(inputSearch.toLowerCase())  );
        console.log("filteredPhoneBook:", filteredPhoneBook);
        // PhoneBook = filteredPhoneBook;
        console.log("ContactList-2/PhoneBook-", PhoneBook);
        } else { filteredPhoneBook = PhoneBook; }
    
    console.log("ContactList-3/",filteredPhoneBook);

    

    return (
        <ul className={css.phoneUl}>
	        {filteredPhoneBook.map((phone,index) => {
                return (
                    <li key={phone.id}>
                        <Contact 
                                id={phone.id}
                                name={phone.name}  
                                number={phone.number}
                                handleDeletePhone={handleDeletePhone} />
                    </li>
                    );
            })}
        </ul>       
    );
  };
