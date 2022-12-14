import { Flex, Heading, Input, Button, Select, Text } from "@chakra-ui/react";

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
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex
          flexDirection="column"
          bg={formBackground}
          p={12}
          borderRadius={8}
          boxShadow="lg"
          rowGap={2}
        >
          <Heading mb={6}>Create Transaction</Heading>
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
          <Text color='red.400' fontSize='12px' style={{paddingLeft: 15}}>
            {errors.description && touched.description && errors.description}
          </Text>
          <Input
            type="number"
            name="amount"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
            placeholder="Enter amount"
            className="form-control"
          />
          <Text color='red.400' fontSize='12px' style={{paddingLeft: 15}}>
            {errors.amount && touched.amount && errors.amount}
          </Text>
          <Select name="categoryId" placeholder="Select Category" onChange={handleChange}>
            {categories.map((category) => {
              return <option key={category.id} value={category.id}>{category.name}</option>;
            })}
          </Select>
          <Text color='red.400' fontSize='12px' style={{paddingLeft: 15}}>
            {errors.categoryId && touched.categoryId && errors.categoryId}
          </Text>
          <Select name="userId" placeholder="Select User" onChange={handleChange}>
            {users.map((user) => {
              return <option key={user.id} value={user.id}>{`${user.firstName} ${user.lastName}`}</option>;
            })}
          </Select>
          <Text color='red.400' fontSize='12px' style={{paddingLeft: 15}}>
            {errors.userid && touched.userid && errors.userid}
          </Text>
          <Input
            type="date"
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.date}
            placeholder="Enter date"
            className="form-control"
          />
          <Text color='red.400' fontSize='12px' style={{paddingLeft: 15}}>
            {errors.date && touched.date && errors.date}
          </Text>
          <Button colorScheme="teal" mb={8} type="submit">
            Create
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
