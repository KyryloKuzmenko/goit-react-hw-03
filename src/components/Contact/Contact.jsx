import styles from "./Contact.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Contact = (contact) => {
    return (
        <div className={styles.container}>
        <div className={styles.wrap}>
            <p className={styles.name}><IoPersonSharp/>{contact.name}</p>
            <p className={styles.number}><IoCall/> {contact.number}</p>
        </div>
            <button className={styles.btn}>Delete</button>
        </div>
    );
};

export default Contact;