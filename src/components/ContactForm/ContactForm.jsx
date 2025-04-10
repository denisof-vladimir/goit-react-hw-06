import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid'
import { addContact } from '../../redux/store';
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { object, string, number, date } from 'yup';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be min 3 chars')
    .required('This field is required'),
  number: Yup.string()
  .min(5, 'Must be min 5 chars')
  .required('This field is required'),
});

export default function ContactForm() {
  const PhoneBook = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit-", values, actions);
    actions.resetForm();
    console.log("ContactForm/PhoneBook-", PhoneBook);
    const isDuplicateNumber = PhoneBook.some((phoneItem) =>  phoneItem.number === values.number);
    console.log("ContactForm/isDuplicateNumber-", isDuplicateNumber);
    if (isDuplicateNumber) {alert(` цей номер вже є y телефонній книзі.`);
        return;
      }
    const phoneForAdditive = {"id":nanoid(),  "name":values.name, "number":values.number}; 
    dispatch(addContact( phoneForAdditive));
    };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Name  : </label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          />
        </div>

        <div className={css.group}>
          <label className={css.label}>Number : </label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>     

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
 