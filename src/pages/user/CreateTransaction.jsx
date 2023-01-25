import { Formik } from "formik";
import { TransactionsForm } from "../../Components/TransactionsForm";
import { transactionSchema } from "../../Components/YupValidator/schemas";
import userGetUsers from "../../hooks/useUsers";
import useGetCategory from "../../hooks/useCategory";
import { Api } from "../../api";
import { Alert, AlertIcon, useToast } from "@chakra-ui/react";

function CreateTransaction() {

  const { data: users } = userGetUsers();
  const { data: categories } = useGetCategory();

  const toast = useToast();
  
  const success = () => toast({
    title: "Transaction",
    duration: 3000,
    isClosable: true,
    render: () => (
      <Alert status="success">
        <AlertIcon />
        Transaction successfully created
      </Alert>
    ),
    position: "top",
  });

  const error = () => toast({
    title: "Transaction",
    duration: 3000,
    isClosable: true,
    render: () => (
      <Alert status="error">
        <AlertIcon />
        Transaction could not be possible
      </Alert>
    ),
    position: "top",
  });

  async function handleSend(values) {
    try {
      const service = new Api();
      const request = await service.apiPrivate().post('/transactions', values);

      if (request.data.body) {
        success()
      } else {
        error()
      }
    } catch (error) {
      error()
    }
  }

  return (
    <Formik
      validationSchema={transactionSchema}
      initialValues={{
        description: "",
        amount: "",
        categoryId: "",
        toUserId: "",
      }}
      onSubmit={values => handleSend(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <TransactionsForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          handleBlur={handleBlur}
          touched={touched}
          values={values}
          categories={categories}
          users={users}
        />
      )}
    </Formik>
  );
}

export default CreateTransaction;
