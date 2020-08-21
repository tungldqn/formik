import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useTest from './useEffect';
import SignupForm from './Form';
import { validation } from './const';

const Demo = () => {
  const a = {
    firstName: '',
    lastName: '',
    email: '',
  }
  const b = Yup.object(validation);
  const formik = useTest(a, b);

  function reset() {
    formik.resetForm();
  }

  return (
    <>
      <SignupForm formik={formik} />
      <button type="submit" onClick={formik.handleSubmit} disabled={formik.touched.firstName && formik.touched.lastName && formik.touched.email && !formik.isValid}>Submit</button>
      <button onClick={reset}>Test</button>
    </>
  );
};

export default Demo;
