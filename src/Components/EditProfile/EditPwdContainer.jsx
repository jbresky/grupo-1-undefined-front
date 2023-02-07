import { FormLabel, Button, Input, FormErrorMessage, FormControl, Flex } from "@chakra-ui/react";

const EditPwdContainer = ({
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    touched,
    errors,
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormControl mt={4} isInvalid={!!errors.currentPassword && touched.currentPassword}>
                    <FormLabel>Current password</FormLabel>
                    <Input
                        type="password"
                        name="currentPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="*******"
                        value={values.currentPassword}
                    />
                    <FormErrorMessage>{errors.currentPassword}</FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={!!errors.newPassword && touched.newPassword}>
                <FormLabel>New password</FormLabel>
                    <Input
                        type="password"
                        name="newPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="*******"
                        value={values.newPassword}
                    />
                    <FormErrorMessage>{errors.newPassword}</FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={!!errors.repeatPassword && touched.repeatPassword}>
                <FormLabel>Repeat new password</FormLabel>
                    <Input
                        type="password"
                        name="repeatPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="*******"
                        value={values.repeatPassword}
                    />
                    <FormErrorMessage>{errors.repeatPassword}</FormErrorMessage>
                </FormControl>
                <Flex justify={'flex-end'}>
                    <Button bg={'gray.700'} _hover={{ background: '#4A5568' }} color={'white'} mt={4} type='submit'>Editar</Button>
                </Flex>
            </form>
        </>
    )
}

export default EditPwdContainer;