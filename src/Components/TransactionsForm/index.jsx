import { Flex, Heading, Input, Button, Select, Text, FormControl, FormErrorMessage, Box } from "@chakra-ui/react";

export const TransactionsForm = ({
  handleSubmit,
  formBackground,
  handleBlur,
  values,
  errors,
  touched,
  handleChange,
  categories,
  users
}) => {
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Box mt={20} mb={20}>
        <Flex m={'auto'} w={['100%', '80%', '60%', '40%']} h="100vh" alignItems="center" justifyContent="center">
          <Flex
            flexDirection="column"
            bg={formBackground}
            p={12}
            borderRadius={8}
            boxShadow="md"
            rowGap={2}
            w={'100%'}
          >
            <Heading size={'lg'} mb={6}>Create Transaction</Heading>
            <FormControl pb={4} isInvalid={!!errors.description && touched.description}>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder="Enter description"
                className="form-control inp_text"
                id="description"
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>
            <FormControl pb={4} isInvalid={!!errors.amount && touched.amount}>
              <Input
                type="number"
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
                placeholder="Enter amount"
                className="form-control"
              />
              <FormErrorMessage>{errors.amount}</FormErrorMessage>
            </FormControl>
            <FormControl pb={4} isInvalid={!!errors.categoryId && touched.categoryId}>
              <Select pb={4} placeholder='Select a category' name="categoryId" onChange={handleChange}>
                {categories.map((category) => {
                  return <option key={category.id} value={category.id}>{category.name}</option>;
                })}
              </Select>
              <FormErrorMessage>{errors.categoryId}</FormErrorMessage>
            </FormControl>

            <FormControl pb={4} isInvalid={!!errors.userId && touched.userId} >
              <Select pb={4} name="userId" placeholder="Select a user" onChange={handleChange}>
                {users.map((user) => {
                  return <option key={user.id} value={user.id}>{`${user.firstName} ${user.lastName}`}</option>;
                })}
              </Select>
              <FormErrorMessage>{errors.userId}</FormErrorMessage>
            </FormControl>

            <FormControl pb={4} isInvalid={!!errors.date && touched.date}>
              <Input
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
                placeholder="Enter date"
                className="form-control"
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>

            <Button mt={2} _hover={0} backgroundColor={'gray.700'} color={'white'} mb={8} type="submit">
              Create
            </Button>
          </Flex>
        </Flex>
      </Box>
    </form>
  );
};
