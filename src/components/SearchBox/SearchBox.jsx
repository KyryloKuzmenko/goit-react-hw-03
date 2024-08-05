import { Field, Form, Formik } from "formik";
import styles from "./SearchBox.module.css"

const SearchBox = () => {
    return (
        <Formik>
            <Form className={styles.form}>
                <label className={styles.label} htmlFor="searchField">Find contacts by name</label>
                <Field className={styles.inp}type="text" name="search" id="searchField" />
            </Form>
        </Formik>
    )
};


export default SearchBox;