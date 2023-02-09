import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useToast, Alert, AlertIcon } from "@chakra-ui/react";
// import { updateUserPassword } from "../../app/actions/authActions";
import { editPwdSchema } from "../YupValidator/schemas";
import EditPwdContainer from "./EditPwdContainer";
import { Api } from "../../api";

export default function EditProfilePwd() {

    const { user } = useSelector(state => state.auth);

    const toast = useToast();

    const success = () => toast({
        duration: 3000,
        isClosable: true,
        render: () => (
            <Alert status="success">
                <AlertIcon />
                Password successfully updated
            </Alert>
        ),
        position: "top",
    });

    const error = () => toast({
        duration: 3000,
        isClosable: true,
        render: () => (
            <Alert status="error">
                <AlertIcon />
                Incorrect password
            </Alert>
        ),
        position: "top",
    });

    async function handleSend({ password, newPassword }) {
        try {
            const service = new Api();
            const response = await service.apiPrivate().put(`/users/password/${user.id}`, { password, newPassword });
            if (response.data.body) {
                success()
            } else {
                error()
            }
        } catch (erorr) {
            error()
        }
    }

    return (
        <div>
            <Formik initialValues={{
                currentPassword: '',
                newPassword: '',
                repeatPassword: ''
            }}
                validationSchema={editPwdSchema}
                onSubmit={values => handleSend({
                    password: values.currentPassword,
                    newPassword: values.newPassword
                })}
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
