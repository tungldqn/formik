import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useTest = (initialValues, validationSchema) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm({
        firstName: '',
        lastName: '',
        email: '',
      })
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return formik;
  
};

export default useTest;
