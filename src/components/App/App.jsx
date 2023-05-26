import { IconContext } from "react-icons";
import ContactForm from '../ContactForm';
import Contacts from '../Contacts';
import Filter from '../Filter'
import { Container, Section, Title } from './App.styled';
import { theme } from '../../constants/theme'
 
const App = () => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: theme.colors.iconColor, size: "2em", className: "global-class-name" }}>
    <Container>
      <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      </Section>
      <h2>Contacts</h2>  
        <Filter />
      <Contacts />
      </Container>
    </IconContext.Provider>
  )
}

export default App;