import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBar from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { Navigate } from "react-router-dom"

export default function ContactsPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return isLoggedIn ? <div>
    <ContactForm />
    <SearchBar />
    <ContactList />
  </div> : <Navigate to="/login"/>
}