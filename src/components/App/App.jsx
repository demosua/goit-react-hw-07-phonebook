import { IconContext } from "react-icons";
import { Container, Section, Title } from './App.styled';
import { theme } from '../../constants/theme'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import ContactForm from '../ContactForm';
import Contacts from '../Contacts';
import Filter from '../Filter'

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: theme.colors.iconColor, size: "2em", className: "global-class-name" }}>
    <Container>
      <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      </Section>
      <h2>Contacts</h2>  
        <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
        <Contacts />
      </Container>
    </IconContext.Provider>
  )
}

export default App;