import { useDispatch } from "react-redux";
import { Item, Avatar, Name, Number, Phone, Trash } from './ContactItem.styled';
import { IoPersonOutline, IoCallOutline, IoPersonRemoveOutline } from 'react-icons/io5';
import { ToastMessage } from '../../constants/toastMessage';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from '../../redux/operations';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {dispatch(deleteContact(contact.id));}

  return (
    <>
        <Item>
          <Avatar><IoPersonOutline size="20px" /></Avatar>
          <Name>{contact.name}:</Name>
          <Number>{contact.phone}</Number>
          <Phone href={`tel: ${contact.phone}`}><IoCallOutline size="20px" /></Phone>
          <Trash><IoPersonRemoveOutline size="20px" onClick={handleDelete} /></Trash>
        </Item>
        <ToastMessage />
    </>
  )
};
  
export default ContactItem;