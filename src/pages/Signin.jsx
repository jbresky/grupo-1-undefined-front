import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    useColorModeValue,
    useToast,
    Alert,
    AlertIcon,
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

    const formBackground = useColorModeValue("gray.100", "gray.700");

    return (
        <div>
            <header>
                <Header />
            </header>
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
        
                      navigate("/profile");
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
                        duration: 5000,
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
                        loading={loading}
                    />
                )}
            </Formik>
        </div>
    );
}

export default Signin;
