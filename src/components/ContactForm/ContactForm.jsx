import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67').required('Required'),
    });

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                dispatch(addContact(values.name, values.number));
                resetForm();
            }}
        >
            <Form className={s.wraper}>
                <label>
                    Name
                    <Field type="text" name="name" className={s.field} />
                    <ErrorMessage name="name" component="div" className={s.error} />
                </label>
                <label>
                    Number
                    <Field type="text" name="number" className={s.field} />
                    <ErrorMessage name="number" component="div" className={s.error} />
                </label>
                <button type="submit" className="button">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
