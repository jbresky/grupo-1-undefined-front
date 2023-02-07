import { FormLabel, Button, Input, FormErrorMessage, FormControl, Flex } from "@chakra-ui/react";

const Edit = ({
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
        <FormControl isInvalid={!!errors.firstName && touched.firstName}>
          <FormLabel>Nombre</FormLabel>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            name="firstName"
            value={values.firstName}
          />
          <FormErrorMessage>{errors.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={!!errors.lastName && touched.lastName}>
          <FormLabel>Apellido</FormLabel>
          <Input
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          <FormErrorMessage>{errors.lastName}</FormErrorMessage>
        </FormControl>
        <Flex justify={'flex-end'}>
          <Button bg={'gray.700'} _hover={{ background: '#4A5568' }} color={'white'} mt={4} type='submit'>Editar</Button>
        </Flex>
      </form>
    </>
  );
};

export default Edit;
