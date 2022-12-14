import React from "react";
import { Stack, FormLabel, Button, Input, Flex, FormErrorMessage, FormControl, Heading } from "@chakra-ui/react";

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
<Heading p={4} mb={4}>Register</Heading>
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

          <Button disabled={loading} color={'white'} background="gray.700" type="submit">Submit</Button>
        {/* </Stack>
      </Container> */}
      </Flex>
    </Flex>
    </form>
  );
};

export default Form;
