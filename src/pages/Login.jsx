import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  useColorModeValue,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { login } from "../stateManagement/userReducer";
import { LoginForm } from "../Components/LoginForm";

function Login() {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <div>
      <header>
        <Header />
      </header>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          const response = dispatch(login(values));

          response.then((res) => {
            if (res.payload?.body?.ok) {
              toast({
                title: "Login.",
                description: "User logged successfully.",
                status: "success",
                duration: 9000,
                isClosable: true,
                render: () => (
                  <Alert status="success">
                    <AlertIcon />
                    User logged successfully.
                  </Alert>
                ),
                position: "top",
              });

              navigate("/");
            }
            if (res.payload?.body?.ok === false) {
              toast({
                title: "Error",
                status: "error",
                render: (props) => (
                  <Alert status="error">
                    <AlertIcon />
                    {res.payload.message}
                  </Alert>
                ),
                duration: 9000,
                isClosable: true,
                position: "top",
              });
            }
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <LoginForm
            formBackground={formBackground}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            values={values}
          />
        )}
      </Formik>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
