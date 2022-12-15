import React from "react";
import { FormLabel, Button, Link, Box, Input, Text, Flex, FormErrorMessage, FormControl, Heading, Checkbox } from "@chakra-ui/react";

const Form = ({
  formBackground,
  initialValues,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors,
  loading
}) => {
  const { firstName, lastName, email, password, confirmPassword } =
    initialValues;

  return (
    <form onSubmit={handleSubmit}>
      <Flex mb={10} mt={10} align="center" justify="center">
        <Flex
          flexDirection="column"
          bg={formBackground}
          p={12}
          borderRadius={5}
          boxShadow="md"
          w={'500px'}
        >
          <Heading size={'lg'} pb={8}>Crea tu cuenta Alkybank</Heading>
          <FormControl pb={6} isInvalid={!!errors.firstName && touched.firstName}>
            <FormLabel htmlFor="firstName">Nombre</FormLabel>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              background='gray.300'
            />
            <FormErrorMessage>{errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl pb={6} isInvalid={!!errors.lastName && touched.lastName}>
            <FormLabel htmlFor="lastName">Apellido</FormLabel>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              background='gray.300'
            />
            <FormErrorMessage>
              {errors.lastName}
            </FormErrorMessage>
          </FormControl>

          <FormControl pb={6} isInvalid={!!errors.email && touched.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              background='gray.300'
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl pb={6} isInvalid={!!errors.password && touched.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              background='gray.300'
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <Box pb={4} pt={2}>
          <Checkbox>
            <Text fontSize={'12px'} color={'#697386'}>Obtener emails de Alkybank sobre actualizacion de productos, noticias fintech y eventos. Podes darte de baja cuando quieras.
            <br/>
            <Link _hover={0} color={'#635bff'} href='#'>Politica de privacidad</Link>
            </Text>
          </Checkbox>
          </Box>
          <Button mt={4} disabled={loading} h={12} _hover={{color: 'black'}} color={'white'} background="gray.700" type="submit">Submit</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Form;
