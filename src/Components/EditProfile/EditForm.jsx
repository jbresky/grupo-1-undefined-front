import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../app/features/authSlice";
import { useUpdateUser } from "../../hooks/useUsers";
import { Formik } from "formik";
import Edit from "./Edit";
import { editSchema } from "../YupValidator/schemas";

const EditForm = () => {

    const { user } = useSelector(state => state.auth);

    const { mutate: updateUser } = useUpdateUser()

    const dispatch = useDispatch();

  
    return (
        <div>
            <Formik initialValues={{
                firstName: user.firstName,
                lastName: user.lastName,
                password: '',
            }}
                validationSchema={editSchema}
                onSubmit={values => {
                    updateUser({ ...values, id: user.id })
                    dispatch(
                        updateProfile({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            password: values.password
                        })
                    )
                }
                }
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Edit
                        initialValues={values}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        loading={false}
                    />
                )}
            </Formik>
        </div>
    );
};

export default EditForm;
