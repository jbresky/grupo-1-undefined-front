import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../app/features/authSlice";
import { updateUserInfo } from '../../app/actions/authActions'
import { Formik } from "formik";
import Edit from "./Edit";
import { editSchema } from "../YupValidator/schemas";
import { useToast, Alert, AlertIcon } from "@chakra-ui/react";

const EditProfileData = () => {

    const toast = useToast();

    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    return (
        <div>
            <Formik initialValues={{
                firstName: user.firstName,
                lastName: user.lastName,
            }}
                validationSchema={editSchema}
                onSubmit={values => {
                    const response = updateUserInfo(user.id, values)
                    response.then(res => {
                        if(res.status === 200){
                        toast({
                            status: res.statusText,
                            duration: 3000,
                            isClosable: true,
                            render: () => (
                              <Alert status="success">
                                <AlertIcon />
                                Name edited
                              </Alert>
                            ),
                            position: "top",
                          });   
                        } else {
                            toast({
                                duration: 3000,
                                isClosable: true,
                                render: () => (
                                  <Alert status="error">
                                    <AlertIcon />
                                    Not possible to edit data
                                  </Alert>
                                ),
                                position: "top",
                              });   
                        }
                    })
                    dispatch(
                        updateProfile({
                            firstName: values.firstName,
                            lastName: values.lastName,
                        })
                    );
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
                    <Edit
                        values={values}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />
                )}
            </Formik>
        </div >
    );
};

export default EditProfileData;
