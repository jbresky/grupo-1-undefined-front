import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCreateUser, useUpdateUser } from "../../hooks/useUsers";
import { Formik } from "formik";
import Form from "./Form";
import { registerSchema } from "../YupValidator/schemas";

const RegisterForm = () => {

    const { auth } = useSelector(state => state);

    const { mutate: createUser } = useCreateUser()

    const {loading} = auth

    return (
        <div>
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
                    />
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
