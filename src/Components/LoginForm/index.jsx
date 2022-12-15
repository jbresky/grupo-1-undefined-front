import { Flex, Heading, Input, Button, FormControl, FormErrorMessage, FormLabel,Text, Checkbox } from "@chakra-ui/react";

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
    <Flex mt={100} align="center" justify="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={'70px'}
        borderRadius={5}
        boxShadow="md"
        w={'100%'}
      >
        <Heading size={'lg'} mb={6}>Sign In</Heading>
        <FormControl pb={4} isInvalid={!!errors.email && touched.email}>
          <FormLabel htmlFor="email">
            Email
            </FormLabel>
          <Input
            background='gray.300'
            border={'none'}
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
            border={'none'}
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
        <Checkbox pt={3}><Text fontSize={'14px'}>Recordarme por una semana</Text></Checkbox>
        <Button mt={6} h={12} disabled={loading} _hover={0} color={'white'} background="gray.700" mb={4} type="submit">
          Log In
        </Button>
      </Flex>
    </Flex>
  </form>
);

