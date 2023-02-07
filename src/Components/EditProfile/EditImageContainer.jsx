import { FormLabel, Button, Input, FormErrorMessage, FormControl, Flex } from "@chakra-ui/react";

const EditImageContainer = ({
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    // touched,
    // errors,
}) => {
    return (
        <>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <FormControl mt={4}>
                    <FormLabel>Update image</FormLabel>
                    <Input
                        type="file"
                        name="avatar"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.avatar}
                    />
                </FormControl>
                <Flex justify={'flex-end'}>
                    <Button bg={'gray.700'} _hover={{ background: '#4A5568' }} color={'white'} mt={4} type='submit'>Editar</Button>
                </Flex>
            </form>
        </>
    )
}

export default EditImageContainer