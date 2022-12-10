import { Flex, Heading, Input, Button } from "@chakra-ui/react";

export const LoginForm = ({
  handleSubmit,
  formBackground,
  handleBlur,
  values,
  errors,
  touched,
  handleChange,
}) => (
  <form noValidate onSubmit={handleSubmit}>
    <Flex h="50vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="Enter email id / username"
          className="form-control inp_text"
          id="email"
        />
        {/* If validation is not passed show errors */}
        <p className="error">{errors.email && touched.email && errors.email}</p>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="Enter password"
          className="form-control"
        />
        {/* If validation is not passed show errors */}
        <p className="error">
          {errors.password && touched.password && errors.password}
        </p>
        <Button colorScheme="teal" mb={8} type="submit">
          Log In
        </Button>
      </Flex>
    </Flex>
  </form>
);
