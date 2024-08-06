import styles from "./Contact.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Contact = ({ name, number, id, onDeleteProfile }) => {
  return (
    <div key={id} className={styles.container}>
      <div className={styles.wrap}>
        <p className={styles.name}>
          <IoPersonSharp />
          {name}
        </p>
        <p className={styles.number}>
          <IoCall /> {number}
        </p>
      </div>
      <button
        onClick={() => onDeleteProfile(id)}
        className={styles.btn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;