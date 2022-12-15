import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useToast,
  Alert,
  AlertIcon,
  Box,
  Link,
  Flex
} from "@chakra-ui/react";
import Header from "../Components/Layout/Header";
import { LoginForm } from "../Components/LoginForm";
import { authLogin } from "../app/features/authSlice";
import { loginSchema } from "../Components/YupValidator/schemas";

function Signin() {
  const { auth } = useSelector(state => state)

  const { loading } = auth
  const dispatch = useDispatch();

  const toast = useToast();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <Header />
      </header>
      <Flex pb={'100px'} direction="column" alignItems={'left'} m='auto' w={['100%', '100%', '500px', '500px']}>
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            const response = dispatch(authLogin(values));
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
                  duration: 4000,
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
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              errors={errors}
              handleBlur={handleBlur}
              touched={touched}
              values={values}
              loading={loading}
            />
          )}
        </Formik>
        <Box pt={6}>
          ¿No tienes una cuenta? <Link _hover={{ color: 'black' }} color={'#635bff'} href='/register'>Registrate</Link>
        </Box>
      </Flex>
    </div>
  );
}

export default Signin;
