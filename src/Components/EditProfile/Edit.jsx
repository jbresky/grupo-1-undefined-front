import React from "react";
import { Stack, FormLabel, Button, Input, Container, FormErrorMessage, FormControl } from "@chakra-ui/react";

const Edit = ({
  initialValues,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors,
  loading
}) => {
  const { firstName, lastName, password } = initialValues;

  return (
    <form onSubmit={handleSubmit}>
      <Container maxW={"md"} margin={"3rem auto"}>
        <Stack direction={"column"}>

          <FormControl isInvalid={!!errors.firstName && touched.firstName}>
            <FormLabel htmlFor="firstName">Nombre</FormLabel>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.lastName && touched.lastName}>
            <FormLabel htmlFor="lastName">Apellido</FormLabel>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
              <FormErrorMessage>
                {errors.lastName}
              </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password && touched.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          
          <Button disabled={loading} type="submit">Submit</Button>
        </Stack>
      </Container>
    </form>
  );
};

export default Edit;
