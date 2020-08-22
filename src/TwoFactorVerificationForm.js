import React from "react";
import { Formik, Field } from "formik";
import AutoSubmitToken from "./AutoSubmitToken";
import Input from "./Input";
import InputGroup from "./InputGroup";

const TwoFactorVerificationForm = () => (
  <div>
    <h1>2-step Verification</h1>
    <p>Please enter the 6 digit code sent to your device</p>
    <Formik
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
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <>
        <div>
          {/* <Field name="token" type="tel" /> */}
          <InputGroup />
        </div>
        <AutoSubmitToken />
      </>
    </Formik>
  </div>
);

export default TwoFactorVerificationForm;
