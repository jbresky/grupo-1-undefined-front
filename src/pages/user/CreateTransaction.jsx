import { Formik } from "formik";
import { useToast } from "@chakra-ui/react";
import { Alert } from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/react";
import { TransactionsForm } from "../../Components/TransactionsForm";
import { transactionSchema } from "../../Components/YupValidator/schemas";
// import useCreateTransaction from "../../hooks/useTransaction";
import userGetUsers from "../../hooks/useUsers";
import useGetCategory from "../../hooks/useCategory";
import { useSelector } from "react-redux";
import { Api } from "../../api";

function CreateTransaction() {
  // Deberia estar en la carpeta Components
  const { data: users } = userGetUsers();
  const { data: categories } = useGetCategory();

  const { user } = useSelector(state => state.auth);

  // const { mutate: transferTo, isLoading } = useCreateTransaction()

  const toast = useToast();

  async function handleSend(values) {
    try {
      const service = new Api();
      const request = await service.apiPrivate().post('/transactions', values);

      if (request.data.body) {
        toast({
          title: "Transaction",
          description: "Transaction successfully created",
          status: "success",
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
      } else {
        toast({
          title: "Transaction",
          description: "Transaction successfully created",
          status: "success",
          duration: 3000,
          isClosable: true,
          render: () => (
            <Alert status="success">
              <AlertIcon />
              No se pudo crear la transaccion
            </Alert>
          ),
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "Login.",
        description: "User logged successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
        render: () => (
          <Alert status="success">
            <AlertIcon />
            User logged successfully.
          </Alert>
        ),
        position: "top",
      });
    }
  }

  return (
    <Formik
      validationSchema={transactionSchema}
      initialValues={{
        description: "",
        amount: "",
        categoryId: "",
        destinationId: "",
        userId: user.id
      }}
      // onSubmit={values => transferTo(values)}
      onSubmit={values => handleSend(values)}
    // onSubmit={values => console.log(values)}
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
          // isLoading={isLoading}
          categories={categories}
          users={users}
        />
      )}
    </Formik>
  );
}

export default CreateTransaction;
