import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteProfile }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteProfile={onDeleteProfile}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;