import { Flex, Heading, Input, Button, Select, Text, FormControl, FormErrorMessage, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const TransactionsForm = ({
  handleSubmit,
  handleBlur,
  values,
  errors,
  touched,
  handleChange,
  isLoading,
  categories,
  users,
}) => 
{
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Box m={'auto'}>
        <Flex m={'auto'} alignItems="center" justifyContent="center">
          <Flex
            flexDirection="column"
            p={8}
            borderRadius={8}
            boxShadow="md"
            rowGap={2}
            backgroundColor={'gray.100'}
            w={'60%'}
          >
            <Text _hover={{cursor: 'pointer'}} onClick={handleNavigate}>Volver</Text>
            <Heading size={'lg'} mb={6}>Create Transaction</Heading>
            <FormControl pb={2} isInvalid={!!errors.description && touched.description}>
              <Input
              backgroundColor={'white'}
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
            <FormControl pb={2} isInvalid={!!errors.amount && touched.amount}>
              <Input
              backgroundColor={'white'}
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
            <FormControl pb={2} isInvalid={!!errors.categoryId && touched.categoryId}>
              <Select backgroundColor={'white'} pb={2} placeholder='Select a category' name="categoryId" onChange={handleChange}>
                {categories.map((category) => {
                  return <option key={category.id} value={category.id}>{category.name}</option>;
                })}
              </Select>
              <FormErrorMessage>{errors.categoryId}</FormErrorMessage>
            </FormControl>

            <FormControl pb={2} isInvalid={!!errors.userId && touched.userId} >
              <Select  backgroundColor={'white'}
              pb={2} name="userId" placeholder="Select a user" onChange={handleChange}>
                {users.map((user) => {
                  return <option key={user.id} value={user.id}>{`${user.firstName} ${user.lastName}`}</option>;
                })}
              </Select>
              <FormErrorMessage>{errors.userId}</FormErrorMessage>
            </FormControl>

            {/* <FormControl pb={2} isInvalid={!!errors.date && touched.date}>
              <Input
               backgroundColor={'white'}
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
                placeholder="Enter date"
                className="form-control"
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl> */}

            <Button disabled={isLoading} mt={2} _hover={0} backgroundColor={'gray.700'} color={'white'} mb={8} type="submit">
              Create
            </Button>
          </Flex>
        </Flex>
      </Box>
    </form>
  );
};

export default TransactionsForm