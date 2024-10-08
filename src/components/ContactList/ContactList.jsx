import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

export default function ContactList() {
  const filteredData = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {filteredData.length > 0 &&
        filteredData.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
    </ul>
  );
}
