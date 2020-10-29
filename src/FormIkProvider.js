import { Formik, Field } from "formik";
import React from 'react'

function FormIkProvider({ children, initialValues, validate, onSubmit }) {
  return (
    <Formik
      // initialValues={{ token: "", name: 'tung' }}
      // validate={(values) => {
      //   const errors = {};
      //   if (values.token.length < 5) {
      //     errors.token = "Invalid code. Too short.";
      //   }
      //   // if(!values.name) {
      //   //   errors.name = "Required";
      //   // }
      //   return errors;
      // }}
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      // validationSchema={Yup.object({
      //   // token: Yup.string()
      //   //   .max(15, 'Must be 15 characters or less')
      //   //   .required('Required'),
      //   name: Yup.string()
      //     .required('Required')
      // })}
      // onSubmit={(values) => {
      //   console.log(values);
      // }}
    >
      {children}
    </Formik>
  )
}

export default FormIkProvider;
