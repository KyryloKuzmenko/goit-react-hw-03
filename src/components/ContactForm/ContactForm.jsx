import { Field, Form, Formik } from 'formik';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddProfile }) => {
  const newContact = (values, actions) => {
    const profileObject = {
      name: values.name,
      number: values.number,
    };
    onAddProfile(profileObject);
    console.log(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={newContact}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="nameField">
          Name
        </label>
        <Field className={styles.inp} type="text" name="name" id="nameField" />
        <label
          className={styles.label}
          htmlFor="numberField"
          type="text"
          name="number"
        >
          Number
        </label>
        <Field
          className={styles.inp}
          type="tel"
          name="number"
          id="numberField"
        />
        <button className="add-btn" type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
