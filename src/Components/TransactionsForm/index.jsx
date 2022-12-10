import { Flex, Heading, Input, Button, Select } from "@chakra-ui/react";

export const TransactionsForm = ({
  handleSubmit,
  formBackground,
  handleBlur,
  values,
  errors,
  touched,
  handleChange,
  categories,
}) => {
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Flex h="50vh" alignItems="center" justifyContent="center">
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
          {/* If validation is not passed show errors */}
          <p className="error">
            {errors.description && touched.description && errors.description}
          </p>
          <Input
            type="number"
            name="amount"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
            placeholder="Enter amount"
            className="form-control"
          />
          {/* If validation is not passed show errors */}
          <p className="error">
            {errors.amount && touched.amount && errors.amount}
          </p>
          <Select name="categoryId" placeholder="Select Category" onChange={handleChange}>
            {categories.map((category) => {
              return <option key={category.id} value={category.id}>{category.name}</option>;
            })}
          </Select>
          {/* If validation is not passed show errors */}
          <p className="error">
            {errors.categoryId && touched.categoryId && errors.categoryId}
          </p>
          <Input
            type="date"
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.date}
            placeholder="Enter date"
            className="form-control"
          />
          {/* If validation is not passed show errors */}
          <p className="error">
            {errors.date && touched.date && errors.date}
          </p>
          <Button colorScheme="teal" mb={8} type="submit">
            Create
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
