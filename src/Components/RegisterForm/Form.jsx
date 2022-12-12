import React from "react";
import { Stack, FormLabel, Button, Input, Container } from "@chakra-ui/react";

const Form = ({
  initialValues,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors,
}) => {
  const { firstName, lastName, email, password, confirmPassword } =
    initialValues;

  return (
    <form onSubmit={handleSubmit}>
      <Container maxW={"md"} margin={"3rem auto"}>
        <Stack direction={"column"}>
          <FormLabel htmlFor="firstName">FirstName</FormLabel>
          <Input
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.firstName && errors.firstName ? (
            <p style={{ color: "red", padding: ".7rem" }}>{errors.firstName}</p>
          ) : null}
          <FormLabel htmlFor="lastName">LastName</FormLabel>
          <Input
            id="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.lastName && errors.lastName ? (
            <p style={{ color: "red", padding: ".7rem" }}>
              {errors.lastName}
            </p>
          ) : null}
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="text"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.email && errors.email ? (
            <p style={{ color: "red", padding: ".7rem" }}>
              {errors.email}
            </p>
          ) : null}
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.password && errors.password ? (
            <p style={{ color: "red", padding: ".7rem" }}>
              {errors.password}
            </p>
          ) : null}
          <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.confirmPassword && errors.confirmPassword ? (
            <p style={{ color: "red", padding: ".7rem" }}>
              {errors.confirmPassword}
            </p>
          ) : null}
          <Button type="submit">Submit</Button>
        </Stack>
      </Container>
    </form>
  );
};

export default Form;
