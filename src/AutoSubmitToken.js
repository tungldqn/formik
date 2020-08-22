import React from "react";
import { useFormikContext } from "formik";

const AutoSubmitToken = () => {
  // Grab values and submitForm from context
  const { submitForm, isValid } = useFormikContext();

  // console.log(useFormikContext());

  //  React.useEffect(() => {
  //    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
  //    if (values.token.length === 6) {
  //      submitForm();
  //    }
  //  }, [values, submitForm]);
  
  return (
    <button type="button" onClick={submitForm} disabled={!isValid}>Click</button>
  );
};

export default AutoSubmitToken;
