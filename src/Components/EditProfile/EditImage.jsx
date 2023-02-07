import { Formik, useFormik } from "formik";
import { useSelector } from "react-redux";
import { useToast, Alert, AlertIcon, FormControl, FormLabel, Input, Flex, Button } from "@chakra-ui/react";
import { updateUserImage } from "../../app/actions/authActions";
import EditImageContainer from "./EditImageContainer";

export default function EditImage() {

    const toast = useToast();

    const { user } = useSelector(state => state.auth);

    const formik = useFormik({
        initialValues: {
            image: user.avatar
        },
        onSubmit: async () => {
            try {
                const { image } = formik.values;

                const updated = await updateUserImage(user.id, image);
                alert(updated.message)
            } catch (error) {
                console.error(error)
                alert(error.response.data.message);
            }
        }
    })

    return (
        <div>
            {/* <Stack>  */}
            {/* <FormLabel>
                    {user.avatar ? 'Update' : 'Upload'} image
                </FormLabel> */}
            <form encType="multipart/form-data">
                <FormControl>
                    <FormLabel>Update image</FormLabel>
                    <Input
                        type="file"
                        name="image"
                        onChange={e => formik.setFieldValue('image', e.target.files[0])}
                    />
                </FormControl>
                <Flex justify={'flex-end'}>
                    <Button bg={'gray.700'} _hover={{ background: '#4A5568' }} color={'white'} mt={4} onClick={formik.handleSubmit} type='submit'>Editar</Button>
                </Flex>
            </form>
            {/* <Formik
                initialValues={{
                    image: user.avatar
                }}
                onSubmit={values => {
                    const response = updateUserImage(user.id, values);
                    response.then(res => {
                        if (res.status === 200) {
                            toast({
                                status: res.statusText,
                                duration: 3000,
                                isClosable: true,
                                render: () => (
                                    <Alert status="success">
                                        <AlertIcon />
                                        Avatar updated
                                    </Alert>
                                ),
                                position: 'top'
                            });
                        } else {
                            toast({
                                duration: 3000,
                                isClosable: true,
                                render: () => (
                                    <Alert status="error">
                                        <AlertIcon />
                                        Not possible to upload avatar
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
                    <EditImageContainer
                    values={values}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    />
                )}
            </Formik> */}
            {/* <Input
                p={2}
                type='file'
                name='image'
                onChange={e => formik.setFieldValue('image', e.target.files[0])}
            />
            <Button onClick={formik.handleSubmit}>Subir</Button> */}
            {/* </Stack> */}
        </div>
    )
}