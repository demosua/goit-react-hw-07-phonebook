import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Form, Label, Input, Button } from './ContactForm.styled';
import { IoPersonAddOutline } from 'react-icons/io5';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { ToastMessage } from 'constants/toastMessage'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';


const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    
    const isContact = contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length > 0
    const isNumber = contacts.filter(contact => contact.phone === number).length > 0
    
    if (isContact || isNumber) {
      isContact ? toast.error(`${name} is already in contacts.`) : toast.error(`${number} is already in contacts.`)
      return;
    }

    dispatch(addContact({ name, phone: number }));
    
    form.reset();
  };
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor ={nameInputId}>
          Name
        </Label>
          <Input
            type="text"
            name="name"
            id={nameInputId}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        <Label htmlFor ={numberInputId}>
          Number
        </Label>
          <Input
            type="tel"
            name="number"
            id={numberInputId}
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
             <Button type="submit"><IoPersonAddOutline /></Button>
                <ToastMessage />         
      </Form>
    </>
  )
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onSubmit: PropTypes.func,
};