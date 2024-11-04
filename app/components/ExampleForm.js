import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ExampleForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                description: '',
                category: '',
                username: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                description: Yup.string()
                    .required('Required'),
                category: Yup.string()
                    .required('Please select a category'),
                username: Yup.string()
                    .required('Required')
            })}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <div>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />
                </div>

                <div>
                    <Field name="description" as="textarea" />
                    <ErrorMessage name="description" component="div" />
                </div>

                <div>
                    <Field name="category" as="select">
                        <option value="">Select a category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                    </Field>
                    <ErrorMessage name="category" component="div" />
                </div>

                <div>
                    <Field
                        name="username"
                        validate={value => {
                            if (!value) return 'Required';
                            if (value.length < 3) return 'Too short';
                            return undefined;
                        }}
                    />
                    <ErrorMessage
                        name="username"
                        render={msg => (
                            <div>
                                <span>⚠️</span>
                                <span>{msg}</span>
                            </div>
                        )}
                    />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default ExampleForm;