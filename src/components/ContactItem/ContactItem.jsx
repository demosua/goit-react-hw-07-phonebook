import React from 'react';
import { Item, Avatar, Name, Number, Phone, Trash } from './ContactItem.styled';
import { IoPersonOutline, IoCallOutline, IoPersonRemoveOutline } from 'react-icons/io5';
import { useDeleteContactMutation } from '../../redux/contactsSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactItem = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();
  
  const handleDelete = async () => {
    try {
      await deleteContact(contact.id);
      toast.success('Contact was deleted from your phonebook');
    } catch (error) {
      toast.error('Oops.. Please, try again');
    }
  };

  return (
    <>
        <Item>
          <Avatar><IoPersonOutline size="20px" /></Avatar>
          <Name>{contact.name}:</Name>
          <Number>{contact.phone}</Number>
          <Phone href={`tel: ${contact.phone}`}><IoCallOutline size="20px" /></Phone>
          <Trash><IoPersonRemoveOutline size="20px" onClick={handleDelete} /></Trash>
        </Item>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </>
  )
};
  
export default ContactItem;