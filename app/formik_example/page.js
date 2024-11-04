'use client'


import SignUpForm from "@/app/components/SignUpForm";
import SignUpForm2 from "@/app/components/SignUpForm_2";
import {SignupForm3} from "@/app/components/SignUpForm_3";
import ExampleForm from "@/app/components/ExampleForm";

export default function FormikExample() {
    return (
        <>
            <h3>Przykład bez walidacji</h3>
            <SignUpForm/>
            <h3>Przykład z walidacją w formik</h3>
            <SignUpForm2/>
            <h3>Użycie Form, Field oraz ErrorMessage</h3>
            <ExampleForm/>
            <h3>Przerobiony przykład z użyciem Form, Field oraz ErrorMessage</h3>
            <SignupForm3/>
        </>

    );
}
