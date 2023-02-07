import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useToast, Alert, AlertIcon } from "@chakra-ui/react";
import { updateUserPassword } from "../../app/actions/authActions";
import { editPwdSchema } from "../YupValidator/schemas";
import EditPwdContainer from "./EditPwdContainer";

export default function EditProfilePwd() {

    const toast = useToast();

    const { user } = useSelector(state => state.auth);

    return (
        <div>
            <Formik initialValues={{
                currentPassword: '',
                newPassword: '',
                repeatPassword: ''
            }}
            validationSchema={editPwdSchema}
            onSubmit={values => {
                const response = updateUserPassword(user.id, {
                    password: values.currentPassword,
                    newPassword: values.newPassword
                })
                response.then(res => {
                    if(res.status === 200){
                        toast({
                            status: res.statusText,
                            duration: 3000,
                            isClosable: true,
                            render: () => (
                                <Alert status="success">
                                    <AlertIcon/>
                                    Your password has been changed successfully
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
                                Not possible to edit password
                              </Alert>
                            ),
                            position: "top",
                        });
                    }
                })
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <EditPwdContainer
                values={values}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                />
            )}
            </Formik>
        </div>
    )
}
