import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    title: Yup.string()
        .min(3, "Tytuł musi mieć co najmniej 3 znaki")
        .max(20, "Tytuł nie może być dłuższy niż 20 znaków")
        .required("Tytuł jest wymagany"),
    color: Yup.string()
        .matches(/^#([0-9A-F]{6}|[0-9A-F]{3})$/i, "Nieprawidłowy format koloru HEX")
        .required("Kolor jest wymagany")
});

export default function AddColorForm_with_formik({ onNewColor = f => f }) {
    const initialValues = {
        title: "",
        color: "#000000"
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log(values.title);
        console.log(values.color);
        onNewColor(values.title, values.color);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ dirty, isValid }) => (
                <Form className="space-y-4">
                    <div>
                        <Field
                            name="title"
                            type="text"
                            placeholder="color title..."
                            className="px-3 py-2 border rounded-md w-full"
                        />
                        <ErrorMessage
                            name="title"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    <div>
                        <Field
                            name="color"
                            type="color"
                            className="w-full h-10 cursor-pointer"
                        />
                        <ErrorMessage
                            name="color"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!dirty || !isValid}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        ADD
                    </button>
                </Form>
            )}
        </Formik>
    );
}