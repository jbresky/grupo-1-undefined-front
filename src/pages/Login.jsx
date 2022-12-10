import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { login } from "../stateManagement/userReducer";

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
                render: (props) => (
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
          <form noValidate onSubmit={handleSubmit}>
            <Flex h="50vh" alignItems="center" justifyContent="center">
              <Flex
                flexDirection="column"
                bg={formBackground}
                p={12}
                borderRadius={8}
                boxShadow="lg"
              >
                <Heading mb={6}>Log In</Heading>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <Button colorScheme="teal" mb={8} type="submit">
                  Log In
                </Button>
              </Flex>
            </Flex>
          </form>
        )}
      </Formik>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
