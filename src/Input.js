import React from "react";
import { useFormikContext } from "formik";

const Input = () => {
  const { values, errors, submitForm, handleChange } = useFormikContext();

  // console.log(useFormikContext());
  return (
    <>
      <input name="token" type="tel" value={values.token} onChange={handleChange} />
      <input name="name" type="tel" value={values.name} onChange={handleChange} />
    </>
  );
}

export default Input;
