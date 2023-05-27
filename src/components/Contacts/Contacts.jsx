import { useSelector } from 'react-redux';
import ContactItem from "../ContactItem";
import { selectContacts, selectFilter } from 'redux/selectors';
import { Contact } from './Contacts.styled';
import PropTypes from 'prop-types';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  
  return (
    <Contact>
      { visibleContacts.map(contact =>
        (<ContactItem key={contact.id} contact={contact} />)
      )}
    </Contact>
  )
};
  
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};