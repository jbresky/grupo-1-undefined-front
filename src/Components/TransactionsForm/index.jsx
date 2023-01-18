import { Flex, Heading, Input, Button, Select, Text, FormControl, FormErrorMessage, Box, CloseButton } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const TransactionsForm = ({
  handleSubmit,
  handleBlur,
  values,
  errors,
  touched,
  handleChange,
  isLoading,
  categories,
  users,
}) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }
  return (

    <form noValidate onSubmit={handleSubmit}>
      <Box>
        <Flex justifyContent={"center"}>
          <Flex
            flexDirection="column"
            pl={8}
            pr={8}
            pb={4}
            pt={6}
            borderRadius={8}
            boxShadow="md"
            rowGap={2}
            backgroundColor={'gray.100'}
            w={['90%', '90%', '100%']}
          >
            <Flex justifyContent={'space-between'}>
              <Heading size={'md'} mb={6}>
                Create Transaction
              </Heading>
              <CloseButton onClick={handleNavigate} />
            </Flex>
            <FormControl pb={2} isInvalid={!!errors.description && touched.description}>
              <Input
                backgroundColor={'white'}
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder="Enter description"
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
              />
              <FormErrorMessage>{errors.amount}</FormErrorMessage>
            </FormControl>
            <FormControl pb={2} isInvalid={!!errors.categoryId && touched.categoryId}>
              <Select backgroundColor={'white'} pb={2} name="categoryId" onChange={handleChange}>
                <option selected disabled>Select a category</option>
                {categories?.map((category) => {
                  return <option key={category.id} value={category.id}>{category.name}</option>;
                })}
              </Select>
              <FormErrorMessage>{errors.categoryId}</FormErrorMessage>
            </FormControl>

            <FormControl pb={2} isInvalid={!!errors.destinationId && touched.destiationId} >
              <Select backgroundColor={'white'}
                pb={2} name="toUserId" onChange={handleChange}>
                  <option selected disabled>Select a user</option>
                {users?.map((user) => {
                  return <option key={user.id} value={user.id}>{`${user.firstName} ${user.lastName}`}</option>;
                })}
              </Select>
              <FormErrorMessage>{errors.toUserId}</FormErrorMessage>
            </FormControl>
            {/* <Input
            display={'none'}
            name="userId"
            value={values.userId}
            ></Input> */}

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

            <Button disabled={isLoading} mt={2} backgroundColor={'gray.700'} color={'white'} mb={8} type="submit">
              Create
            </Button>
          </Flex>
        </Flex>
      </Box>
    </form>
  )
};
