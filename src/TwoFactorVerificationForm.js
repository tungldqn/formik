import React, { useState } from "react";
import { Formik, Field } from "formik";
import AutoSubmitToken from "./AutoSubmitToken";
import Input from "./Input";
import InputGroup from "./InputGroup";
import * as Yup from 'yup';
import FormIkProvider from "./FormIkProvider";

const TwoFactorVerificationForm = () => {
  const initState = { token: "", name: 'tung' }
  

  const [state, setState] = useState(initState);

  function onReset() {
    setState({
      token: "", name: 'tung'
    })
  }

  return (
    <div>
      <h1>2-step Verification</h1>
      <p>Please enter the 6 digit code sent to your device</p>
      {/* <Formik
        initialValues={{ token: "", name: 'tung' }}
        validate={(values) => {
          const errors = {};
          if (values.token.length < 5) {
            errors.token = "Invalid code. Too short.";
          }
          if(!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        validationSchema={Yup.object({
          token: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          name: Yup.string()
            .required('Required')
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <>
          <div>
            <Field name="token" type="tel" />
            <InputGroup />
          </div>
          <AutoSubmitToken />
        </>
      </Formik> */}

      <FormIkProvider
        initialValues={state}
        validate={(values) => {
          const errors = {};
          if (values.token.length < 5) {
            errors.token = "Invalid code. Too short.";
          }
          if(!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <>
          <InputGroup />
          <AutoSubmitToken />
        </>
      </FormIkProvider>
      
    </div>
  )
};

export default TwoFactorVerificationForm;
