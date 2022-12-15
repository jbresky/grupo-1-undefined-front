import { Flex, Heading, Input, Button, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

export const LoginForm = ({
  handleSubmit,
  formBackground,
  handleBlur,
  values,
  errors,
  touched,
  handleChange,
  loading
}) => (
  <form noValidate onSubmit={handleSubmit}>
    <Flex m={'75px'} align="center" justify="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={5}
        boxShadow="md"
        w={'400px'}
      >
        <Heading mb={6}>Sign In</Heading>
        <FormControl pb={4} isInvalid={!!errors.email && touched.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
          background='gray.300'
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="form-control inp_text"
            id="email"
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl pb={4} isInvalid={!!errors.password && touched.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
          background='gray.300'
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className="form-control"
          />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <Button mt={6} disabled={loading} color={'white'} background="gray.700" mb={4} type="submit">
          Log In
        </Button>
      </Flex>
    </Flex>
  </form>
);

