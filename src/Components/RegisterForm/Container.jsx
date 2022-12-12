import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "./Form";



const ContainerForm = ({ action }) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: action === "edit" ? user.firstName : "",
      lastName: action === "edit" ? user.lastName : "",
      email: action === "edit" ? user.email : "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string("Name must be a string").required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values)=>console.log(values)
  });
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
  } = formik;

  return (
    <div>
      <Form
        initialValues={values}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}
        errors={errors}
      />
    </div>
  );
};

export default ContainerForm;
