import React from "react";
import { useSelector } from "react-redux";
import { useCreateUser } from "../../hooks/useUsers";
import { Formik } from "formik";
import Form from "./Form";
import { registerSchema } from "../YupValidator/schemas";
import { useColorModeValue } from "@chakra-ui/react";

const RegisterForm = () => {

    const formBackground = useColorModeValue("gray.100", "gray.700");

    const { auth } = useSelector(state => state);

    const { mutate: createUser } = useCreateUser()

    const {loading} = auth

    return (
        <div style={{margin: '50px'}}>
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }}
                validationSchema={registerSchema}
                onSubmit={values => createUser(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Form
                        initialValues={values}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        loading={loading}
                        formBackground={formBackground}
                    />
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
