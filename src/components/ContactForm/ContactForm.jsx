import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './ContactForm.module.css';
import * as Yup from 'yup'

// Regular expression for validating phone numbers
const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
//

// Validation schema for the form using Yup
const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(phoneRegExp, "The phone number must match the format 'xxx-xx-xx'")
    .required('Required'),
});
//

const ContactForm = ({ onAddProfile }) => {
  // Function to handle form submission
  const newContact = (values, actions) => {
    const profileObject = {
      name: values.name,
      number: values.number,
    };
    onAddProfile(profileObject);
    console.log(values);

    actions.resetForm(); // Resetting the form after submission
  };
  //

  return (
    <Formik
      initialValues={{
        name: '', //default value
        number: '',
      }}
      onSubmit={newContact}
      validationSchema={ContactValidationSchema} //validation
    >
      <Form className={styles.form}>
        <label className={styles.labelName} htmlFor="nameField">
          <span>Name</span>
        </label>
        <Field className={styles.inp} type="text" name="name" id="nameField" />
        <ErrorMessage
          className={styles.errorMessage}
          name="name"
          component="span"
        />
        <label
          className={styles.labelNumber}
          htmlFor="numberField"
          type="text"
          name="number"
        >
          <span>Number</span>
        </label>
        <Field
          className={styles.inp}
          type="tel"
          name="number"
          id="numberField"
        />
        <ErrorMessage
          className={styles.errorMessage}
          name="number"
          component="span"
        />
        <button className={styles.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
