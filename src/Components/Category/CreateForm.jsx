import React from "react";
import { FormLabel, Button, Input, Flex, FormErrorMessage, FormControl, Text, Heading } from "@chakra-ui/react";

const CreateForm = ({
  formBackground,
  initialValues,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}) => {
  const { name, description } =
    initialValues;

  return (
    <form onSubmit={handleSubmit}>
      <Flex align="center" justify="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={5}
        w={'500px'}
      >
<Heading size={'lg'} fontWeight={'bold'} mb={8}>Crea una categoria de transaccion</Heading>
          <FormControl pb={4} isInvalid={!!errors.name && touched.name}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
              background='white'
              placeholder="Alquiler..."
            />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl pb={4} isInvalid={!!errors.description && touched.description}>
            <FormLabel htmlFor="description">Descripcion</FormLabel>
            <Input
            name="description"
              value={description}
              onChange={handleChange}
              onBlur={handleBlur}
              background='white'
              placeholder='Gasto mensual'
            />
              <FormErrorMessage>
                {errors.description}
              </FormErrorMessage>
          </FormControl>

          <Button mt={4} _hover={0} color={'white'} background="blue.700" type="submit">Submit</Button>
      </Flex>
    </Flex>
    </form>
  );
};

export default CreateForm;