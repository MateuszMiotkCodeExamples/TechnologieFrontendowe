import {useFormik} from "formik";
import * as Yup from "yup";

export default function SignUpForm2() {
    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
        },
        validationSchema:
            Yup.object({
                firstName: Yup.string().max(15, "Must be at most 15 characters").required('Required'),
                lastName: Yup.string().max(15, "Must be at most 15 characters - lastname").required('Required - lastname'),
                email: Yup.string().email('Invalid email address').required('Required'),
            })
        ,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">FirstName</label>
            <input
                id="firstName"
                type="text"
                {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <label htmlFor="lastName">LastName</label>
            <input
                id="lastName"
                type="text"
                {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button>Submit</button>
        </form>
    )
}